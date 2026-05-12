---
name: UltraFisio Identity System
colors:
  surface: '#faf9fe'
  surface-dim: '#dad9de'
  surface-bright: '#faf9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f8'
  surface-container: '#eeedf2'
  surface-container-high: '#e8e7ec'
  surface-container-highest: '#e3e2e7'
  on-surface: '#1a1c1f'
  on-surface-variant: '#43474f'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f1f0f5'
  outline: '#747780'
  outline-variant: '#c4c6d0'
  surface-tint: '#405f91'
  primary: '#001736'
  on-primary: '#ffffff'
  primary-container: '#002b5b'
  on-primary-container: '#7594ca'
  inverse-primary: '#a9c7ff'
  secondary: '#0d6683'
  on-secondary: '#ffffff'
  secondary-container: '#98deff'
  on-secondary-container: '#056380'
  tertiary: '#001d03'
  on-tertiary: '#ffffff'
  tertiary-container: '#003408'
  on-tertiary-container: '#43a649'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#264778'
  secondary-fixed: '#bee9ff'
  secondary-fixed-dim: '#8ad0f1'
  on-secondary-fixed: '#001f2a'
  on-secondary-fixed-variant: '#004d65'
  tertiary-fixed: '#94f990'
  tertiary-fixed-dim: '#78dc77'
  on-tertiary-fixed: '#002204'
  on-tertiary-fixed-variant: '#005313'
  background: '#faf9fe'
  on-background: '#1a1c1f'
  surface-variant: '#e3e2e7'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter-base: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 80px
---

## Brand & Style

The design system for UltraFisio is anchored in a **Modern Corporate** aesthetic with a strong emphasis on **Wellness Minimalism**. The goal is to bridge the gap between clinical expertise and patient-centric comfort. The interface should feel organized, airy, and premium, evoking a sense of calm and professional reliability.

The target audience consists of health-conscious individuals and athletes who value high-standard care. We achieve this through "generous whitespace"—allowing content to breathe—and "soft, purposeful interactions." The visual language avoids the cluttered look of traditional medical portals, opting instead for a high-end boutique wellness experience. Key attributes include:
- **Trustworthy:** Through structured layouts and deep navy tones.
- **Approachable:** Through rounded geometry and soft mint accents.
- **Premium:** Through high-quality typography and subtle depth effects.

## Colors

The palette is designed to be clinical yet invigorating. 

- **Primary Deep Navy (#002B5B):** Used for typography, navigation, and primary CTAs to establish authority and trust.
- **Light Sky Blue (#89CFF0):** An accent color used for secondary actions, active states, and focus indicators, providing a sense of openness and lightness.
- **Soft Mint (#E8F5E9 / #4CAF50):** The mint green serves as a "healing" accent. The light tint (#E8F5E9) is used for container backgrounds and success states, while the deeper green (#4CAF50) is reserved for subtle icons and confirmation details.
- **Neutral White/Gray:** Backgrounds remain pure white to maximize the clean clinical feel, with slate grays used for secondary body text to maintain high legibility without the harshness of pure black.

## Typography

This design system utilizes a dual-sans-serif approach to balance character and utility. 

**Montserrat** is the display typeface, chosen for its geometric precision and modern elegance. It should be used for headings to convey strength and professionalism. 

**Inter** is the workhorse for body copy and UI elements. Its high x-height and neutral character ensure maximum legibility for clinical information and mobile-first navigation. 

- **Scale:** Headings utilize a tight letter-spacing to feel "locked-in" and premium.
- **Hierarchy:** Use font weight rather than color shifts to distinguish between information levels, keeping the interface clean.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with generous safe areas. 

- **Mobile-First:** Designs are conceived for a single-column view with 16px margins.
- **Desktop:** Transition to a 12-column grid. Elements like patient cards or service descriptions should span 4 or 6 columns to maintain focus.
- **Whitespace:** Use "Section-Padding" (80px+) between major content blocks to prevent visual fatigue and highlight the premium nature of the brand.
- **Rhythm:** An 8px linear scale is used for all internal component spacing (padding, gaps) to ensure a consistent mathematical rhythm.

## Elevation & Depth

Visual hierarchy is established through **Ambient Shadows** and **Tonal Layers** rather than heavy borders.

- **Surface Strategy:** Backgrounds are `#FFFFFF`. Cards and containers use a very subtle elevation: a shadow with a large blur radius (20-30px) and very low opacity (5-8%), tinted slightly with the primary Navy color to feel integrated.
- **Interaction Depth:** On hover, buttons and cards should slightly increase their shadow spread and lift (Y-axis translation) to provide tactile feedback.
- **Overlays:** Modals and mobile menus utilize a backdrop blur (10px) with a semi-transparent white overlay to maintain context of the underlying screen while focusing the user.

## Shapes

The shape language is consistently **Rounded**, reflecting the fluidity of movement and the "soft" side of healthcare.

- **Base Radius:** 0.5rem (8px) for standard components like input fields and small buttons.
- **Large Radius:** 1.5rem (24px) for prominent feature cards and container sections.
- **Icons:** Line art icons must feature rounded terminals (caps) and rounded joins to match the UI's geometric DNA. Avoid sharp 90-degree corners wherever possible.

## Components

### Buttons
Primary buttons use the Deep Navy background with white text and a `rounded-lg` corner. Secondary buttons use a Light Sky Blue ghost style (outline or light tint) to indicate less critical actions.

### Cards
Cards are the primary organizational unit. They should have a white background, the "Ambient Shadow" defined in Elevation, and a 1px soft gray border (#F1F5F9) to define edges on high-brightness screens.

### Input Fields
Inputs should be tall (48px-56px) for mobile accessibility, with a light gray stroke that transitions to Sky Blue on focus. Labels should remain visible above the field in the `label-sm` style.

### Minimalist Line Art
Icons should be 24px grid-based with a 1.5px or 2px stroke weight. Use the Primary Navy for active icons and Neutral Gray for inactive states.

### Modern Animations
- **Transitions:** Use `cubic-bezier(0.4, 0, 0.2, 1)` for all state changes.
- **Entrances:** Content should subtly slide up (20px) and fade in when the page loads or when scrolling into view.
- **Feedback:** Micro-interactions (like checkbox toggles) should have a slight "spring" effect to feel responsive and high-end.