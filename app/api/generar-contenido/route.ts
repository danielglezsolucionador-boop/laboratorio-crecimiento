import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { nicho, objetivo } = await request.json();

  await new Promise(r => setTimeout(r, 2000));

  const contenidos: Record<string, any> = {
    emprendimiento: {
      titulo: `Cómo construí mi empresa con $0 usando IA en ${new Date().getFullYear()}`,
      hook: '¿Sabías que puedes tener una empresa sin dinero?',
      guion: `[Pausa dramática] Hace 1 año yo tenía $0 y un sueño.\n\n[Camina hacia cámara] Hoy te voy a mostrar EXACTAMENTE cómo usé la IA para construir mi negocio desde cero.\n\n[Señala pantalla] Paso 1: Identifica el problema que nadie está resolviendo.\nPaso 2: Usa herramientas de IA gratuitas para crear tu solución.\nPaso 3: Valida antes de invertir un solo sol.\n\n[Mira directo a cámara] ¿Lo mejor? Puedes empezar HOY mismo.`,
      cta: 'Sigue mi cuenta para ver el proceso completo día a día 👇',
      hashtags: ['#emprendimiento', '#negociosdigitales', '#inteligenciaartificial', '#emprender', '#exito']
    },
    negocios: {
      titulo: `El secreto de los negocios exitosos que nadie te cuenta`,
      hook: 'El 95% de negocios fracasan por esto...',
      guion: `[Hook fuerte] El 95% de los negocios fracasan en el primer año.\n\n[Pausa] ¿Sabes por qué? No es por falta de dinero.\n\nEs por falta de SISTEMA.\n\n[Explica con energía] Un sistema de ventas. Un sistema de marketing. Un sistema de operaciones.\n\n[Cierre] Los negocios exitosos no dependen de una persona — dependen de sistemas.`,
      cta: 'Comenta SISTEMA y te mando mi guía gratis 📩',
      hashtags: ['#negocios', '#marketing', '#ventas', '#empresario', '#estrategia']
    }
  };

  const resultado = contenidos[nicho] || contenidos.emprendimiento;

  return NextResponse.json(resultado);
}