import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import PDFDocument from 'pdfkit';

const root = fileURLToPath(new URL('../', import.meta.url));
const contentPath = path.join(root, 'src/data/cv.json');
const outputDirectory = path.join(root, 'public/cv');
const cvs = JSON.parse(fs.readFileSync(contentPath, 'utf8'));

fs.mkdirSync(outputDirectory, { recursive: true });

const colors = {
  ink: '#29221c',
  body: '#51463d',
  muted: '#776a5e',
  accent: '#b4542d',
  rule: '#d9cbbd',
  paper: '#ffffff',
};

const margins = { top: 43, right: 45, bottom: 48, left: 45 };

for (const locale of ['en', 'es']) {
  await writeCv(locale, cvs[locale]);
}

async function writeCv(locale, cv) {
  const fileName = locale === 'en' ? 'arnold-chuctaya-en.pdf' : 'arnold-chuctaya-es.pdf';
  const outputPath = path.join(outputDirectory, fileName);
  const document = new PDFDocument({
    size: 'A4',
    margins,
    bufferPages: true,
    info: {
      Title: `${cv.name} — ${locale === 'en' ? 'CV' : 'Currículum'}`,
      Author: cv.name,
      Subject: 'IT support, VoIP, networking and technical experience',
      Creator: 'Astro portfolio CV generator',
    },
  });
  const stream = fs.createWriteStream(outputPath);
  document.pipe(stream);

  const pageWidth = document.page.width;
  const innerWidth = pageWidth - margins.left - margins.right;
  let pageNumber = 1;

  function footer() {
    const currentY = document.y;
    const currentX = document.x;
    const bottomMargin = document.page.margins.bottom;
    const y = document.page.height - 29;
    document.page.margins.bottom = 0;
    document.save();
    document.strokeColor(colors.rule).lineWidth(0.5).moveTo(margins.left, y - 7).lineTo(pageWidth - margins.right, y - 7).stroke();
    document.font('Helvetica').fontSize(7).fillColor(colors.muted);
    document.text('Arnold Chuctaya Sevincha', margins.left, y, { lineBreak: false });
    document.text(`${locale === 'en' ? 'CV' : 'Currículum'} · ${new Date().getFullYear()} · ${pageNumber}`, margins.left, y, {
      width: innerWidth,
      align: 'right',
      lineBreak: false,
    });
    document.restore();
    document.x = currentX;
    document.y = currentY;
    document.page.margins.bottom = bottomMargin;
  }

  document.on('pageAdded', () => {
    pageNumber += 1;
    footer();
  });

  function ensureSpace(height) {
    if (document.y + height > document.page.height - margins.bottom - 8) {
      document.addPage();
      document.y = margins.top;
    }
  }

  function sectionHeading(label) {
    ensureSpace(32);
    const y = document.y;
    document.font('Helvetica-Bold').fontSize(8).fillColor(colors.accent).text(label.toLocaleUpperCase(locale), margins.left, y, {
      characterSpacing: 0.7,
      lineBreak: false,
    });
    document.strokeColor(colors.rule).lineWidth(0.55).moveTo(margins.left, y + 13).lineTo(pageWidth - margins.right, y + 13).stroke();
    document.y = y + 21;
  }

  function bodyText(text, options = {}) {
    const font = options.font ?? 'Helvetica';
    const fontSize = options.fontSize ?? 8.2;
    const width = options.width ?? innerWidth;
    const x = options.x ?? margins.left;
    const lineGap = options.lineGap ?? 2;
    document.font(font).fontSize(fontSize);
    const height = document.heightOfString(text, { width, lineGap });
    ensureSpace(height + (options.after ?? 0));
    document.fillColor(options.color ?? colors.body).text(text, x, document.y, {
      width,
      lineGap,
      link: options.link,
    });
    document.y += options.after ?? 0;
  }

  function bullet(text) {
    document.font('Helvetica').fontSize(7.65);
    const x = margins.left + 14;
    const width = innerWidth - 14;
    const height = document.heightOfString(text, { width, lineGap: 1.3 });
    ensureSpace(height + 3);
    const y = document.y + 4;
    document.save();
    document.fillColor(colors.accent).circle(margins.left + 4, y + 2, 1.5).fill();
    document.restore();
    document.fillColor(colors.body).text(text, x, document.y, { width, lineGap: 1.3 });
    document.moveDown(0.18);
  }

  function entry(item, type = 'experience') {
    const top = document.y;
    const periodWidth = type === 'experience' ? 108 : 82;
    const gap = 12;
    const detailX = margins.left + periodWidth + gap;
    const detailWidth = innerWidth - periodWidth - gap;
    const title = type === 'experience' ? item.company : item.title;
    const subtitle = type === 'experience' ? item.role : item.place;
    const period = type === 'experience' ? `${item.period} · ${item.duration}` : item.period;

    document.font('Helvetica').fontSize(7.1).fillColor(colors.muted);
    const periodHeight = document.heightOfString(period, { width: periodWidth, lineGap: 1 });
    document.font('Helvetica-Bold').fontSize(8.5).fillColor(colors.ink);
    const titleHeight = document.heightOfString(title, { width: detailWidth, lineGap: 1 });
    ensureSpace(Math.max(periodHeight, titleHeight + 13) + 24);

    const y = document.y;
    document.font('Helvetica').fontSize(7.1).fillColor(colors.muted).text(period, margins.left, y, {
      width: periodWidth,
      lineGap: 1,
    });
    document.font('Helvetica-Bold').fontSize(8.5).fillColor(colors.ink).text(title, detailX, y, {
      width: detailWidth,
      lineGap: 1,
    });
    document.y = y + Math.max(periodHeight, titleHeight) + 2;

    if (subtitle) {
      document.font('Helvetica').fontSize(7.4).fillColor(colors.accent).text(subtitle, detailX, document.y, {
        width: detailWidth,
        lineGap: 1,
      });
      document.moveDown(0.22);
      if (type !== 'experience' && item.place && subtitle === item.title) {
        bodyText(item.place, { x: detailX, width: detailWidth, fontSize: 7.1, color: colors.muted, after: 1 });
      }
    }

    if (item.bullets) {
      for (const line of item.bullets) bullet(line);
    }
    document.moveDown(type === 'experience' ? 0.55 : 0.28);
    if (document.y <= top) document.moveDown(0.3);
  }

  footer();

  // Header
  document.font('Helvetica-Bold').fontSize(22).fillColor(colors.ink).text(cv.name, margins.left, margins.top, { width: innerWidth });
  document.moveDown(0.22);
  document.font('Helvetica-Bold').fontSize(9.2).fillColor(colors.accent).text(cv.headline, { width: innerWidth });
  document.moveDown(0.5);
  const contact = `${cv.location}  ·  ${cv.email}  ·  ${cv.linkedin}  ·  ${cv.github}`;
  bodyText(contact, { fontSize: 7.1, color: colors.muted, after: 2 });

  sectionHeading(locale === 'en' ? 'Profile' : 'Perfil profesional');
  bodyText(cv.summary, { fontSize: 8.1, lineGap: 2.1, after: 4 });

  sectionHeading(cv.sections.experience);
  for (const item of cv.experience) entry(item, 'experience');

  sectionHeading(cv.sections.skills);
  for (const skill of cv.skills) {
    const label = `${skill.label}: `;
    document.font('Helvetica-Bold').fontSize(7.45);
    const labelWidth = document.widthOfString(label) + 3;
    document.font('Helvetica').fontSize(7.45);
    const valueHeight = document.heightOfString(skill.value, { width: innerWidth - labelWidth, lineGap: 1.3 });
    ensureSpace(valueHeight + 4);
    const y = document.y;
    document.font('Helvetica-Bold').fontSize(7.45).fillColor(colors.ink).text(label, margins.left, y, { lineBreak: false });
    document.font('Helvetica').fontSize(7.45).fillColor(colors.body).text(skill.value, margins.left + labelWidth, y, {
      width: innerWidth - labelWidth,
      lineGap: 1.3,
    });
    document.moveDown(0.22);
  }

  sectionHeading(cv.sections.education);
  for (const item of cv.education) entry(item, 'education');

  sectionHeading(cv.sections.training);
  for (const item of cv.training) entry(item, 'training');

  sectionHeading(cv.sections.languages);
  const languageText = cv.languages.map((language) => `${language.name}: ${language.level}`).join('  ·  ');
  bodyText(languageText, { fontSize: 7.6, after: 3 });

  sectionHeading(cv.sections.availability);
  bodyText(cv.availability, { fontSize: 7.6, color: colors.body });

  document.end();
  await new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
  console.log(`Generated ${path.relative(root, outputPath)}`);
}
