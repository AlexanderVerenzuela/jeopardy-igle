const gameData = {
  biblica: {
    round1: [
      {
        category: "Antiguo Testamento",
        questions: [
          { points: 100, question: "¿Qué personaje bíblico construyó el arca por mandato de Dios para salvarse del gran diluvio?", answer: "Noé", hint: "Génesis 6:13-22", options: ["Noé", "Moisés", "Abraham", "David"] },
          { points: 200, question: "¿En qué monte recibió Moisés las tablas de piedra de los Diez Mandamientos?", answer: "Monte Sinaí", hint: "Éxodo 19:18-20", options: ["Monte Sinaí", "Monte Carmelo", "Monte de los Olivos", "Monte Nebo"] },
          { points: 300, question: "¿Quién fue vendido por sus hermanos como esclavo y terminó siendo gobernador de Egipto?", answer: "José", hint: "Génesis 37:3-28", options: ["José", "Benjamín", "Judá", "Rubén"] },
          { points: 400, question: "¿En qué ciudad los muros cayeron milagrosamente tras dar siete vueltas el séptimo día marchando con el Arca?", answer: "Jericó", hint: "Josué 6:1-20", options: ["Jericó", "Jerusalén", "Samaria", "Babilonia"] },
          { points: 500, question: "¿Cómo se llamaban los tres jóvenes hebreos amigos de Daniel que fueron arrojados al horno de fuego ardiente?", answer: "Sadrac, Mesac y Abed-nego (o Ananías, Misael y Azarías)", hint: "Daniel 3:12-30", options: ["Sadrac, Mesac y Abed-nego", "Pedro, Jacobo y Juan", "Elías, Eliseo y Samuel", "Josué, Caleb y Gedeón"] }
        ]
      },
      {
        category: "Nuevo Testamento",
        questions: [
          { points: 100, question: "¿En qué humilde ciudad nació Jesucristo según las profecías?", answer: "Belén", hint: "Miqueas 5:2 / Mateo 2:1", options: ["Belén", "Nazaret", "Jerusalén", "Jericó"] },
          { points: 200, question: "¿Quién bautizó a Jesús en el río Jordán dando testimonio de la voz del cielo?", answer: "Juan el Bautista", hint: "Mateo 3:13-17", options: ["Juan el Bautista", "Pedro", "Felipe", "Nicodemo"] },
          { points: 300, question: "¿Cuántos apóstoles o discípulos escogió Jesús para formar su grupo principal?", answer: "12 apóstoles", hint: "Mateo 10:1-4", options: ["12 apóstoles", "7 apóstoles", "10 apóstoles", "70 discípulos"] },
          { points: 400, question: "¿Qué primer mártir cristiano fue apedreado hasta la muerte mientras Saulo de Tarso presenciaba y aprobaba su ejecución?", answer: "Esteban", hint: "Hechos 7:54-60", options: ["Esteban", "Felipe", "Jacobo", "Pablo"] },
          { points: 500, question: "¿En qué ciudad fue encarcelado Pablo junto a Silas, donde un gran terremoto abrió las puertas de la prisión a medianoche?", answer: "Filipos", hint: "Hechos 16:25-34", options: ["Filipos", "Antioquía", "Damasco", "Roma"] }
        ]
      },
      {
        category: "Personajes Bíblicos",
        questions: [
          { points: 100, question: "¿Quién fue el primer hombre creado por Dios a su imagen y semejanza?", answer: "Adán", hint: "Génesis 2:7", options: ["Adán", "Noé", "Abel", "Enoc"] },
          { points: 200, question: "¿Qué mujer se convirtió en estatua de sal por desobedecer y mirar atrás hacia Sodoma?", answer: "La esposa de Lot", hint: "Génesis 19:26", options: ["La esposa de Lot", "Sara", "Rebeca", "Raquel"] },
          { points: 300, question: "¿Quién fue tragado por un gran pez tras intentar huir de la presencia de Dios hacia Tarsis?", answer: "Jonás", hint: "Jonás 1:17", options: ["Jonás", "Oseas", "Amós", "Jeremías"] },
          { points: 400, question: "¿Quién fue el sumo sacerdote que crió y educó al joven profeta Samuel en el tabernáculo de Silo?", answer: "Elí", hint: "1 Samuel 3:1-18", options: ["Elí", "Samuel", "Melquisedec", "Aarón"] },
          { points: 500, question: "¿Qué hombre patriarca vivió 969 años, convirtiéndose en el ser humano más longevo registrado en la Biblia?", answer: "Matusalén", hint: "Génesis 5:27", options: ["Matusalén", "Adán", "Enoc", "Noé"] }
        ]
      },
      {
        category: "Milagros de Jesús",
        questions: [
          { points: 100, question: "¿Cuál fue el primer milagro público de Jesús realizado durante una celebración de bodas?", answer: "Convertir el agua en vino en Caná de Galilea", hint: "Juan 2:1-11", options: ["Convertir el agua en vino en Caná", "Caminar sobre las aguas", "Multiplicar los panes", "Sanar al ciego de nacimiento"] },
          { points: 200, question: "¿A qué amigo resucitó Jesús en Betania cuando llevaba cuatro días en la tumba?", answer: "Lázaro", hint: "Juan 11:38-44", options: ["Lázaro", "Esteban", "Timoteo", "Bartimeo"] },
          { points: 300, question: "¿Con cuántos panes y peces alimentó Jesús milagrosamente a una multitud de 5,000 hombres?", answer: "5 panes y 2 peces", hint: "Mateo 14:17-21", options: ["5 panes y 2 peces", "7 panes y 3 peces", "12 panes y 5 peces", "3 panes y 2 peces"] },
          { points: 400, question: "¿A qué hombre poseído por una legión de demonios sanó Jesús en la región gadarena enviando los demonios a un hato de cerdos?", answer: "El endemoniado gadareno (o de Gerasa)", hint: "Marcos 5:1-20", options: ["El endemoniado gadareno", "El ciego Bartimeo", "El leproso de Samaria", "Zaqueo el publicano"] },
          { points: 500, question: "¿Qué siervo del Sumo Sacerdote sufrió el corte de su oreja derecha por Pedro en Getsemaní y fue sanado por Jesús?", answer: "Malco", hint: "Juan 18:10 / Lucas 22:50-51", options: ["Malco", "Cornelio", "Caifás", "Anás"] }
        ]
      },
      {
        category: "Libros y Profetas",
        questions: [
          { points: 100, question: "¿Cuál es el primer libro de la Biblia y del Pentateuco?", answer: "Génesis", hint: "Génesis 1:1", options: ["Génesis", "Éxodo", "Levítico", "Deuteronomio"] },
          { points: 200, question: "¿Qué gran profeta fue llevado al cielo en un carro de fuego y un torbellino?", answer: "Elías", hint: "2 Reyes 2:11", options: ["Elías", "Eliseo", "Isaías", "Jeremías"] },
          { points: 300, question: "¿Qué libro del Antiguo Testamento reúne 150 cánticos, oraciones y alabanzas a Dios?", answer: "Salmos", hint: "Salmos 150:1", options: ["Salmos", "Proverbios", "Cantares", "Eclesiastés"] },
          { points: 400, question: "¿Qué profeta fue mandado por Dios a casarse con una mujer de prostitución llamada Gomer para simbolizar la infidelidad de Israel?", answer: "Oseas", hint: "Oseas 1:2-3", options: ["Oseas", "Amós", "Jonás", "Miqueas"] },
          { points: 500, question: "¿Qué profeta menor profetizó con siglos de anticipación que el Mesías nacería exactamente en Belén Efrata?", answer: "Miqueas", hint: "Miqueas 5:2", options: ["Miqueas", "Zacarías", "Malaquías", "Isaías"] }
        ]
      }
    ],
    round2: [
      {
        category: "Parábolas",
        questions: [
          { points: 200, question: "En la Parábola del Hijo Pródigo, ¿cómo reaccionó el padre al ver regresar a su hijo arrepentido?", answer: "Corrió a abrazarlo, lo besó y preparó un gran banquete", hint: "Lucas 15:11-32", options: ["Corrió a abrazarlo, lo besó y preparó un gran banquete", "Lo rechazó y le exigió pagar sus deudas", "Le ordenó trabajar como sirviente", "Lo envió a vivir a otra ciudad"] },
          { points: 400, question: "¿Quién ayudó y curó al hombre herido en el camino a Jericó cuando el sacerdote y el levita pasaron de largo?", answer: "El Buen Samaritano", hint: "Lucas 10:25-37", options: ["El Buen Samaritano", "Un sacerdote levita", "Un soldado romano", "Un fariseo"] },
          { points: 600, question: "¿Con qué pequeña semilla comparó Jesús el Reino de Dios, que al crecer se vuelve un árbol grande?", answer: "La semilla de mostaza", hint: "Mateo 13:31-32", options: ["La semilla de mostaza", "El grano de trigo", "La semilla de sésamo", "El fruto de la vid"] },
          { points: 800, question: "En la Parábola de las Diez Vírgenes que esperaban al esposo, ¿cuántas eran prudentes y cuántas insensatas?", answer: "5 prudentes y 5 insensatas", hint: "Mateo 25:1-13", options: ["5 prudentes y 5 insensatas", "7 prudentes y 3 insensatas", "10 prudentes y 0 insensatas", "2 prudentes y 8 insensatas"] },
          { points: 1000, question: "¿Cómo se llamaba el mendigo cubierto de llagas que anhelaba saciarse de las migajas de la mesa del hombre rico?", answer: "Lázaro", hint: "Lucas 16:19-31", options: ["Lázaro", "Simón", "Zaqueo", "Bartimeo"] }
        ]
      },
      {
        category: "Geografía y Reyes",
        questions: [
          { points: 200, question: "¿Quién fue el primer rey de Israel, elegido y ungido por el profeta Samuel?", answer: "Saúl", hint: "1 Samuel 10:1", options: ["Saúl", "David", "Salomón", "Roboam"] },
          { points: 400, question: "¿En qué río tuvo que sumergirse siete veces el general sirio Naamán para sanar de la lepra?", answer: "El río Jordán", hint: "2 Reyes 5:10-14", options: ["El río Jordán", "El río Nilo", "El río Éufrates", "El río Tigris"] },
          { points: 600, question: "¿Qué histórica ciudad conquistó el rey David a los jebuseos para establecerla como capital de Israel?", answer: "Jerusalén (Sión)", hint: "2 Samuel 5:6-9", options: ["Jerusalén (Sión)", "Jericó", "Hebrón", "Damasco"] },
          { points: 800, question: "¿Qué rey de Judá fue sanado de una enfermedad mortal y Dios le añadió 15 años más de vida haciendo retroceder la sombra del reloj de sol?", answer: "Ezequías", hint: "2 Reyes 20:1-11", options: ["Ezequías", "Josías", "Manasés", "Acaz"] },
          { points: 1000, question: "¿Qué rey impío de Babilonia celebró un banquete profano y vio escribir una mano misteriosa en la pared 'MENE, MENE, TEKEL, PARSIN'?", answer: "Belsasar", hint: "Daniel 5:1-30", options: ["Belsasar", "Nabucodonosor", "Ciro el Grande", "Darío el Medo"] }
        ]
      },
      {
        category: "Cartas Apostólicas",
        questions: [
          { points: 200, question: "¿Quién fue el apóstol autor de la mayoría de las epístolas o cartas del Nuevo Testamento?", answer: "El apóstol Pablo", hint: "1 Corintios 1:1", options: ["El apóstol Pablo", "El apóstol Pedro", "El apóstol Juan", "El apóstol Santiago"] },
          { points: 400, question: "¿En qué carta escribió Pablo el famoso capítulo del amor que dice: 'El amor es paciente, es bondadoso...'?", answer: "1 Corintios (Capítulo 13)", hint: "1 Corintios 13:1-13", options: ["1 Corintios (Capítulo 13)", "Romanos (Capítulo 8)", "Efesios (Capítulo 6)", "Filipenses (Capítulo 4)"] },
          { points: 600, question: "¿A qué joven pastor envió Pablo dos cartas exhortándolo: 'Ninguno tenga en poco tu juventud'?", answer: "Timoteo", hint: "1 Timoteo 4:12", options: ["Timoteo", "Tito", "Filemón", "Silas"] },
          { points: 800, question: "¿En qué epístola Pablo suplica al amo Filemón que reciba y perdone a su esclavo fugitivo convertido al cristianismo llamado Onésimo?", answer: "Epístola a Filemón", hint: "Filemón 1:10-17", options: ["Epístola a Filemón", "Epístola a los Gálatas", "Epístola a los Hebreos", "Epístola a Tito"] },
          { points: 1000, question: "¿A quién está dirigida explícitamente la Segunda Epístola del Apóstol Juan según su versículo de apertura?", answer: "'A la señora elegida y a sus hijos'", hint: "2 Juan 1:1", options: ["'A la señora elegida y a sus hijos'", "'A la iglesia de Éfeso'", "'A los doce discípulos'", "'A todos los santos de Roma'"] }
        ]
      },
      {
        category: "Citas y Pasajes",
        questions: [
          { points: 200, question: "Completa la célebre cita de Juan 3:16: 'Porque de tal manera amó Dios al mundo, que ha dado a su...'", answer: "...Hijo unigénito, para que todo aquel que en él cree no se pierda, mas tenga vida eterna", hint: "Juan 3:16", options: ["...Hijo unigénito, para que todo aquel que en él cree no se pierda, mas tenga vida eterna", "...Espíritu Santo para guiar a las naciones", "...ángel Gabriel para traer la salvación", "...mandamiento de amar a nuestro prójimo"] },
          { points: 400, question: "¿Cómo comienzan los célebres versos del Salmo 23 escrito por David?", answer: "'Jehová es mi pastor; nada me faltará'", hint: "Salmos 23:1", options: ["'Jehová es mi pastor; nada me faltará'", "'Dios es nuestro amparo y fortaleza'", "'Bendice, alma mía, a Jehová'", "'Alabaré a Jehová con todo mi corazón'"] },
          { points: 600, question: "¿Qué orden dio Jesús a sus apóstoles en la Gran Comisión de Mateo 28:19?", answer: "'Id, y haced discípulos a todas las naciones...'", hint: "Mateo 28:19-20", options: ["'Id, y haced discípulos a todas las naciones...'", "'Quien tenga oídos para oír, oiga...'", "'Permanezcan en Jerusalén hasta recibir poder...'", "'Amen a sus enemigos y oren por ellos...'"] },
          { points: 800, question: "¿Qué célebre pasaje de Proverbios enseña: 'Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia'?", answer: "Proverbios 3:5", hint: "Proverbios 3:5-6", options: ["Proverbios 3:5", "Salmos 119:105", "Isaías 40:31", "Jeremías 29:11"] },
          { points: 1000, question: "¿Qué capítulo completo de Romanos comienza declarando: 'Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús...'?", answer: "Romanos 8", hint: "Romanos 8:1-2", options: ["Romanos 8", "Romanos 3", "1 Corintios 15", "Hebreos 11"] }
        ]
      },
      {
        category: "Doctrina y Fe",
        questions: [
          { points: 200, question: "¿Qué día semanal apartado para reposar y adorar guardaba el pueblo de Israel en el Antiguo Testamento?", answer: "El Sábado (Sabbat)", hint: "Éxodo 20:8-11", options: ["El Sábado (Sabbat)", "El Domingo", "El Viernes", "El Lunes"] },
          { points: 400, question: "¿En qué festividad descendió el Espíritu Santo como lenguas de fuego sobre los creyentes en el aposento alto?", answer: "Pentecostés", hint: "Hechos 2:1-4", options: ["Pentecostés", "Pascua", "Fiesta de los Tabernáculos", "Día de la Expiación"] },
          { points: 600, question: "En la Santa Cena o Cena del Señor, ¿qué representa el pan que Jesús partió y dio a sus discípulos?", answer: "El cuerpo de Cristo entregado por nosotros", hint: "1 Corintios 11:23-26", options: ["El cuerpo de Cristo entregado por nosotros", "La sangre del nuevo pacto", "El maná del desierto", "El perdón de los pecados"] },
          { points: 800, question: "¿Qué profeta del Antiguo Testamento escribió la promesa divina: 'Y os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros'?", answer: "Ezequiel", hint: "Ezequiel 36:26", options: ["Ezequiel", "Jeremías", "Isaías", "Daniel"] },
          { points: 500, question: "¿Qué nombre hebreo dado a Dios en Génesis 16 por Agar significa 'El Dios que me ve'?", answer: "El Roi", hint: "Génesis 16:13", options: ["El Roi", "El Shaddai", "Jehová Jireh", "Adonai"] }
        ]
      }
    ],
    finalOptions: [
      {
        category: "Apocalipsis y Escatología",
        question: "¿Qué tribu de Israel es omitida intencionalmente en la lista de los 144,000 sellados en Apocalipsis capítulo 7?",
        answer: "La tribu de Dan",
        hint: "Apocalipsis 7:4-8",
        options: ["La tribu de Dan", "La tribu de Judá", "La tribu de Benjamín", "La tribu de Leví"]
      },
      {
        category: "Profetas Mayores",
        question: "¿En qué libro profético se registra la visión del valle de los huesos secos que cobraron vida por el aliento del Espíritu de Dios?",
        answer: "Ezequiel (Capítulo 37)",
        hint: "Ezequiel 37:1-14",
        options: ["Ezequiel (Capítulo 37)", "Isaías (Capítulo 40)", "Jeremías (Capítulo 29)", "Daniel (Capítulo 12)"]
      }
    ]
  },
  general: {
    round1: [
      {
        category: "Historia",
        questions: [
          { points: 100, question: "¿Quién descubrió América en 1492 al mando de la Santa María, la Pinta y la Niña?", answer: "Cristóbal Colón", hint: "Navegante genovés", options: ["Cristóbal Colón", "Américo Vespucio", "Hernán Cortés", "Francisco Pizarro"] },
          { points: 200, question: "¿En qué año comenzó la Segunda Guerra Mundial tras la invasión a Polonia?", answer: "1939", hint: "1 de septiembre de 1939", options: ["1939", "1914", "1945", "1929"] },
          { points: 300, question: "¿Qué emperador romano legalizó el cristianismo mediante el Edicto de Milán en el 313 d.C.?", answer: "Constantino I (El Grande)", hint: "Gobernador del Imperio Romano", options: ["Constantino I (El Grande)", "Julio César", "Nerón", "Teodosio I"] },
          { points: 400, question: "¿Quién fue el último zar del Imperio Ruso antes de la Revolución de 1917?", answer: "Nicolás II", hint: "Dinastía Romanov", options: ["Nicolás II", "Alejandro III", "Pedro el Grande", "Iván el Terrible"] },
          { points: 500, question: "¿En qué batalla decisiva de 1815 fue derrotado definitivamente Napoleón Bonaparte por la Séptima Coalición?", answer: "Batalla de Waterloo", hint: "Ocurrió en la actual Bélgica", options: ["Batalla de Waterloo", "Batalla de Trafalgar", "Batalla de Austerlitz", "Batalla de Leipzig"] }
        ]
      },
      {
        category: "Perú",
        questions: [
          { points: 100, question: "¿Cuál es la capital constitucional y sede de gobierno de la República del Perú?", answer: "Lima", hint: "Ciudad de los Reyes", options: ["Lima", "Cusco", "Arequipa", "Trujillo"] },
          { points: 200, question: "¿Qué ciudadela incaica es considerada una de las 7 maravillas del mundo moderno?", answer: "Machu Picchu", hint: "Ubicada en Cusco", options: ["Machu Picchu", "Chavín de Huántar", "Choquequirao", "Kuelap"] },
          { points: 300, question: "¿Quién es el autor de la famosa novela 'La ciudad y los perros' y Premio Nobel peruano?", answer: "Mario Vargas Llosa", hint: "Premio Nobel de Literatura 2010", options: ["Mario Vargas Llosa", "César Vallejo", "José María Arguedas", "Julio Ramón Ribeyro"] },
          { points: 400, question: "¿Qué cultura preincaica trazó enormes geoglifos de animales y figuras geométricas en el desierto?", answer: "Cultura Nazca", hint: "Costa sur del Perú", options: ["Cultura Nazca", "Cultura Paracas", "Cultura Mochica", "Cultura Chavín"] },
          { points: 500, question: "¿En qué batalla de 1824 se selló definitivamente la independencia hispanoamericana con la capitulación del virrey La Serna?", answer: "Batalla de Ayacucho", hint: "Liderada por Antonio José de Sucre", options: ["Batalla de Ayacucho", "Batalla de Junín", "Batalla de Pichincha", "Batalla de Carabobo"] }
        ]
      },
      {
        category: "Ciencia",
        questions: [
          { points: 100, question: "¿Cuál es el planeta más grande y masivo de nuestro Sistema Solar?", answer: "Júpiter", hint: "Gigante gaseoso", options: ["Júpiter", "Saturno", "Neptuno", "Marte"] },
          { points: 200, question: "¿Cuál es el símbolo químico del elemento Oro en la tabla periódica?", answer: "Au", hint: "Del latín 'aurum'", options: ["Au", "Ag", "Fe", "Cu"] },
          { points: 300, question: "¿Qué partícula subatómica posee carga eléctrica negativa?", answer: "El electrón", hint: "Orbita el núcleo", options: ["El electrón", "El protón", "El neutrón", "El fotón"] },
          { points: 400, question: "¿Cómo se llama el proceso por el cual las plantas pierden agua en forma de vapor por sus estomas?", answer: "Transpiración", hint: "Evaporación vegetal", options: ["Transpiración", "Fotosíntesis", "Respiración", "Ósmosis"] },
          { points: 500, question: "¿Qué constante física universal, denotada con la letra c, equivale aproximadamente a 300,000 km/s en el vacío?", answer: "La velocidad de la luz", hint: "Ecuación E=mc²", options: ["La velocidad de la luz", "La constante de gravedad", "La carga del electrón", "La velocidad del sonido"] }
        ]
      },
      {
        category: "Cultura Pop",
        questions: [
          { points: 100, question: "¿De qué color es la píldora que toma Neo para despertar en la realidad de 'Matrix'?", answer: "Roja", hint: "Ofrecida por Morfeo", options: ["Roja", "Azul", "Verde", "Amarilla"] },
          { points: 200, question: "¿Cómo se llama el principal villano y mago tenebroso en la saga de Harry Potter?", answer: "Lord Voldemort", hint: "Tom Riddle", options: ["Lord Voldemort", "Gellert Grindelwald", "Severus Snape", "Draco Malfoy"] },
          { points: 300, question: "¿Qué videojuego clásico de encajar bloques que caen fue creado en la Unión Soviética?", answer: "Tetris", hint: "Creado en 1984", options: ["Tetris", "Pac-Man", "Space Invaders", "Pong"] },
          { points: 400, question: "¿Cómo se llama la icónica cafetería donde se reunían los personajes de la serie 'Friends'?", answer: "Central Perk", hint: "Nueva York", options: ["Central Perk", "Monk's Diner", "MacLaren's Pub", "Cheers"] },
          { points: 500, question: "¿En qué película del universo Marvel el villano Thanos chasquea los dedos borrando a la mitad del universo?", answer: "Avengers: Infinity War", hint: "Estrenada en 2018", options: ["Avengers: Infinity War", "Avengers: Endgame", "Avengers: Age of Ultron", "The Avengers"] }
        ]
      },
      {
        category: "Farándula",
        questions: [
          { points: 100, question: "¿Con qué futbolista español estuvo casada la cantante Shakira durante más de una década?", answer: "Gerard Piqué", hint: "Exdefensa del FC Barcelona", options: ["Gerard Piqué", "Sergio Ramos", "Lionel Messi", "Iker Casillas"] },
          { points: 200, question: "¿Qué célebre familia estadounidense protagoniza el conocido reality de televisión Keeping Up With...?", answer: "Las Kardashian", hint: "Kris, Kim, Khloé y Kourtney", options: ["Las Kardashian", "Las Hilton", "Las Hadid", "Las Jenner"] },
          { points: 300, question: "¿Qué actor abofeteó al comediante Chris Rock en vivo durante la ceremonia de los Óscars 2022?", answer: "Will Smith", hint: "Ganador del Oscar esa noche", options: ["Will Smith", "Chris Rock", "Denzel Washington", "Jamie Foxx"] },
          { points: 400, question: "¿Quién fue la actriz de Aquaman que enfrentó a Johnny Depp en un mediático juicio en Virginia?", answer: "Amber Heard", hint: "Juicio de 2022", options: ["Amber Heard", "Megan Fox", "Scarlett Johansson", "Gal Gadot"] },
          { points: 500, question: "¿Qué legendaria banda británica de pop/rock realizó su histórico último concierto en vivo en la azotea de Apple Corps en 1969?", answer: "The Beatles", hint: "Lennon, McCartney, Harrison y Ringo", options: ["The Beatles", "The Rolling Stones", "Queen", "Pink Floyd"] }
        ]
      }
    ],
    round2: [
      {
        category: "Deportes",
        questions: [
          { points: 200, question: "¿En qué deporte olímpico de raqueta se golpea un volante o gallito en lugar de una pelota?", answer: "Bádminton", hint: "Red alta", options: ["Bádminton", "Tenis de Mesa", "Squash", "Pádel"] },
          { points: 400, question: "¿Cuánto dura un partido reglamentario de la NBA dividido en 4 cuartos?", answer: "48 minutos", hint: "4 cuartos de 12 min", options: ["48 minutos", "40 minutos", "60 minutos", "50 minutos"] },
          { points: 600, question: "¿Qué velocista jamaiquino ostenta los récords mundiales de 100 y 200 metros planos?", answer: "Usain Bolt", hint: "8 oros olímpicos", options: ["Usain Bolt", "Carl Lewis", "Tyson Gay", "Yohan Blake"] },
          { points: 800, question: "¿En qué capital europea se organizaron los primeros Juegos Olímpicos de la era moderna en 1896?", answer: "Atenas", hint: "Grecia", options: ["Atenas", "París", "Londres", "Roma"] },
          { points: 1000, question: "¿Qué tenista profesional ostenta el récord de más títulos individuales de Grand Slam masculinos en la historia?", answer: "Novak Djokovic", hint: "Tenista serbio", options: ["Novak Djokovic", "Rafael Nadal", "Roger Federer", "Andy Murray"] }
        ]
      },
      {
        category: "Tecnología",
        questions: [
          { points: 200, question: "¿Quién es el cofundador de Microsoft y famoso filántropo creador de Windows?", answer: "Bill Gates", hint: "Junto a Paul Allen", options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"] },
          { points: 400, question: "¿Qué significan las siglas 'WWW' en la dirección de un sitio de internet?", answer: "World Wide Web", hint: "Red mundial", options: ["World Wide Web", "World Wide Wireless", "Web Wide Window", "World Wireless Web"] },
          { points: 600, question: "¿Qué legendaria empresa creó originalmente el lenguaje de programación Java antes de ser adquirida por Oracle?", answer: "Sun Microsystems", hint: "Fundada en 1982", options: ["Sun Microsystems", "IBM", "Apple", "Microsoft"] },
          { points: 800, question: "¿Cómo se llamaba la primera computadora electrónica de propósito general construida en EE.UU. en 1945?", answer: "ENIAC", hint: "Pensilvania", options: ["ENIAC", "UNIVAC", "Altair", "Commodore 64"] },
          { points: 1000, question: "¿Qué célebre científico y filósofo formuló las tres leyes fundamentales de la robótica en la literatura de ciencia ficción?", answer: "Isaac Asimov", hint: "Autor de 'Yo, Robot'", options: ["Isaac Asimov", "Arthur C. Clarke", "H.G. Wells", "Philip K. Dick"] }
        ]
      },
      {
        category: "Música",
        questions: [
          { points: 200, question: "¿Quién es reconocido mundialmente con el título honorífico de 'El Rey del Pop'?", answer: "Michael Jackson", hint: "Thriller", options: ["Michael Jackson", "Elvis Presley", "Prince", "Stevie Wonder"] },
          { points: 400, question: "¿Qué artista pop batió récords globales con su gira 'The Eras Tour' entre 2023 y 2024?", answer: "Taylor Swift", hint: "Swifties", options: ["Taylor Swift", "Beyoncé", "Adele", "Rihanna"] },
          { points: 600, question: "¿De qué mítica banda de rock británica fue líder y vocalista el carismático Freddie Mercury?", answer: "Queen", hint: "Bohemian Rhapsody", options: ["Queen", "Led Zeppelin", "Aerosmith", "Guns N' Roses"] },
          { points: 800, question: "¿Qué artista puertorriqueño pionero del reguetón es apodado 'El Big Boss'?", answer: "Daddy Yankee", hint: "Gasolina", options: ["Daddy Yankee", "Don Omar", "Bad Bunny", "Wisin y Yandel"] },
          { points: 1000, question: "¿Qué famoso compositor austríaco del periodo clásico compuso su célebre Réquiem en Re menor en su lecho de muerte?", answer: "Wolfgang Amadeus Mozart", hint: "Falleció en 1791", options: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Frédéric Chopin"] }
        ]
      },
      {
        category: "Gastronomía",
        questions: [
          { points: 200, question: "¿De qué país europeo y específicamente de la ciudad de Nápoles es originaria la pizza?", answer: "Italia", hint: "Campania", options: ["Italia", "Francia", "España", "Grecia"] },
          { points: 400, question: "¿Cuál es la fruta o ingrediente principal para preparar una salsa de guacamole tradicional?", answer: "El aguacate (o palta)", hint: "Textura cremosa", options: ["El aguacate (o palta)", "El tomate", "El cilantro", "El limón"] },
          { points: 600, question: "¿Qué país sudamericano es el mayor productor y exportador mundial de granos de café?", answer: "Brasil", hint: "América del Sur", options: ["Brasil", "Colombia", "Vietnam", "Etiopía"] },
          { points: 800, question: "¿Qué costosa especia gastronómica obtenida de los estigmas de una flor es la más cara del mundo por peso?", answer: "El azafrán", hint: "Paella", options: ["El azafrán", "La vainilla", "El cardamomo", "La canela"] },
          { points: 1000, question: "¿De qué región de Francia proviene la verdadera denominación de origen protegida del vino espumoso Champán?", answer: "Champaña (Champagne)", hint: "Noreste de Francia", options: ["Champaña (Champagne)", "Burdeos", "Borgoña", "Alsacia"] }
        ]
      },
      {
        category: "Venezuela",
        questions: [
          { points: 200, question: "¿Qué famoso archipiélago y parque nacional de Venezuela posee playas de arena blanca en el mar Caribe?", answer: "Los Roques", hint: "Caribe venezolano", options: ["Los Roques", "Margarita", "Morrocoy", "Mochima"] },
          { points: 400, question: "¿Quién compuso la música del himno nacional venezolano 'Gloria al Bravo Pueblo'?", answer: "Juan José Landaeta", hint: "Letra de Vicente Salias", options: ["Juan José Landaeta", "Vicente Salias", "Simón Rodríguez", "Teresa Carreño"] },
          { points: 600, question: "¿Cuál es el pico más elevado de Venezuela, ubicado en la Cordillera de los Andes merideños?", answer: "Pico Bolívar", hint: "Estado Mérida", options: ["Pico Bolívar", "Pico Humboldt", "Pico Naiguatá", "Pico La Concha"] },
          { points: 800, question: "¿En qué estado venezolano sobre el Lago de Maracaibo ocurre el deslumbrante Relámpago del Catatumbo?", answer: "Estado Zulia", hint: "Río Catatumbo", options: ["Estado Zulia", "Estado Falcón", "Estado Carabobo", "Estado Mérida"] },
          { points: 1000, question: "¿Qué célebre escritor y político venezolano fue autor de la famosa novela 'Doña Bárbara' y presidente en 1948?", answer: "Rómulo Gallegos", hint: "Ilustre novelista venezolano", options: ["Rómulo Gallegos", "Arturo Uslar Pietri", "Andrés Eloy Blanco", "Miguel Otero Silva"] }
        ]
      }
    ],
    finalOptions: [
      {
        category: "Historia Universal",
        question: "¿Qué tratado firmado en 1494 dividió las tierras descubiertas fuera de Europa entre España y Portugal con el aval papal?",
        answer: "Tratado de Tordesillas",
        hint: "Tordesillas, Valladolid",
        options: ["Tratado de Tordesillas", "Tratado de Versalles", "Tratado de Utrecht", "Tratado de Madrid"]
      },
      {
        category: "Geografía y Exploración",
        question: "¿Qué navegante portugués al servicio de la corona fue el primero en bordear el Cabo de Buena Esperanza en 1488?",
        answer: "Bartolomé Díaz (Bartolomeu Dias)",
        hint: "Extremo sur de África",
        options: ["Bartolomé Díaz (Bartolomeu Dias)", "Vasco da Gama", "Fernando de Magallanes", "Pedro Álvares Cabral"]
      }
    ]
  }
};
