export const caseStudies = {
  telegram: {
    en: {
      lang: 'en',
      title: 'Disk usage alert bot',
      eyebrow: 'PYTHON · SYSTEM UTILITIES · TELEGRAM API',
      summary:
        'A small, on-demand diagnostic script that checks local disk usage and sends a Telegram message when the configured threshold is exceeded.',
      repo: 'https://github.com/suarch-dev/telegram-bot-notifier',
      repoLabel: 'View source on GitHub',
      backLabel: 'Back to portfolio',
      status: 'LEARNING PROJECT · RUNS ON DEMAND',
      problemTitle: 'The problem',
      problem:
        'I wanted a simple way to notice when my MacBook storage was getting tight without opening a dashboard. The goal was to practise Python automation, operating-system commands, API calls and basic operational logging in one small tool.',
      flowTitle: 'How it works',
      flow: [
        { name: 'macOS df', note: 'Read local disk usage' },
        { name: 'Python', note: 'Parse and compare usage' },
        { name: 'Threshold', note: 'Decide whether to alert' },
        { name: 'Telegram', note: 'Send a message via API' },
      ],
      implementationTitle: 'What I practised',
      implementation: [
        'Run a native system command from Python with subprocess and handle failures rather than assuming the command always succeeds.',
        'Parse command output and compare the measured percentage against a threshold.',
        'Send a notification through the Telegram Bot API using requests.',
        'Read credentials from environment variables (with python-dotenv for local development) instead of committing them.',
        'Record useful events with Python logging.',
      ],
      honestTitle: 'Scope and next iteration',
      honest:
        'This is an on-demand script, not a continuously running monitoring service. The next useful improvements would be automated tests around parsing, a configurable threshold, and an optional scheduler with clear platform-specific setup instructions.',
      stackTitle: 'Tools used',
      stack: ['Python 3', 'subprocess', 'requests', 'python-dotenv', 'logging', 'Telegram Bot API'],
      reflectionTitle: 'Why this project matters to me',
      reflection:
        'It turns a familiar support habit—check the signal, isolate the cause and notify the right person—into a small piece of automation I can explain and improve.',
    },
    es: {
      lang: 'es',
      title: 'Bot de alertas de uso de disco',
      eyebrow: 'PYTHON · UTILIDADES DE SISTEMA · TELEGRAM API',
      summary:
        'Un pequeño script de diagnóstico, ejecutado bajo demanda, que comprueba el uso del disco local y envía un mensaje de Telegram cuando se supera el umbral configurado.',
      repo: 'https://github.com/suarch-dev/telegram-bot-notifier',
      repoLabel: 'Ver código en GitHub',
      backLabel: 'Volver al portfolio',
      status: 'PROYECTO DE APRENDIZAJE · EJECUCIÓN BAJO DEMANDA',
      problemTitle: 'El problema',
      problem:
        'Quería saber cuándo empezaba a escasear el almacenamiento de mi MacBook sin tener que abrir un panel. El objetivo era practicar automatización con Python, comandos del sistema, llamadas a una API y logging operativo en una herramienta pequeña.',
      flowTitle: 'Cómo funciona',
      flow: [
        { name: 'macOS df', note: 'Lee el uso del disco local' },
        { name: 'Python', note: 'Interpreta y compara el uso' },
        { name: 'Umbral', note: 'Decide si debe avisar' },
        { name: 'Telegram', note: 'Envía un mensaje por API' },
      ],
      implementationTitle: 'Qué practiqué',
      implementation: [
        'Ejecutar un comando nativo desde Python con subprocess y gestionar errores sin asumir que siempre funcionará.',
        'Interpretar la salida del comando y comparar el porcentaje medido con un umbral.',
        'Enviar una notificación con la API de Telegram Bot mediante requests.',
        'Leer credenciales desde variables de entorno (con python-dotenv durante el desarrollo local) en lugar de subirlas al repositorio.',
        'Registrar eventos útiles con el módulo logging de Python.',
      ],
      honestTitle: 'Alcance y siguientes pasos',
      honest:
        'Es un script que se ejecuta bajo demanda, no un servicio de monitorización permanente. Las próximas mejoras útiles serían pruebas automáticas del parser, un umbral configurable y una opción de ejecución programada con instrucciones específicas para cada plataforma.',
      stackTitle: 'Herramientas utilizadas',
      stack: ['Python 3', 'subprocess', 'requests', 'python-dotenv', 'logging', 'Telegram Bot API'],
      reflectionTitle: 'Por qué me importa este proyecto',
      reflection:
        'Convierte un hábito de soporte —comprobar la señal, aislar la causa y avisar a quien corresponde— en una pequeña automatización que puedo explicar y mejorar.',
    },
  },
  docker: {
    en: {
      lang: 'en',
      title: 'Persistent Flask logs with Docker',
      eyebrow: 'DOCKER · COMPOSE · VOLUMES',
      summary:
        'A sequence of five public exercises, ending with a Flask application whose visit logs persist outside the container lifecycle.',
      repo: 'https://github.com/suarch-dev/platform-labs/tree/main/docker-labs',
      repoLabel: 'View Docker labs on GitHub',
      backLabel: 'Back to portfolio',
      status: 'COMPLETED LEARNING TRACK · FIVE EXERCISES',
      problemTitle: 'The learning goal',
      problem:
        'Move from a basic Dockerfile to composing services and persisting data. The final exercise makes the container boundary visible: the Flask app can be recreated, while its visit log remains on mounted storage.',
      flowTitle: 'Final exercise: data path',
      flow: [
        { name: 'Browser', note: 'Requests the Flask route' },
        { name: 'Flask app', note: 'Handles the visit' },
        { name: 'Mounted path', note: 'Writes the log file' },
        { name: 'Host storage', note: 'Keeps data beyond the container' },
      ],
      implementationTitle: 'What the track covers',
      implementation: [
        'Build and run a small Python application from a Dockerfile.',
        'Containerize a Flask web API and map a host port to the application.',
        'Use a volume to keep data outside the short-lived container filesystem.',
        'Use Docker Compose to run a Flask application alongside Redis.',
        'Complete a Flask exercise that writes visit logs to persistent storage.',
      ],
      honestTitle: 'Scope and next iteration',
      honest:
        'These are focused learning labs, not a production deployment. Strong next steps include adding repeatable tests, a health check, a non-root runtime user, image build automation and clearer operational documentation.',
      stackTitle: 'Tools used',
      stack: ['Docker', 'Docker Compose', 'Python', 'Flask', 'Redis', 'Volumes'],
      reflectionTitle: 'Why this project matters to me',
      reflection:
        'Persistence and service boundaries show up constantly in real operations. This lab helped me reason about what belongs in an image, what should survive a restart and how services communicate locally.',
    },
    es: {
      lang: 'es',
      title: 'Logs Flask persistentes con Docker',
      eyebrow: 'DOCKER · COMPOSE · VOLÚMENES',
      summary:
        'Cinco ejercicios públicos que terminan con una aplicación Flask cuyos logs de visitas sobreviven al ciclo de vida del contenedor.',
      repo: 'https://github.com/suarch-dev/platform-labs/tree/main/docker-labs',
      repoLabel: 'Ver prácticas Docker en GitHub',
      backLabel: 'Volver al portfolio',
      status: 'ITINERARIO COMPLETADO · CINCO EJERCICIOS',
      problemTitle: 'Objetivo de aprendizaje',
      problem:
        'Avanzar desde un Dockerfile básico hasta orquestar servicios y persistir datos. El ejercicio final hace visible el límite del contenedor: la app Flask se puede recrear, mientras que el log de visitas permanece en un almacenamiento montado.',
      flowTitle: 'Ejercicio final: recorrido del dato',
      flow: [
        { name: 'Navegador', note: 'Solicita la ruta Flask' },
        { name: 'App Flask', note: 'Registra la visita' },
        { name: 'Ruta montada', note: 'Escribe el fichero de log' },
        { name: 'Disco anfitrión', note: 'Conserva el dato fuera del contenedor' },
      ],
      implementationTitle: 'Qué cubre el itinerario',
      implementation: [
        'Construir y ejecutar una aplicación Python pequeña desde un Dockerfile.',
        'Contenerizar una API Flask y mapear un puerto del anfitrión a la aplicación.',
        'Usar un volumen para guardar datos fuera del sistema de archivos efímero del contenedor.',
        'Usar Docker Compose para ejecutar una app Flask junto a Redis.',
        'Completar un ejercicio Flask que guarda los logs de visitas en almacenamiento persistente.',
      ],
      honestTitle: 'Alcance y siguientes pasos',
      honest:
        'Son prácticas concretas, no un despliegue de producción. Los siguientes pasos recomendables son añadir pruebas repetibles, un health check, un usuario de ejecución sin privilegios, automatizar la construcción de imágenes y mejorar la documentación operativa.',
      stackTitle: 'Herramientas utilizadas',
      stack: ['Docker', 'Docker Compose', 'Python', 'Flask', 'Redis', 'Volúmenes'],
      reflectionTitle: 'Por qué me importa este proyecto',
      reflection:
        'La persistencia y los límites entre servicios aparecen continuamente en operaciones reales. Esta práctica me ayudó a razonar sobre qué pertenece a una imagen, qué debe sobrevivir a un reinicio y cómo se comunican los servicios en local.',
    },
  },
} as const;
