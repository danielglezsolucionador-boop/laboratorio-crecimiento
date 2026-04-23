'use client';

export default function LoginPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #FFFFFF 0%, #E8FFFE 40%, #C8F8F6 70%, #A8F0EE 100%)'
    }}>
      {/* Orbes */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="dot-grid" />

      {/* Card login */}
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '420px',
        padding: '48px 40px',
        position: 'relative',
        zIndex: 10,
        margin: '20px'
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="pulse-glow" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #A87800, #F5C842)',
            marginBottom: '16px'
          }}>
            <span style={{ fontSize: '28px', fontFamily: 'Syne', fontWeight: 800, color: 'white' }}>LC</span>
          </div>
          <h1 style={{
            fontFamily: 'Syne',
            fontWeight: 800,
            fontSize: '24px',
            color: 'var(--text)',
            marginBottom: '8px'
          }}>
            Laboratorio de Crecimiento
          </h1>
          <p style={{ color: 'var(--text3)', fontSize: '14px' }}>
            Plataforma privada · Solo acceso autorizado
          </p>
        </div>

        {/* Formulario */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text2)', display: 'block', marginBottom: '6px' }}>
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="tu@email.com"
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '10px',
                border: '1px solid rgba(10,191,188,0.3)',
                background: 'rgba(255,255,255,0.8)',
                fontSize: '15px',
                color: 'var(--text)',
                outline: 'none',
                fontFamily: 'Plus Jakarta Sans'
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text2)', display: 'block', marginBottom: '6px' }}>
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '10px',
                border: '1px solid rgba(10,191,188,0.3)',
                background: 'rgba(255,255,255,0.8)',
                fontSize: '15px',
                color: 'var(--text)',
                outline: 'none',
                fontFamily: 'Plus Jakarta Sans'
              }}
            />
          </div>

          <button className="btn-gold" style={{
            width: '100%',
            padding: '14px',
            fontSize: '16px',
            marginTop: '8px'
          }}>
            Entrar al Laboratorio →
          </button>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            margin: '4px 0'
          }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }} />
            <span style={{ fontSize: '13px', color: 'var(--text3)' }}>o</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }} />
          </div>

          <button style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid rgba(0,0,0,0.15)',
            background: 'white',
            fontSize: '15px',
            fontWeight: 500,
            color: 'var(--text)',
            cursor: 'pointer',
            fontFamily: 'Plus Jakarta Sans',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <span>G</span> Continuar con Google
          </button>
        </div>
      </div>
    </div>
  );
}