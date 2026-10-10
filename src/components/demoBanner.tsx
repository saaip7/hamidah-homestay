'use client'

import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

const STORAGE_KEY = 'demo-banner-dismissed'

export default function DemoBanner() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let dismissed = false
    try {
      dismissed = window.sessionStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      dismissed = false
    }
    setVisible(!dismissed)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (!visible || !ref.current) {
      root.style.removeProperty('--demo-banner-h')
      return
    }
    const el = ref.current
    const update = () => root.style.setProperty('--demo-banner-h', `${el.offsetHeight}px`)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => {
      ro.disconnect()
      root.style.removeProperty('--demo-banner-h')
    }
  }, [visible])

  const dismiss = () => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // ignore storage errors (private mode, blocked storage)
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      ref={ref}
      role="region"
      aria-label="Pemberitahuan demo"
      className="fixed top-0 left-0 w-full z-[60] bg-amber-400 text-black text-xs sm:text-sm font-medium"
    >
      <div className="flex items-center justify-center gap-2 px-10 py-2 text-center relative">
        <span>Demo portofolio ArachnoVa — data fiktif, tidak terhubung ke sistem asli.</span>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Tutup pemberitahuan demo"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
