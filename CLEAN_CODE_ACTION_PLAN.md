# Clean Code Improvement Action Plan

This document provides **concrete, actionable steps** with code examples to improve the clean code quality of the pati-special-round project.

---

## Quick Wins (Can be done in 1-2 hours)

### ✅ Action 1: Enable TypeScript Strict Mode

**File:** `tsconfig.json`  
**Current:**
```json
{
  "compilerOptions": {
    "strict": false
  }
}
```

**Change to:**
```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

**Impact:** Enables all strict type checking options  
**Effort:** 5 minutes to change, 2-4 hours to fix resulting errors  
**Priority:** 🔴 CRITICAL

**Expected Errors After Enabling:**
```bash
npm run build
# You'll see errors like:
# - Parameter 'e' implicitly has an 'any' type
# - Object is possibly 'null'
# - Property 'title' does not exist on type '{}'
```

**How to Fix Common Errors:**

```tsx
// Before (implicit any)
const handleClick = (e) => { /* ... */ }

// After (explicit type)
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { /* ... */ }

// Before (possible null)
const element = document.getElementById('myId');
element.textContent = 'Hello';  // ❌ Error: element possibly null

// After (null check)
const element = document.getElementById('myId');
if (element) {
  element.textContent = 'Hello';
}
```

---

### ✅ Action 2: Fix XSS Vulnerability

**File:** `src/components/sections/FAQSection.tsx`

**Step 1: Install DOMPurify**
```bash
npm install dompurify
npm install --save-dev @types/dompurify
```

**Step 2: Update Component**
```tsx
// Add import at top of file
import DOMPurify from 'dompurify';

// Find line 72 and change from:
<div dangerouslySetInnerHTML={{ __html: faq.answer }} />

// To:
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(faq.answer) }} />
```

**Impact:** Prevents XSS attacks  
**Effort:** 10 minutes  
**Priority:** 🔴 CRITICAL

---

### ✅ Action 3: Add Type Definitions for FAQ Data

**File:** `src/components/sections/FAQSection.tsx`

**Add interface at top of file:**
```tsx
interface FAQ {
  question: string;
  answer: string;
}

// Update the faqs array (line 6):
const faqs: FAQ[] = [
  {
    question: "What is IM8?",
    answer: "IM8 is the pinnacle..."
  },
  // ... rest of FAQs
];
```

**Impact:** Type safety, better IntelliSense  
**Effort:** 5 minutes  
**Priority:** 🟡 HIGH

---

### ✅ Action 4: Extract Navigation Data from Header

**Step 1: Create new file** `src/data/navigation.ts`

```tsx
export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface DropdownItem {
  label: string;
  href: string;
  icon?: string;
  description?: string;
}

export const LEFT_NAV_ITEMS: NavItem[] = [
  { label: "Shop", href: "#" },
  { label: "Science", href: "#" },
  { label: "About", href: "#" },
];

export const RIGHT_NAV_ITEMS: NavItem[] = [
  { label: "Sign in", href: "#" },
  { label: "Get Started", href: "#", isButton: true },
];

export const SHOP_DROPDOWN_ITEMS: DropdownItem[] = [
  {
    label: "Daily Essentials",
    href: "/shop/daily-essentials",
    description: "Your complete daily nutrition"
  },
  {
    label: "Ultimate Essentials",
    href: "/shop/ultimate-essentials",
    description: "Premium comprehensive formula"
  },
  // ... more items
];

export const DISCOVER_DROPDOWN_ITEMS: DropdownItem[] = [
  {
    label: "Our Science",
    href: "/science",
    description: "Research-backed formulations"
  },
  // ... more items
];
```

**Step 2: Update Header.tsx**
```tsx
// Replace lines 11-62 with imports:
import {
  LEFT_NAV_ITEMS,
  RIGHT_NAV_ITEMS,
  SHOP_DROPDOWN_ITEMS,
  DISCOVER_DROPDOWN_ITEMS,
} from '@/data/navigation';

