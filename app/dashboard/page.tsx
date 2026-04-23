'use client';

export default function Dashboard() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFFFFF 0%, #E8FFFE 40%, #C8F8F6 70%, #A8F0EE 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="dot-grid" />

      {/* Topbar */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.80)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.75)',
        padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #A87800, #F5C842)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ fontFamily: 'Syne', fontWeight: 800, color: 'white', fontSize: '16px' }}>LC</span>
          </div>
          <h1 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '18px' }}>
            <span style={{ color: '#A87800' }}>Laboratorio</span>{' '}
            <span style={{ color: '#0ABFBC' }}>de Crecimiento</span>
          </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div className="live-dot" />
            <span style={{ fontSize: '13px', color: '#718096' }}>En vivo</span>
          </div>
          <span style={{ fontSize: '13px', color: '#718096' }}>22 Abr 2026</span>
          <div className="pulse-glow" style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #A87800, #F5C842)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700, fontSize: '14px'
          }}>D</div>
        </div>
      </div>

      <div style={{ padding: '32px', maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

        {/* Meta 100K */}
        <div className="glass-card" style={{
          padding: '24px 32px', marginBottom: '24px',
          borderTop: '3px solid #F5C842'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '20px', color: '#A87800' }}>
                🎯 Meta: 100,000 Seguidores
              </h2>
              <p style={{ color: '#718096', fontSize: '14px', marginTop: '4px' }}>
                Tiempo estimado: 4 meses · Instagram + TikTok
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '32px', color: '#A87800' }}>2.4%</div>
              <div style={{ fontSize: '13px', color: '#718096' }}>2,400 / 100,000</div>
            </div>
          </div>
          <div style={{ height: '12px', background: 'rgba(0,0,0,0.08)', borderRadius: '6px', overflow: 'hidden' }}>
            <div style={{
              height: '100%', width: '2.4%',
              background: 'linear-gradient(90deg, #A87800, #F5C842)',
              borderRadius: '6px'
            }} />
          </div>
        </div>

        {/* 4 Métricas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
          {[
            { label: 'Seguidores ayer', value: '+127', icon: '👥', border: '#0ABFBC' },
            { label: 'Vistas totales', value: '48,392', icon: '👁️', border: '#F5C842' },
            { label: 'Engagement', value: '6.8%', icon: '💫', border: '#A78BFA' },
            { label: 'Guardados', value: '1,204', icon: '🔖', border: '#34D399' },
          ].map((m, i) => (
            <div key={i} className="glass-card" style={{ padding: '20px 24px', borderTop: `3px solid ${m.border}` }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{m.icon}</div>
              <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '24px', color: '#1A1A2E' }}>{m.value}</div>
              <div style={{ fontSize: '13px', color: '#718096', marginTop: '4px' }}>{m.label}</div>
            </div>
          ))}
        </div>{/* Dos columnas */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>

          {/* Decisión IA */}
          <div className="glass-card" style={{ padding: '24px', borderTop: '3px solid #0ABFBC' }}>
            <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '16px', marginBottom: '16px' }}>
              🧠 Decisión IA para hoy
            </h3>
            {[
              { icon: '🔥', label: 'Oportunidad viral', value: 'Tendencia: IA en negocios' },
              { icon: '🎬', label: 'Formato', value: 'Reels 30-45 seg con hook fuerte' },
              { icon: '🕐', label: 'Horarios óptimos', value: '7AM · 12PM · 6PM' },
              { icon: '📹', label: 'Videos hoy', value: '3 videos recomendados' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '12px', borderRadius: '10px',
                background: 'rgba(10,191,188,0.06)',
                marginBottom: '8px'
              }}>
                <span style={{ fontSize: '20px' }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '12px', color: '#718096' }}>{item.label}</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A2E' }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Rendimiento */}
          <div className="glass-card" style={{ padding: '24px', borderTop: '3px solid #F5C842' }}>
            <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '16px', marginBottom: '16px' }}>
              📈 Rendimiento 7 días
            </h3>
            {[
              { day: 'Lun', value: 65 },
              { day: 'Mar', value: 80 },
              { day: 'Mié', value: 55 },
              { day: 'Jue', value: 90 },
              { day: 'Vie', value: 75 },
              { day: 'Sáb', value: 95 },
              { day: 'Dom', value: 70 },
            ].map((d, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '12px', color: '#718096', width: '28px' }}>{d.day}</span>
                <div style={{ flex: 1, height: '8px', background: 'rgba(0,0,0,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${d.value}%`,
                    background: d.value === 95
                      ? 'linear-gradient(90deg, #A87800, #F5C842)'
                      : 'linear-gradient(90deg, #0ABFBC, #22D3EE)',
                    borderRadius: '4px'
                  }} />
                </div>
                <span style={{ fontSize: '12px', color: '#718096', width: '28px' }}>{d.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Botón aprobar */}
        <div style={{ textAlign: 'center' }}>
          <button className="btn-gold" style={{ padding: '16px 48px', fontSize: '16px' }}>
            ✅ Aprobar todo y programar publicación automática
          </button>
        </div>

      </div>
    </div>
  );
}