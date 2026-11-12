# Flagship portfolio project: IncidentOps

**Purpose:** a separate, full-stack engineering project that gives the professional website a substantial, verifiable project to showcase. Keep this application in its own repository; the portfolio remains the simple, fast recruiter-facing home for Arnold's experience, CV and work.

## One-sentence concept

IncidentOps is a small incident and service-status platform: teams can define services, report incidents, track an incident timeline, and publish a read-only status page.

It connects Arnold's real support and VoIP background to the engineering practices he is learning. It is intentionally not another portfolio, blog, shop or generic task manager.

## Product boundary

The portfolio website and IncidentOps have different jobs:

- **Portfolio:** present professional experience, case studies, the learning route and contact details. Keep it static and low-maintenance.
- **IncidentOps:** provide the full-stack workload: an API, a database, a small interface, deployment and operations. Link to it from the portfolio only when there is a working, documented demo.

## MVP: prove the product before adding infrastructure

1. Create and edit a service, with a name, short description and current status.
2. Create an incident with a severity, title, affected service and current state.
3. Add timestamped updates such as investigating, identified, monitoring and resolved.
4. Show a public status page with current service states and recent incidents.
5. Provide a small protected operator area for creating and updating incidents. Start with one seeded demo operator; do not build complex roles or multi-tenant accounts in the MVP.
6. Store data in PostgreSQL and expose a documented REST API.

Use synthetic demo data only. Do not enter information from former employers, customers, phone calls or real incidents.

## Suggested starting stack

- **API:** Python + FastAPI, keeping the implementation small and easy to test.
- **Persistence:** PostgreSQL with migrations.
- **UI:** a small, accessible TypeScript interface; choose the simplest option that supports the status page and operator flow.
- **Local development:** Docker Compose for the API, database and any supporting service.
- **Tests:** pytest for API/service logic and a small number of integration tests against PostgreSQL.
- **Documentation:** OpenAPI, architecture diagram, setup guide, decisions log and operator runbook.

Avoid adding a message broker, Kubernetes, service mesh or a large frontend framework until an actual requirement justifies it. A coherent, observable single-service application is better evidence than a pile of tools.

## Platform-engineering progression

### 1. Reproducible application

- Implement the MVP and seed a disposable demo account/data set.
- Validate inputs, use parameterized database access, and keep secrets out of source control.
- Add health/readiness endpoints and structured logs with request identifiers.
- Document how to run, test, reset and troubleshoot the local stack.

### 2. Container workflow

- Build a small production image, use a non-root runtime user, pin dependencies and add a `.dockerignore`.
- Run API and PostgreSQL locally through Docker Compose with a persistent development volume.
- Define health checks and document backup/restore for the database.

### 3. CI/CD and supply-chain basics

- Use pull requests and a GitHub Actions workflow for formatting/linting, tests and image build.
- Publish an image only from the protected default branch; pin third-party workflow actions to reviewed versions or SHAs.
- Add dependency and container-image scanning, and explain any accepted findings.
- Do not store long-lived AWS access keys in repository secrets. If AWS is introduced, prefer GitHub OIDC and short-lived credentials.

### 4. Infrastructure as code and a carefully bounded demo deployment

- Use Terraform to describe the smallest architecture that meets the learning objective.
- Start with a low-complexity, disposable environment. A single small EC2 instance running the Compose stack is easier to understand than introducing an always-on NAT gateway, load balancer and managed database before they are needed.
- Keep a static/demo environment separate from any personal website hosting.
- Add a budget, billing alerts and a documented teardown procedure before creating resources. Verify current Free Plan eligibility and service prices first; free credits are temporary, and services such as public IPv4, storage, egress or NAT can incur costs.
- Make deployment repeatable, but make resource destruction equally easy to demonstrate.

The exact AWS design is a later decision, not a prerequisite for finishing the product. The project should remain runnable locally if no cloud account or free credits are available.

### 5. Observability and reliability exercises

- Expose useful application metrics and build a small Prometheus/Grafana dashboard.
- Define a few meaningful service-level indicators, such as successful request rate and response latency; avoid claiming a production SLO for a toy demo.
- Add one controlled failure exercise, document what the logs/metrics show, and record the recovery steps.
- Demonstrate a database backup and restore, then document the limitations and recovery objective.

## Suggested repository shape

```text
incidentops/
├── app/
│   ├── api/
│   ├── models/
│   └── services/
├── frontend/
├── migrations/
├── tests/
├── deploy/
│   └── terraform/
├── compose.yaml
├── docs/
│   ├── architecture.md
│   ├── operations-runbook.md
│   ├── decisions/
│   └── diagrams/
└── README.md
```

Adapt the layout to the eventual implementation rather than creating empty folders just to match this example.

## Portfolio-ready definition of done

- A reviewer can run the app locally from a clean clone using documented commands.
- The core incident/status workflow has automated tests and a passing CI run.
- The architecture and data flow are explained with a readable diagram.
- The demo contains no real personal, employer or customer data and no committed secrets.
- A reviewer can inspect the container build, pipeline, Terraform plan and operational runbook.
- Any cloud demo has cost guardrails and a verified teardown path.
- The portfolio links to a live demo only while that demo is available; otherwise it links to screenshots and a reproducible local setup.

## Build order

1. Finish the portfolio site and publish its two existing, honest lab case studies.
2. Start IncidentOps as a separate repository and complete the local MVP.
3. Add tests, containers and CI before attempting a cloud deployment.
4. Add Terraform, AWS and observability as separate, documented milestones.
