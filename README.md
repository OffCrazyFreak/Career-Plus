# Company Database (Mark I v2)

## Description

Company Database (CDB) is a lightweight admin application for managing organizations, projects and collaborations. It provides an administrative UI to:

- Create, read, update and delete companies and their contacts
- Manage projects and associate collaborations with companies and projects
- Track collaboration status, responsible persons, contact history and achieved values

The app is built with Next.js (App Router), TypeScript, React Query for data fetching, React Hook Form + Zod for form validation, and a local SQLite database for storage. It's intentionally simple and optimized for internal use by teams managing outreach, partnerships and project tracking.

## Link

Deployed and available on [new.cdb.best.hr](https://new.cdb.best.hr)

## Visuals

<p align="center">
  <!-- <img width="90%" src="https://github.com/user-attachments/assets/56afa2df-c77f-454a-93c7-34331ebc2a7d" alt="Company Database - Home page"/>
  -->
</p>

## Attribution

**Created by: Jakov Jakovac**

## License [![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-cyan.svg

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

## How to run

### Prerequisites

- **Node.js 22.19.0+** (or latest LTS)
- **pnpm** (recommended) or npm/yarn
  ```bash
  npm install -g pnpm
  ```

#### Install Dependencies

```bash
# Install main dependencies
pnpm install .
```
