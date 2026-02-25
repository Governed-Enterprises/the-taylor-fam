# The Taylor Family — thetaylorfam.net

The official digital home of the Taylor family. Rooted in faith, discipline, and generational purpose.

**Govern. Build. Pass Down.**

## Overview

A family website built to preserve and display the Taylor family legacy — our history, family tree, milestones, and values. Designed as a warm, elegant digital home that connects generations.

### Pages

- **Home** — Family crest, motto, statement, directory, and explore cards
- **Our Legacy** — Family history, values & principles, photo timeline
- **Family Tree** — Interactive tree visualization (desktop) and accordion list (mobile) across 4 generations
- **Family Record** — Chronological milestone timeline with category filters and sort controls
- **QR Code** — Generate and download QR codes linking to the site
- **Family Portal** — Login placeholder with Coming Soon feature preview

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom `tf-*` design tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **QR Codes**: [qrcode.react](https://github.com/zpao/qrcode.react)
- **Fonts**: Playfair Display, Inter, Cormorant Garamond (via `next/font/google`)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customizing Family Data

### Family Members (Family Tree)

Edit `lib/familyData.ts` to update family members:

```typescript
{
  id: "unique-id",
  firstName: "Name",
  lastName: "Taylor",
  birthYear: 1990,
  gender: "male" | "female",
  generation: 1-4,
  generationLabel: "The Roots" | "The Trunk" | "The Branches" | "The Growth",
  relationship: "Father",
  bio: "A short biography...",
  parentIds: ["parent1-id", "parent2-id"],
  childIds: ["child1-id"],
  spouseId: "spouse-id",
}
```

### Family Records (Timeline)

Edit `lib/constants.ts` — the `FAMILY_RECORD` array:

```typescript
{
  id: "rec-01",
  date: "2024",          // YYYY, YYYY-MM, or YYYY-MM-DD
  title: "Event Title",
  description: "What happened...",
  category: "birth" | "home" | "education" | "business" | "legal" | "agriculture" | "faith" | "marriage",
}
```

### Other Content

All site content is centralized in `lib/constants.ts`:
- `SITE_CONTENT` — Family name, motto, home statement
- `FAMILY_DIRECTORY` — Directory listing with names, emails, roles
- `FAMILY_HISTORY` — Legacy page paragraphs (roots, present, future)
- `FAMILY_VALUES` — Value statements
- `PHOTO_TIMELINE` — Legacy page photo carousel entries

## Adding Photos

1. Place photos in `public/images/family/`
2. Reference them in the data files:
   - Family members: set the `photo` field in `lib/familyData.ts`
   - Photo timeline: update `image` paths in `PHOTO_TIMELINE` in `lib/constants.ts`
   - Family records: set the `photo` field on record entries
3. Use descriptive filenames (e.g., `terry-taylor-2024.jpg`)

Photos are served via `next/image` for automatic optimization.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — no configuration needed
4. Set up your custom domain in Vercel dashboard

### DNS Setup

Point your domain to your hosting provider:
- **Vercel**: Add domain in project settings, follow DNS instructions
- **Custom**: Point `thetaylorfam.net` A record to your server IP

### SSL

- **Vercel**: Automatic SSL certificate provisioning
- **Self-hosted**: Use [Let's Encrypt](https://letsencrypt.org/) with Certbot

## Project Structure

```
app/
  layout.tsx          # Root layout (fonts, navbar, footer)
  page.tsx            # Home page
  globals.css         # Global styles and design tokens
  icon.svg            # Favicon
  legacy/page.tsx     # Our Legacy page
  family-tree/        # Family Tree page + layout
  family-record/      # Family Record page + layout
  qr/page.tsx         # QR Code page
  portal/page.tsx     # Family Portal page
components/
  Navbar.tsx          # Fixed top navigation
  Footer.tsx          # Site footer
  FamilyCrest.tsx     # SVG family crest component
  FamilyTree.tsx      # Interactive tree + accordion list
  FamilyRecord.tsx    # Vertical timeline component
  FamilyHistory.tsx   # Legacy page history sections
  FamilyValues.tsx    # Legacy page values
  FamilyDirectory.tsx # Home page directory list
  PhotoTimeline.tsx   # Horizontal photo carousel
  QRGenerator.tsx     # QR code generator with download
  PortalLogin.tsx     # Login form + Coming Soon modal
  CrossPageNav.tsx    # Reusable navigation links
lib/
  constants.ts        # Site content, records, config
  familyData.ts       # Family tree data and helpers
```

## Future Roadmap (Family Portal)

The Family Portal is designed to eventually include:
- **Family Cloud** — Private file and photo storage
- **Calendar** — Shared family events and birthdays
- **Messages** — Private family messaging
- **Password Vault** — Shared family credentials
- **Family VPN** — Secure private network
- **Family AI** — AI assistant for family knowledge

## License

Private family project. All rights reserved.

---

Built with purpose by the Taylor family. Powered by [Governed Enterprises](https://governedenterprises.com).