// Then use the imported constants instead of inline definitions
```

**Impact:** Easier content management, reduces Header.tsx by 50 lines  
**Effort:** 20 minutes  
**Priority:** 🟡 HIGH

---

## Medium Effort Tasks (2-4 hours each)

### ✅ Action 5: Create useAccordion Custom Hook

**Create new file:** `src/hooks/useAccordion.ts`

```tsx
import { useState } from 'react';

/**
 * Custom hook for managing accordion/collapse component state.
 * 
 * @template T - Type of the item identifier (number, string, etc.)
 * @param initialValue - Initial open item (null for all closed)
 * @returns Object with accordion state and helper methods
 * 
 * @example
 * ```tsx
 * const { toggle, isOpen, getCollapseClasses } = useAccordion<number>();
 * 
 * <button onClick={() => toggle(0)}>Toggle Item</button>
 * <div className={getCollapseClasses(0)}>Content</div>
 * ```
 */
export function useAccordion<T = number>(initialValue: T | null = null) {
  const [openItem, setOpenItem] = useState<T | null>(initialValue);

  /**
   * Toggle an accordion item open/closed
   */
  const toggle = (item: T) => {
    setOpenItem(openItem === item ? null : item);
  };

  /**
   * Check if an item is currently open
   */
  const isOpen = (item: T): boolean => {
    return openItem === item;
  };

  /**
   * Get Tailwind classes for collapse animation
   */
  const getCollapseClasses = (item: T): string => {
    return `grid transition-all duration-300 ease-in-out ${
      isOpen(item) 
        ? "grid-rows-[1fr] opacity-100" 
        : "grid-rows-[0fr] opacity-0"
    }`;
  };

  /**
   * Get rotation classes for icon (+ to x animation)
   */
  const getIconRotationClasses = (item: T): string => {
    return `transition-transform duration-300 ${
      isOpen(item) ? "rotate-45" : "rotate-0"
    }`;
  };

  return {
    openItem,
    toggle,
    isOpen,
    getCollapseClasses,
    getIconRotationClasses,
  };
}
```

**Update FAQSection.tsx:**
```tsx
import { useAccordion } from '@/hooks/useAccordion';

export function FAQSection() {
  // Replace lines 34-38 with:
  const { toggle, isOpen, getCollapseClasses, getIconRotationClasses } = useAccordion<number>();

  return (
    // ...
    {faqs.map((faq, index) => (
      <div key={index}>
        <button onClick={() => toggle(index)}>
          <span>{faq.question}</span>
          <span className={getIconRotationClasses(index)}>+</span>
        </button>
        <div className={getCollapseClasses(index)}>
          {/* content */}
        </div>
      </div>
    ))}
  );
}
```

**Update Footer.tsx:**
```tsx
import { useAccordion } from '@/hooks/useAccordion';

export function Footer() {
  // Replace accordion state with:
  const { toggle, getCollapseClasses } = useAccordion<string>();

  // Update click handlers and classes to use the hook
}
```

**Impact:** Removes 100+ lines of duplicated code  
**Effort:** 1 hour (create hook + update 3 components)  
**Priority:** 🟡 HIGH

---

### ✅ Action 6: Create Reusable DropdownMenu Component

**Create new file:** `src/components/ui/DropdownMenu.tsx`

```tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export interface DropdownMenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
}

export interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: DropdownMenuItem[];
  className?: string;
}

/**
 * Reusable dropdown menu with hover trigger.
 * Opens on mouse enter, closes on mouse leave.
 * 
 * @example
 * ```tsx
 * <DropdownMenu
 *   trigger={<button>Shop</button>}
 *   items={[
 *     { label: "Item 1", href: "/item1" },
 *     { label: "Item 2", href: "/item2", description: "Details" }
 *   ]}
 * />
 * ```
 */
