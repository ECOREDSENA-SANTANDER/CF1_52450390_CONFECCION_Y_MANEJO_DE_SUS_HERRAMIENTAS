export default {
  global: {
    componenteFormativo: 'Corte, herramientas y máquinas',
    descripcionCurso:
      'Las máquinas y herramientas son utilizadas en todo proceso de confección y por esto es importante conocerlas e identificarlas, al igual que los tipos de cortes, los cuales se hacen siempre que se quiere construir una prenda de vestir.',
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
        titulo: 'Corte y herramientas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Máquinas Básicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Máquina plana industrial',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Máquina familiar',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Fileteadora',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tipos de corte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Ubicación de moldes para corte industrial',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ubicación de moldes para corte manual',
            hash: 't_3_2',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF1_52450390_DU.pdf',
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
      tema: '3. Tipos de corte -Trazo sistematizado',
      referencia:
        'Herramientas digitales Moda. (15 de marzo de 2018). OPTITEX - MARKER Trazo de patrones. [archivo de video]. Youtube.',
      tipo: 'video',
      link: 'https://youtu.be/fscxWYsenLE',
    },
    {
      tema: '3. Tipos de corte- Corte con trazo manual',
      referencia:
        'bykkis DISTRIBUIDORA HYD KESCOEIVANNA. (24 de agosto de 2021). Cómo hacer un trazo con moldes para hacer un corte  como hago un trazo  bykkis. [archivo de video]. Youtube.',
      tipo: 'video',
      link: 'https://youtu.be/2EkELdwTkew',
    },
    {
      tema: '3. Tipos de corte- Corte industrial',
      referencia:
        'XParimal. (4 de noviembre de 2023). fabric cutting cutting machine operator. [archivo de video]. Youtube.',
      tipo: 'video',
      link: 'https://youtu.be/V3zxsruHRyI',
    },
  ],
  glosario: [
    {
      termino: 'Caja bobina',
      significado:
        'Es una herramienta usada en la parte inferior de la máquina plana y es la que recibe y hace que el carretel con hilo sean los que entrelacen la puntada.',
    },
    {
      termino: 'Corte',
      significado: 'Es la separación de la tela o cuero en piezas diferentes.',
    },
    {
      termino: 'Devanador',
      significado:
        'Parte de la máquina plana de una aguja que permite llenar el carretel de hilo para alimentar la puntada inferior de la costura.',
    },
    {
      termino: 'Destornillador',
      significado:
        'Es una herramienta que se utiliza para apretar y aflojar tornillos y otros elementos de máquinas que se necesitan para el cambio de agujas y para realizar ajustes ocasionales a las máquinas.',
    },
    {
      termino: 'Hilo',
      significado:
        'Es una hebra larga y delgada de un material textil, especialmente se usa para coser, los más comunes en la confección son el hilo de algodón, el poliéster y el nylon.',
    },
    {
      termino: '<em>Looper</em>',
      significado:
        'Son tomadores de lazada que, junto con las agujas, forman la puntada.',
    },
    {
      termino: 'Metro',
      significado:
        'Cinta que tiene marcada la longitud del metro y sus divisiones y sirve para medir distancias o longitudes, usada para dar medidas exactas en cualquiera de los procedimientos de la confección.',
    },
    {
      termino: 'Pulidora',
      significado:
        'Máquina - herramienta para quitar las hebras en procesos cuando ya está terminada.',
    },
    {
      termino: 'Trazo',
      significado:
        'Línea o raya que constituye la forma o el contorno de algo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alfahogar (2017). Características máquinas de coser industrial.',
      link: '',
    },
    {
      referencia:
        'Clayton, Marie (2009). Coser en casa: fundamentos, técnicas, corte y confección, sastrería avanzada, ropa de hogar y arreglos. Barcelona (España): Editorial Blume. ISBN 978-84-8076-842-9. R.',
      link: '',
    },
    {
      referencia: 'El baúl de las costureras. (2017). Maquinaria y accesorios.',
      link: '',
    },
    {
      referencia:
        'SENA. (2013). Modistería: la máquina de coser. Bogotá, Colombia: Centro de Gestión de Mercados, logística y TIC´s: Bogotá, Colombia [Versión en línea]. Recuperado de:',
      link:
        'http://repositorio.sena.edu.co/sitios/modisteria_conocimientos_basicos/hilos_maquina/maquina_coser.html#',
    },
    {
      referencia:
        'SENA. (2013). Modistería: hilos y tela. Bogotá, Colombia: Centro de Gestión de Mercados, logística y TIC´s: Bogotá, Colombia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Paola Morales Paez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
