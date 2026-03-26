# The Leap Pakistan

Production-ready Next.js website for The Leap Pakistan, built with the App Router, TypeScript, Tailwind CSS, Framer Motion, Prisma, and SQLite.

## Stack

- Next.js 16.2.1
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Prisma + SQLite
- Zod + React Hook Form
- Lucide icons

## Included

- Full public site with all requested pages
- Premium responsive UI with motion and interactive states
- Centralized site config and stock media config
- Metadata, Open Graph, sitemap, and robots support
- Contact inquiry API and event registration API backed by Prisma
- Legal pages and footer links
- Logo integration from `public/icon/LEAP PAKISTAN LOGO-01.svg`

## Project Structure

```text
app/
components/
config/
data/
lib/
prisma/
public/
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

3. Create or sync the local database:

```bash
npx prisma db push
```

4. Start the development server:

```bash
npm run dev
```

5. Open `http://localhost:3000`

## Production Verification

```bash
npm run lint
npm run build
```

## Content and Asset Editing

- Update contact details, social links, and navigation in `config/site.ts`
- Replace stock media URLs in `config/site-media.ts`
- Edit branded copy in the `data/` directory
- Prisma models live in `prisma/schema.prisma`

## Notes

- The current setup uses SQLite for local development and is structured to migrate cleanly to PostgreSQL later by updating the Prisma datasource.
- Contact inquiries and event registrations persist through Prisma-backed API routes.
