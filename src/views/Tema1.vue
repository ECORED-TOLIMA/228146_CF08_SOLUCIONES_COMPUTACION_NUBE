<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de los servicios de red
    p.mb-4(data-aos="fade-down") Los servicios de red corresponden a un conjunto de aplicaciones, protocolos y funciones que permiten a los dispositivos conectados dentro de una red comunicarse, compartir recursos y acceder a diferentes sistemas de información. Estos servicios operan generalmente sobre servidores especializados que administran y controlan procesos esenciales como la asignación de direcciones IP, la resolución de nombres de dominio, la transferencia de archivos, el acceso remoto y la gestión de comunicaciones digitales.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En una infraestructura tecnológica, los servicios de red actúan como intermediarios que facilitan la interacción entre usuarios, aplicaciones y dispositivos. Gracias a ellos, es posible automatizar procesos de configuración, garantizar la disponibilidad de recursos y mantener la estabilidad de las comunicaciones dentro de la red. Sin estos servicios, cada equipo tendría que configurarse manualmente y el intercambio de información sería mucho más complejo y propenso a errores.
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema1/img02.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Los servicios de red se apoyan en diferentes protocolos de comunicación que establecen reglas para el envío, recepción y procesamiento de datos. Estos protocolos permiten que dispositivos con distintos sistemas operativos y configuraciones puedan interoperar dentro de una misma red.
        .cajon.cajon.C02.color-secundario.p-4.mb-3
          p.mb-0(data-aos="fade-down") En entornos organizacionales, la correcta implementación de los servicios de red contribuye a mejorar la eficiencia operativa, optimizar la administración de la infraestructura tecnológica y garantizar el acceso seguro a los recursos digitales. Por esta razón, comprender sus fundamentos resulta esencial para la gestión adecuada de servidores y sistemas de comunicación en redes informáticas.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Importancia de los servicios de red en la infraestructura tecnológica
    p.mb-4(data-aos="fade-down") Los servicios de red desempeñan un papel fundamental en el funcionamiento de las infraestructuras tecnológicas modernas, ya que permiten gestionar de manera organizada la comunicación, el acceso a recursos y la administración de los sistemas conectados dentro de una red. Estos servicios facilitan la interacción entre dispositivos, aplicaciones y usuarios, asegurando que la información pueda ser transmitida, almacenada y procesada de forma eficiente.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema1/img03.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") En los entornos empresariales y educativos, los servicios de red permiten automatizar múltiples procesos relacionados con la configuración de los equipos, la identificación de dispositivos y la localización de recursos dentro de la red. Gracias a estos servicios, es posible asignar direcciones IP automáticamente, traducir nombres de dominio en direcciones numéricas, gestionar el acceso remoto a servidores y facilitar la transferencia de información entre sistemas.
        .row.mb-4
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img04.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 Además, los servicios de red contribuyen a mejorar la disponibilidad y el rendimiento de los sistemas informáticos, ya que centralizan la administración de recursos y permiten aplicar políticas de control, seguridad y monitoreo. Esto facilita la gestión de la infraestructura tecnológica, reduce errores de configuración y optimiza el uso de los recursos disponibles.
    p.mb-0(data-aos="fade-down") En este sentido, los servicios de red constituyen una base esencial para el funcionamiento de plataformas digitales, sistemas corporativos, aplicaciones <em>web</em> y servicios en línea, ya que garantizan la conectividad, la interoperabilidad y la continuidad de las operaciones dentro de una organización.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Tipos de servicios de red en entornos empresariales
    figure.mb-4
      img(src='@/assets/curso/tema1/img05.png', alt='Imagen decorativa')
    p(data-aos="fade-down") En los entornos empresariales, los servicios de red permiten administrar, organizar y facilitar la comunicación entre los diferentes dispositivos, sistemas y usuarios que forman parte de la infraestructura tecnológica. Estos servicios se implementan mediante servidores especializados que proporcionan funciones específicas, garantizando el acceso eficiente a recursos, la gestión de información y la continuidad de las operaciones dentro de la organización.
    p.mb-0(data-aos="fade-down") Entre los principales servicios de red utilizados en las empresas se encuentran:
    .row.mb-0
      .col-12
        .px-5.py-4
          .row.align-items-center.BG01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema1/img06.png", alt="Imagen decorativa")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.px-3.py-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img07.svg", alt="Imagen decorativa").img100.m-auto
                  p Servicios de configuración automática de red
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img08.svg", alt="Imagen decorativa").img100.m-auto
                  p Servicios de resolución de nombres
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img09.svg", alt="Imagen decorativa").img100.m-auto
                  p  Servicios de transferencia de archivos
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img10.svg", alt="Imagen decorativa").img100.m-auto
                  p Servicios de alojamiento <em>web</em> y aplicaciones
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img11.svg", alt="Imagen decorativa").img100.m-auto
                  p Servicios de acceso remoto
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img12.svg", alt="Imagen decorativa").img100.m-auto
                  p Servicios de comunicación y mensajería
    p.mb-4(data-aos="fade-down") Con el fin de comprender mejor su función dentro de la infraestructura tecnológica, en la siguiente tabla se presentan algunos de los servicios de red más utilizados en entornos empresariales.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Servicios de red
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Servicio de red
                th(data-aos="fade-down")(style= "width: 35%") Función principal
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo de uso
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") DHCP (Dynamic Host Configuration Protocol)
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Asigna automáticamente direcciones IP y parámetros de red a los dispositivos conectados.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Configuración automática de computadores dentro de una red corporativa.
              tr
                td(data-aos="fade-down") DNS (Domain Name System)
                td(data-aos="fade-down") Traduce nombres de dominio en direcciones IP para facilitar el acceso a recursos en la red.
                td(data-aos="fade-down") Acceso a páginas <em>web</em> o aplicaciones empresariales mediante nombres de dominio.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") FTP (File Transfer Protocol)
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Permite la transferencia de archivos entre equipos conectados a una red.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Envío de archivos entre servidores o carga de información a un servidor.
              tr
                td(data-aos="fade-down") HTTP / HTTPS
                td(data-aos="fade-down") Permite el acceso y la comunicación con sitios <em>web</em> y aplicaciones en línea.
                td(data-aos="fade-down") Acceso a portales empresariales o plataformas <em>web</em> corporativas.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Servicios de correo electrónico
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Facilitan el envío, recepción y almacenamiento de mensajes electrónicos entre usuarios.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Comunicación interna y externa dentro de la organización.
              tr
                td(data-aos="fade-down") VPN (Virtual Private Network)
                td(data-aos="fade-down") Permite el acceso remoto seguro a la red empresarial desde ubicaciones externas.
                td(data-aos="fade-down") Conexión segura de empleados que trabajan de forma remota.
    p.mb-4(data-aos="fade-down") En conjunto, estos servicios conforman una base fundamental para el funcionamiento de las redes empresariales, ya que permiten organizar la comunicación entre dispositivos, facilitar el acceso a los recursos tecnológicos y garantizar la disponibilidad de los servicios digitales que soportan las operaciones de la organización.

</template>

<script>
export default {
  name: 'Tema1',
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