export function DropdownMenu({ trigger, items, className = '' }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {trigger}
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-50 min-w-[240px]">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start gap-3">
                {item.icon && (
                  <div className="flex-shrink-0">{item.icon}</div>
                )}
                <div>
                  <div className="font-medium text-gray-900">{item.label}</div>
                  {item.description && (
                    <div className="text-sm text-gray-500 mt-0.5">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
```

**Update Header.tsx to use DropdownMenu:**
```tsx
import { DropdownMenu } from '@/components/ui/DropdownMenu';
import { SHOP_DROPDOWN_ITEMS, DISCOVER_DROPDOWN_ITEMS } from '@/data/navigation';

// Replace the Shop dropdown logic (lines ~145-170) with:
{item.label === "Shop" && (
  <DropdownMenu
    trigger={<span>{item.label}</span>}
    items={SHOP_DROPDOWN_ITEMS}
  />
)}

// Replace the Discover dropdown logic (lines ~209-234) with:
{item.label === "Discover" && (
  <DropdownMenu
    trigger={<span>{item.label}</span>}
    items={DISCOVER_DROPDOWN_ITEMS}
  />
)}
```

**Impact:** Removes ~100 lines from Header.tsx, reusable component  
**Effort:** 2 hours  
**Priority:** 🟡 HIGH

---

### ✅ Action 7: Break Up Header.tsx Into Multiple Components

**Create folder:** `src/components/sections/Header/`

**File 1:** `src/components/sections/Header/DesktopNavigation.tsx`
```tsx
'use client';

import Link from 'next/link';
import { DropdownMenu } from '@/components/ui/DropdownMenu';
import { LEFT_NAV_ITEMS, RIGHT_NAV_ITEMS, SHOP_DROPDOWN_ITEMS } from '@/data/navigation';

export function DesktopNavigation() {
  return (
    <nav className="hidden md:flex items-center justify-between px-6 py-4">
      {/* Left Navigation */}
      <div className="flex items-center gap-6">
        {LEFT_NAV_ITEMS.map((item) => (
          item.label === "Shop" ? (
            <DropdownMenu
              key={item.label}
              trigger={<span className="cursor-pointer">{item.label}</span>}
              items={SHOP_DROPDOWN_ITEMS}
            />
          ) : (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          )
        ))}
      </div>

      {/* Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <img src="/logo.svg" alt="IM8" className="h-8" />
        </Link>
      </div>

      {/* Right Navigation */}
      <div className="flex items-center gap-6">
        {RIGHT_NAV_ITEMS.map((item) => (
          item.isButton ? (
            <button key={item.label} className="btn-primary">
              {item.label}
            </button>
          ) : (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          )
        ))}
      </div>
    </nav>
  );
}
```

**File 2:** `src/components/sections/Header/MobileMenu.tsx`
```tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LEFT_NAV_ITEMS, RIGHT_NAV_ITEMS } from '@/data/navigation';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" /* ... hamburger icon */ />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="p-6">
            <button onClick={() => setIsOpen(false)}>Close</button>
            
            <nav className="mt-8 space-y-4">
              {[...LEFT_NAV_ITEMS, ...RIGHT_NAV_ITEMS].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-lg"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
```

**File 3:** `src/components/sections/Header/StickyBar.tsx`
```tsx
'use client';

import { useState, useEffect } from 'react';

export function StickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-im8-dark-red text-white py-2 px-4 z-40">
      <div className="flex justify-between items-center">
        <span>Special Offer!</span>
        <button className="btn-primary">Get Started</button>
      </div>
    </div>
  );
}
```

**File 4:** `src/components/sections/Header/index.tsx`
```tsx
import { DesktopNavigation } from './DesktopNavigation';
import { MobileMenu } from './MobileMenu';
import { StickyBar } from './StickyBar';

export function Header() {
  return (
    <>
      <StickyBar />
      <header className="relative">
        <DesktopNavigation />
        <MobileMenu />
      </header>
    </>
  );
}
```

**Impact:** Header.tsx goes from 452 lines → ~50 lines total across 4 files  
**Effort:** 3-4 hours  
**Priority:** 🟡 HIGH

---

## Advanced Refactoring (4-8 hours each)

### ✅ Action 8: Create Shared Card Component

**Create file:** `src/components/ui/FeatureCard.tsx`

```tsx
import { ReactNode } from 'react';

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient?: string;
  className?: string;
}

