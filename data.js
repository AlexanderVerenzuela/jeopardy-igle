const gameData = {
  biblica: {
    round1: [
      {
        category: "Antiguo Testamento",
        questions: [
          { points: 100, question: "¿Qué personaje bíblico construyó el arca por mandato de Dios para salvarse del gran diluvio?", answer: "Noé", hint: "Génesis 6:13-22" },
          { points: 200, question: "¿En qué monte recibió Moisés las tablas de piedra de los Diez Mandamientos?", answer: "Monte Sinaí", hint: "Éxodo 19:18-20" },
          { points: 300, question: "¿Quién fue vendido por sus hermanos como esclavo y terminó siendo gobernador de Egipto?", answer: "José", hint: "Génesis 37:3-28" },
          { points: 400, question: "¿En qué ciudad los muros cayeron milagrosamente tras dar siete vueltas el séptimo día marchando con el Arca?", answer: "Jericó", hint: "Josué 6:1-20" },
          { points: 500, question: "¿Cómo se llamaban los tres jóvenes hebreos amigos de Daniel que fueron arrojados al horno de fuego ardiente?", answer: "Sadrac, Mesac y Abed-nego (o Ananías, Misael y Azarías)", hint: "Daniel 3:12-30" }
        ]
      },
      {
        category: "Nuevo Testamento",
        questions: [
          { points: 100, question: "¿En qué humilde ciudad nació Jesucristo según las profecías?", answer: "Belén", hint: "Miqueas 5:2 / Mateo 2:1" },
          { points: 200, question: "¿Quién bautizó a Jesús en el río Jordán dando testimonio de la voz del cielo?", answer: "Juan el Bautista", hint: "Mateo 3:13-17" },
          { points: 300, question: "¿Cuántos apóstoles o discípulos escogió Jesús para formar su grupo principal?", answer: "12 apóstoles", hint: "Mateo 10:1-4" },
          { points: 400, question: "¿Qué primer mártir cristiano fue apedreado hasta la muerte mientras Saulo de Tarso presenciaba y aprobaba su ejecución?", answer: "Esteban", hint: "Hechos 7:54-60" },
          { points: 500, question: "¿En qué ciudad fue encarcelado Pablo junto a Silas, donde un gran terremoto abrió las puertas de la prisión a medianoche?", answer: "Filipos", hint: "Hechos 16:25-34" }
        ]
      },
      {
        category: "Personajes Bíblicos",
        questions: [
          { points: 100, question: "¿Quién fue el primer hombre creado por Dios a su imagen y semejanza?", answer: "Adán", hint: "Génesis 2:7" },
          { points: 200, question: "¿Qué mujer se convirtió en estatua de sal por desobedecer y mirar atrás hacia Sodoma?", answer: "La esposa de Lot", hint: "Génesis 19:26" },
          { points: 300, question: "¿Quién fue tragado por un gran pez tras intentar huir de la presencia de Dios hacia Tarsis?", answer: "Jonás", hint: "Jonás 1:17" },
          { points: 400, question: "¿Quién fue el sumo sacerdote que crió y educó al joven profeta Samuel en el tabernáculo de Silo?", answer: "Elí", hint: "1 Samuel 3:1-18" },
          { points: 500, question: "¿Qué hombre patriarca vivió 969 años, convirtiéndose en el ser humano más longevo registrado en la Biblia?", answer: "Matusalén", hint: "Génesis 5:27" }
        ]
      },
      {
        category: "Milagros de Jesús",
        questions: [
          { points: 100, question: "¿Cuál fue el primer milagro público de Jesús realizado durante una celebración de bodas?", answer: "Convertir el agua en vino en Caná de Galilea", hint: "Juan 2:1-11" },
          { points: 200, question: "¿A qué amigo resucitó Jesús en Betania cuando llevaba cuatro días en la tumba?", answer: "Lázaro", hint: "Juan 11:38-44" },
          { points: 300, question: "¿Con cuántos panes y peces alimentó Jesús milagrosamente a una multitud de 5,000 hombres?", answer: "5 panes y 2 peces", hint: "Mateo 14:17-21" },
          { points: 400, question: "¿A qué hombre poseído por una legión de demonios sanó Jesús en la región gadarena enviando los demonios a un hato de cerdos?", answer: "El endemoniado gadareno (o de Gerasa)", hint: "Marcos 5:1-20" },
          { points: 500, question: "¿Qué siervo del Sumo Sacerdote sufrió el corte de su oreja derecha por Pedro en Getsemaní y fue sanado por Jesús?", answer: "Malco", hint: "Juan 18:10 / Lucas 22:50-51" }
        ]
      },
      {
        category: "Libros y Profetas",
        questions: [
          { points: 100, question: "¿Cuál es el primer libro de la Biblia y del Pentateuco?", answer: "Génesis", hint: "Génesis 1:1" },
          { points: 200, question: "¿Qué gran profeta fue llevado al cielo en un carro de fuego y un torbellino?", answer: "Elías", hint: "2 Reyes 2:11" },
          { points: 300, question: "¿Qué libro del Antiguo Testamento reúne 150 cánticos, oraciones y alabanzas a Dios?", answer: "Salmos", hint: "Salmos 150:1" },
          { points: 400, question: "¿Qué profeta fue mandado por Dios a casarse con una mujer de prostitución llamada Gomer para simbolizar la infidelidad de Israel?", answer: "Oseas", hint: "Oseas 1:2-3" },
          { points: 500, question: "¿Qué profeta menor profetizó con siglos de anticipación que el Mesías nacería exactamente en Belén Efrata?", answer: "Miqueas", hint: "Miqueas 5:2" }
        ]
      }
    ],
    round2: [
      {
        category: "Parábolas",
        questions: [
          { points: 200, question: "En la Parábola del Hijo Pródigo, ¿cómo reaccionó el padre al ver regresar a su hijo arrepentido?", answer: "Corrió a abrazarlo, lo besó y preparó un gran banquete", hint: "Lucas 15:11-32" },
          { points: 400, question: "¿Quién ayudó y curó al hombre herido en el camino a Jericó cuando el sacerdote y el levita pasaron de largo?", answer: "El Buen Samaritano", hint: "Lucas 10:25-37" },
          { points: 600, question: "¿Con qué pequeña semilla comparó Jesús el Reino de Dios, que al crecer se vuelve un árbol grande?", answer: "La semilla de mostaza", hint: "Mateo 13:31-32" },
          { points: 800, question: "En la Parábola de las Diez Vírgenes que esperaban al esposo, ¿cuántas eran prudentes y cuántas insensatas?", answer: "5 prudentes y 5 insensatas", hint: "Mateo 25:1-13" },
          { points: 1000, question: "¿Cómo se llamaba el mendigo cubierto de llagas que anhelaba saciarse de las migajas de la mesa del hombre rico?", answer: "Lázaro", hint: "Lucas 16:19-31" }
        ]
      },
      {
        category: "Geografía y Reyes",
        questions: [
          { points: 200, question: "¿Quién fue el primer rey de Israel, elegido y ungido por el profeta Samuel?", answer: "Saúl", hint: "1 Samuel 10:1" },
          { points: 400, question: "¿En qué río tuvo que sumergirse siete veces el general sirio Naamán para sanar de la lepra?", answer: "El río Jordán", hint: "2 Reyes 5:10-14" },
          { points: 600, question: "¿Qué histórica ciudad conquistó el rey David a los jebuseos para establecerla como capital de Israel?", answer: "Jerusalén (Sión)", hint: "2 Samuel 5:6-9" },
          { points: 800, question: "¿Qué rey de Judá fue sanado de una enfermedad mortal y Dios le añadió 15 años más de vida haciendo retroceder la sombra del reloj de sol?", answer: "Ezequías", hint: "2 Reyes 20:1-11" },
          { points: 1000, question: "¿Qué rey impío de Babilonia celebró un banquete profano y vio escribir una mano misteriosa en la pared 'MENE, MENE, TEKEL, PARSIN'?", answer: "Belsasar", hint: "Daniel 5:1-30" }
        ]
      },
      {
        category: "Cartas Apostólicas",
        questions: [
          { points: 200, question: "¿Quién fue el apóstol autor de la mayoría de las epístolas o cartas del Nuevo Testamento?", answer: "El apóstol Pablo", hint: "1 Corintios 1:1" },
          { points: 400, question: "¿En qué carta escribió Pablo el famoso capítulo del amor que dice: 'El amor es paciente, es bondadoso...'?", answer: "1 Corintios (Capítulo 13)", hint: "1 Corintios 13:1-13" },
          { points: 600, question: "¿A qué joven pastor envió Pablo dos cartas exhortándolo: 'Ninguno tenga en poco tu juventud'?", answer: "Timoteo", hint: "1 Timoteo 4:12" },
          { points: 800, question: "¿En qué epístola Pablo suplica al amo Filemón que reciba y perdone a su esclavo fugitivo convertido al cristianismo llamado Onésimo?", answer: "Epístola a Filemón", hint: "Filemón 1:10-17" },
          { points: 1000, question: "¿A quién está dirigida explícitamente la Segunda Epístola del Apóstol Juan según su versículo de apertura?", answer: "'A la señora elegida y a sus hijos'", hint: "2 Juan 1:1" }
        ]
      },
      {
        category: "Citas y Pasajes",
        questions: [
          { points: 200, question: "Completa la célebre cita de Juan 3:16: 'Porque de tal manera amó Dios al mundo, que ha dado a su...'", answer: "...Hijo unigénito, para que todo aquel que en él cree no se pierda, mas tenga vida eterna", hint: "Juan 3:16" },
          { points: 400, question: "¿Cómo comienzan los célebres versos del Salmo 23 escrito por David?", answer: "'Jehová es mi pastor; nada me faltará'", hint: "Salmos 23:1" },
          { points: 600, question: "¿Qué orden dio Jesús a sus apóstoles en la Gran Comisión de Mateo 28:19?", answer: "'Id, y haced discípulos a todas las naciones...'", hint: "Mateo 28:19-20" },
          { points: 800, question: "¿Qué célebre pasaje de Proverbios enseña: 'Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia'?", answer: "Proverbios 3:5", hint: "Proverbios 3:5-6" },
          { points: 1000, question: "¿Qué capítulo completo de Romanos comienza declarando: 'Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús...'?", answer: "Romanos 8", hint: "Romanos 8:1-2" }
        ]
      },
      {
        category: "Doctrina y Fe",
        questions: [
          { points: 200, question: "¿Qué día semanal apartado para reposar y adorar guardaba el pueblo de Israel en el Antiguo Testamento?", answer: "El Sábado (Sabbat)", hint: "Éxodo 20:8-11" },
          { points: 400, question: "¿En qué festividad descendió el Espíritu Santo como lenguas de fuego sobre los creyentes en el aposento alto?", answer: "Pentecostés", hint: "Hechos 2:1-4" },
          { points: 600, question: "En la Santa Cena o Cena del Señor, ¿qué representa el pan que Jesús partió y dio a sus discípulos?", answer: "El cuerpo de Cristo entregado por nosotros", hint: "1 Corintios 11:23-26" },
          { points: 800, question: "¿Qué profeta del Antiguo Testamento escribió la promesa divina: 'Y os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros'?", answer: "Ezequiel", hint: "Ezequiel 36:26" },
          { points: 500, question: "¿Qué nombre hebreo dado a Dios en Génesis 16 por Agar significa 'El Dios que me ve'?", answer: "El Roi", hint: "Génesis 16:13" }
        ]
      }
    ],
    finalOptions: [
      {
        category: "Apocalipsis y Escatología",
        question: "¿Qué tribu de Israel es omitida intencionalmente en la lista de los 144,000 sellados en Apocalipsis capítulo 7?",
        answer: "La tribu de Dan",
        hint: "Apocalipsis 7:4-8"
      },
      {
        category: "Profetas Mayores",
        question: "¿En qué libro profético se registra la visión del valle de los huesos secos que cobraron vida por el aliento del Espíritu de Dios?",
        answer: "Ezequiel (Capítulo 37)",
        hint: "Ezequiel 37:1-14"
      }
    ]
  },
  general: {
    round1: [
      {
        category: "Historia",
        questions: [
          { points: 100, question: "¿Quién descubrió América en 1492 al mando de la Santa María, la Pinta y la Niña?", answer: "Cristóbal Colón", hint: "Navegante genovés" },
          { points: 200, question: "¿En qué año comenzó la Segunda Guerra Mundial tras la invasión a Polonia?", answer: "1939", hint: "1 de septiembre de 1939" },
          { points: 300, question: "¿Qué emperador romano legalizó el cristianismo mediante el Edicto de Milán en el 313 d.C.?", answer: "Constantino I (El Grande)", hint: "Gobernador del Imperio Romano" },
          { points: 400, question: "¿Quién fue el último zar del Imperio Ruso antes de la Revolución de 1917?", answer: "Nicolás II", hint: "Dinastía Romanov" },
          { points: 500, question: "¿En qué batalla decisiva de 1815 fue derrotado definitivamente Napoleón Bonaparte por la Séptima Coalición?", answer: "Batalla de Waterloo", hint: "Ocurrió en la actual Bélgica" }
        ]
      },
      {
        category: "Perú",
        questions: [
          { points: 100, question: "¿Cuál es la capital constitucional y sede de gobierno de la República del Perú?", answer: "Lima", hint: "Ciudad de los Reyes" },
          { points: 200, question: "¿Qué ciudadela incaica es considerada una de las 7 maravillas del mundo moderno?", answer: "Machu Picchu", hint: "Ubicada en Cusco" },
          { points: 300, question: "¿Quién es el autor de la famosa novela 'La ciudad y los perros' y Premio Nobel peruano?", answer: "Mario Vargas Llosa", hint: "Premio Nobel de Literatura 2010" },
          { points: 400, question: "¿Qué cultura preincaica trazó enormes geoglifos de animales y figuras geométricas en el desierto?", answer: "Cultura Nazca", hint: "Costa sur del Perú" },
          { points: 500, question: "¿En qué batalla de 1824 se selló definitivamente la independencia hispanoamericana con la capitulación del virrey La Serna?", answer: "Batalla de Ayacucho", hint: "Liderada por Antonio José de Sucre" }
        ]
      },
      {
        category: "Ciencia",
        questions: [
          { points: 100, question: "¿Cuál es el planeta más grande y masivo de nuestro Sistema Solar?", answer: "Júpiter", hint: "Gigante gaseoso" },
          { points: 200, question: "¿Cuál es el símbolo químico del elemento Oro en la tabla periódica?", answer: "Au", hint: "Del latín 'aurum'" },
          { points: 300, question: "¿Qué partícula subatómica posee carga eléctrica negativa?", answer: "El electrón", hint: "Orbita el núcleo" },
          { points: 400, question: "¿Cómo se llama el proceso por el cual las plantas pierden agua en forma de vapor por sus estomas?", answer: "Transpiración", hint: "Evaporación vegetal" },
          { points: 500, question: "¿Qué constante física universal, denotada con la letra c, equivale aproximadamente a 300,000 km/s en el vacío?", answer: "La velocidad de la luz", hint: "Ecuación E=mc²" }
        ]
      },
      {
        category: "Cultura Pop",
        questions: [
          { points: 100, question: "¿De qué color es la píldora que toma Neo para despertar en la realidad de 'Matrix'?", answer: "Roja", hint: "Ofrecida por Morfeo" },
          { points: 200, question: "¿Cómo se llama el principal villano y mago tenebroso en la saga de Harry Potter?", answer: "Lord Voldemort", hint: "Tom Riddle" },
          { points: 300, question: "¿Qué videojuego clásico de encajar bloques que caen fue creado en la Unión Soviética?", answer: "Tetris", hint: "Creado en 1984" },
          { points: 400, question: "¿Cómo se llama la icónica cafetería donde se reunían los personajes de la serie 'Friends'?", answer: "Central Perk", hint: "Nueva York" },
          { points: 500, question: "¿En qué película del universo Marvel el villano Thanos chasquea los dedos borrando a la mitad del universo?", answer: "Avengers: Infinity War", hint: "Estrenada en 2018" }
        ]
      },
      {
        category: "Farándula",
        questions: [
          { points: 100, question: "¿Con qué futbolista español estuvo casada la cantante Shakira durante más de una década?", answer: "Gerard Piqué", hint: "Exdefensa del FC Barcelona" },
          { points: 200, question: "¿Qué célebre familia estadounidense protagoniza el conocido reality de televisión Keeping Up With...?", answer: "Las Kardashian", hint: "Kris, Kim, Khloé y Kourtney" },
          { points: 300, question: "¿Qué actor abofeteó al comediante Chris Rock en vivo durante la ceremonia de los Óscars 2022?", answer: "Will Smith", hint: "Ganador del Oscar esa noche" },
          { points: 400, question: "¿Quién fue la actriz de Aquaman que enfrentó a Johnny Depp en un mediático juicio en Virginia?", answer: "Amber Heard", hint: "Juicio de 2022" },
          { points: 500, question: "¿Qué legendaria banda británica de pop/rock realizó su histórico último concierto en vivo en la azotea de Apple Corps en 1969?", answer: "The Beatles", hint: "Lennon, McCartney, Harrison y Ringo" }
        ]
      }
    ],
    round2: [
      {
        category: "Deportes",
        questions: [
          { points: 200, question: "¿En qué deporte olímpico de raqueta se golpea un volante o gallito en lugar de una pelota?", answer: "Bádminton", hint: "Red alta" },
          { points: 400, question: "¿Cuánto dura un partido reglamentario de la NBA dividido en 4 cuartos?", answer: "48 minutos", hint: "4 cuartos de 12 min" },
          { points: 600, question: "¿Qué velocista jamaiquino ostenta los récords mundiales de 100 y 200 metros planos?", answer: "Usain Bolt", hint: "8 oros olímpicos" },
          { points: 800, question: "¿En qué capital europea se organizaron los primeros Juegos Olímpicos de la era moderna en 1896?", answer: "Atenas", hint: "Grecia" },
          { points: 1000, question: "¿Qué tenista profesional ostenta el récord de más títulos individuales de Grand Slam masculinos en la historia?", answer: "Novak Djokovic", hint: "Tenista serbio" }
        ]
      },
      {
        category: "Tecnología",
        questions: [
          { points: 200, question: "¿Quién es el cofundador de Microsoft y famoso filántropo creador de Windows?", answer: "Bill Gates", hint: "Junto a Paul Allen" },
          { points: 400, question: "¿Qué significan las siglas 'WWW' en la dirección de un sitio de internet?", answer: "World Wide Web", hint: "Red mundial" },
          { points: 600, question: "¿Qué legendaria empresa creó originalmente el lenguaje de programación Java antes de ser adquirida por Oracle?", answer: "Sun Microsystems", hint: "Fundada en 1982" },
          { points: 800, question: "¿Cómo se llamaba la primera computadora electrónica de propósito general construida en EE.UU. en 1945?", answer: "ENIAC", hint: "Pensilvania" },
          { points: 1000, question: "¿Qué célebre científico y filósofo formuló las tres leyes fundamentales de la robótica en la literatura de ciencia ficción?", answer: "Isaac Asimov", hint: "Autor de 'Yo, Robot'" }
        ]
      },
      {
        category: "Música",
        questions: [
          { points: 200, question: "¿Quién es reconocido mundialmente con el título honorífico de 'El Rey del Pop'?", answer: "Michael Jackson", hint: "Thriller" },
          { points: 400, question: "¿Qué artista pop batió récords globales con su gira 'The Eras Tour' entre 2023 y 2024?", answer: "Taylor Swift", hint: "Swifties" },
          { points: 600, question: "¿De qué mítica banda de rock británica fue líder y vocalista el carismático Freddie Mercury?", answer: "Queen", hint: "Bohemian Rhapsody" },
          { points: 800, question: "¿Qué artista puertorriqueño pionero del reguetón es apodado 'El Big Boss'?", answer: "Daddy Yankee", hint: "Gasolina" },
          { points: 1000, question: "¿Qué famoso compositor austríaco del periodo clásico compuso su célebre Réquiem en Re menor en su lecho de muerte?", answer: "Wolfgang Amadeus Mozart", hint: "Falleció en 1791" }
        ]
      },
      {
        category: "Gastronomía",
        questions: [
          { points: 200, question: "¿De qué país europeo y específicamente de la ciudad de Nápoles es originaria la pizza?", answer: "Italia", hint: "Campania" },
          { points: 400, question: "¿Cuál es la fruta o ingrediente principal para preparar una salsa de guacamole tradicional?", answer: "El aguacate (o palta)", hint: "Textura cremosa" },
          { points: 600, question: "¿Qué país sudamericano es el mayor productor y exportador mundial de granos de café?", answer: "Brasil", hint: "América del Sur" },
          { points: 800, question: "¿Qué costosa especia gastronómica obtenida de los estigmas de una flor es la más cara del mundo por peso?", answer: "El azafrán", hint: "Paella" },
          { points: 1000, question: "¿De qué región de Francia proviene la verdadera denominación de origen protegida del vino espumoso Champán?", answer: "Champaña (Champagne)", hint: "Noreste de Francia" }
        ]
      },
      {
        category: "Venezuela",
        questions: [
          { points: 200, question: "¿Qué famoso archipiélago y parque nacional de Venezuela posee playas de arena blanca en el mar Caribe?", answer: "Los Roques", hint: "Caribe venezolano" },
          { points: 400, question: "¿Quién compuso la música del himno nacional venezolano 'Gloria al Bravo Pueblo'?", answer: "Juan José Landaeta", hint: "Letra de Vicente Salias" },
          { points: 600, question: "¿Cuál es el pico más elevado de Venezuela, ubicado en la Cordillera de los Andes merideños?", answer: "Pico Bolívar", hint: "Estado Mérida" },
          { points: 800, question: "¿En qué estado venezolano sobre el Lago de Maracaibo ocurre el deslumbrante Relámpago del Catatumbo?", answer: "Estado Zulia", hint: "Río Catatumbo" },
          { points: 1000, question: "¿Qué célebre escritor y político venezolano fue autor de la famosa novela 'Doña Bárbara' y presidente en 1948?", answer: "Rómulo Gallegos", hint: "Ilustre novelista venezolano" }
        ]
      }
    ],
    finalOptions: [
      {
        category: "Historia Universal",
        question: "¿Qué tratado firmado en 1494 dividió las tierras descubiertas fuera de Europa entre España y Portugal con el aval papal?",
        answer: "Tratado de Tordesillas",
        hint: "Tordesillas, Valladolid"
      },
      {
        category: "Geografía y Exploración",
        question: "¿Qué navegante portugués al servicio de la corona fue el primero en bordear el Cabo de Buena Esperanza en 1488?",
        answer: "Bartolomé Díaz (Bartolomeu Dias)",
        hint: "Extremo sur de África"
      }
    ]
  }
};
