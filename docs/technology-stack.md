# Tech Stack Documentation

## 1. Core Frameworks
- **Next.js**: React Framework for production.
- **Tailwind CSS**: Utility-first CSS framework.

## 2. Tailwind Ecosystem
### Essential Utilities
- **clsx**: Conditional class name construction.
- **tailwind-merge**: Intelligent merging of Tailwind classes (essential for reusable components).
- **class-variance-authority (cva)**: Creating variant-based components (like buttons with multiple sizes/colors).

### Official Plugins
- **@tailwindcss/forms**: Better default styles for form elements.
- **@tailwindcss/typography**: Prose styling for markdown/rich text (`prose` class).
- **@tailwindcss/aspect-ratio**: Utilities for controlling aspect ratios.
- **@tailwindcss/container-queries**: Responsive styles based on container size instead of viewport.

## 3. UI and Components
### Headless UI Primitives
- **Radix UI**: Unstyled, accessible UI primitives for complex components.
  - `@radix-ui/react-dialog` (Modals)
  - `@radix-ui/react-popover`
  - `@radix-ui/react-dropdown-menu`
  - `@radix-ui/react-tabs`
  - `@radix-ui/react-select`
  - `@radix-ui/react-tooltip`
  - `@radix-ui/react-toast` (Notifications)
  - `@radix-ui/react-visually-hidden` (Accessibility)

### UI Utilities
- **Lucide React**: Modern, consistent icon set.
- **Sonner**: Modern toast notification library.
- **Vaul**: Drawer/Bottom sheet component.
- **CMDK**: Command palette component.
- **Input OTP**: One-time password input.

### Animations
- **Framer Motion**: Powerful animation library for React.
- **tailwindcss-animate**: Tailwind utility classes for simple keyframe animations.

## 4. Forms & Validation
- **React Hook Form**: Performant, flexible form state management.
- **Zod**: TypeScript-first schema declaration and validation.
- **@hookform/resolvers**: Integration between React Hook Form and Zod.

## 5. Data Visualization
- **Recharts**: Composable charting library.
- **Tremor**: React library for building dashboards.

## 6. Development Tools
- **Prettier**: Code formatter.
- **Prettier Plugin Tailwind**: Automatically sorts Tailwind classes.

## 7. Theming
- **next-themes**: Dark mode support for Next.js.
- **tailwindcss-radix-colors**: Radix UI color scales for Tailwind.
