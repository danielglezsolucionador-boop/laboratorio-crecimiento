'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [modo, setModo] = useState<'login' | 'registro'>('login')

  const handleAuth = async () => {
    setLoading(true)
    setError('')

    if (modo === 'registro') {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) {
        setError(error.message)
      } else {
        setError('Revisa tu email para confirmar tu cuenta.')
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        setError('Email o contraseña incorrectos.')
      } else {
        router.push('/dashboard')
      }
    }
    setLoading(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFFFFF 0%, #E8FFFE 40%, #C8F8F6 70%, #A8F0EE 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.75)',
        borderRadius: '24px',
        padding: '40px 36px',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 16px 48px rgba(10,191,188,0.10)'
      }}>
        {/* Logo */}
        <div style={{
          width: '64px', height: '64px', borderRadius: '18px',
          background: 'linear-gradient(135deg, #A87800, #F5C842)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px',
          boxShadow: '0 8px 32px rgba(212,160,23,0.35)',
          fontSize: '26px', fontWeight: '800', color: '#fff'
        }}>LC</div>

        <h1 style={{ textAlign: 'center', fontSize: '22px', fontWeight: '800', color: '#1A1A2E', marginBottom: '6px' }}>
          Laboratorio de Crecimiento
        </h1>
        <p style={{ textAlign: 'center', fontSize: '13px', color: '#718096', marginBottom: '28px' }}>
          Tu plataforma privada de IA para llegar a 100K seguidores
        </p>

        {/* Tabs login/registro */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          <button onClick={() => setModo('login')} style={{
            flex: 1, padding: '10px', borderRadius: '10px', border: 'none', cursor: 'pointer',
            background: modo === 'login' ? 'linear-gradient(135deg,#A87800,#F5C842)' : 'rgba(212,160,23,0.08)',
            color: modo === 'login' ? '#fff' : '#A87800', fontWeight: '700', fontSize: '13px'
          }}>Entrar</button>
          <button onClick={() => setModo('registro')} style={{
            flex: 1, padding: '10px', borderRadius: '10px', border: 'none', cursor: 'pointer',
            background: modo === 'registro' ? 'linear-gradient(135deg,#A87800,#F5C842)' : 'rgba(212,160,23,0.08)',
            color: modo === 'registro' ? '#fff' : '#A87800', fontWeight: '700', fontSize: '13px'
          }}>Registrarse</button>
        </div>

        {/* Campos */}
        <div style={{ marginBottom: '14px' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#4A5568', display: 'block', marginBottom: '6px' }}>
            Correo electrónico
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="tu@email.com"
            style={{
              width: '100%', padding: '13px 16px', borderRadius: '12px',
              border: '1.5px solid rgba(212,160,23,0.3)',
              background: 'rgba(255,255,255,0.8)',
              fontSize: '14px', color: '#1A1A2E', outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#4A5568', display: 'block', marginBottom: '6px' }}>
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            onKeyDown={e => e.key === 'Enter' && handleAuth()}
            style={{
              width: '100%', padding: '13px 16px', borderRadius: '12px',
              border: '1.5px solid rgba(212,160,23,0.3)',
              background: 'rgba(255,255,255,0.8)',
              fontSize: '14px', color: '#1A1A2E', outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Error / mensaje */}
        {error && (
          <div style={{
            padding: '10px 14px', borderRadius: '10px', marginBottom: '16px',
            background: error.includes('Revisa') ? 'rgba(5,150,105,0.1)' : 'rgba(220,38,38,0.1)',
            color: error.includes('Revisa') ? '#059669' : '#DC2626',
            fontSize: '13px', fontWeight: '500'
          }}>{error}</div>
        )}

        {/* Botón */}
        <button
          onClick={handleAuth}
          disabled={loading}
          style={{
            width: '100%', padding: '15px', borderRadius: '14px', border: 'none', cursor: 'pointer',
            background: 'linear-gradient(135deg, #A87800, #F5C842)',
            color: '#fff', fontSize: '15px', fontWeight: '700',
            boxShadow: '0 8px 32px rgba(212,160,23,0.35)',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Cargando...' : modo === 'login' ? 'Entrar al Laboratorio →' : 'Crear cuenta →'}
        </button>

        <p style={{ textAlign: 'center', marginTop: '18px', fontSize: '12px', color: '#718096' }}>
          Plataforma privada · Solo acceso autorizado
        </p>
      </div>
    </div>
  )
}