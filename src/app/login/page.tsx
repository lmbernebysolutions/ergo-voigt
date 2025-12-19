"use client"

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Redirect to home page
        router.push('/')
        router.refresh()
      } else {
        setError(data.error || 'Falsches Passwort. Bitte versuchen Sie es erneut.')
        setIsLoading(false)
      }
    } catch (err) {
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50 px-4">
      <div className="w-full max-w-md">
        <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200/50">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-2 font-bold text-slate-950" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
              Passwort geschützt
            </h1>
            <p className="text-slate-600" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
              Bitte geben Sie das Passwort ein, um auf die Website zuzugreifen.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="sr-only">
                Passwort
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Passwort eingeben"
                className="h-12 min-h-[48px] rounded-full border-slate-200 bg-slate-50 px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/50"
                required
                autoFocus
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="rounded-2xl bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 min-h-[48px] rounded-full font-bold shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Wird überprüft...' : 'Anmelden'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
