export default {
  global: {
    componenteFormativo: 'Ventas y principios de negociación',
    descripcionCurso:
      'Material formativo que brinda el marco conceptual y teórico sobre las estrategias de negociación y ventas bajo el contexto de las organizaciones y la normativa vigente; todo mediado por ambientes digitales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
        titulo: 'Métodos de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Atención, Interés, Deseo y Acción (AIDA)',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Situación, Problema, Implicación, Necesidad (SPIN)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Necesidad, Característica, Beneficio, Ventaja (NCBV)',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Conociendo las organizaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '<em>Branding</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Lenguaje corporativo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Canales digitales de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Redes sociales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de <em>e-commerce</em>',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: '<em>Habeas data</em>',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'La negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Mejor Alternativa al Acuerdo Negociado (MAAN)',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Protección al consumidor y normatividad',
            hash: 't_4_2',
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_08_623605.zip',
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
      tema: '1.1.	Atención interés deseo y acción (AIDA).',
      referencia:
        'Tey, A. (2015). Ana Tey apareciendo en el Anuncio de Línea Directa TE BUSCAMOS Oficina',
      tipo: 'Video',
      link: 'https://youtu.be/Sf3qBBJ2V5g',
    },
  ],
  glosario: [
    {
      termino: 'Anuncios <em>bumper</em>',
      significado:
        'son anuncios de video que no se pueden omitir, con una duración máxima de 6 segundos, y deben verse antes de poder acceder al video. Es un formato de anuncio que puede aparecer antes, en o después del contenido del video.',
    },
    {
      termino: 'Cuarta Revolución Industrial',
      significado:
        'fenómeno actual que mezcla vanguardistas técnicas de producción con sistemas inteligentes que se integran con las organizaciones y las personas.',
    },
    {
      termino: 'Fuerza de ventas',
      significado:
        'se refiere a las personas, estrategias y productos de una empresa que se enfocan en asegurar la satisfacción total del cliente, generar demandas sobre los bienes de la empresa, mejorar sus ventas y apalancar los ingresos de la organización.',
    },
    {
      termino: '<em>Influencer</em>',
      significado:
        'persona que destaca en una red social u otro canal de comunicación y expresa opiniones sobre un tema concreto y que ejerce una gran influencia sobre muchas personas que la conocen.',
    },
    {
      termino: '<em>Marketplace</em>',
      significado:
        'sitio donde los productos son ofrecidos por los comerciantes para ser adquiridos por consumidores, es decir, un mercado en el mundo <em>online</em>. En él, varios comerciantes colocan sus productos a la venta en un solo canal.',
    },
    {
      termino: 'Medios sincrónicos',
      significado:
        'son aquellos medios que permiten la comunicación entre dos o más interlocutores de forma simultánea. A través de ella, los participantes intercambian información y contenidos de diversos formatos en tiempo real.',
    },
    {
      termino: '<em>Target</em>',
      significado:
        '(público objetivo) es el conjunto de personas para el que se orienta la venta de un producto o servicio.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Express. (2021). <em>Marketplaces:</em> Cómo ayudan a tu Empresa y ejemplos. ',
      link:
        'https://www.americanexpress.com/es-mx/negocios/trends-and-insights/articles/marketplaces-como-ayudan-a-tu-empresa-y-ejemplos/',
    },
    {
      referencia:
        'Asprilla, A. (2016). La conciliación como medio alternativo de solución de conflictos. Universidad Cooperativa de Colombia.',
      link: '',
    },
    {
      referencia:
        'Ballesteros, R. (2016). <em>Branding</em>. El arte de marcar corazones. ECOE Ediciones. ',
      link:
        'https://www.ecoeediciones.mx/wp-content/uploads/2016/08/Branding.pdf',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá. (2020). Cómo vender por WhatsApp Business. ',
      link: 'http://hdl.handle.net/11520/25775 ',
    },
    {
      referencia:
        'Canales, P. (2013). <em>Neuromarketing</em>, ¿el futuro ya está aquí? 3C Empresa, (16). ',
      link:
        'https://www.3ciencias.com/articulos/articulo/neuromarketing-el-futuro-ya-esta-aqui-2/ ',
    },
    {
      referencia:
        'Canlla, E. (2017). <em>Marketing</em> y ventas por internet. MACRO.',
      link: '',
    },
    {
      referencia:
        'CEEI Ciudad Real. (2005). Guía para la elaboración de un estudio de mercado. ',
      link:
        'https://www.camaracr.org/fileadmin/user_upload/documentos/guias_y_manuales/guia_elaboracion_estudios_de_mercado.pdf',
    },
    {
      referencia:
        'Hugo, F., Jiménez, C., Holovatyi, M. y Lara, P. (2020). El impacto de las redes sociales en la administración de empresas. Recimundo, 4(1), p. 173-182. ',
      link: 'http://recimundo.com/index.php/es/article/view/755 ',
    },
    {
      referencia:
        'IngenioVirtual. (2020). ¿Qué es <em>cross selling</em> o venta cruzada en <em>ecommerce</em>? ',
      link:
        'https://www.ingeniovirtual.com/que-es-cross-selling-o-venta-cruzada/ ',
    },
    {
      referencia:
        'Katyuska. (2016). Diferencias entre mercados B2C y mercados B2B. Wuombo. ',
      link: 'https://wuombo.com/diferencias-mercados-b2c-mercados-b2b/ ',
    },
    {
      referencia:
        'Lecinski, J. (2011). ZMOT Ganando el momento cero de la verdad. Google. ',
      link:
        'https://think.storage.googleapis.com/intl/es-419_ALL/docs/2011-winning-zmot-ebook_research-studies.pdf ',
    },
    {
      referencia:
        'Lionbridge. (2020). ¿Cómo puede definir y gestionar el lenguaje corporativo de su empresa? Lionbridge Technologies. ',
      link:
        'https://www.lionbridge.com/es/blog/content-creation/how-do-you-define-and-manage-your-corporate-language/ ',
    },
    {
      referencia:
        'López, R. (2017). Comunicación y atención al cliente en hostelería y turismo. IC Editorial. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=8742 ',
    },
    {
      referencia:
        'Meta. (2021). Three Insights On the Business Opportunity for the Metaverse. ',
      link:
        'https://www.facebook.com/business/news/metaverse-business-opportunity-insights',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social [Minsalud]. (2017). Lineamiento para la implementación de actividades de promoción de la salud visual, control de alteraciones visuales y discapacidad visual evitable (estrategia visión 2020). ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/lineamientos-salud-visual-2017.pdf ',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo [Mincomercio]. (2019). Protección del consumidor. ',
      link:
        'https://www.mincit.gov.co/minindustria/estrategia-transversal/regulacion/proteccion-del-consumidor ',
    },
    {
      referencia:
        'Okdiario. (2016). ¿En qué consiste la técnica MAAN de negociación?. ',
      link:
        'https://okdiario.com/economia/consiste-tecnica-maan-negociacion-415154 ',
    },
    {
      referencia:
        'Peláez, R. y Lara, C. (2016). Uso de las netiquetas y su correcta utilización en las redes sociales. Revista CCCSS. ',
      link: 'http://www.eumed.net/rev/cccss/2016/04/netiquetas.html ',
    },
    {
      referencia: 'Quiroa, M. (2020). Tipos de clientes. Economipedia.com. ',
      link: 'https://economipedia.com/definiciones/tipos-de-clientes.html ',
    },
    {
      referencia:
        'Real, I. (2014). Uso e impacto de las redes sociales en las estrategias de <em>marketing</em> de las PyME’s. Revista de Investigación Académica Sin Frontera, 7(24). ',
      link:
        'https://revistainvestigacionacademicasinfrontera.unison.mx/index.php/RDIASF/article/view/47/46 ',
    },
    {
      referencia:
        'Salomón, P. (2022). ¿Qué es el <em>marketing</em> B2B y cuál es la mejor estrategia? Inboundcycle. ',
      link:
        'https://www.inboundcycle.com/blog-de-inbound-marketing/marketing-b2b-que-es-exactamente ',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (2021). Manejo de información personal, "Habeas data". ',
      link: 'https://www.sic.gov.co/manejo-de-informacion-personal',
    },
    {
      referencia: 'W3C. (2022). Introduction to Web Accessibility. ',
      link: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/ ',
    },
    {
      referencia:
        'Web Accessibility In Mind [WebAIM]. (2017). Designing for Screen Reader Compatibility. ',
      link: 'https://webaim.org/techniques/screenreader/ ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Experto Temático',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Álix Cecilia Chinchilla Rueda',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital. Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Esocbar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Esocbar',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
