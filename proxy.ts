import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { routing } from '@/i18n/routing'

const CANONICAL_HOST = 'compareae.com'

// next-intl locale routing: handles `/` → `/ar` redirect, locale detection,
// and the /ar | /en prefixes.
const intlMiddleware = createMiddleware(routing)

// NOTE: Rate limiting / DDoS protection are handled by Cloudflare at DNS cutover.
// Canonical path normalization (lowercase, trailing-slash) is deferred to the
// multilingual-SEO phase so it doesn't conflict with locale redirects.
export function proxy(req: NextRequest) {
  const host = (req.headers.get('host') || '').toLowerCase()
  const isLocal =
    host.startsWith('localhost') ||
    host.startsWith('127.0.0.1') ||
    host.endsWith('.onrender.com')

  // 1) Host canonicalization — production only (www → non-www)
  if (!isLocal && host.startsWith('www.')) {
    const url = req.nextUrl.clone()
    url.host = CANONICAL_HOST
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }

  // 2) Locale routing (next-intl)
  const res = intlMiddleware(req)

  // 3) Crawl-budget protection: noindex parameter-heavy / draft URLs.
  //    GLOBAL_NOINDEX flips the whole site to noindex (launch-freeze phase).
  const globalNoindex = process.env.GLOBAL_NOINDEX === 'true'
  const hasQuery = req.nextUrl.search !== ''
  if (globalNoindex || hasQuery || req.nextUrl.pathname.includes('/drafts')) {
    res.headers.set('X-Robots-Tag', 'noindex, follow')
  }
  return res
}

export const config = {
  // Match everything except API routes, Next internals, and files with extensions.
  matcher: ['/((?!api|_next|_vercel|favicon.ico|.*\\..*).*)'],
}
