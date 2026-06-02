import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

// Locale-aware navigation helpers. Use these (instead of next/link & next/navigation)
// once pages live under app/[locale]/ so links keep the active locale prefix.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
