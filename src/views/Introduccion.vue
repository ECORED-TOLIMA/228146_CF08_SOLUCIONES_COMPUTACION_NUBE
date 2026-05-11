<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-down") Los servicios de red constituyen un elemento fundamental en el funcionamiento de las infraestructuras tecnológicas actuales, ya que permiten la comunicación, el intercambio de información y el acceso a recursos compartidos dentro de una red. A través de diferentes protocolos y servicios, los sistemas informáticos pueden gestionar direcciones IP, resolver nombres de dominio, transferir archivos, administrar servidores <em>web</em> y facilitar la comunicación entre usuarios y aplicaciones.
    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/intro/img01.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") En los entornos organizacionales y educativos, la correcta configuración y administración de estos servicios resulta clave para garantizar la disponibilidad, seguridad y eficiencia de los sistemas. Tecnologías como DHCP y DNS permiten la gestión automatizada de la red, mientras que servicios como FTP, RDP, servidores <em>web</em>, correo electrónico y voz sobre IP facilitan el acceso remoto, la transferencia de información y la comunicación digital.
        p.mb-0(data-aos="fade-down") En este contexto, comprender el funcionamiento de los servicios de red y su administración en servidores permite fortalecer la infraestructura tecnológica, optimizar el uso de los recursos y asegurar la continuidad de los servicios que soportan las actividades institucionales y empresariales.
    p.mb-4(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col.col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/quno1VBe8PQ?si=2Py_pR63Ay1FChPj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
