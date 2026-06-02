'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export function ContactForm() {
  const t = useTranslations('contactForm')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {}

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    if (!name || name.trim().length < 2) {
      newErrors.name = t('errName')
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t('errEmail')
    }

    if (!subject || subject.trim().length < 3) {
      newErrors.subject = t('errSubject')
    }

    if (!message || message.trim().length < 10) {
      newErrors.message = t('errMessage')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    if (!validateForm(formData)) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission - in production, this would send to an API
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-card-foreground mb-2">{t('successTitle')}</h3>
        <p className="text-muted-foreground">{t('successText')}</p>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
      <h2 className="text-xl font-bold text-card-foreground mb-6">
        {t('title')}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-card-foreground mb-1.5">
            {t('nameLabel')}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            className={`w-full bg-input border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.name ? 'border-destructive' : 'border-border'
            }`}
            placeholder={t('namePlaceholder')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-destructive">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-card-foreground mb-1.5">
            {t('emailLabel')}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            className={`w-full bg-input border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.email ? 'border-destructive' : 'border-border'
            }`}
            placeholder="example@email.com"
            dir="ltr"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-destructive">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-sm font-medium text-card-foreground mb-1.5">
            {t('subjectLabel')}
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            className={`w-full bg-input border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.subject ? 'border-destructive' : 'border-border'
            }`}
            placeholder={t('subjectPlaceholder')}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-destructive">{errors.subject}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-card-foreground mb-1.5">
            {t('messageLabel')}
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            className={`w-full bg-input border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
              errors.message ? 'border-destructive' : 'border-border'
            }`}
            placeholder={t('messagePlaceholder')}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-destructive">{errors.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? t('submitting') : t('submit')}
        </Button>
      </form>
    </div>
  )
}
