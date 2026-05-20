<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Servicios de comunicación en red
    p.mb-4(data-aos="fade-down") Los servicios de comunicación en red permiten el intercambio de información entre usuarios, aplicaciones y dispositivos dentro de una infraestructura tecnológica. Estos servicios facilitan la transmisión de mensajes, datos, voz y otros tipos de contenido digital, contribuyendo al funcionamiento eficiente de las organizaciones y a la coordinación de actividades entre diferentes áreas o ubicaciones geográficas.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img01.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") En los entornos empresariales y educativos, la comunicación digital se ha convertido en un elemento esencial para el desarrollo de procesos administrativos, operativos y académicos. A través de diversos protocolos y aplicaciones, los usuarios pueden enviar correos electrónicos, realizar llamadas mediante Internet, compartir información y colaborar en tiempo real desde distintos dispositivos conectados a la red.
        p.mb-0(data-aos="fade-down") Para que estos servicios funcionen correctamente, es necesario contar con servidores especializados que gestionen el envío, recepción y almacenamiento de la información, así como con protocolos de comunicación que regulen la forma en que los datos se transmiten entre los equipos. Estos elementos garantizan que la comunicación sea rápida, organizada y segura.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Entre los principales servicios de comunicación en red se encuentran los sistemas de correo electrónico, las plataformas de voz sobre IP, los protocolos de mensajería y los mecanismos de seguridad que protegen la integridad de la información transmitida. Cada uno de estos servicios cumple una función específica dentro de la infraestructura tecnológica, permitiendo a las organizaciones mantener una comunicación constante y eficiente.
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-2.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img02.svg', alt='Imagen decorativa')
      .col-lg-8.col-12
        .cajon.cajon.C05.px-4.py-3.mb-0
          p.mb-0 En instituciones educativas como el SENA, por ejemplo, los servicios de comunicación en red facilitan el intercambio de información entre instructores, aprendices y personal administrativo, permitiendo el envío de notificaciones, el acceso a plataformas virtuales y la realización de reuniones o clases en línea, lo que fortalece los procesos de formación y gestión institucional.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Gestión de servicios de correo electrónico
    p.mb-4(data-aos="fade-down") Los servicios de correo electrónico constituyen uno de los mecanismos de comunicación más utilizados en las redes informáticas. Permiten el intercambio de mensajes, documentos y archivos entre usuarios ubicados en diferentes lugares, utilizando servidores especializados que gestionan el envío, recepción, almacenamiento y organización de la información.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img04.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-secundario.p-4.py-3.mb-2
          p.mb-0(data-aos="fade-down") En los entornos empresariales y educativos, la gestión de servicios de correo electrónico implica la administración de cuentas de usuario, buzones de correo, políticas de seguridad, almacenamiento de mensajes y control del tráfico de información. Estos servicios suelen operar a través de servidores de correo dedicados o mediante plataformas en la nube que ofrecen alta disponibilidad y confiabilidad.
        p.mb-2(data-aos="fade-down") El funcionamiento del correo electrónico se basa en la utilización de diferentes protocolos que permiten el envío y la recepción de mensajes. Entre los más utilizados se encuentran <b>SMTP (Simple Mail Transfer Protocol)</b>, encargado del envío de correos entre servidores; <b>POP3 (Post Office Protocol)</b>, utilizado para descargar los mensajes desde el servidor hacia el dispositivo del usuario; e <b>IMAP (Internet Message Access Protocol)</b>, que permite acceder a los correos directamente desde el servidor sin necesidad de descargarlos completamente.
        .row.justify-content-center.mb-0
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img03.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            .cajon.cajon.C04.px-4.py-3.mb-0
              p.mb-0 La correcta administración de estos servicios también incluye tareas como la creación y eliminación de cuentas, configuración de buzones, establecimiento de límites de almacenamiento, filtrado de correos no deseados (<em>spam</em>), implementación de sistemas de seguridad y respaldo de la información.
    p.mb-4(data-aos="fade-down") Para comprender cómo opera un servicio de correo electrónico dentro de una red, se puede identificar el siguiente proceso general de comunicación:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row.py-2(titulo="Redacción del mensaje")
            .col-12.mb-0.mb-md-0
              p El usuario crea el correo electrónico desde un cliente de correo o una plataforma <em>web</em>, incluyendo destinatario, asunto y contenido del mensaje.
          .row.py-2(titulo="Envío del mensaje al servidor de correo")
            .col-12.mb-0.mb-md-0
              p El cliente de correo envía el mensaje al servidor utilizando el protocolo SMTP, encargado de gestionar la transmisión inicial del correo.
          .row.py-2(titulo="Transferencia entre servidores de correo")
            .col-12.mb-0.mb-md-0
              p El servidor del remitente identifica el servidor del destinatario mediante registros del sistema DNS y transfiere el mensaje hacia dicho servidor.
          .row.py-2(titulo="Almacenamiento del mensaje en el servidor del destinatario")
            .col-12.mb-0.mb-md-0
              p Una vez recibido, el servidor almacena el mensaje en el buzón correspondiente al usuario destinatario.
          .row.py-2(titulo="Acceso y lectura del mensaje")
            .col-12.mb-0.mb-md-0
              p El destinatario accede a su correo mediante protocolos como POP3 o IMAP, permitiendo visualizar el mensaje desde su equipo o dispositivo móvil.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img05.png', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") En las organizaciones, una adecuada gestión del correo electrónico permite mejorar la comunicación interna y externa, garantizar la seguridad de la información y asegurar la disponibilidad de uno de los servicios más importantes dentro de la infraestructura tecnológica.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Voz sobre IP (VoIP)
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img06.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") La Voz sobre IP (VoIP) es una tecnología que permite realizar llamadas de voz utilizando redes de datos basadas en el protocolo IP, como Internet o redes corporativas. A diferencia de la telefonía tradicional, que utiliza redes telefónicas conmutadas, VoIP convierte la voz en paquetes de datos digitales que se transmiten a través de la red
        p.mb-3(data-aos="fade-down") Este servicio permite que la comunicación de voz se integre con la infraestructura informática existente, lo que facilita la reducción de costos, la flexibilidad en la comunicación y la integración con otros sistemas digitales.
        p.mb-0(data-aos="fade-down") Gracias a estas características, VoIP es ampliamente utilizada en empresas, instituciones educativas y organizaciones que requieren sistemas de comunicación eficientes y escalables.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img07.svg', alt='Imagen decorativa')
      .col-lg-10.col-12
        .cajon.cajon.C04.px-4.py-2.mb-0
          p.mb-0 Entre las principales ventajas de VoIP se encuentran la posibilidad de realizar llamadas a través de Internet, integrar comunicaciones de voz con aplicaciones empresariales, utilizar dispositivos móviles o computadoras para comunicarse y administrar de manera centralizada los servicios telefónicos.
    p.mb-4(data-aos="fade-down") El funcionamiento de VoIP se basa en la conversión de la señal de voz en datos digitales que pueden transmitirse por la red. De manera general, el proceso de comunicación puede describirse de la siguiente forma:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C07.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img08.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Captura  de la voz
            p.mb-0(data-aos="fade-down") La voz del usuario es capturada por un dispositivo como un teléfono IP, un computador o una aplicación de comunicación.
          .col-xl.col-lg-6.tarjeta.tarjeta--C08.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img09.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Conversión de la voz en datos digitales
            p.mb-0(data-aos="fade-down") El sistema convierte la señal de voz en paquetes de datos utilizando códecs que comprimen y codifican el audio.
          .col-xl.col-lg-6.tarjeta.tarjeta--C09.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img10.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Transmisión a través de la red IP
            p.mb-0(data-aos="fade-down") Los paquetes de datos viajan por la red hasta llegar al dispositivo del destinatario.
          .col-xl.col-lg-6.tarjeta.tarjeta--C10.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img11.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Reconstrucción del audio
            p.mb-0(data-aos="fade-down") El sistema receptor decodifica los paquetes y reconstruye la señal de audio para que el usuario pueda escuchar la voz.
    p.mb-4(data-aos="fade-down") En los entornos organizacionales, la implementación de VoIP permite integrar servicios de telefonía, videollamadas, mensajería y conferencias en una misma plataforma de comunicación, optimizando la gestión de las comunicaciones y facilitando la colaboración entre los miembros de una institución.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img12.svg', alt='Imagen decorativa')
      .col-lg-10.col-12
        .cajon.cajon.C04.px-4.py-3.mb-0
          p.mb-0 Muchas empresas ofrecen soluciones basadas en Voz sobre IP (VoIP). Estas plataformas permiten realizar llamadas a través de Internet, administrar centrales telefónicas virtuales y gestionar comunicaciones empresariales.
    p.mb-4(data-aos="fade-down") Algunas de las empresas más conocidas que ofrecen este tipo de servicio son:
    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img13.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Cisco
            h5.t2.mb-2 Cisco
            p.mb-0 Ofrece soluciones empresariales de comunicaciones unificadas y telefonía IP ampliamente utilizadas en organizaciones grandes.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img14.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Microsoft
            h5.t2.mb-2 Microsoft
            p.mb-0 A través de Microsoft Teams Phone permite realizar llamadas VoIP integradas con su plataforma de colaboración.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img15.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 RingCentral
            h5.t2.mb-2 RingCentral
            p.mb-0 Proporciona plataformas de telefonía en la nube, videollamadas, mensajería y colaboración empresarial.
    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img16.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Vonage
            h5.t2.mb-2 Vonage
            p.mb-0 Es uno de los proveedores pioneros en servicios de telefonía VoIP tanto para hogares como para empresas.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img17.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Zoom
            h5.t2.mb-2 Zoom
            p.mb-0 Además de videoconferencias, ofrece servicios de telefonía empresarial mediante Zoom Phone, basado en tecnología VoIP.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img18.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 8x8
            h5.t2.mb-2 8x8
            p.mb-0 Ofrece soluciones de comunicaciones unificadas en la nube que incluyen telefonía VoIP, videollamadas y centros de contacto.
    p.mb-0(data-aos="fade-down") Tanto en Colombia como en el resto de Latinoamérica existen proveedores que implementan soluciones de VoIP empresariales, desde operadores de telecomunicaciones hasta empresas de tecnología que ofrecen PBX virtuales y plataformas de comunicaciones unificadas.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Protocolos de comunicación utilizados en servicios de mensajería
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img19.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Los servicios de mensajería en red permiten el intercambio de información entre usuarios y sistemas a través de diferentes plataformas digitales. Para que estos procesos de comunicación se realicen de manera eficiente y estandarizada, se utilizan diversos protocolos de comunicación, los cuales establecen las reglas para el envío, recepción y gestión de mensajes dentro de una red.
    p(data-aos="fade-down") Estos protocolos garantizan que la información pueda transmitirse de forma organizada, segura y compatible entre diferentes dispositivos, aplicaciones y servidores. Gracias a su implementación, es posible enviar correos electrónicos, mensajes instantáneos, notificaciones y otros tipos de comunicación digital utilizados en entornos empresariales, educativos y personales.
    p.mb-0(data-aos="fade-down") Entre los protocolos más utilizados en los servicios de mensajería se encuentran:
    .row.mb-0
      .col-12
        .px-5.py-4
          .row.align-items-center.BG01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema4/img20.png", alt="Imagen decorativa")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.px-3.py-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img21.svg", alt="Imagen decorativa").img100.m-auto
                  h4 SMTP (Simple Mail Transfer Protocol)
                  p Se utiliza principalmente para el envío de correos electrónicos desde el cliente hacia el servidor de correo o entre servidores de correo.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img22.svg", alt="Imagen decorativa").img100.m-auto
                  h4 POP3 (Post Office Protocol versión 3)
                  p Permite que los usuarios descarguen los correos electrónicos desde el servidor hacia su dispositivo local para su posterior lectura.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img23.svg", alt="Imagen decorativa").img100.m-auto
                  h4 IMAP (Internet Message Access Protocol)
                  p Permite acceder y gestionar los correos electrónicos directamente en el servidor, lo que facilita la sincronización entre varios dispositivos.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img24.svg", alt="Imagen decorativa").img100.m-auto
                  h4 XMPP (Extensible Messaging and Presence Protocol)
                  p Es un protocolo utilizado en servicios de mensajería instantánea que permite el intercambio de mensajes en tiempo real entre usuarios.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img25.svg", alt="Imagen decorativa").img100.m-auto
                  h4 SIP (Session Initiation Protocol)
                  p Se utiliza para establecer, modificar y finalizar sesiones de comunicación, especialmente en aplicaciones de voz sobre IP y mensajería multimedia.
    p.mb-0(data-aos="fade-down") La correcta configuración y gestión de estos protocolos permite garantizar la disponibilidad, seguridad y eficiencia de los servicios de mensajería dentro de una red. En entornos organizacionales, los administradores de sistemas deben supervisar su funcionamiento, establecer políticas de seguridad y asegurar la interoperabilidad entre las diferentes plataformas de comunicación utilizadas por la institución.
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Seguridad en los servicios de comunicación en red
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img26.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p.mb-3(data-aos="fade-down") La seguridad en los servicios de comunicación en red es un aspecto fundamental para garantizar la protección de la información que circula entre usuarios, sistemas y aplicaciones. En entornos organizacionales, los servicios como correo electrónico, mensajería, voz sobre IP y servidores <em>web</em> manejan grandes volúmenes de datos, por lo que es necesario implementar mecanismos que eviten accesos no autorizados, pérdida de información o ataques informáticos.
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Para proteger estos servicios, las organizaciones deben aplicar diversas medidas de seguridad que permitan salvaguardar la confidencialidad, integridad y disponibilidad de la información. Estas prácticas forman parte de la gestión de la seguridad informática dentro de la infraestructura de red.
    p.mb-4(data-aos="fade-down") Entre las principales medidas de seguridad utilizadas en los servicios de comunicación se encuentran:
    .cajon.cajon.C06.p-5.mb-4
      SlyderB(:datos="datosSlyder")
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En las organizaciones modernas, la implementación de estas medidas permite fortalecer la seguridad de los sistemas de comunicación y proteger la información que circula en la red. De esta manera, se garantiza la continuidad de los servicios, la protección de los datos institucionales y la confianza de los usuarios que utilizan las plataformas tecnológicas.
    p.mb-4(data-aos="fade-down") Para complementar la comprensión sobre la seguridad en los servicios de comunicación en red, es importante reconocer que existen empresas especializadas en el desarrollo de soluciones tecnológicas destinadas a proteger la información, prevenir accesos no autorizados y garantizar la integridad de las comunicaciones en los sistemas informáticos. A continuación, se presentan algunos ejemplos de organizaciones que ofrecen servicios y herramientas orientadas a la seguridad de redes.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Ejemplos de empresas que ofrecen soluciones de seguridad en redes
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Empresa
                th(data-aos="fade-down")(style= "width: 35%") Tipo de servicio de seguridad en red
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo de solución
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Cisco Systems
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Seguridad de red empresarial.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") <em>Firewalls</em>, VPN seguras y monitoreo del tráfico de red.
              tr
                td(data-aos="fade-down") Fortinet
                td(data-aos="fade-down") Protección de redes y control de acceso.
                td(data-aos="fade-down") <em>Firewalls</em> FortiGate y sistemas de prevención de intrusiones.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Palo Alto Networks
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Seguridad avanzada de redes.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") <em>Firewalls</em> de nueva generación y análisis de amenazas.
              tr
                td(data-aos="fade-down") Check Point <em>software</em> Technologies
                td(data-aos="fade-down") Seguridad perimetral y gestión de amenazas.
                td(data-aos="fade-down") Plataformas de protección de red y control de acceso.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Cloudflare
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Seguridad para servicios en Internet.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Protección contra ataques DDoS y seguridad de aplicaciones <em>web</em>.
    p.mb-0(data-aos="fade-down") En conjunto, las soluciones tecnológicas desarrolladas por empresas especializadas permiten fortalecer la protección de las comunicaciones digitales dentro de las organizaciones. La integración de herramientas de seguridad, junto con buenas prácticas de administración de redes, contribuye a prevenir amenazas, garantizar la integridad de la información y asegurar que los servicios de comunicación funcionen de manera confiable en los entornos tecnológicos actuales.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Cifrado de la información',
        texto:
          'Permite proteger los datos durante su transmisión a través de la red, evitando que puedan ser interceptados o leídos por terceros no autorizados.',
        imagen: require('@/assets/curso/tema4/img27.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Autenticación de usuarios',
        texto:
          'Consiste en verificar la identidad de los usuarios que acceden a los servicios mediante contraseñas seguras, autenticación multifactor o certificados digitales.',
        imagen: require('@/assets/curso/tema4/img28.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Uso de protocolos seguros',
        texto:
          'Muchos servicios utilizan versiones seguras de los protocolos de comunicación, como HTTPS para servidores <em>web</em> o SMTPS para correo electrónico, con el fin de proteger la transmisión de datos.',
        imagen: require('@/assets/curso/tema4/img29.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Control de accesos',
        texto:
          'Se establecen permisos y roles que determinan qué usuarios pueden acceder a determinados recursos o servicios dentro de la red.',
        imagen: require('@/assets/curso/tema4/img30.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Monitoreo y registro de actividades',
        texto:
          'Los sistemas de registro permiten identificar accesos sospechosos, intentos de intrusión o actividades anómalas dentro de los servicios de comunicación.',
        imagen: require('@/assets/curso/tema4/img31.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Actualización y mantenimiento de sistemas',
        texto:
          'Mantener actualizados los servidores, aplicaciones y protocolos reduce vulnerabilidades que pueden ser explotadas por atacantes.',
        imagen: require('@/assets/curso/tema4/img32.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