/**
 * Reusable card component for displaying features, benefits, or organ systems.
 * Used across DailyEssentials, OrganSystems, and other sections.
 * 
 * @example
 * ```tsx
 * <FeatureCard
 *   icon={<EnergyIcon />}
 *   title="Energy"
 *   description="Sustained energy throughout the day"
 *   gradient="from-green-100 to-green-50"
 * />
 * ```
 */
export function FeatureCard({
  icon,
  title,
  description,
  gradient = "from-gray-100 to-gray-50",
  className = ""
}: FeatureCardProps) {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 ${className}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
```

**Update DailyEssentials.tsx:**
```tsx
import { FeatureCard } from '@/components/ui/FeatureCard';

// Replace BenefitCard component with:
{benefits.map((benefit, index) => (
  <FeatureCard
    key={index}
    icon={<img src={benefit.icon} alt={benefit.title} />}
    title={benefit.title}
    description={benefit.description}
    gradient={benefit.color}
  />
))}
```

**Update OrganSystems.tsx:**
```tsx
import { FeatureCard } from '@/components/ui/FeatureCard';

// Replace organ system cards with:
{systems.map((system, index) => (
  <FeatureCard
    key={index}
    icon={system.icon}
    title={system.title}
    description={system.description}
  />
))}
```

**Impact:** Removes 150+ lines of duplicated card rendering logic  
**Effort:** 2-3 hours  
**Priority:** 🟢 MEDIUM

---

### ✅ Action 9: Externalize All Data to Config Files

**Create folder:** `src/data/`

**File:** `src/data/faqs.ts`
```tsx
export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: "What is IM8?",
    answer: "IM8 is the pinnacle of premium core nutrition..."
  },
  // ... move all FAQs here
];
```

**File:** `src/data/footer.ts`
```tsx
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Daily Essentials", href: "/shop/daily-essentials" },
      { label: "Science", href: "/science" },
      // ...
    ]
  },
  // ... more sections
];
```

**File:** `src/data/benefits.ts`
```tsx
export interface Benefit {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export const DAILY_BENEFITS: Benefit[] = [
  {
    icon: "/icons/energy.svg",
    title: "Energy",
    description: "Sustained energy throughout the day",
    color: "from-green-100 to-green-50"
  },
  // ... more benefits
];
```

**Update components to import data:**
```tsx
// FAQSection.tsx
import { FAQS } from '@/data/faqs';

// Footer.tsx
import { FOOTER_SECTIONS } from '@/data/footer';

// DailyEssentials.tsx
import { DAILY_BENEFITS } from '@/data/benefits';
```

**Impact:** Separates content from presentation, easier updates  
**Effort:** 2 hours  
**Priority:** 🟢 MEDIUM

---

### ✅ Action 10: Add JSDoc Documentation

**Example for ExpertCard.tsx:**
```tsx
export interface ExpertCardProps {
  /** Full name of the expert (e.g., "Dr. John Smith") */
  name: string;
  /** Professional title or credentials (e.g., "Chief Scientist at NASA") */
  title: string;
  /** URL to the expert's profile photo */
  image: string;
  /** Optional badge text (e.g., "Scientific Advisor") */
  badge?: string;
}

/**
 * Displays an expert's profile card with image, name, and title.
 * 
 * Used in the ExpertTestimonials section to showcase the IM8 Scientific Advisory Board
 * and other expert endorsements.
 * 
 * Features:
 * - Responsive image with Next.js optimization
 * - Optional badge overlay
 * - Hover effects for interactivity
 * 
 * @example
 * ```tsx
 * <ExpertCard
 *   name="Dr. Dawn Mussallem"
 *   title="Oncologist at Mayo Clinic"
 *   image="/experts/dawn.jpg"
 *   badge="Scientific Advisor"
 * />
 * ```
 */
export function ExpertCard({ name, title, image, badge }: ExpertCardProps) {
  return (/* ... */);
}
```

**Do this for all exported components:**
- Header.tsx
- Hero.tsx
- All section components
- All UI components (Button, Container, Reveal, etc.)

**Impact:** Greatly improves developer experience and maintainability  
**Effort:** 4-6 hours  
**Priority:** 🟢 MEDIUM

---

## Code Quality Tools Setup

### ✅ Action 11: Configure ESLint for Clean Code

**Update `eslint.config.mjs`:**
```javascript
export default [
  {
    extends: [
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      // Type Safety
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      
      // Code Complexity
      'max-lines': ['warn', { max: 250, skipBlankLines: true, skipComments: true }],
      'max-lines-per-function': ['warn', { max: 100, skipBlankLines: true }],
      'complexity': ['warn', { max: 10 }],
      
      // Code Duplication
      'no-duplicate-imports': 'error',
      
      // Clean Code
      'prefer-const': 'error',
      'no-var': 'error',
      
      // React Best Practices
      'react/prop-types': 'off', // Using TypeScript instead
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    }
  }
];
```

**Impact:** Automatically enforces clean code standards  
**Effort:** 30 minutes  
**Priority:** 🟢 MEDIUM

---

### ✅ Action 12: Add Pre-commit Hooks

**Install Husky:**
```bash
npm install --save-dev husky lint-staged
npx husky install
```

**Add to `package.json`:**
```json
{
  "scripts": {
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

**Create `.husky/pre-commit`:**
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

**Impact:** Prevents bad code from being committed  
**Effort:** 20 minutes  
**Priority:** 🟢 MEDIUM

---

## Implementation Checklist

Copy this checklist to track your progress:

### 🔴 Critical (Do First)
- [ ] Enable TypeScript strict mode (`tsconfig.json`)
- [ ] Fix all TypeScript errors after enabling strict mode
- [ ] Add DOMPurify and sanitize HTML in FAQSection
- [ ] Add type definitions for all data structures (FAQs, Footer, etc.)

### 🟡 High Priority (Week 1-2)
- [ ] Extract navigation data to `src/data/navigation.ts`
- [ ] Create `useAccordion` custom hook
- [ ] Update FAQSection to use useAccordion
- [ ] Update Footer to use useAccordion
- [ ] Create DropdownMenu component
- [ ] Refactor Header to use DropdownMenu
- [ ] Break Header.tsx into 4 separate files

### 🟢 Medium Priority (Week 3-4)
- [ ] Create shared FeatureCard component
- [ ] Externalize all data to config files
- [ ] Add JSDoc documentation to all exported components
- [ ] Configure ESLint rules for clean code
- [ ] Set up Husky pre-commit hooks
- [ ] Add Prettier for code formatting
- [ ] Implement code splitting with dynamic imports

### ⚪ Nice to Have (Future)
- [ ] Set up Storybook for component documentation
- [ ] Add unit tests with Jest/Testing Library
- [ ] Create design token system
- [ ] Add performance monitoring
- [ ] Set up SonarQube for code quality metrics

---

## Testing Your Changes

After each refactoring, run these commands:

```bash
# Check for TypeScript errors
npm run build

# Run linter
npm run lint

# Start dev server and manually test
npm run dev
```

**Manual Testing Checklist:**
- [ ] Desktop navigation works
- [ ] Mobile menu opens/closes
- [ ] Dropdowns appear on hover
- [ ] FAQs expand/collapse
- [ ] All links work
- [ ] Responsive design intact
- [ ] No console errors

---

## Estimated Total Time

| Phase | Tasks | Time |
|-------|-------|------|
| Critical Fixes | TypeScript strict + security | 4-6 hours |
| High Priority | Hooks + components | 12-16 hours |
| Medium Priority | Documentation + tooling | 8-12 hours |
| **Total** | | **24-34 hours** |

**Recommended Approach:**  
Work in small increments, committing after each successful change. This allows easy rollback if something breaks.

---

## Success Metrics

After implementing these changes, you should see:

✅ **TypeScript Coverage:** 100% (strict mode enabled)  
✅ **Code Duplication:** Reduced by ~30%  
✅ **Largest File:** <250 lines (down from 452)  
✅ **Security Vulnerabilities:** 0 (XSS fixed)  
✅ **ESLint Warnings:** <10 (down from 50+)  
✅ **Build Time:** Potentially faster (code splitting)  

---

*This action plan provides concrete steps to systematically improve code quality. Start with Critical tasks and work your way down.*
