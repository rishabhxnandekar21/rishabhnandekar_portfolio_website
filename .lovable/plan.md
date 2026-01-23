
# Portfolio Website Implementation Plan

## Overview
Building a single-page, professional portfolio website for a Full Stack Web Developer engineering graduate. The design takes inspiration from the reference website (magic-portfolio.com) with its dark theme and cyan accent color, featuring a floating center-aligned navbar, clean typography, and subtle animations.

## Design Inspiration Analysis
From the reference website:
- **Color Scheme**: Dark background (#0a0a0a to #0f0f0f) with cyan/teal accent color (approximately HSL 190 80% 50%)
- **Navbar**: Floating, pill-shaped, center-aligned with icon + text navigation items
- **Typography**: Clean, modern sans-serif with generous spacing
- **Layout**: Generous whitespace, content-focused sections
- **Animations**: Subtle fade-ins, hover effects, smooth transitions

---

## Architecture Overview

```text
src/
+-- data/
|   +-- portfolio-data.ts      # All configurable content
+-- components/
|   +-- layout/
|   |   +-- Navbar.tsx         # Floating navigation
|   |   +-- Footer.tsx         # Footer with social links
|   +-- sections/
|   |   +-- HeroSection.tsx    # Hero/About with CTA
|   |   +-- SkillsSection.tsx  # Categorized skills grid
|   |   +-- ProjectsSection.tsx # Carousel-based projects
|   |   +-- ResumeSection.tsx  # PDF viewer + download
|   |   +-- ExperienceSection.tsx # Work timeline
|   |   +-- AchievementsSection.tsx # Extra-curriculars
|   |   +-- BlogsSection.tsx   # Empty carousel placeholder
|   |   +-- ContactSection.tsx # Form + social links
|   +-- ui/                    # Existing shadcn components
+-- hooks/
|   +-- use-scroll-spy.tsx     # Track active section
+-- pages/
|   +-- Index.tsx              # Main single-page layout
+-- index.css                  # Updated with dark theme + accent
```

---

## Implementation Details

### 1. Theme Configuration

**File: `src/index.css`**
- Update CSS variables for dark theme as default
- Add cyan accent color (HSL: 190 80% 50%) matching the reference
- Define custom animation keyframes for fade-in, slide-up, reveal effects

**File: `tailwind.config.ts`**
- Add custom animations: fade-in, slide-up, scale-in, reveal
- Add transition timing functions
- Extend spacing for generous whitespace

### 2. Data Configuration Layer

**File: `src/data/portfolio-data.ts`**

A centralized configuration file containing:
- Personal info (name, title, bio, photo URL)
- Skills organized by category (Frontend, Backend, Databases, DevOps, Other)
- Projects array with title, description, tech stack, images, links
- Work experience entries
- Extra-curricular achievements
- Blog entries (initially empty array)
- Social links (LinkedIn, GitHub, LeetCode)
- Resume file path

This approach ensures easy updates without touching component logic.

### 3. Layout Components

**Floating Navbar (`src/components/layout/Navbar.tsx`)**
- Fixed position, centered, pill-shaped container
- Glass-morphism effect with backdrop blur
- Icon + text navigation items (Home, Skills, Projects, Experience, Blog, Contact)
- Dark mode toggle button
- Smooth scroll navigation with active section highlighting
- Mobile responsive: hamburger menu on smaller screens

**Footer (`src/components/layout/Footer.tsx`)**
- Minimal design with copyright
- Quick navigation links
- Social media icons

### 4. Section Components

**Hero Section (`src/components/sections/HeroSection.tsx`)**
- Full viewport height with centered content
- Left side: Profile photo as rounded avatar/logo
- Center: Tagline headline + professional bio
- CTA buttons: "View Projects" (scrolls to projects) + "Download Resume"
- Subtle gradient background animation
- Entrance animations on load

**Skills Section (`src/components/sections/SkillsSection.tsx`)**
- Section heading with accent underline
- Grid layout with category cards
- Categories: Frontend, Backend, Databases, DevOps, Other
- Each skill: Icon/logo + name
- Hover effects: Scale + glow
- Data-driven from portfolio-data.ts

**Projects Section (`src/components/sections/ProjectsSection.tsx`)**
- Embla Carousel implementation
- Project cards with:
  - Cover image
  - Title and tech stack badges
  - Short description
  - Hover: Reveal full card with details
- Click to open dialog with:
  - Full description
  - Image gallery
  - GitHub and Live Demo buttons
- Navigation dots + arrows

**Resume Section (`src/components/sections/ResumeSection.tsx`)**
- Embedded PDF viewer using iframe
- Fallback message for unsupported browsers
- Prominent download button
- Clean card-style container

**Experience Section (`src/components/sections/ExperienceSection.tsx`)**
- Timeline-based layout
- Each entry: Role, Company, Duration, Responsibilities
- Alternating left/right on desktop
- Stacked on mobile
- Reveal animations on scroll

**Achievements Section (`src/components/sections/AchievementsSection.tsx`)**
- Card-based grid layout
- Each achievement: Title, Organization, Date, Description
- Icons for different achievement types
- Hover effects

**Blogs Section (`src/components/sections/BlogsSection.tsx`)**
- Carousel layout (same as projects)
- Empty state design with "Coming Soon" message
- Ready structure for future blog cards
- Each card: Title, Date, Category, Preview text

**Contact Section (`src/components/sections/ContactSection.tsx`)**
- Split layout: Form on left, Info on right
- Form fields: Name, Phone, Message
- Form validation with zod + react-hook-form
- Social media links with icons
- Submit confirmation toast

### 5. Utility Hooks

**Scroll Spy Hook (`src/hooks/use-scroll-spy.tsx`)**
- Track which section is in viewport
- Update navbar active state
- Smooth scroll behavior

### 6. Main Page Assembly

**File: `src/pages/Index.tsx`**
- Import and compose all section components
- Add scroll-based reveal animations using Intersection Observer
- Proper section IDs for navigation

### 7. Animations Implementation

Using tailwindcss-animate + custom keyframes:
- **Navbar**: Fade-in on load
- **Hero**: Staggered fade-in for elements
- **Section headings**: Slide-up reveal
- **Cards**: Scale-in on scroll
- **Hover states**: Subtle scale + shadow
- **Page transitions**: Smooth scroll behavior

---

## Responsive Design Strategy

| Breakpoint | Layout Adjustments |
|------------|-------------------|
| Mobile (<640px) | Single column, hamburger nav, stacked sections |
| Tablet (640-1024px) | Two-column grids, condensed navbar |
| Desktop (>1024px) | Full layout, three-column grids, side-by-side sections |

---

## File Creation Order

1. **Foundation**: Update `index.css` and `tailwind.config.ts` with theme
2. **Data Layer**: Create `portfolio-data.ts` with placeholder content
3. **Hooks**: Create `use-scroll-spy.tsx`
4. **Layout**: Build `Navbar.tsx` and `Footer.tsx`
5. **Sections** (in order):
   - HeroSection.tsx
   - SkillsSection.tsx
   - ProjectsSection.tsx
   - ResumeSection.tsx
   - ExperienceSection.tsx
   - AchievementsSection.tsx
   - BlogsSection.tsx
   - ContactSection.tsx
6. **Assembly**: Update `Index.tsx` to compose everything
7. **Final touches**: Add resume PDF to public folder, add README.md

---

## Technical Specifications

### Color Palette (CSS Variables)
```text
--background: 0 0% 4%        (Near black)
--foreground: 0 0% 95%       (Off white)
--accent: 190 80% 50%        (Cyan - from reference)
--accent-foreground: 0 0% 100%
--card: 0 0% 8%              (Slightly lighter)
--muted: 0 0% 15%
--muted-foreground: 0 0% 65%
```

### Technology Icons
Using Lucide icons + custom SVG icons from Simple Icons or devicon for:
- React, TypeScript, JavaScript, HTML, CSS
- Node.js, Python, Express, etc.
- PostgreSQL, MongoDB, MySQL
- Docker, Git, AWS, etc.

### Dependencies Used
All already installed:
- embla-carousel-react (for carousels)
- react-hook-form + zod (form validation)
- lucide-react (icons)
- sonner (toast notifications)
- date-fns (date formatting)
- All shadcn/ui components

---

## Placeholder Content

The portfolio will include realistic placeholder content that you can easily replace:
- Sample developer bio
- 3-4 example projects with descriptions
- Sample work experience entries
- Placeholder skills in each category
- Sample achievements
- Empty blogs array (ready for content)

---

## How to Update Content (for README)

All portfolio content is managed in `src/data/portfolio-data.ts`:

1. **Profile**: Edit `personalInfo` object
2. **Skills**: Add/remove items in `skills` arrays by category
3. **Projects**: Add objects to `projects` array
4. **Experience**: Update `experience` array
5. **Achievements**: Modify `achievements` array
6. **Blogs**: Add entries to `blogs` array
7. **Resume**: Replace file at `public/resume.pdf`
8. **Social Links**: Update `socialLinks` object
