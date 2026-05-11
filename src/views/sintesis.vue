<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo integra los principales conceptos relacionados con los servicios de red y la administración de servidores dentro de una infraestructura tecnológica. Se abordan los fundamentos y la importancia de estos servicios en entornos organizacionales, así como los mecanismos de configuración y resolución como DHCP y DNS. También se analizan los servicios de acceso y transferencia de información, incluyendo RDP, FTP y la gestión de servidores <em>web</em>. Finalmente, se presentan los servicios de comunicación en red, como el correo electrónico y la voz sobre IP, junto con los protocolos de mensajería y las medidas de seguridad necesarias para proteger las comunicaciones y garantizar la disponibilidad y confiabilidad de los servicios tecnológicos.
    .row.justify-content-center
      .col.col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta la organización de los principales servicios de red utilizados en infraestructuras tecnológicas. Se incluyen los fundamentos e importancia de los servicios de red, los servicios de configuración y resolución como DHCP y DNS, los servicios de acceso y transferencia de información como RDP, FTP y servidores <em>web</em>, así como los servicios de comunicación en red, entre ellos el correo electrónico, la voz sobre IP, los protocolos de mensajería y las medidas de seguridad para proteger las comunicaciones.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
