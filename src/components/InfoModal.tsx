import { useEffect, useId, useRef } from 'react'
import { useLocale } from '../i18n/LocaleContext'
import { config } from '../config'

type InfoModalProps = {
  open: boolean
  onClose: () => void
}

export function InfoModal({ open, onClose }: InfoModalProps) {
  const { t } = useLocale()
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-root" role="presentation">
      <button
        type="button"
        className="modal-backdrop"
        aria-label={t.infoModal.close}
        onClick={onClose}
      />
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className="modal__head">
          <h2 id={titleId}>{t.infoModal.title}</h2>
          <button
            ref={closeRef}
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label={t.infoModal.close}
          >
            ×
          </button>
        </header>

        <div className="modal__body">
          <p>{t.infoModal.intro}</p>

          <h3>{t.infoModal.stepsTitle}</h3>
          <ol>
            {t.infoModal.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <h3>{t.infoModal.noteTitle}</h3>
          <p>{t.infoModal.note}</p>
        </div>

        <footer className="modal__foot">
          <a
            className="modal__btn"
            href={config.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.infoModal.source}
          </a>
          <a
            className="modal__btn modal__btn--primary"
            href={config.demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.infoModal.demo}
          </a>
        </footer>
      </div>
    </div>
  )
}
