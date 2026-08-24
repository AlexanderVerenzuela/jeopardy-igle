const gameData = {
  biblica: {
    round1: [
      {
        category: "Antiguo Testamento",
        questions: [
          { points: 100, question: "¿Qué personaje bíblico construyó el arca por mandato de Dios para salvarse del gran diluvio?", answer: "Noé", hint: "Génesis 6:13-22" },
          { points: 200, question: "¿En qué monte recibió Moisés las tablas de piedra de los Diez Mandamientos?", answer: "Monte Sinaí", hint: "Éxodo 19:18-20" },
          { points: 300, question: "¿Quién fue vendido por sus hermanos como esclavo y terminó siendo gobernador de Egipto?", answer: "José", hint: "Génesis 37:3-28" },
          { points: 400, question: "¿Qué gigante filisteo fue derrotado por el joven pastor David usando solo una honda y una piedra?", answer: "Goliat", hint: "1 Samuel 17:40-50" },
          { points: 500, question: "¿Qué rey de Israel pidió sabiduría a Dios en lugar de riquezas o larga vida?", answer: "Salomón", hint: "1 Reyes 3:5-14" }
        ]
      },
      {
        category: "Nuevo Testamento",
        questions: [
          { points: 100, question: "¿En qué humilde ciudad nació Jesucristo según las profecías?", answer: "Belén", hint: "Miqueas 5:2 / Mateo 2:1" },
          { points: 200, question: "¿Quién bautizó a Jesús en el río Jordán dando testimonio de la voz del cielo?", answer: "Juan el Bautista", hint: "Mateo 3:13-17" },
          { points: 300, question: "¿Cuántos apóstoles o discípulos escogió Jesús para formar su grupo principal?", answer: "12 apóstoles", hint: "Mateo 10:1-4" },
          { points: 400, question: "¿En qué monte o lugar a las afueras de Jerusalén fue crucificado Jesús?", answer: "El Gólgota (o Calvario)", hint: "Juan 19:17" },
          { points: 500, question: "¿Qué apóstol negó a Jesús tres veces antes de que cantara el gallo?", answer: "Simón Pedro", hint: "Mateo 26:69-75" }
        ]
      },
      {
        category: "Personajes Bíblicos",
        questions: [
          { points: 100, question: "¿Quién fue el primer hombre creado por Dios a su imagen y semejanza?", answer: "Adán", hint: "Génesis 2:7" },
          { points: 200, question: "¿Qué mujer se convirtió en estatua de sal por desobedecer y mirar atrás hacia Sodoma?", answer: "La esposa de Lot", hint: "Génesis 19:26" },
          { points: 300, question: "¿Quién fue tragado por un gran pez tras intentar huir de la presencia de Dios hacia Tarsis?", answer: "Jonás", hint: "Jonás 1:17" },
          { points: 400, question: "¿Qué reina judía arriesgó su vida al presentarse ante el rey Asuero para salvar a su pueblo?", answer: "Ester", hint: "Ester 4:14-16" },
          { points: 500, question: "¿Qué juez judío poseía una fuerza sobrenatural ligada a su voto nazareo y su cabello?", answer: "Sansón", hint: "Jueces 16:17" }
        ]
      },
      {
        category: "Milagros de Jesús",
        questions: [
          { points: 100, question: "¿Cuál fue el primer milagro público de Jesús realizado durante una celebración de bodas?", answer: "Convertir el agua en vino en Caná de Galilea", hint: "Juan 2:1-11" },
          { points: 200, question: "¿A qué amigo resucitó Jesús en Betania cuando llevaba cuatro días en la tumba?", answer: "Lázaro", hint: "Juan 11:38-44" },
          { points: 300, question: "¿Con cuántos panes y peces alimentó Jesús milagrosamente a una multitud de 5,000 hombres?", answer: "5 panes y 2 peces", hint: "Mateo 14:17-21" },
          { points: 400, question: "¿Qué apóstol intentó caminar sobre las aguas hacia Jesús pero comenzó a hundirse por dudar?", answer: "Pedro", hint: "Mateo 14:28-31" },
          { points: 500, question: "¿A qué hombre ciego de nacimiento sanó Jesús untándole barro en los ojos y enviándolo al estanque de Siloé?", answer: "El ciego de Siloé (o Bartimeo)", hint: "Juan 9:1-7" }
        ]
      },
      {
        category: "Libros y Profetas",
        questions: [
          { points: 100, question: "¿Cuál es el primer libro de la Biblia y del Pentateuco?", answer: "Génesis", hint: "Génesis 1:1" },
          { points: 200, question: "¿Qué gran profeta fue llevado al cielo en un carro de fuego y un torbellino?", answer: "Elías", hint: "2 Reyes 2:11" },
          { points: 300, question: "¿Qué libro del Antiguo Testamento reúne 150 cánticos, oraciones y alabanzas a Dios?", answer: "Salmos", hint: "Salmos 150:1" },
          { points: 400, question: "¿Qué profeta sobrevivió milagrosamente una noche entera encerrado en el foso de los leones?", answer: "Daniel", hint: "Daniel 6:16-23" },
          { points: 500, question: "¿Cuál es el último libro del Nuevo Testamento escrito por el apóstol Juan en la isla de Patmos?", answer: "Apocalipsis (Revelación)", hint: "Apocalipsis 1:1-3" }
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
          { points: 800, question: "En la Parábola de los Talentos, ¿qué hizo el siervo que recibió un solo talento?", answer: "Lo enterró en la tierra por miedo a perderlo", hint: "Mateo 25:14-30" },
          { points: 1000, question: "En la Parábola del Sembrador, ¿qué representan las espinas que ahogan la semilla?", answer: "Los afanes del mundo y el engaño de las riquezas", hint: "Mateo 13:22" }
        ]
      },
      {
        category: "Geografía y Reyes",
        questions: [
          { points: 200, question: "¿Quién fue el primer rey de Israel, elegido y ungido por el profeta Samuel?", answer: "Saúl", hint: "1 Samuel 10:1" },
          { points: 400, question: "¿En qué río tuvo que sumergirse siete veces el general sirio Naamán para sanar de la lepra?", answer: "El río Jordán", hint: "2 Reyes 5:10-14" },
          { points: 600, question: "¿Qué histórica ciudad conquistó el rey David a los jebuseos para establecerla como capital de Israel?", answer: "Jerusalén (Sión)", hint: "2 Samuel 5:6-9" },
          { points: 800, question: "¿Qué malvada reina persiguió a los profetas de Dios e impulsó la adoración a Baal en Israel?", answer: "Jezabel", hint: "1 Reyes 21:1-16" },
          { points: 1000, question: "¿En qué monte demostró el profeta Elías el poder de Dios haciendo caer fuego del cielo frente a los profetas de Baal?", answer: "Monte Carmelo", hint: "1 Reyes 18:20-39" }
        ]
      },
      {
        category: "Cartas Apostólicas",
        questions: [
          { points: 200, question: "¿Quién fue el apóstol autor de la mayoría de las epístolas o cartas del Nuevo Testamento?", answer: "El apóstol Pablo", hint: "1 Corintios 1:1" },
          { points: 400, question: "¿En qué carta escribió Pablo el famoso capítulo del amor que dice: 'El amor es paciente, es bondadoso...'?", answer: "1 Corintios (Capítulo 13)", hint: "1 Corintios 13:1-13" },
          { points: 600, question: "¿A qué joven pastor envió Pablo dos cartas exhortándolo: 'Ninguno tenga en poco tu juventud'?", answer: "Timoteo", hint: "1 Timoteo 4:12" },
          { points: 800, question: "¿En qué epístola se declara: 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios'?", answer: "Efesios (Efesios 2:8)", hint: "Efesios 2:8-9" },
          { points: 1000, question: "¿Qué autor del Nuevo Testamento enfatizó la práctica cristiana declarando que 'la fe sin obras está muerta'?", answer: "Santiago", hint: "Santiago 2:26" }
        ]
      },
      {
        category: "Citas y Pasajes",
        questions: [
          { points: 200, question: "Completa la célebre cita de Juan 3:16: 'Porque de tal manera amó Dios al mundo, que ha dado a su...'", answer: "...Hijo unigénito, para que todo aquel que en él cree no se pierda, mas tenga vida eterna", hint: "Juan 3:16" },
          { points: 400, question: "¿Cómo comienzan los célebres versos del Salmo 23 escrito por David?", answer: "'Jehová es mi pastor; nada me faltará'", hint: "Salmos 23:1" },
          { points: 600, question: "¿Qué orden dio Jesús a sus apóstoles en la Gran Comisión de Mateo 28:19?", answer: "'Id, y haced discípulos a todas las naciones...'", hint: "Mateo 28:19-20" },
          { points: 800, question: "¿Con qué palabras inicia el primer poema del libro de los Salmos (Salmo 1:1)?", answer: "'Bienaventurado el varón que no anduvo en consejo de malos...'", hint: "Salmos 1:1" },
          { points: 1000, question: "¿Cuál es la famosa declaración de fortaleza espiritual escrita por Pablo en Filipenses 4:13?", answer: "'Todo lo puedo en Cristo que me fortalece'", hint: "Filipenses 4:13" }
        ]
      },
      {
        category: "Doctrina y Fe",
        questions: [
          { points: 200, question: "¿Qué día semanal apartado para reposar y adorar guardaba el pueblo de Israel en el Antiguo Testamento?", answer: "El Sábado (Sabbat)", hint: "Éxodo 20:8-11" },
          { points: 400, question: "¿En qué festividad descendió el Espíritu Santo como lenguas de fuego sobre los creyentes en el aposento alto?", answer: "Pentecostés", hint: "Hechos 2:1-4" },
          { points: 600, question: "En la Santa Cena o Cena del Señor, ¿qué representa el pan que Jesús partió y dio a sus discípulos?", answer: "El cuerpo de Cristo entregado por nosotros", hint: "1 Corintios 11:23-26" },
          { points: 800, question: "¿Cuál es el primer aspecto del fruto del Espíritu Santo enumerado en Gálatas 5:22?", answer: "El Amor", hint: "Gálatas 5:22-23" },
          { points: 1000, question: "Según Hebreos 11:1, ¿cómo se define bíblicamente la fe?", answer: "'La certeza de lo que se espera, la convicción de lo que no se ve'", hint: "Hebreos 11:1" }
        ]
      }
    ],
    final: {
      category: "Profecía Mesiánica",
      question: "¿En qué libro y capítulo del Antiguo Testamento profetizó Isaías sobre el 'Siervo Sufriente' que fue 'herido por nuestras rebeliones y molido por nuestros pecados'?",
      answer: "Isaías 53",
      hint: "Isaías 53:5"
    }
  },
  general: {
    round1: [
      {
        category: "Historia",
        questions: [
          { points: 100, question: "¿Quién descubrió América en 1492 al mando de la Santa María, la Pinta y la Niña?", answer: "Cristóbal Colón", hint: "Navegante genovés al servicio de los Reyes Católicos" },
          { points: 200, question: "¿En qué año comenzó la Segunda Guerra Mundial tras la invasión a Polonia?", answer: "1939", hint: "Inició el 1 de septiembre de 1939" },
          { points: 300, question: "¿Qué emperador romano legalizó el cristianismo mediante el Edicto de Milán en el 313 d.C.?", answer: "Constantino I (El Grande)", hint: "Gobernador del Imperio Romano" },
          { points: 400, question: "¿Quién fue el último zar del Imperio Ruso antes de la Revolución de 1917?", answer: "Nicolás II", hint: "Pertenecía a la dinastía Romanov" },
          { points: 500, question: "¿Qué tratado formal puso fin a la Primera Guerra Mundial en 1919?", answer: "Tratado de Versalles", hint: "Firmado en el Salón de los Espejos en Francia" }
        ]
      },
      {
        category: "Perú",
        questions: [
          { points: 100, question: "¿Cuál es la capital constitucional y sede de gobierno de la República del Perú?", answer: "Lima", hint: "Fundada por Francisco Pizarro en 1535" },
          { points: 200, question: "¿Qué ciudadela incaica es considerada una de las 7 maravillas del mundo moderno?", answer: "Machu Picchu", hint: "Ubicada en el departamento del Cusco" },
          { points: 300, question: "¿Quién es el autor de la famosa novela 'La ciudad y los perros' y Premio Nobel peruano?", answer: "Mario Vargas Llosa", hint: "Obtuvo el Premio Nobel en 2010" },
          { points: 400, question: "¿Qué cultura preincaica trazó enormes geoglifos de animales y figuras geométricas en el desierto?", answer: "Cultura Nazca", hint: "Ubicada en la costa sur del Perú" },
          { points: 500, question: "¿En qué año proclamó Don José de San Martín la Independencia del Perú?", answer: "1821", hint: "Proclamada en la Plaza Mayor de Lima" }
        ]
      },
      {
        category: "Ciencia",
        questions: [
          { points: 100, question: "¿Cuál es el planeta más grande y masivo de nuestro Sistema Solar?", answer: "Júpiter", hint: "Planeta con la Gran Mancha Roja" },
          { points: 200, question: "¿Cuál es el símbolo químico del elemento Oro en la tabla periódica?", answer: "Au", hint: "Proviene del latín 'aurum'" },
          { points: 300, question: "¿Qué partícula subatómica posee carga eléctrica negativa?", answer: "El electrón", hint: "Descubierto por J.J. Thomson" },
          { points: 400, question: "¿Cómo se llama el proceso por el cual las plantas pierden agua en forma de vapor por sus estomas?", answer: "Transpiración", hint: "Fenómeno botánico de evaporación" },
          { points: 500, question: "¿Qué científico propuso la teoría de la deriva continental en 1912?", answer: "Alfred Wegener", hint: "Meteorólogo y geofísico alemán" }
        ]
      },
      {
        category: "Cultura Pop",
        questions: [
          { points: 100, question: "¿De qué color es la píldora que toma Neo para despertar en la realidad de 'Matrix'?", answer: "Roja", hint: "Ofrecida por Morfeo" },
          { points: 200, question: "¿Cómo se llama el principal villano y mago tenebroso en la saga de Harry Potter?", answer: "Lord Voldemort", hint: "Tom Marvolo Riddle" },
          { points: 300, question: "¿Qué videojuego clásico de encajar bloques que caen fue creado en la Unión Soviética?", answer: "Tetris", hint: "Lanzado en 1984" },
          { points: 400, question: "¿Cómo se llama la icónica cafetería donde se reunían los personajes de la serie 'Friends'?", answer: "Central Perk", hint: "Ubicada en Nueva York" },
          { points: 500, question: "¿Quién es la heroína principal y vencedora del Distrito 12 en 'Los Juegos del Hambre'?", answer: "Katniss Everdeen", hint: "La chica en llamas" }
        ]
      },
      {
        category: "Farándula",
        questions: [
          { points: 100, question: "¿Con qué futbolista español estuvo casada la cantante Shakira durante más de una década?", answer: "Gerard Piqué", hint: "Campeón del mundo con España en 2010" },
          { points: 200, question: "¿Qué célebre familia estadounidense protagoniza el conocido reality de televisión Keeping Up With...?", answer: "Las Kardashian", hint: "Cadena E! Entertainment" },
          { points: 300, question: "¿Qué actor abofeteó al comediante Chris Rock en vivo durante la ceremonia de los Óscars 2022?", answer: "Will Smith", hint: "Protagonista de King Richard" },
          { points: 400, question: "¿Quién fue la actriz de Aquaman que enfrentó a Johnny Depp en un mediático juicio en Virginia?", answer: "Amber Heard", hint: "Juicio por difamación en 2022" },
          { points: 500, question: "¿Qué icónica cantante mexicano-estadounidense era conocida como 'La Reina del Tex-Mex'?", answer: "Selena Quintanilla", hint: "Intérprete de 'Amor Prohibido'" }
        ]
      }
    ],
    round2: [
      {
        category: "Deportes",
        questions: [
          { points: 200, question: "¿En qué deporte olímpico de raqueta se golpea un volante o gallito en lugar de una pelota?", answer: "Bádminton", hint: "Deporte de raqueta muy popular en Asia" },
          { points: 400, question: "¿Cuánto dura un partido reglamentario de la NBA dividido en 4 cuartos?", answer: "48 minutos", hint: "4 cuartos de 12 minutos" },
          { points: 600, question: "¿Qué velocista jamaiquino ostenta los récords mundiales de 100 y 200 metros planos?", answer: "Usain Bolt", hint: "Atleta de 8 oros olímpicos" },
          { points: 800, question: "¿En qué capital europea se organizaron los primeros Juegos Olímpicos de la era moderna en 1896?", answer: "Atenas", hint: "Capital de Grecia" },
          { points: 1000, question: "¿Cómo se llama el icónico trofeo que se otorga al campeón de la liga norteamericana de hockey NHL?", answer: "La Stanley Cup", hint: "Entregado desde 1893" }
        ]
      },
      {
        category: "Tecnología",
        questions: [
          { points: 200, question: "¿Quién es el cofundador de Microsoft y famoso filántropo creador de Windows?", answer: "Bill Gates", hint: "Fundador de la Fundación Gates" },
          { points: 400, question: "¿Qué significan las siglas 'WWW' en la dirección de un sitio de internet?", answer: "World Wide Web", hint: "Creado por Tim Berners-Lee" },
          { points: 600, question: "¿Qué legendaria empresa creó originalmente el lenguaje de programación Java antes de ser adquirida por Oracle?", answer: "Sun Microsystems", hint: "Fundada en 1982" },
          { points: 800, question: "¿Cómo se llamaba la primera computadora electrónica de propósito general construida en EE.UU. en 1945?", answer: "ENIAC", hint: "Construida en la Universidad de Pensilvania" },
          { points: 1000, question: "¿Qué matemático británico es considerado el padre de la computación teórica tras descifrar Enigma?", answer: "Alan Turing", hint: "Famoso por el Test de Turing" }
        ]
      },
      {
        category: "Música",
        questions: [
          { points: 200, question: "¿Quién es reconocido mundialmente con el título honorífico de 'El Rey del Pop'?", answer: "Michael Jackson", hint: "Álbum Thriller" },
          { points: 400, question: "¿Qué artista pop batió récords globales con su gira 'The Eras Tour' entre 2023 y 2024?", answer: "Taylor Swift", hint: "Cantautora estadounidense" },
          { points: 600, question: "¿De qué mítica banda de rock británica fue líder y vocalista el carismático Freddie Mercury?", answer: "Queen", hint: "Banda formada en Londres en 1970" },
          { points: 800, question: "¿Qué artista puertorriqueño pionero del reguetón es apodado 'El Big Boss'?", answer: "Daddy Yankee", hint: "Nombre real Ramón Luis Ayala" },
          { points: 1000, question: "¿Qué instrumento musical de viento metal y caña toca hábilmente Lisa Simpson?", answer: "El Saxofón", hint: "Instrumento de viento madera/metal" }
        ]
      },
      {
        category: "Gastronomía",
        questions: [
          { points: 200, question: "¿De qué país europeo y específicamente de la ciudad de Nápoles es originaria la pizza?", answer: "Italia", hint: "Región de Campania" },
          { points: 400, question: "¿Cuál es la fruta o ingrediente principal para preparar una salsa de guacamole tradicional?", answer: "El aguacate (o palta)", hint: "Fruto de Persea americana" },
          { points: 600, question: "¿Qué país sudamericano es el mayor productor y exportador mundial de granos de café?", answer: "Brasil", hint: "Producción concentrada en Minas Gerais" },
          { points: 800, question: "¿Qué costosa especia gastronómica obtenida de los estigmas de una flor es la más cara del mundo por peso?", answer: "El azafrán", hint: "Flor Crocus sativus" },
          { points: 1000, question: "¿Qué famoso plato tradicional francés consiste en pollo estofado lentamente en vino tinto?", answer: "Coq au vin", hint: "Receta tradicional de Borgoña" }
        ]
      },
      {
        category: "Venezuela",
        questions: [
          { points: 200, question: "¿Qué famoso archipiélago y parque nacional de Venezuela posee playas de arena blanca en el mar Caribe?", answer: "Los Roques", hint: "Decretado Parque Nacional en 1972" },
          { points: 400, question: "¿Quién compuso la música del himno nacional venezolano 'Gloria al Bravo Pueblo'?", answer: "Juan José Landaeta", hint: "Músico de la época colonial" },
          { points: 600, question: "¿Cuál es el pico más elevado de Venezuela, ubicado en la Cordillera de los Andes merideños?", answer: "Pico Bolívar", hint: "Ubicado en el Estado Mérida" },
          { points: 800, question: "¿En qué estado venezolano sobre el Lago de Maracaibo ocurre el deslumbrante Relámpago del Catatumbo?", answer: "Estado Zulia", hint: "Cuenca del río Catatumbo" },
          { points: 1000, question: "¿Quién asumió la presidencia de Venezuela tras la caída del régimen de Marcos Pérez Jiménez en 1958?", answer: "Rómulo Betancourt", hint: "Presidente del periodo 1959-1964" }
        ]
      }
    ],
    final: {
      category: "Historia Universal",
      question: "¿Qué emperador y conquistador macedonio unificó Grecia, conquistó el Imperio Persa y llegó hasta la India antes de morir en Babilonia a los 32 años?",
      answer: "Alejandro Magno (Alejandro III de Macedonia)",
      hint: "Nacido en Pella en 356 a.C."
    }
  }
};
