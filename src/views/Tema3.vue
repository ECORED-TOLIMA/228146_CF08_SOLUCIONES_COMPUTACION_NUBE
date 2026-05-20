<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Servicios de acceso y transferencia de información
    p.mb-4(data-aos="fade-down") Los servicios de acceso y transferencia de información permiten a los usuarios conectarse a sistemas remotos, administrar recursos informáticos y compartir archivos dentro de una red. Estos servicios facilitan la interacción entre dispositivos y servidores, lo que permite acceder a aplicaciones, administrar sistemas a distancia y transferir información de forma segura y organizada.
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema3/img01.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .row.mb-2
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img02.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 En los entornos empresariales y educativos, estos servicios son fundamentales para garantizar la disponibilidad de la información, la gestión remota de equipos y el intercambio eficiente de datos. Además, contribuyen a optimizar la administración de infraestructuras tecnológicas, ya que permiten realizar tareas de mantenimiento, soporte técnico y gestión de archivos sin necesidad de acceso físico a los equipos.
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") Entre los principales servicios utilizados para estas funciones se encuentran <b>RDP</b>, que permite el acceso remoto a sistemas; <b>FTP</b>, que facilita la transferencia de archivos entre dispositivos; y los <b>servidores <em>web</em></b>, que permiten alojar, gestionar y distribuir contenido accesible a través de Internet o redes internas.
    p.mb-0(data-aos="fade-down") Estos servicios forman parte esencial de la administración de redes y servidores, ya que garantizan el acceso controlado a los recursos informáticos, la disponibilidad de la información y la correcta operación de los sistemas dentro de una infraestructura tecnológica.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 RDP (Remote Desktop Protocol)
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img03.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El Remote Desktop Protocol (RDP) es un protocolo desarrollado por Microsoft que permite acceder y controlar de manera remota un equipo o servidor a través de una red o de Internet. Mediante este servicio, un usuario puede visualizar el escritorio de un sistema remoto y utilizar sus aplicaciones, archivos y configuraciones como si estuviera trabajando directamente en ese equipo.
    p(data-aos="fade-down") RDP es ampliamente utilizado en entornos empresariales y administrativos para la gestión de servidores, el soporte técnico y el acceso remoto a estaciones de trabajo. Gracias a este protocolo, los administradores de sistemas pueden realizar tareas de mantenimiento, actualización y supervisión sin necesidad de desplazarse físicamente al lugar donde se encuentra el equipo.
    p.mb-4(data-aos="fade-down") Entre las principales características del protocolo RDP se destacan:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img04.svg' alt='AvatarTop')
          h4.text-center Acceso remoto al escritorio
          p Permitiendo visualizar y controlar completamente el entorno del sistema remoto.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img05.svg' alt='AvatarTop')
          h4.text-center Administración de servidores
          p facilitando la configuración, instalación de <em>software</em> y mantenimiento de equipos ubicados en centros de datos o en otras ubicaciones.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img06.svg' alt='AvatarTop')
          h4.text-center Transmisión segura de datos
          p Mediante mecanismos de cifrado que protegen la información intercambiada entre el cliente y el servidor.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img07.svg' alt='AvatarTop')
          h4.text-center Redirección de recursos locales
          p Lo que permite utilizar dispositivos del equipo local como impresoras, portapapeles o unidades de almacenamiento dentro de la sesión remota.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img08.svg' alt='AvatarTop')
          h4.text-center Soporte para múltiples sesiones
          p Permitiendo que varios usuarios se conecten simultáneamente en entornos de servidores.
    .row.justify-content-center.mb-4
      .col-lg-8.col-12
        .cajon.cajon.C05.p-4.mb-2
          p.mb-0 En la práctica, RDP es una herramienta fundamental para la administración de infraestructuras tecnológicas, ya que permite gestionar equipos y servidores de forma remota, optimizando tiempos de trabajo y facilitando la atención de incidentes o solicitudes de soporte dentro de una organización.
      .col-lg-2.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img09.svg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Para comprender cómo se establece una sesión de escritorio remoto, se presenta el flujo básico de conexión entre el usuario y el equipo remoto:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img10.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Usuario
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img11.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Cliente RDP
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img12.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Red / Internet
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img13.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Servidor con RDP habilitado
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img14.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Escritorio remoto
    p(data-aos="fade-down") Este proceso describe cómo el usuario inicia la conexión desde un cliente de escritorio remoto instalado en su equipo. La solicitud viaja a través de la red o Internet hasta llegar al servidor donde el servicio RDP está habilitado. Una vez el usuario se autentica correctamente, el sistema le permite visualizar y controlar el escritorio del equipo remoto como si estuviera trabajando directamente en él.
    p.mb-4(data-aos="fade-down") Para permitir el acceso remoto de forma segura, normalmente se requiere realizar una configuración básica en el equipo o servidor que recibirá la conexión. Este proceso puede incluir los siguientes aspectos:
    .row.BG02.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Habilitar el acceso remoto en el sistema operativo")
            .col-12.mb-4.mb-md-0
              p.mb-0 En sistemas como Windows Server o Windows Professional, el administrador debe activar la opción de "Escritorio remoto" en la configuración del sistema.
          .row(numero="2" titulo="Configurar usuarios autorizados")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se deben definir los usuarios que tendrán permiso para conectarse de forma remota, generalmente agregándolos al grupo denominado "Usuarios de escritorio remoto" del sistema.
          .row(numero="3" titulo="Configurar el puerto de comunicación")
            .col-12.mb-4.mb-md-0
              p.mb-0 RDP utiliza por defecto el puerto 3389, por lo que es necesario verificar que esté habilitado en el <em>firewall</em> del sistema.
          .row(numero="4" titulo="Ajustar reglas de <em>firewall</em> y red")
            .col-12.mb-4.mb-md-0
              p.mb-0 En redes empresariales, el <em>firewall</em> puede configurarse para permitir conexiones solo desde determinadas direcciones IP o redes internas.
          .row(numero="5" titulo="Implementar medidas de seguridad adicionales")
            .col-12.mb-4.mb-md-0
              p.mb-0 Entre las prácticas recomendadas se incluyen: autenticación a nivel de red (NLA), uso de VPN antes de la conexión, contraseñas robustas y monitoreo de accesos.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img15.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo práctico:
    .row.justify-content-center.align-items-stretch.mb-0.g-0
      .col-lg-5.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .col-lg-2.d-none.d-lg-block.mb-4
            figure
              img(src='@/assets/curso/tema3/img17.svg', alt='Imagen decorativa')
          .col-12
            p.mb-0 En una empresa, el administrador habilita RDP en un servidor ubicado en el centro de datos. Luego configura los usuarios autorizados y permite el puerto correspondiente en el <em>firewall</em>. De esta manera, el equipo de soporte técnico puede conectarse de forma remota para instalar actualizaciones o resolver problemas sin necesidad de estar físicamente en el lugar.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema3/img16.png', alt='Imagen decorativa')
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 FTP (File Transfer Protocol)
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img18.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-down") El File Transfer Protocol (FTP) es un protocolo de red utilizado para transferir archivos entre equipos conectados a una red, generalmente entre un cliente y un servidor. Este servicio permite subir, descargar, modificar o administrar archivos almacenados en servidores remotos, lo que facilita el intercambio de información en entornos empresariales, educativos y tecnológicos.
        p.mb-0(data-aos="fade-down") FTP funciona bajo un modelo cliente-servidor, donde un usuario utiliza una aplicación cliente para conectarse a un servidor FTP mediante credenciales de acceso. Una vez establecida la conexión, el usuario puede navegar por los directorios del servidor y gestionar archivos de forma remota.
    p.mb-4(data-aos="fade-down") Entre las principales características del protocolo FTP se destacan:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img19.svg' alt='AvatarTop')
          h4.text-center Transferencia de archivos
          p Permite subir (<em>upload</em>) o descargar (<em>download</em>) archivos entre el cliente y el servidor.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img20.svg' alt='AvatarTop')
          h4.text-center Gestión de directorios
          p Posibilita crear, eliminar, renombrar o mover carpetas y archivos dentro del servidor.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img21.svg' alt='AvatarTop')
          h4.text-center Acceso autenticado o anónimo
          p Algunos servidores permiten el acceso mediante usuario y contraseña, mientras que otros ofrecen acceso público con permisos limitados.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img22.svg' alt='AvatarTop')
          h4.text-center Compatibilidad con múltiples sistemas
          p FTP puede utilizarse en distintos sistemas operativos como Windows, Linux o macOS.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img23.svg' alt='AvatarTop')
          h4.text-center Soporte para diferentes modos de transferencia
          p Permite transferencias en modo activo o pasivo, lo que facilita su funcionamiento en distintas configuraciones de red.
    p.mb-4(data-aos="fade-down") Para comprender el funcionamiento del servicio FTP, el proceso de conexión puede representarse de la siguiente manera:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img24.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Usuario
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img25.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Cliente RDP
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img26.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Red / Internet
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img27.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Servidor FTP
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img28.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Transferencia de archivos
    .row.justify-content-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img29.svg', alt='Imagen decorativa')
      .col-lg-9.col-12
        .cajon.cajon.C04.px-4.py-2.mb-2
          p.mb-0 En este proceso, el usuario inicia la conexión desde un cliente FTP instalado en su equipo. La solicitud viaja a través de la red hasta el servidor donde se encuentran almacenados los archivos. Una vez autenticado el usuario, el sistema permite realizar operaciones de transferencia o administración de archivos según los permisos asignados.
    p.mb-0(data-aos="fade-down") En entornos organizacionales, FTP es utilizado frecuentemente para publicar sitios <em>web</em>, compartir documentos entre servidores, realizar copias de seguridad o distribuir archivos de gran tamaño entre diferentes usuarios o sistemas dentro de una infraestructura tecnológica.      
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Gestión y administración de servidores <em>web</em>
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img30.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La gestión y administración de servidores <em>web</em> consiste en el conjunto de actividades técnicas orientadas a configurar, mantener y supervisar los sistemas que permiten publicar sitios y aplicaciones en Internet o en redes internas. Un servidor <em>web</em> es el <em>software</em> o equipo encargado de recibir solicitudes de los usuarios a través de un navegador y entregar las páginas o recursos solicitados.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-4(data-aos="fade-down") Cuando un usuario escribe una dirección <em>web</em> en su navegador, se envía una solicitud al servidor <em>web</em> correspondiente. Este servidor procesa la petición y responde enviando el contenido solicitado, como páginas HTML, imágenes, archivos multimedia o aplicaciones <em>web</em>.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img31.svg', alt='Imagen decorativa')
          .col-lg-9.col-12
            .cajon.cajon.C05.p-4.mb-0
              p.mb-0 Entre los servidores <em>web</em> más utilizados se encuentran Apache HTTP Server, Nginx y Microsoft Internet Information Services (IIS), los cuales permiten alojar diferentes tipos de aplicaciones y sitios <em>web</em> en entornos empresariales o institucionales.
        p.mb-0(data-aos="fade-down") La administración de servidores <em>web</em> incluye diversas tareas fundamentales:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img32.svg' alt='AvatarTop')
          h4.text-center Instalación y configuración del servidor <em>web</em>
          p Definiendo puertos de comunicación, rutas de almacenamiento y parámetros de funcionamiento.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img33.svg' alt='AvatarTop')
          h4.text-center Gestión de sitios <em>web</em> y aplicaciones
          p Permitiendo alojar uno o varios sitios dentro del mismo servidor.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img34.svg' alt='AvatarTop')
          h4.text-center Administración de seguridad
          p Mediante la configuración de certificados digitales, protocolos seguros como HTTPS y controles de acceso.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img35.svg' alt='AvatarTop')
          h4.text-center Monitoreo del rendimiento
          p Supervisando el uso de recursos, tiempos de respuesta y número de solicitudes recibidas.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img36.svg' alt='AvatarTop')
          h4.text-center Actualización y mantenimiento
          p Aplicando parches de seguridad y mejoras del <em>software</em> para garantizar estabilidad y protección frente a vulnerabilidades.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") El funcionamiento básico de un servidor <em>web</em> puede representarse de la siguiente manera:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img37.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Usuario
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img38.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Navegador <em>web</em>
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img39.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Red / Internet
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img40.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Servidor <em>web</em>
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img41.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Entrega del sitio o aplicación
    p.mb-4(data-aos="fade-down") En este proceso, el navegador del usuario envía una solicitud al servidor <em>web</em> donde se encuentra alojado el sitio. El servidor procesa la solicitud y devuelve la información solicitada, permitiendo que el usuario visualice el contenido en su dispositivo.
    .cajon.cajon.C02.color-secundario.p-4.mb-0
      p.mb-0(data-aos="fade-down") En instituciones educativas y organizaciones, la correcta administración de servidores <em>web</em> permite publicar portales institucionales, plataformas de aprendizaje virtual, sistemas de información y aplicaciones empresariales, garantizando que los usuarios puedan acceder a los servicios de forma rápida, segura y confiable.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
