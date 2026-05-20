export default {
  global: {
    Name: 'Servicios de red y administración de servidores',
    Description:
      'Este componente aborda los principales servicios de red utilizados en la administración de servidores y en la gestión de infraestructuras tecnológicas. Se estudia el funcionamiento y la aplicación de servicios como DHCP, DNS, RDP, FTP, servidores <em>web</em>, correo electrónico y voz sobre IP, destacando su importancia para garantizar conectividad, comunicación y acceso eficiente a los recursos de red.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de los servicios de red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Importancia de los servicios de red en la infraestructura tecnológica',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de servicios de red en entornos empresariales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Servicios de configuración y resolución de red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'DHCP (Dynamic Host Configuration Protocol)',
            hash: 't_2_1',
          },
          { numero: '2.2', titulo: 'DNS (Domain Name System)', hash: 't_2_2' },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Servicios de acceso y transferencia de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'RDP (Remote Desktop Protocol)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'FTP (File Transfer Protocol)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Gestión y administración de servidores <em>web</em>',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Servicios de comunicación en red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Gestión de servicios de correo electrónico',
            hash: 't_4_1',
          },
          { numero: '4.2', titulo: 'Voz sobre IP (VoIP)', hash: 't_4_2' },
          {
            numero: '4.3',
            titulo:
              'Protocolos de comunicación utilizados en servicios de mensajería',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Seguridad en los servicios de comunicación en red',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio <em>web</em>',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Autenticación',
      significado:
        'proceso mediante el cual un sistema verifica la identidad de un usuario o dispositivo antes de permitir el acceso a un recurso o servicio dentro de una red.',
    },
    {
      termino: 'Cifrado',
      significado:
        'proceso mediante el cual la información se transforma en un formato codificado para evitar que sea interpretada por personas no autorizadas durante su transmisión o almacenamiento.',
    },
    {
      termino: 'DHCP (Dynamic Host Configuration Protocol)',
      significado:
        'protocolo de red que permite asignar automáticamente direcciones IP y otros parámetros de configuración a los dispositivos que se conectan a una red.',
    },
    {
      termino: 'DNS (Domain Name System)',
      significado:
        'sistema que traduce los nombres de dominio de Internet en direcciones IP, permitiendo que los usuarios accedan a sitios <em>web</em> y servicios utilizando nombres fáciles de recordar.',
    },
    {
      termino: '<em>Firewall</em>',
      significado:
        'sistema de seguridad que controla y filtra el tráfico de red entrante y saliente con base en reglas definidas para proteger los sistemas contra accesos no autorizados.',
    },
    {
      termino: 'FTP (File Transfer Protocol)',
      significado:
        'Protocolo utilizado para transferir archivos entre un cliente y un servidor a través de una red, comúnmente empleado para cargar o descargar archivos en servidores.',
    },
    {
      termino: 'Infraestructura de red',
      significado:
        'conjunto de dispositivos, servidores, cables, <em>software</em> y servicios que permiten la comunicación y el intercambio de información dentro de una red.',
    },
    {
      termino: 'Protocolo de red',
      significado:
        'conjunto de reglas y estándares que permiten la comunicación entre dispositivos dentro de una red informática.',
    },
    {
      termino: 'RDP (Remote Desktop Protocol)',
      significado:
        'protocolo que permite a un usuario conectarse de forma remota a otro equipo o servidor y controlar su escritorio como si estuviera trabajando directamente en él.',
    },
    {
      termino: 'Servidor',
      significado:
        'equipo o sistema informático que proporciona servicios, recursos o datos a otros dispositivos llamados clientes dentro de una red.',
    },
    {
      termino: 'Servidor <em>web</em>',
      significado:
        'sistema que almacena, procesa y entrega páginas <em>web</em> a los usuarios a través de internet utilizando protocolos como HTTP o HTTPS.',
    },
    {
      termino: 'Servicios de red',
      significado:
        'conjunto de funciones y aplicaciones que permiten a los dispositivos comunicarse, compartir recursos y acceder a información dentro de una red.',
    },
    {
      termino: 'VoIP (Voz sobre IP)',
      significado:
        'tecnología que permite realizar llamadas de voz utilizando redes de datos basadas en el protocolo IP en lugar de las redes telefónicas tradicionales.',
    },
    {
      termino: 'VPN (Virtual Private Network)',
      significado:
        'tecnología que permite establecer una conexión segura y cifrada entre dispositivos a través de una red pública como Internet.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cisco Networking Academy. (2020). <em>Introduction to networks (Version 7.0)</em>. Cisco Press.',
      link: '',
    },
    {
      referencia:
        'Comer, D. E. (2018). <em>Computer networks and internets</em> (6th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Forouzan, B. A. (2017). <em>Data communications and networking</em> (5th ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Kurose, J. F., & Ross, K. W. (2021). <em>Computer networking A top-down approach</em> (8th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Microsoft. (s. f.). <em>Servicios de Escritorio remoto</em>.',
      link:
        'https://learn.microsoft.com/windows-server/remote/remote-desktop-services/',
    },
    {
      referencia:
        'Postigo Palacios, A. (2020). <em>Seguridad informática</em>. Editorial Paraninfo.',
      link: '',
    },
    {
      referencia:
        'Stallings, W. (2017). <em>Data and computer communications</em> (10th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Tanenbaum, A. S., & Wetherall, D. J. (2011). <em>Computer networks</em> (5th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Torrente Artero, O. (2015). <em>Administración de sistemas operativos</em>. Editorial Paraninfo.',
      link: '',
    },
    {
      referencia:
        'Vacca, J. R. (2013). <em>Computer and information security handbook</em> (2nd ed.). Morgan Kaufmann.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
