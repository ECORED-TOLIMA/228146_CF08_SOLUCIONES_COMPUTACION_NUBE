<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<br><b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales relacionados con los servicios de red, su funcionamiento dentro de la infraestructura tecnológica y su aplicación en la administración de servidores y en los procesos de comunicación en entornos organizacionales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué se entiende por servicios de red en una infraestructura tecnológica?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicaciones que funcionan sin conexión a Internet.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Programas instalados únicamente en computadores personales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Conjunto de funciones que permiten la comunicación y el intercambio de información entre dispositivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sistemas de almacenamiento local sin conexión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es uno de los principales objetivos de los servicios de red en una organización?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el uso de dispositivos electrónicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar la comunicación y el acceso a recursos compartidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de servidores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar el acceso de los usuarios a la red.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes es un servicio de configuración automática de red?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'DHCP', esCorrecta: true },
            { id: 'b', texto: 'FTP', esCorrecta: false },
            { id: 'c', texto: 'SMTP', esCorrecta: false },
            { id: 'd', texto: 'HTTP', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué función cumple el protocolo DHCP?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Enviar correos electrónicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administrar servidores <em>web</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Asignar automáticamente direcciones IP a los dispositivos de una red.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Permitir videollamadas en Internet.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Cuál es la función principal del DNS (Domain Name System)?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Traducir nombres de dominio en direcciones IP.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Enviar archivos entre computadores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gestionar impresoras en red.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Crear cuentas de usuario.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes ejemplos corresponde a un nombre de dominio utilizado por DNS?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '192.168.1.1', esCorrecta: false },
            { id: 'b', texto: '255.255.255.0', esCorrecta: false },
            { id: 'c', texto: '127.0.0.1', esCorrecta: false },
            { id: 'd', texto: 'www.ejemplo.com', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué protocolo permite acceder de forma remota al escritorio de un computador o servidor?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'FTP', esCorrecta: false },
            { id: 'b', texto: 'SMTP', esCorrecta: false },
            { id: 'c', texto: 'DNS', esCorrecta: false },
            { id: 'd', texto: 'RDP', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es el puerto que utiliza RDP por defecto?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '25', esCorrecta: false },
            { id: 'b', texto: '80', esCorrecta: false },
            { id: 'c', texto: '3389', esCorrecta: true },
            { id: 'd', texto: '443', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué permite realizar el protocolo FTP?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transferir archivos entre equipos en una red.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Configurar direcciones IP automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Administrar bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar llamadas telefónicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Cuál es una función principal de un servidor <em>web</em>?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestionar llamadas telefónicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Almacenar y entregar páginas <em>web</em> a los usuarios.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Asignar direcciones IP.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Enviar correos electrónicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué protocolo se utiliza comúnmente para enviar correos electrónicos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'FTP', esCorrecta: false },
            { id: 'b', texto: 'SMTP', esCorrecta: true },
            { id: 'c', texto: 'DHCP', esCorrecta: false },
            { id: 'd', texto: 'DNS', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de los siguientes servicios permite recibir correos electrónicos desde un servidor?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'POP3 o IMAP', esCorrecta: true },
            { id: 'b', texto: 'DNS', esCorrecta: false },
            { id: 'c', texto: 'RDP', esCorrecta: false },
            { id: 'd', texto: 'DHCP', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué permite la tecnología VoIP en las redes de comunicación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Realizar llamadas de voz utilizando redes basadas en protocolo IP.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Convertir correos electrónicos en llamadas telefónicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Almacenar archivos en servidores <em>web</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Asignar direcciones IP automáticamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Cuál es una ventaja de utilizar VoIP en las organizaciones?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el costo de las llamadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Integrar voz, videollamadas y mensajería en una misma plataforma.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar las redes de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar las comunicaciones internas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el primer paso en el proceso de comunicación mediante VoIP?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reconstrucción del audio.', esCorrecta: false },
            { id: 'b', texto: 'Transmisión por la red.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Captura de la voz del usuario.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Decodificación del audio.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué protocolo se utiliza normalmente para el envío de páginas <em>web</em> de forma segura?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'HTTP', esCorrecta: false },
            { id: 'b', texto: 'HTTPS', esCorrecta: true },
            { id: 'c', texto: 'FTP', esCorrecta: false },
            { id: 'd', texto: 'DHCP', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué objetivo tiene el cifrado de la información en los servicios de comunicación?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la velocidad de la red.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el tamaño de los archivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la autenticación de usuarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Proteger los datos durante su transmisión.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué significa la autenticación multifactor en seguridad informática?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verificación de identidad mediante más de un método.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Uso de un solo usuario para todos los sistemas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminación de controles de acceso.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Acceso sin contraseña.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el objetivo del monitoreo y registro de actividades en los sistemas de red?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar usuarios de la red.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Detectar accesos sospechosos o actividades anómalas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la velocidad de conexión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de servidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Por qué es importante mantener actualizados los sistemas y servidores?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para aumentar el consumo de recursos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para eliminar los protocolos de red.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para evitar el acceso a Internet.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para reducir vulnerabilidades de seguridad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los servicios de red, su funcionamiento y su importancia dentro de la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
