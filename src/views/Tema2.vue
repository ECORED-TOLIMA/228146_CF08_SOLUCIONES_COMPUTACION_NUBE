<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Servicios de configuración y resolución de red
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En las infraestructuras de red modernas, es fundamental contar con mecanismos que permitan configurar automáticamente los dispositivos y facilitar la localización de recursos dentro de la red. Los servicios de configuración y resolución de red cumplen precisamente esta función, ya que permiten gestionar direcciones IP, identificar equipos y garantizar que los usuarios puedan acceder a los servicios disponibles de manera eficiente.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema2/img02.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-3(data-aos="fade-down") Cuando un dispositivo se conecta a una red, necesita ciertos parámetros básicos para poder comunicarse con otros equipos. Entre estos parámetros se encuentran la dirección IP, la máscara de subred, la puerta de enlace y los servidores de nombres. La asignación y administración de esta información puede realizarse de forma manual o automática; sin embargo, en entornos empresariales se emplean servicios especializados que permiten automatizar estos procesos y reducir errores de configuración.
        .cajon.cajon.C02.p-4.mb-3
          p.mb-0(data-aos="fade-down") Dentro de este contexto, los servicios de configuración y resolución de red desempeñan un papel clave en la administración de las redes, ya que facilitan la identificación de dispositivos y el acceso a los recursos disponibles. Gracias a estos servicios, los usuarios no necesitan conocer direcciones numéricas complejas para acceder a servidores, aplicaciones o páginas <em>web</em>, ya que el sistema se encarga de traducir y gestionar esta información de manera transparente.
    p.mb-4(data-aos="fade-down") Entre los servicios más importantes en esta categoría se encuentran:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/tema2/img03.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            h5 DHCP (Dynamic Host Configuration Protocol)
            p.mb-0 Encargado de asignar automáticamente direcciones IP y otros parámetros de red a los dispositivos que se conectan a la red.
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/tema2/img04.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            h5 DNS (Domain Name System)
            p.mb-0 Responsable de traducir los nombres de dominio en direcciones IP, permitiendo que los usuarios puedan acceder fácilmente a los recursos de red.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C07.p-3.mb-4
          .row.justify-content-center.align-items-center
            .col.col-lg-9.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") Estos servicios trabajan de forma complementaria dentro de la infraestructura tecnológica, contribuyendo a una administración más eficiente de la red, una mejor organización de los recursos y una mayor facilidad de acceso a los servicios digitales que utilizan los usuarios dentro de una organización.
            .col.col-lg-2.col-8.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema2/img05.svg', alt='Imagen decorativa')
        p.mb-0(data-aos="fade-down") En los siguientes apartados se describen en detalle el funcionamiento, las características y la importancia de los servicios DHCP y DNS en la gestión de redes empresariales.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 DHCP (Dynamic Host Configuration Protocol)
    p.mb-4(data-aos="fade-down") El DHCP (Dynamic Host Configuration Protocol) es un protocolo de red que permite asignar automáticamente direcciones IP y otros parámetros de configuración a los dispositivos que se conectan a una red. Su principal objetivo es simplificar la administración de las direcciones IP y evitar configuraciones manuales en cada equipo, lo cual resulta especialmente útil en redes empresariales o en entornos donde los dispositivos se conectan y desconectan con frecuencia.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema2/img06.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") En una red sin DHCP, cada dispositivo debe configurarse manualmente con una dirección IP, la máscara de subred, la puerta de enlace predeterminada y los servidores DNS. Este proceso puede resultar complejo, propenso a errores y difícil de administrar cuando existen muchos equipos. Con DHCP, esta configuración se realiza de forma automática mediante un servidor que gestiona y distribuye los parámetros de red a los dispositivos clientes.
        p.mb-0(data-aos="fade-down") Cuando un equipo se conecta a la red, envía una solicitud para obtener una configuración IP válida. El servidor DHCP recibe esta solicitud y responde asignando una dirección IP disponible junto con otros parámetros necesarios para que el dispositivo pueda comunicarse con el resto de la red y acceder a recursos externos.
    p.mb-4(data-aos="fade-down") El proceso de asignación de direcciones IP mediante DHCP se realiza generalmente en cuatro etapas:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C07.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/img07.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Descubrimiento (DHCP Discover)
            p.mb-0(data-aos="fade-down") El dispositivo cliente que se conecta a la red envía un mensaje de difusión para localizar servidores DHCP disponibles.
          .col-xl.col-lg-6.tarjeta.tarjeta--C08.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/img08.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Oferta (DHCP Offer)
            p.mb-0(data-aos="fade-down") El servidor DHCP responde ofreciendo una dirección IP disponible y los parámetros de configuración de red.
          .col-xl.col-lg-6.tarjeta.tarjeta--C09.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/img09.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Solicitud (DHCP Request)
            p.mb-0(data-aos="fade-down") El cliente acepta la oferta y solicita formalmente la dirección IP propuesta por el servidor.
          .col-xl.col-lg-6.tarjeta.tarjeta--C10.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/img10.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Confirmación (DHCP Acknowledgment) 
            p.mb-0(data-aos="fade-down") El servidor confirma la asignación de la dirección IP y registra la concesión de esa dirección durante un período determinado.
    p(data-aos="fade-down") La dirección IP asignada por DHCP no siempre es permanente. Generalmente se entrega mediante un arrendamiento o concesión (<em>lease</em>), lo que significa que el dispositivo puede utilizar esa dirección durante un tiempo determinado. Cuando el período de concesión finaliza, el cliente debe renovarla para continuar utilizando la misma dirección.
    p.mb-4(data-aos="fade-down") Entre las principales ventajas del uso de DHCP en redes empresariales se encuentran:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.C02.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador
            li.mb-3
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Automatiza la configuración de los dispositivos en la red.
            li.mb-3
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Reduce errores asociados a la configuración manual de direcciones IP.
            li.mb-3
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Facilita la administración de redes con un gran número de dispositivos.
            li.mb-3
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Permite una gestión eficiente de las direcciones IP disponibles.
            li.mb-0
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Mejora la escalabilidad y organización de la infraestructura de red.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img11.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") En conjunto, DHCP constituye un servicio fundamental dentro de la administración de redes, ya que permite optimizar la asignación de recursos de red y garantizar que los dispositivos puedan integrarse y comunicarse correctamente dentro de la infraestructura tecnológica de una organización.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 DNS (Domain Name System)
    p.mb-4(data-aos="fade-down") El DNS (Domain Name System) es un servicio fundamental en las redes de computadoras que permite traducir los nombres de dominio comprensibles para las personas en direcciones IP utilizadas por los dispositivos para comunicarse en la red. Gracias a este sistema, los usuarios pueden acceder a sitios <em>web</em> y servicios utilizando nombres fáciles de recordar, en lugar de tener que memorizar direcciones numéricas.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-4 En una red informática, cada dispositivo conectado posee una dirección IP que lo identifica de manera única. Sin embargo, recordar estas direcciones puede resultar complejo para los usuarios. El DNS resuelve este problema actuando como un sistema de nombres jerárquico y distribuido que relaciona los nombres de dominio con sus respectivas direcciones IP.
          .row.mb-0
            .col-lg-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema2/img12.svg', alt='Imagen decorativa')
            .col-lg-9.col-12
              p.mb-0 Cuando un usuario escribe una dirección <em>web</em> en el navegador, como por ejemplo un nombre de dominio, el sistema realiza una consulta al servidor DNS para obtener la dirección IP correspondiente. Una vez obtenida esta información, el dispositivo puede establecer la comunicación con el servidor donde se encuentra el recurso solicitado.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img13.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") El proceso de resolución de nombres mediante DNS generalmente sigue las siguientes etapas:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row.py-3(titulo="Consulta del cliente")
            .col-12.mb-0.mb-md-0
              p El dispositivo del usuario envía una solicitud al servidor DNS para conocer la dirección IP asociada a un nombre de dominio.
          .row.py-3(titulo="Búsqueda en el servidor DNS")
            .col-12.mb-0.mb-md-0
              p El servidor DNS revisa si la información solicitada se encuentra almacenada en su memoria o en su base de datos.
          .row.py-3(titulo="Consulta a otros servidores DNS")
            .col-12.mb-0.mb-md-0
              p Si el servidor no dispone de la información, realiza consultas a otros servidores DNS dentro de la jerarquía del sistema hasta encontrar la dirección correspondiente.
          .row.py-3(titulo="Respuesta al cliente")
            .col-12.mb-0.mb-md-0
              p Una vez localizada la dirección IP del dominio solicitado, el servidor DNS envía la respuesta al dispositivo cliente para que pueda conectarse al recurso solicitado.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img14.jpg', alt='Imagen decorativa')
    p(data-aos="fade-down") El sistema DNS está organizado de forma jerárquica, lo que permite distribuir la información entre múltiples servidores alrededor del mundo. Esta estructura facilita la administración de los dominios y garantiza que el sistema pueda escalar para soportar el crecimiento continuo de Internet.
    p.mb-4(data-aos="fade-down") Entre las principales funciones del DNS se encuentran:
    .row.mb-0
      .col-12
        .px-5.py-4
          .row.align-items-center.BG01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema2/img15.png", alt="Imagen decorativa")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-4 col-xl-4")
                .tarjeta.tarjeta--slyder.px-3.py-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img16.svg", alt="Imagen decorativa").img100.m-auto
                  p Traducir nombres de dominio en direcciones IP.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img17.svg", alt="Imagen decorativa").img100.m-auto
                  p Facilitar el acceso a servicios en Internet mediante nombres fáciles de recordar.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img18.svg", alt="Imagen decorativa").img100.m-auto
                  p Permitir la localización de servidores y recursos dentro de una red.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img19.svg", alt="Imagen decorativa").img100.m-auto
                  p Optimizar las consultas mediante almacenamiento en caché.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img20.svg", alt="Imagen decorativa").img100.m-auto
                  p Apoyar el funcionamiento de diversos servicios de red y aplicaciones.
    p.mb-0(data-aos="fade-down") En el contexto de la infraestructura tecnológica, el DNS cumple un papel esencial, ya que permite la localización eficiente de servicios y recursos en la red, garantizando una comunicación fluida entre los diferentes sistemas y dispositivos conectados.
</template>

<script>
export default {
  name: 'Tema2',
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
