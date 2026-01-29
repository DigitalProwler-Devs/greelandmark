# Green Street Capital

## Overview

Green Street Capital is a Merchant Cash Advance (MCA) company website built with a modern full-stack architecture. The site serves as a marketing and application platform for businesses seeking fast funding solutions. The design follows a dark luxury aesthetic with "Old Money Green" and silver bullion accents, targeting ambitious business owners who need quick capital access.

The application allows visitors to learn about MCA funding, view rates and terms, submit funding applications, and contact the company through inquiry forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with custom design tokens for the Green Street brand palette
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Build Tool**: Vite for development and production builds

The frontend follows a page-based structure with reusable components in `client/src/components/`. Custom components like `GlassCard`, `SectionHeading`, and `AnimatedCounter` implement the luxury design language.

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful endpoints under `/api` prefix
- **Development**: Vite middleware for HMR during development
- **Production**: Static file serving from built assets

The server handles application submissions and inquiry forms through POST endpoints, with GET endpoints for data retrieval.

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for shared type definitions
- **Validation**: Zod schemas generated from Drizzle schemas using `drizzle-zod`
- **Current Implementation**: In-memory storage (`MemStorage` class) as a placeholder
- **Database Ready**: Drizzle config points to PostgreSQL via `DATABASE_URL` environment variable

Database tables include:
- `users` - Basic authentication (id, username, password)
- `applications` - Funding applications (business info, contact details, funding requirements)
- `inquiries` - Quick contact forms (business name, funding amount, phone)

### Build System
- **Client Build**: Vite produces optimized static assets to `dist/public`
- **Server Build**: esbuild bundles server code to `dist/index.cjs`
- **Dependency Bundling**: Selected dependencies are bundled to reduce cold start times

## External Dependencies

### UI Framework
- **Radix UI**: Full suite of accessible, unstyled primitives (dialog, accordion, select, etc.)
- **Shadcn/ui**: Pre-configured component variants using Radix + Tailwind

### Database
- **PostgreSQL**: Target database (requires `DATABASE_URL` environment variable)
- **Drizzle Kit**: Schema migrations via `db:push` command
- **connect-pg-simple**: Session storage for Express (available but not currently active)

### Fonts
- **Google Fonts**: Plus Jakarta Sans, Inter, Outfit loaded via CDN in `index.html`

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment
- **TypeScript**: Strict mode with path aliases (`@/` for client, `@shared/` for shared code)