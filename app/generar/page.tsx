'use client';

import { useState } from 'react';

export default function Generar() {
  const [nicho, setNicho] = useState('emprendimiento');
  const [objetivo, setObjetivo] = useState('seguidores');
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState<any>(null);
  const [error, setError] = useState('');

  const generarContenido = async () => {
    setLoading(true);
    setError('');
    setResultado(null);

    try {
      const response = await fetch('/api/generar-contenido', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nicho, objetivo })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setResultado(data);
    } catch (err: any) {
      setError('Error generando contenido. Verifica tu API key.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFFFFF 0%, #E8FFFE 40%, #C8F8F6 70%, #A8F0EE 100%)',
      position: 'relative', overflow: 'hidden'
    }}>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="dot-grid" />

      <div style={{ padding: '32px', maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

        <h1 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '32px', marginBottom: '8px' }}>
          🎬 Generador de <span style={{ color: '#0ABFBC' }}>Contenido IA</span>
        </h1>
        <p style={{ color: '#718096', marginBottom: '32px' }}>
          Genera hooks, guiones y hashtags virales en segundos
        </p>

        {/* Configuración */}
        <div className="glass-card" style={{ padding: '28px', marginBottom: '24px', borderTop: '3px solid #0ABFBC' }}>
          <h3 style={{ fontFamily: 'Syne', fontWeight: 700, marginBottom: '20px' }}>⚙️ Configuración</h3>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '14px', fontWeight: 500, color: '#4A5568', display: 'block', marginBottom: '8px' }}>
              Nicho de contenido
            </label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['emprendimiento', 'negocios', 'finanzas', 'motivación', 'tecnología'].map(n => (
                <button key={n} onClick={() => setNicho(n)} style={{
                  padding: '8px 16px', borderRadius: '20px', border: 'none', cursor: 'pointer',
                  background: nicho === n ? 'linear-gradient(135deg, #A87800, #F5C842)' : 'rgba(0,0,0,0.06)',
                  color: nicho === n ? 'white' : '#4A5568',
                  fontWeight: nicho === n ? 600 : 400,
                  fontSize: '14px', transition: 'all 0.2s'
                }}>{n}</button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '14px', fontWeight: 500, color: '#4A5568', display: 'block', marginBottom: '8px' }}>
              Objetivo del video
            </label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['seguidores', 'alcance', 'autoridad', 'leads'].map(o => (
                <button key={o} onClick={() => setObjetivo(o)} style={{
                  padding: '8px 16px', borderRadius: '20px', border: 'none', cursor: 'pointer',
                  background: objetivo === o ? 'linear-gradient(135deg, #0ABFBC, #22D3EE)' : 'rgba(0,0,0,0.06)',
                  color: objetivo === o ? 'white' : '#4A5568',
                  fontWeight: objetivo === o ? 600 : 400,
                  fontSize: '14px', transition: 'all 0.2s'
                }}>{o}</button>
              ))}
            </div>
          </div>

          <button
            className="btn-gold"
            onClick={generarContenido}
            disabled={loading}
            style={{ padding: '14px 40px', fontSize: '16px', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? '⏳ Generando con IA...' : '✨ Generar Contenido'}
          </button>
        </div>{/* Error */}
        {error && (
          <div style={{
            padding: '16px', borderRadius: '12px',
            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
            color: '#DC2626', marginBottom: '24px'
          }}>{error}</div>
        )}

        {/* Loading */}
        {loading && (
          <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>🧠</div>
            <p style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '18px', color: '#0ABFBC' }}>
              La IA está creando tu contenido...
            </p>
            <p style={{ color: '#718096', marginTop: '8px' }}>Analizando tendencias y generando guión</p>
          </div>
        )}

        {/* Resultado */}
        {resultado && (
          <div className="glass-card" style={{ padding: '28px', borderTop: '3px solid #F5C842' }}>
            <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '20px', marginBottom: '20px' }}>
              ✅ Contenido Generado
            </h3>

            <div style={{ marginBottom: '16px', padding: '16px', borderRadius: '12px', background: 'rgba(245,200,66,0.1)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#A87800', marginBottom: '6px' }}>📌 TÍTULO</div>
              <div style={{ fontWeight: 600, color: '#1A1A2E', fontSize: '16px' }}>{resultado.titulo}</div>
            </div>

            <div style={{ marginBottom: '16px', padding: '16px', borderRadius: '12px', background: 'rgba(10,191,188,0.08)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#0ABFBC', marginBottom: '6px' }}>⚡ HOOK (primeros 3 segundos)</div>
              <div style={{ fontWeight: 700, color: '#1A1A2E', fontSize: '18px' }}>{resultado.hook}</div>
            </div>

            <div style={{ marginBottom: '16px', padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#4A5568', marginBottom: '6px' }}>📝 GUIÓN COMPLETO</div>
              <div style={{ color: '#1A1A2E', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{resultado.guion}</div>
            </div>

            <div style={{ marginBottom: '16px', padding: '16px', borderRadius: '12px', background: 'rgba(124,58,237,0.06)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#7C3AED', marginBottom: '6px' }}>🎯 CTA</div>
              <div style={{ fontWeight: 600, color: '#1A1A2E' }}>{resultado.cta}</div>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(5,150,105,0.06)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#059669', marginBottom: '8px' }}>🏷️ HASHTAGS</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {resultado.hashtags?.map((h: string, i: number) => (
                  <span key={i} style={{
                    padding: '4px 10px', borderRadius: '20px',
                    background: 'rgba(5,150,105,0.1)', color: '#059669',
                    fontSize: '13px', fontWeight: 500
                  }}>{h}</span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
              <button className="btn-gold" style={{ padding: '12px 24px', fontSize: '14px' }}>
                ✅ Aprobar contenido
              </button>
              <button onClick={generarContenido} style={{
                padding: '12px 24px', fontSize: '14px', borderRadius: '12px',
                border: '1px solid rgba(10,191,188,0.4)', background: 'transparent',
                color: '#0ABFBC', cursor: 'pointer', fontWeight: 600
              }}>
                🔄 Regenerar
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}