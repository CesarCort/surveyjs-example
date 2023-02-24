export const json = {
 "title": "Encuesta 360 v2 | 2023-2",
 "logoWidth": "50px",
 "logoHeight": "050px",
 "logoPosition": "right",
 "completedHtml": "<h2>¡Gracias por participar!</h2><br>Tendremos pronto tus resultados",
 "pages": [
  {
   "name": "welcome",
   "elements": [
    {
     "type": "html",
     "name": "welcome-message",
     "title": "welcome-message",
     "html": "\n<b>Hola Crosranger<b><br>\n¡Ha llegado el momento de evaluar y evaluarnos!<br>\n\nComo cada trimestre, llenaremos una encuesta sobre cómo sentimos que el resto de nuestros compañeros vive cada uno de los pilares Crosland. Estos pilares son: Contagiamos pasión, Buscamos la excelencia, Trabajamos juntos y Vivimos y disfrutamos.<br>\n\nCada colaborador debe evaluar a todas las personas con las que ha trabajado en los últimos 3 meses. Desde las personas de tu propia área, como jefes y pares, hasta personas con las que coordinas día a día por algún proyecto o proceso específico.<br>\n\n¡Míralo como una oportunidad para comentarle a tus compañeros qué te gusta de su estilo de trabajo y cómo podrían seguir mejorando!<br>\n\nAsimismo, hemos agregado una sección de autoevaluación para que puedas calificarte, de acuerdo a nuestros pilares Crosland<br>\n\n¡Gracias!\n"
    }
   ],
   "title": "360"
  },
  {
   "name": "selectUnit",
   "elements": [
    {
     "type": "checkbox",
     "name": "select-business-unit",
     "title": "Selecciona las Unidades De Negocio con las que has trabajado los últimos 3 meses: ",
     "choices": [
      "ADMINISTRACION Y FINANZAS",
      "CFO",
      "DESARROLLO NEGOCIOS",
      "GESTIÓN Y DESARROLLO HUMANO",
      "NEGOCIO AUTOMOTRIZ",
      "NEGOCIO INMOBILIARIO",
      "OVERHEAD"
     ]
    }
   ],
   "title": "Selección de Unidades"
  },
  {
   "name": "selectSector",
   "elements": [
    {
     "type": "checkbox",
     "name": "select-areas-from-unit",
     "visibleIf": "{select-business-unit} contains 'ADMINISTRACION Y FINANZAS'",
     "title": "ADMINISTRACION Y FINANZAS",
     "choices": [
      "ADMINISTRACION Y FINANZAS",
      "AUDITORIA INTERNA",
      "CONTABILIDAD",
      "CONTROL DE GESTION",
      "IMPUESTOS",
      "LEGAL",
      "PLANILLAS",
      "TESORERIA"
     ]
    },
    {
     "type": "checkbox",
     "name": "select-areas-from-unit",
     "visibleIf": "{select-business-unit} contains 'CFO'",
     "title": "CFO",
     "choices": [
      "CFO"
     ]
    },
    {
     "type": "checkbox",
     "name": "select-areas-from-unit",
     "visibleIf": "{select-business-unit} contains 'DESARROLLO NEGOCIOS'",
     "title": "DESARROLLO NEGOCIOS",
     "choices": [
      "DESARROLLO NEGOCIOS"
     ]
    },
    {
     "type": "checkbox",
     "name": "select-areas-from-unit",
     "visibleIf": "{select-business-unit} contains 'GESTIÓN Y DESARROLLO HUMANO'",
     "title": "GESTIÓN Y DESARROLLO HUMANO",
     "choices": [
      "ATRACCION Y DESARROLLO",
      "BIENESTAR Y SSOMA",
      "COMPENSACIONES Y BENEFICIOS",
      "GESTIÓN Y DESARROLLO HUMANO",
      "SEGURIDAD",
      "SERVICIOS GENERALES"
     ]
    },
    {
     "type": "checkbox",
     "name": "select-areas-from-unit",
     "visibleIf": "{select-business-unit} contains 'NEGOCIO AUTOMOTRIZ'",
     "title": "NEGOCIO AUTOMOTRIZ",
     "choices": [
      "ACCESORIOS",
      "ALIANZAS COMERCIALES",
      "ALMACEN DE DOCUMENTOS",
      "ALMACEN REPUESTOS",
      "ALMACEN VEHICULOS",
      "AUTOMOTRIZ",
      "COMERCIAL 2R",
      "COMERCIAL 3R",
      "COMERCIAL REPUESTOS",
      "COMERCIAL SELVA",
      "COMPRAS",
      "CREDITOS",
      "IMPORTACIONES",
      "INNOVACION Y PROCESOS",
      "LINEA KAWASAKI",
      "OPERACIONES",
      "PLANEAMIENTO",
      "SERVICIO AL CLIENTE",
      "SERVICIO TECNICO",
      "SISTEMAS"
     ]
    },
    {
     "type": "checkbox",
     "name": "select-areas-from-unit",
     "visibleIf": "{select-business-unit} contains 'NEGOCIO INMOBILIARIO'",
     "title": "NEGOCIO INMOBILIARIO",
     "choices": [
      "NEGOCIO INMOBILIARIO"
     ]
    },
    {
     "type": "checkbox",
     "name": "select-areas-from-unit",
     "visibleIf": "{select-business-unit} contains 'OVERHEAD'",
     "title": "OVERHEAD",
     "choices": [
      "GERENCIA GENERAL"
     ]
    }
   ],
   "title": "Seleccion de Sector(areas)",
   "description": "Por unidad de negocio, selecciona los sector(áreas) con las que has trabajado los últimos tres meses:"
  },
  {
   "name": "selectColabs",
   "elements": [
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-ACCESORIOS",
     "visibleIf": "{select-areas-from-unit} contains 'ACCESORIOS'",
     "title": "ACCESORIOS",
     "choices": [
      {
       "value": "2845348",
       "text": "SEMINARIO REUSCHE MARTIN HERNAN"
      },
      {
       "value": "72505476",
       "text": "PARIONA ANDRADE JULIO CESAR"
      },
      {
       "value": "40802587",
       "text": "NUÑEZ VERA DANTE EDUARDO RANJIT"
      },
      {
       "value": "48038893",
       "text": "GALOPINO ANCAJIMA SHARON GERALDINNE"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-ADMINISTRACION Y FINANZAS",
     "visibleIf": "{select-areas-from-unit} contains 'ADMINISTRACION Y FINANZAS'",
     "title": "ADMINISTRACION Y FINANZAS",
     "choices": [
      {
       "value": "16757835",
       "text": "VELEZ ZAMORA ANTONIO HUMBERTO"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-ALIANZAS COMERCIALES",
     "visibleIf": "{select-areas-from-unit} contains 'ALIANZAS COMERCIALES'",
     "title": "ALIANZAS COMERCIALES",
     "choices": [
      {
       "value": "40335197",
       "text": "LOVEDAY MEJIA CHRISTIAN"
      },
      {
       "value": "72635353",
       "text": "SOTOMAYOR WOOLCOTT KENNETHY SONJA"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-ALMACEN DE DOCUMENTOS",
     "visibleIf": "{select-areas-from-unit} contains 'ALMACEN DE DOCUMENTOS'",
     "title": "ALMACEN DE DOCUMENTOS",
     "choices": [
      {
       "value": "32738701",
       "text": "CAHUA SALAZAR DANIEL SALVADOR"
      },
      {
       "value": "71996517",
       "text": "CAHUA TORRES SEBASTIAN ALEJANDRO"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-ALMACEN REPUESTOS",
     "visibleIf": "{select-areas-from-unit} contains 'ALMACEN REPUESTOS'",
     "title": "ALMACEN REPUESTOS",
     "choices": [
      {
       "value": "72029026",
       "text": "CIENFUEGOS GAMBOA JOHN PETHER"
      },
      {
       "value": "43489421",
       "text": "ALEJANDRIA ZAPATA LUIS ALBERTO"
      },
      {
       "value": "46409441",
       "text": "BASTIDAS ORELLANA EDWIN YOEL"
      },
      {
       "value": "45176954",
       "text": "CACERES GARCIA DIEGO ANGEL"
      },
      {
       "value": "40986494",
       "text": "CARHUAPOMA FLORES JULIO CESAR"
      },
      {
       "value": "76348533",
       "text": "CASTILLO MARTINEZ KEVIN JOSE"
      },
      {
       "value": "42654496",
       "text": "CASTRO ARRASCO JOVER SMIT"
      },
      {
       "value": "42053463",
       "text": "DICHE PAREDES CLODOALDO ABRAHAM"
      },
      {
       "value": "47216327",
       "text": "LEVANO RODRIGUEZ JOSIMAR WILFREDO"
      },
      {
       "value": "4081715",
       "text": "MELGAREJO HIDALGO JUAN MANUEL"
      },
      {
       "value": "80106120",
       "text": "RIVERA VASQUEZ MARTIN RODOLFO"
      },
      {
       "value": "48584092",
       "text": "RUIZ PAZ LUIS ANGEL"
      },
      {
       "value": "10085191",
       "text": "TORRES SURITA YSOCERES AUDON"
      },
      {
       "value": "70327335",
       "text": "UGAZ BASTANTE BRUNO EDUARDO"
      },
      {
       "value": "46722514",
       "text": "RAMOS CORONADO LUIS GUSTAVO"
      },
      {
       "value": "47023258",
       "text": "GUTIERREZ URBINA CESAR ALFONSO"
      },
      {
       "value": "70272674",
       "text": "SANDOVAL GONZALES MARCELO"
      },
      {
       "value": "43993340",
       "text": "PERALES QUINTANA CARLOS EMILIO"
      },
      {
       "value": "43632179",
       "text": "ALIAGA RAMIREZ FREDDY ALEXANDER"
      },
      {
       "value": "42946534",
       "text": "CORREA HUAMAN JHONY RAUL"
      },
      {
       "value": "6432246",
       "text": "PEREZ MOSQUERA BARNAD DY FELIX"
      },
      {
       "value": "43959477",
       "text": "ASTOCONDOR MOLINA JOSE MIGUEL"
      },
      {
       "value": "48484614",
       "text": "TAIPE HUAIRA YOBER YONATAN"
      },
      {
       "value": "44138783",
       "text": "GUEVARA CIEZA ANNER MIGUEL"
      },
      {
       "value": "72730699",
       "text": "SANTIVAÑEZ GOÑEZ GEANPIERRE"
      },
      {
       "value": "45168261",
       "text": "CHAUCA MILIAN JULIO CESAR"
      },
      {
       "value": "73572438",
       "text": "BAUTISTA SOTOMAYOR ALDAIR ESMIR"
      },
      {
       "value": "77271310",
       "text": "TORBISCO ALVARADO JESUS ALEX"
      },
      {
       "value": "70654934",
       "text": "SANTAMARIA CHINCHAY JUNIOR EDUARDO DARIO"
      },
      {
       "value": "45165391",
       "text": "MORENO PEREZ JORGE ARMANDO"
      },
      {
       "value": "70929727",
       "text": "QUISPE LEON LUIS BRAYAN"
      },
      {
       "value": "72571571",
       "text": "RAMOS PEÑA JOSE MANUEL"
      },
      {
       "value": "4747804",
       "text": "Yusmelis Del Valle Diaz"
      },
      {
       "value": "3885974",
       "text": "COA MUÑOZ OLVELIS KAROLINA"
      },
      {
       "value": "44725608",
       "text": "HUIDOBRO SOSA DARWINS ALBERTO"
      },
      {
       "value": "70043083",
       "text": "RUESTA MENDOZA KEVIN BRYAN"
      },
      {
       "value": "60898227",
       "text": "BALDEON DIAZ VICENTE PAUL"
      },
      {
       "value": "48918807",
       "text": "DIAZ GUTIERREZ ARMANDO ALONSO"
      },
      {
       "value": "41964218",
       "text": "PALACIOS CARRILLO RONALD ALFREDO"
      },
      {
       "value": "40164421",
       "text": "GAMARRA PINEDO JORGE ANTONIO"
      },
      {
       "value": "3029052",
       "text": "ZERPA REYES HECTOR JOSE GREGORIO"
      },
      {
       "value": "44420443",
       "text": "RAMOS SANDOVAL CARLOS EDUARDO"
      },
      {
       "value": "46943958",
       "text": "CHAMORRO GERONIMO ALISON JONATHAN"
      },
      {
       "value": "41916191",
       "text": "NEYRA SILVA JORGE ALEXANDER"
      },
      {
       "value": "71427195",
       "text": "CALDERON RODAS CRISTIAN OMAR ANTHONY"
      },
      {
       "value": "45653891",
       "text": "PRINCIPE VASQUEZ ABRAHAM ANTONIO"
      },
      {
       "value": "46564768",
       "text": "PAEZ LLORONA YOEL RICARDO"
      },
      {
       "value": "74157431",
       "text": "CANAYO MARAPARA JUAN CARLOS"
      },
      {
       "value": "46887147",
       "text": "CHANG MAICEL ANGEL ENRIQUE"
      },
      {
       "value": "71342771",
       "text": "AGUIRRE SILVA PAOLO FRANCESCO"
      },
      {
       "value": "41051204",
       "text": "SAAVEDRA LUCANO SEGUNDO CESAR"
      },
      {
       "value": "74303496",
       "text": "GOMEZ HERRERA RUBEN JESUS"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-ALMACEN VEHICULOS",
     "visibleIf": "{select-areas-from-unit} contains 'ALMACEN VEHICULOS'",
     "title": "ALMACEN VEHICULOS",
     "choices": [
      {
       "value": "43538545",
       "text": "AGURTO OBREGON CESAR VICTORINO"
      },
      {
       "value": "47622051",
       "text": "ASPAJO LLERENA JOAQUIN AMADO"
      },
      {
       "value": "45314983",
       "text": "BARTRA VELA KELMER ALAN"
      },
      {
       "value": "46074034",
       "text": "BENITES SILVA JONATHAN ANGEL"
      },
      {
       "value": "25846925",
       "text": "CABRERA MAURTUA JAIME ALONSO"
      },
      {
       "value": "71258662",
       "text": "CARDENAS SHUAN JORGE FERNANDO"
      },
      {
       "value": "41852611",
       "text": "CORDOVA CASTRO WILSSON STARLEY"
      },
      {
       "value": "45189828",
       "text": "CORDOVA PASACHE JESUS MANUEL"
      },
      {
       "value": "77300330",
       "text": "ESCOBEDO SANTA CRUZ HENRRY BRAYAN"
      },
      {
       "value": "41916922",
       "text": "FLORES FERREYRA JULIO CESAR"
      },
      {
       "value": "48101536",
       "text": "LOAYZA VASQUEZ CARLOS ALFREDO"
      },
      {
       "value": "72204123",
       "text": "MANRIQUE LOPEZ JHON LUIS"
      },
      {
       "value": "7735664",
       "text": "PACHAS LAZO LIZANDRO"
      },
      {
       "value": "47531304",
       "text": "PACHECO HIDALGO DAVID VLADIMIR"
      },
      {
       "value": "7641667",
       "text": "PARRA FERNANDEZ ANDRES PEDRO"
      },
      {
       "value": "42249673",
       "text": "RAMIREZ OBREGON OSCAR"
      },
      {
       "value": "43082794",
       "text": "RAMOS CAMASITA CELSO ESTANISLAO"
      },
      {
       "value": "42443873",
       "text": "REAL AVALOS NILTON JAVIER"
      },
      {
       "value": "6542042",
       "text": "RODRIGUEZ VASQUEZ ORLANDO EUGENIO"
      },
      {
       "value": "48222926",
       "text": "SALAZAR LLAJA DEIBIS JHONATAN"
      },
      {
       "value": "72009438",
       "text": "SANDOVAL LEYVA GERSON TINO"
      },
      {
       "value": "74543283",
       "text": "SUAREZ VALERIO LENER JACKSON"
      },
      {
       "value": "72848198",
       "text": "TEJADA ROMERO MARIO SIXTO"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-ATRACCION Y DESARROLLO",
     "visibleIf": "{select-areas-from-unit} contains 'ATRACCION Y DESARROLLO'",
     "title": "ATRACCION Y DESARROLLO",
     "choices": [
      {
       "value": "70055383",
       "text": "CHOKEWANCA BLANCO PAMELA"
      },
      {
       "value": "46277915",
       "text": "VILLACORTA TARDIO ALENE ELIZABETH"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-AUDITORIA INTERNA",
     "visibleIf": "{select-areas-from-unit} contains 'AUDITORIA INTERNA'",
     "title": "AUDITORIA INTERNA",
     "choices": [
      {
       "value": "43772138",
       "text": "RODRIGUEZ CONTRERAS CLAUDIA ALEJANDRA"
      },
      {
       "value": "48315976",
       "text": "RODRIGUEZ AGREDA DIANA KATHERINE"
      },
      {
       "value": "47797685",
       "text": "OLIVARES CERNA KENJE BRIGGIT"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-AUTOMOTRIZ",
     "visibleIf": "{select-areas-from-unit} contains 'AUTOMOTRIZ'",
     "title": "AUTOMOTRIZ",
     "choices": [
      {
       "value": "10792396",
       "text": "MANRIQUE RAMOS WILLARD MARTIN"
      },
      {
       "value": "7629078",
       "text": "ROMANET GALVAN RICARDO CARLOS"
      },
      {
       "value": "70976479",
       "text": "MONCADA COLE MARIA ALEJANDRA"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-BIENESTAR Y SSOMA",
     "visibleIf": "{select-areas-from-unit} contains 'BIENESTAR Y SSOMA'",
     "title": "BIENESTAR Y SSOMA",
     "choices": [
      {
       "value": "41345981",
       "text": "MONTEVERDE LUQUE ZARELLA LIZBETH"
      },
      {
       "value": "45929767",
       "text": "VILLANUEVA BRUNO JEANCARLO DINO"
      },
      {
       "value": "10686006",
       "text": "ALARCON RODRIGUEZ LORELAY EVELYN"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-CFO",
     "visibleIf": "{select-areas-from-unit} contains 'CFO'",
     "title": "CFO",
     "choices": [
      {
       "value": "10136205",
       "text": "GHIGLINO ECHEGARAY JORGE LUIS"
      },
      {
       "value": "10152944",
       "text": "ORTIZ RODAS GABRIELA ISABEL"
      },
      {
       "value": "71242989",
       "text": "VARGAS SOLIS ROXANA MARIBEL"
      },
      {
       "value": "72971290",
       "text": "PAJUELO MUÑOZ ARIEL RUBEN"
      },
      {
       "value": "40323364",
       "text": "ROSADIO BENDEZU MARCO ANTONIO"
      },
      {
       "value": "71539402",
       "text": "ESPINOZA PRINCIPE TIMOTEO JEFFERSON"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-COMERCIAL 2R",
     "visibleIf": "{select-areas-from-unit} contains 'COMERCIAL 2R'",
     "title": "COMERCIAL 2R",
     "choices": [
      {
       "value": "40485772",
       "text": "ANTON HUACHES CARLOS FELIPE"
      },
      {
       "value": "7504002",
       "text": "ARMAS DURAND MARIA ISABEL"
      },
      {
       "value": "40153974",
       "text": "CARO TOMANGUILLA JIMMY GANDY"
      },
      {
       "value": "40560274",
       "text": "CARPIO MAINZA KARLA MAGALI"
      },
      {
       "value": "42434684",
       "text": "CUADROS AQUINO ARELIZ ESTRELLA"
      },
      {
       "value": "70002376",
       "text": "CURAY RODRIGUEZ NICOLE XIOMARA"
      },
      {
       "value": "5353330",
       "text": "DEL AGUILA UTIA JUAN MANUEL"
      },
      {
       "value": "2816473",
       "text": "DELFIN CALDERON HERMINIA VICTORIA"
      },
      {
       "value": "70442257",
       "text": "DIAZ LOPEZ MIRELLA"
      },
      {
       "value": "40432801",
       "text": "DIAZ TEJADA ELIANA CAROLINA"
      },
      {
       "value": "43715528",
       "text": "FERNANDEZ ROSALES HAROLD PETTER"
      },
      {
       "value": "46195520",
       "text": "HUAPAYA TAFUR LUIS ALBERTO"
      },
      {
       "value": "6078620",
       "text": "JIMENEZ JULCA MIGUEL ANGEL"
      },
      {
       "value": "40031813",
       "text": "MARQUINA ESCALANTE CESAR FABIAN"
      },
      {
       "value": "10001657",
       "text": "MERCADO CHUMPITASI PIERO CESAR"
      },
      {
       "value": "44360734",
       "text": "MESONES HUAMAN PAULO CESAR"
      },
      {
       "value": "2883536",
       "text": "NAVARRO SANCHEZ CESAR AUGUSTO"
      },
      {
       "value": "42846238",
       "text": "PORTELLA PORTUGAL JORGE OSWALDO"
      },
      {
       "value": "46560478",
       "text": "RAVELLO CUELLAR JORGE LUIS"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-COMERCIAL 3R",
     "visibleIf": "{select-areas-from-unit} contains 'COMERCIAL 3R'",
     "title": "COMERCIAL 3R",
     "choices": [
      {
       "value": "47260953",
       "text": "BALAREZO CANTELLA ALESSIA"
      },
      {
       "value": "46356695",
       "text": "CASTAÑEDA PASTOR VICTOR ERNESTO"
      },
      {
       "value": "47519255",
       "text": "CRISTOBAL MADRID GUSTAVO MARIO"
      },
      {
       "value": "25683170",
       "text": "FERNANDEZ AMAYA ROBERTO FELIX"
      },
      {
       "value": "40687895",
       "text": "FLOR BALDEON RICHARD VINDER"
      },
      {
       "value": "10182159",
       "text": "GALVEZ TAGLE CESAR EDMUNDO"
      },
      {
       "value": "72963805",
       "text": "GAMARRA QUISPE LUIS ENRIQUE"
      },
      {
       "value": "25682528",
       "text": "MANSILLA FARFAN JOSE LEONARDO"
      },
      {
       "value": "10028844",
       "text": "MENESES RAMOS MARIA CONSUELO"
      },
      {
       "value": "45847315",
       "text": "PADILLA FIGUEROA NOEMI TATIANA"
      },
      {
       "value": "45938071",
       "text": "PATROCINIO CHOQUE JOSE ALFREDO"
      },
      {
       "value": "47603529",
       "text": "PIZARRO ESPICHAN RONALD OMAR"
      },
      {
       "value": "9924529",
       "text": "QUISPE GUTIERREZ RUTH GLORIA"
      },
      {
       "value": "18215648",
       "text": "RODRIGUEZ REYNA ROBERTO MARTIN"
      },
      {
       "value": "72906586",
       "text": "ROJAS AHUMADA JOSE ANTONIO"
      },
      {
       "value": "8885370",
       "text": "SALAZAR ORE MARCOS ENRIQUE"
      },
      {
       "value": "6813880",
       "text": "VILLAORDUÑA CARDENAS EVER JUSTINIANO"
      },
      {
       "value": "6162086",
       "text": "ZORRILLA PIO JOSE MARTIN"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-COMERCIAL REPUESTOS",
     "visibleIf": "{select-areas-from-unit} contains 'COMERCIAL REPUESTOS'",
     "title": "COMERCIAL REPUESTOS",
     "choices": [
      {
       "value": "10860243",
       "text": "ALIAGA DUEÑAS GABRIELA SILVIA"
      },
      {
       "value": "10861110",
       "text": "ANGULO ARISTA SHEYLA JAKELEEN"
      },
      {
       "value": "9885877",
       "text": "CABRERA VERDE JULIO CESAR"
      },
      {
       "value": "42977491",
       "text": "CANARIO HUAROTO ABEL OMAR"
      },
      {
       "value": "45642418",
       "text": "CASTRO VELASCO ROLANDO AGUSTIN"
      },
      {
       "value": "48053125",
       "text": "COLLANTES MIYASHIRO ZULEIKA YADIRA"
      },
      {
       "value": "40807560",
       "text": "DE LA CRUZ SALAZAR JHONY"
      },
      {
       "value": "41080674",
       "text": "ESPINOZA LUNA YERKO ALFREDO"
      },
      {
       "value": "44850775",
       "text": "FLORES ZULOETA JUAN CARLOS"
      },
      {
       "value": "40000963",
       "text": "GARCIA HUAMANI ISABEL CRISTINA"
      },
      {
       "value": "47125982",
       "text": "GIRON RIOJA KIARA VICTORIA"
      },
      {
       "value": "42410874",
       "text": "LAVADO BLAS EDWIN ADEMIR"
      },
      {
       "value": "44539637",
       "text": "LIMAS CRUZ JESUS EDUARDO"
      },
      {
       "value": "10032439",
       "text": "MANGIER LIZAMA FRANKLIN ALBERTO"
      },
      {
       "value": "10612032",
       "text": "PIZARRO AQUINO AUGUSTO CARLOS"
      },
      {
       "value": "43743468",
       "text": "RUBINA AVILA ROBERTO JONATHAN"
      },
      {
       "value": "10622377",
       "text": "SAUSA CARRION REYNALDO ALEJANDRO"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-COMERCIAL SELVA",
     "visibleIf": "{select-areas-from-unit} contains 'COMERCIAL SELVA'",
     "title": "COMERCIAL SELVA",
     "choices": [
      {
       "value": "49016868",
       "text": "CARDENAS SMITH MICHAEL ABRAHAM"
      },
      {
       "value": "42011663",
       "text": "CUBAS RAMIREZ MIKY ADAN"
      },
      {
       "value": "5402391",
       "text": "ICOMENA GUERRA JOB DAVID"
      },
      {
       "value": "43270715",
       "text": "MEJIA GONGORA JULLIER"
      },
      {
       "value": "46721392",
       "text": "MUÑOZ MEDINA SARA PATRICIA"
      },
      {
       "value": "47426857",
       "text": "SAAVEDRA VARGAS NATAHALY ROMINA"
      },
      {
       "value": "46724649",
       "text": "SANCHEZ GUTIERREZ RUBEN ISMAEL"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-COMPENSACIONES Y BENEFICIOS",
     "visibleIf": "{select-areas-from-unit} contains 'COMPENSACIONES Y BENEFICIOS'",
     "title": "COMPENSACIONES Y BENEFICIOS",
     "choices": [
      {
       "value": "71532747",
       "text": "ARAUJO JULCA FERNANDO MANUEL"
      },
      {
       "value": "46414993",
       "text": "MEDRANO NOBLECILLA FIORELLA SHARON"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-COMPRAS",
     "visibleIf": "{select-areas-from-unit} contains 'COMPRAS'",
     "title": "COMPRAS",
     "choices": [
      {
       "value": "72747159",
       "text": "MALDONADO LUNA DAYANA NATY"
      },
      {
       "value": "75473478",
       "text": "MARTINEZ YARANGA YONE ALEXANDRA"
      },
      {
       "value": "42183454",
       "text": "OTINIANO LOPEZ IRIS RAQUEL"
      },
      {
       "value": "72883933",
       "text": "VILLANUEVA VALENCIA LILIBETH CRISTY"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-CONTABILIDAD",
     "visibleIf": "{select-areas-from-unit} contains 'CONTABILIDAD'",
     "title": "CONTABILIDAD",
     "choices": [
      {
       "value": "47072568",
       "text": "ASTUÑAUPA NAJERA LUIS YONATAN"
      },
      {
       "value": "40060377",
       "text": "ZAMORA TAPIA VIRNA IVETT"
      },
      {
       "value": "74929399",
       "text": "FELIX MORALES WALTER HUBER"
      },
      {
       "value": "71122395",
       "text": "QUISPE AYALA LEESLY ESTEFANY"
      },
      {
       "value": "45833793",
       "text": "ARANDA SEVILLANO ROSIO"
      },
      {
       "value": "71748333",
       "text": "CHAVEZ CORAL CRISTIAN ARMANDO"
      },
      {
       "value": "72204506",
       "text": "REZZA PAJARES HILARY JOSELYN"
      },
      {
       "value": "74635307",
       "text": "CAJAHUARINGA MACHUCA ZAMIRA CRISTINA"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-CONTROL DE GESTION",
     "visibleIf": "{select-areas-from-unit} contains 'CONTROL DE GESTION'",
     "title": "CONTROL DE GESTION",
     "choices": [
      {
       "value": "44444130",
       "text": "YATACO CASTILLO JOSE ALFREDO"
      },
      {
       "value": "70124696",
       "text": "VILLENA NAVARRO CARLOS ENRIQUE"
      },
      {
       "value": "76156527",
       "text": "PANDURO BARRANTES JUAN DIEGO"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-CREDITOS",
     "visibleIf": "{select-areas-from-unit} contains 'CREDITOS'",
     "title": "CREDITOS",
     "choices": [
      {
       "value": "9956020",
       "text": "BAUTISTA QUINTANILLA JESSICA JUDITH"
      },
      {
       "value": "2833264",
       "text": "HIDALGO CHAVEZ LUIS FELIPE"
      },
      {
       "value": "76479059",
       "text": "SANCHEZ ROBLEDO ALEXIS SANTINO"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-DESARROLLO NEGOCIOS",
     "visibleIf": "{select-areas-from-unit} contains 'DESARROLLO NEGOCIOS'",
     "title": "DESARROLLO NEGOCIOS",
     "choices": [
      {
       "value": "40803796",
       "text": "SHIKIYA HURTADO ANA TERESA"
      },
      {
       "value": "47314100",
       "text": "HINOSTROZA HUANAY LUCIA DEL CARMEN"
      },
      {
       "value": "41797768",
       "text": "MEDRANO NECOCHEA VICTOR JAVIER"
      },
      {
       "value": "73657312",
       "text": "TALLEDO NAVARRO PAMELA"
      },
      {
       "value": "10558194",
       "text": "LARRABURE PEREZ WILSON RICARDO"
      },
      {
       "value": "47837733",
       "text": "PANDURO FERNANDEZ GIAN PIERRE"
      },
      {
       "value": "45519571",
       "text": "VIZCARDO PANCORVO JUAN JOSE"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-GERENCIA GENERAL",
     "visibleIf": "{select-areas-from-unit} contains 'GERENCIA GENERAL'",
     "title": "GERENCIA GENERAL",
     "choices": [
      {
       "value": "6543622",
       "text": "FORSYTH ALARCO JUAN ALBERTO"
      },
      {
       "value": "6543619",
       "text": "FORSYTH RIVAROLA JUAN ALBERTO FELIPE"
      },
      {
       "value": "6430409",
       "text": "OCHOA CHAUCA PABLO CESAR"
      },
      {
       "value": "25800748",
       "text": "QUIROZ AVILA HENRY"
      },
      {
       "value": "19996041",
       "text": "SOLIS CALDERON HECTOR ELEODORO"
      },
      {
       "value": "42915146",
       "text": "PIZARRO ZAPATA BENJAMIN JESUS"
      },
      {
       "value": "9302319",
       "text": "KALINOWSKI BARCLAY VIRNA LUZ"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-GESTIÓN Y DESARROLLO HUMANO",
     "visibleIf": "{select-areas-from-unit} contains 'GESTIÓN Y DESARROLLO HUMANO'",
     "title": "GESTIÓN Y DESARROLLO HUMANO",
     "choices": [
      {
       "value": "10476350",
       "text": "AMEGHINO ANDALUZ GIANCARLO"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-IMPORTACIONES",
     "visibleIf": "{select-areas-from-unit} contains 'IMPORTACIONES'",
     "title": "IMPORTACIONES",
     "choices": [
      {
       "value": "44647618",
       "text": "EDEN VILLEGAS OMAR ALEJANDRO"
      },
      {
       "value": "70193596",
       "text": "KIWAKI ARAUCO AKEMI LUZ"
      },
      {
       "value": "48588559",
       "text": "ZAPATA CORTEZ STEPHANIE"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-IMPUESTOS",
     "visibleIf": "{select-areas-from-unit} contains 'IMPUESTOS'",
     "title": "IMPUESTOS",
     "choices": [
      {
       "value": "45335304",
       "text": "CHAVEZ OTINIANO LORENA JHAZMIN"
      },
      {
       "value": "41727660",
       "text": "MARCELO CELEDONIO LUIS CARLOS"
      },
      {
       "value": "8035974",
       "text": "MARTINEZ SANCHEZ FREDDY AUGUSTO"
      },
      {
       "value": "46761555",
       "text": "GAMARRA CASTILLO URIEL LEANDRO"
      },
      {
       "value": "75267982",
       "text": "CAMACHO YACSAHUACHE GABRIEL ANTAR"
      },
      {
       "value": "77575494",
       "text": "RAMIREZ SILVA MELANNY DENISSE"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-INNOVACION Y PROCESOS",
     "visibleIf": "{select-areas-from-unit} contains 'INNOVACION Y PROCESOS'",
     "title": "INNOVACION Y PROCESOS",
     "choices": [
      {
       "value": "44363769",
       "text": "PEÑA TORRES LUISA RICARDINA"
      },
      {
       "value": "47486524",
       "text": "CHINCHA MATA STEVEN BRYANT"
      },
      {
       "value": "70289458",
       "text": "VILCAHUAMAN VALDIVIESO IAN RAUL"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-LEGAL",
     "visibleIf": "{select-areas-from-unit} contains 'LEGAL'",
     "title": "LEGAL",
     "choices": [
      {
       "value": "40449992",
       "text": "CORREA VERGARA MARIA DEL CARMEN"
      },
      {
       "value": "45073283",
       "text": "VELEZ DE VILLA YUPANQUI CINDY MARLENY"
      },
      {
       "value": "70609901",
       "text": "SABOYA CORDOVA INTI CATARI"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-LINEA KAWASAKI",
     "visibleIf": "{select-areas-from-unit} contains 'LINEA KAWASAKI'",
     "title": "LINEA KAWASAKI",
     "choices": [
      {
       "value": "82466",
       "text": "DEL AGUILA HIDALGO SAMUEL"
      },
      {
       "value": "40646048",
       "text": "JIMENEZ ASPILCUETA JOEL"
      },
      {
       "value": "42850407",
       "text": "MALASQUEZ GARCIA ALDO LEONARDO"
      },
      {
       "value": "10744655",
       "text": "CONEJO GUARDAMINO JOE MIGUEL"
      },
      {
       "value": "45613368",
       "text": "SILVA VASQUEZ DEIVID CRISTHIAN"
      },
      {
       "value": "45092398",
       "text": "MENZALA ORTEGA ALEX RODOLFO"
      },
      {
       "value": "47154147",
       "text": "CHUMPITAZI BARRETO DIEGO JESUS"
      },
      {
       "value": "45256809",
       "text": "CHEAN RUIZ SERGIO"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-NEGOCIO INMOBILIARIO",
     "visibleIf": "{select-areas-from-unit} contains 'NEGOCIO INMOBILIARIO'",
     "title": "NEGOCIO INMOBILIARIO",
     "choices": [
      {
       "value": "40006296",
       "text": "RUIZ FLORES LUZ GISSELLA"
      },
      {
       "value": "44871244",
       "text": "BLUDAU TUPAC YUPANQUI JAN HENRY"
      },
      {
       "value": "43569973",
       "text": "DELGADO UNDA RENZO JESUS"
      },
      {
       "value": "74438666",
       "text": "COTRINA VERANO VIVIANA PURITA"
      },
      {
       "value": "72191719",
       "text": "CURI GRADOS ELVIS RICARDO PIERO"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-OPERACIONES",
     "visibleIf": "{select-areas-from-unit} contains 'OPERACIONES'",
     "title": "OPERACIONES",
     "choices": [
      {
       "value": "10672242",
       "text": "BALCAZER LOLI LIBER MARTIN"
      },
      {
       "value": "47845515",
       "text": "TORO PALOMINO GIANCARLO EDINSON"
      },
      {
       "value": "2899681",
       "text": "SALAS PEZUA HAROLD ALBERTO"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-PLANEAMIENTO",
     "visibleIf": "{select-areas-from-unit} contains 'PLANEAMIENTO'",
     "title": "PLANEAMIENTO",
     "choices": [
      {
       "value": "8247662",
       "text": "REYES BENAVIDES MELSI ELIZABETH"
      },
      {
       "value": "70944487",
       "text": "BARRIENTOS TAPIA LAURA LUCIA"
      },
      {
       "value": "10459679",
       "text": "JUAREZ CRUZ GUSTAVO ERWIN"
      },
      {
       "value": "43068853",
       "text": "BUENDIA GRAZIANI GUSTAVO ADOLFO"
      },
      {
       "value": "46457171",
       "text": "RODRIGUEZ PAREDES BRENDA ALEJANDRA"
      },
      {
       "value": "73087145",
       "text": "ORIHUELA BEJARANO PATRICIA KENDY"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-PLANILLAS",
     "visibleIf": "{select-areas-from-unit} contains 'PLANILLAS'",
     "title": "PLANILLAS",
     "choices": [
      {
       "value": "44652717",
       "text": "VELASQUEZ SALDAÑA WILMER GERARDO"
      },
      {
       "value": "43308092",
       "text": "JURADO HUAMAN JOJHANSON FERNANDO"
      },
      {
       "value": "72894842",
       "text": "DAVILA MUÑOZ FIORELLA ESTEFANY"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-SEGURIDAD",
     "visibleIf": "{select-areas-from-unit} contains 'SEGURIDAD'",
     "title": "SEGURIDAD",
     "choices": [
      {
       "value": "10741277",
       "text": "MORILLO MACHADO JUAN RENE"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-SERVICIO AL CLIENTE",
     "visibleIf": "{select-areas-from-unit} contains 'SERVICIO AL CLIENTE'",
     "title": "SERVICIO AL CLIENTE",
     "choices": [
      {
       "value": "40715092",
       "text": "DIAZ CAMPOS ARTURO"
      },
      {
       "value": "10004335",
       "text": "BRINGAS PROCHAZKA SANDRA SILVANA"
      },
      {
       "value": "6771922",
       "text": "RODRIGUEZ CARPIO RUTH SELENE"
      },
      {
       "value": "9865016",
       "text": "VARGAS PEÑA ERICK"
      },
      {
       "value": "45453006",
       "text": "SALVADOR SALVADOR ERIC DEIBY"
      },
      {
       "value": "72306819",
       "text": "ACUÑA VENTO MILENY SHERYL"
      },
      {
       "value": "46286135",
       "text": "FLORES FERNANDEZ CLAUDIA CECILIA"
      },
      {
       "value": "45938129",
       "text": "ALBA SANCHEZ DIANA CAROLINA"
      },
      {
       "value": "47484915",
       "text": "PUMA RAMOS BRAYAN CRISTIAN"
      },
      {
       "value": "44482449",
       "text": "LOPEZ AGUIRRE JAVIER JESUS"
      },
      {
       "value": "46316278",
       "text": "CHAVEZ CONDE SMITH JOSEPH"
      },
      {
       "value": "73634296",
       "text": "CALDERON TORRES MARTIN MAURICIO"
      },
      {
       "value": "47437046",
       "text": "MORI CUENCA KATTYA LIZBETH"
      },
      {
       "value": "74158343",
       "text": "MEDINA ESPINOZA ANGELICA MILAGROS ANTONIETA"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-SERVICIO TECNICO",
     "visibleIf": "{select-areas-from-unit} contains 'SERVICIO TECNICO'",
     "title": "SERVICIO TECNICO",
     "choices": [
      {
       "value": "40241539",
       "text": "RAMIREZ ZEVALLOS JOSE MIGUEL"
      },
      {
       "value": "40487202",
       "text": "CONDOR CASTILLO JUAN HARRY"
      },
      {
       "value": "7488058",
       "text": "CABANA BUITRON WILBER CELEDONIO"
      },
      {
       "value": "47805975",
       "text": "CARDENAS HUAMANI EDWIN JAVIER"
      },
      {
       "value": "73875549",
       "text": "JIHUA TAPAHUASCO JUAN JOSE"
      },
      {
       "value": "43077392",
       "text": "RUIZ VASQUEZ SANDRO"
      },
      {
       "value": "47036204",
       "text": "GOMEZ CACHA JULIO CESAR"
      },
      {
       "value": "41261260",
       "text": "RIVERA QUISPE MARTIN JULIO"
      },
      {
       "value": "44954065",
       "text": "GAMBOA QUILICHE DANILO MAX"
      },
      {
       "value": "70319277",
       "text": "LUPUCHE SILVA ELISEO"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-SERVICIOS GENERALES",
     "visibleIf": "{select-areas-from-unit} contains 'SERVICIOS GENERALES'",
     "title": "SERVICIOS GENERALES",
     "choices": [
      {
       "value": "25817327",
       "text": "AYALA CHIROQUE LUIS"
      },
      {
       "value": "9620603",
       "text": "CANALES CORBETTA HERNAN JAVIER"
      },
      {
       "value": "25444867",
       "text": "CARHUAPOMA FLORES HERNAN JAIME"
      },
      {
       "value": "9555005",
       "text": "YUPANQUI ALARCON FERMIN"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-SISTEMAS",
     "visibleIf": "{select-areas-from-unit} contains 'SISTEMAS'",
     "title": "SISTEMAS",
     "choices": [
      {
       "value": "7508404",
       "text": "NAUPARI HURTADO RAFAEL"
      },
      {
       "value": "43909967",
       "text": "SOSA SAN MARTIN PEDRO MANUEL"
      },
      {
       "value": "44829465",
       "text": "CASTELLARES CUYA ENRIQUE LUIS"
      },
      {
       "value": "25720478",
       "text": "BAZALAR PIZARRO EDUARDO GONZALO"
      },
      {
       "value": "7262835",
       "text": "RODRIGUEZ PORRAS JUAN CARLOS"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "select-colabs-from-area-TESORERIA",
     "visibleIf": "{select-areas-from-unit} contains 'TESORERIA'",
     "title": "TESORERIA",
     "choices": [
      {
       "value": "43220913",
       "text": "DE LA CRUZ PAUCAR LUZ JUDITH"
      },
      {
       "value": "44646487",
       "text": "PANDO GUILLEN EDITH IVET"
      },
      {
       "value": "73824248",
       "text": "CANO ÑATO PILAR SOLEDAD"
      },
      {
       "value": "73983886",
       "text": "OTOYA SILVA CLAUDIA FIORELA"
      },
      {
       "value": "47257757",
       "text": "HENDRICK HURTADO SHIRLEY MILAGROS"
      }
     ]
    }
   ],
   "title": "Compañeros",
   "description": "Selecciona a las personas con las que has trabajado los últimos tres meses:"
  },
  {
   "name": "evaluateColabs",
   "elements": [
    {
     "type": "matrix",
     "name": "evaluate-colabs-from-pilar-Contagiamos pasióna",
     "title": "Contagiamos pasión",
     "description": "Es una persona que se atreve a probar cosas nuevas, levanta la mano cuando tiene alguna idea y si cree que puede generar un impacto positivo, la ejecuta. Está siempre dispuesto a asumir nuevos retos e impulsa al resto de sus compañeros a que actúen con esa misma motivación.",
     "columns": [
      "1",
      "2",
      "3",
      "4",
      "5"
     ],
     "rows": [
      {
       "value": "2845348",
       "text": "SEMINARIO REUSCHE MARTIN HERNAN",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '2845348'"
      },
      {
       "value": "72505476",
       "text": "PARIONA ANDRADE JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '72505476'"
      },
      {
       "value": "40802587",
       "text": "NUÑEZ VERA DANTE EDUARDO RANJIT",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '40802587'"
      },
      {
       "value": "48038893",
       "text": "GALOPINO ANCAJIMA SHARON GERALDINNE",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '48038893'"
      },
      {
       "value": "16757835",
       "text": "VELEZ ZAMORA ANTONIO HUMBERTO",
       "visibleIf": "{select-colabs-from-area-ADMINISTRACION Y FINANZAS} contains '16757835'"
      },
      {
       "value": "40335197",
       "text": "LOVEDAY MEJIA CHRISTIAN",
       "visibleIf": "{select-colabs-from-area-ALIANZAS COMERCIALES} contains '40335197'"
      },
      {
       "value": "72635353",
       "text": "SOTOMAYOR WOOLCOTT KENNETHY SONJA",
       "visibleIf": "{select-colabs-from-area-ALIANZAS COMERCIALES} contains '72635353'"
      },
      {
       "value": "32738701",
       "text": "CAHUA SALAZAR DANIEL SALVADOR",
       "visibleIf": "{select-colabs-from-area-ALMACEN DE DOCUMENTOS} contains '32738701'"
      },
      {
       "value": "71996517",
       "text": "CAHUA TORRES SEBASTIAN ALEJANDRO",
       "visibleIf": "{select-colabs-from-area-ALMACEN DE DOCUMENTOS} contains '71996517'"
      },
      {
       "value": "72029026",
       "text": "CIENFUEGOS GAMBOA JOHN PETHER",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '72029026'"
      },
      {
       "value": "43489421",
       "text": "ALEJANDRIA ZAPATA LUIS ALBERTO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43489421'"
      },
      {
       "value": "46409441",
       "text": "BASTIDAS ORELLANA EDWIN YOEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46409441'"
      },
      {
       "value": "45176954",
       "text": "CACERES GARCIA DIEGO ANGEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45176954'"
      },
      {
       "value": "40986494",
       "text": "CARHUAPOMA FLORES JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '40986494'"
      },
      {
       "value": "76348533",
       "text": "CASTILLO MARTINEZ KEVIN JOSE",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '76348533'"
      },
      {
       "value": "42654496",
       "text": "CASTRO ARRASCO JOVER SMIT",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '42654496'"
      },
      {
       "value": "42053463",
       "text": "DICHE PAREDES CLODOALDO ABRAHAM",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '42053463'"
      },
      {
       "value": "47216327",
       "text": "LEVANO RODRIGUEZ JOSIMAR WILFREDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '47216327'"
      },
      {
       "value": "4081715",
       "text": "MELGAREJO HIDALGO JUAN MANUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '4081715'"
      },
      {
       "value": "80106120",
       "text": "RIVERA VASQUEZ MARTIN RODOLFO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '80106120'"
      },
      {
       "value": "48584092",
       "text": "RUIZ PAZ LUIS ANGEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '48584092'"
      },
      {
       "value": "10085191",
       "text": "TORRES SURITA YSOCERES AUDON",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '10085191'"
      },
      {
       "value": "70327335",
       "text": "UGAZ BASTANTE BRUNO EDUARDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70327335'"
      },
      {
       "value": "46722514",
       "text": "RAMOS CORONADO LUIS GUSTAVO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46722514'"
      },
      {
       "value": "47023258",
       "text": "GUTIERREZ URBINA CESAR ALFONSO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '47023258'"
      },
      {
       "value": "70272674",
       "text": "SANDOVAL GONZALES MARCELO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70272674'"
      },
      {
       "value": "43993340",
       "text": "PERALES QUINTANA CARLOS EMILIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43993340'"
      },
      {
       "value": "43632179",
       "text": "ALIAGA RAMIREZ FREDDY ALEXANDER",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43632179'"
      },
      {
       "value": "42946534",
       "text": "CORREA HUAMAN JHONY RAUL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '42946534'"
      },
      {
       "value": "6432246",
       "text": "PEREZ MOSQUERA BARNAD DY FELIX",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '6432246'"
      },
      {
       "value": "43959477",
       "text": "ASTOCONDOR MOLINA JOSE MIGUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43959477'"
      },
      {
       "value": "48484614",
       "text": "TAIPE HUAIRA YOBER YONATAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '48484614'"
      },
      {
       "value": "44138783",
       "text": "GUEVARA CIEZA ANNER MIGUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '44138783'"
      },
      {
       "value": "72730699",
       "text": "SANTIVAÑEZ GOÑEZ GEANPIERRE",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '72730699'"
      },
      {
       "value": "45168261",
       "text": "CHAUCA MILIAN JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45168261'"
      },
      {
       "value": "73572438",
       "text": "BAUTISTA SOTOMAYOR ALDAIR ESMIR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '73572438'"
      },
      {
       "value": "77271310",
       "text": "TORBISCO ALVARADO JESUS ALEX",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '77271310'"
      },
      {
       "value": "70654934",
       "text": "SANTAMARIA CHINCHAY JUNIOR EDUARDO DARIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70654934'"
      },
      {
       "value": "45165391",
       "text": "MORENO PEREZ JORGE ARMANDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45165391'"
      },
      {
       "value": "70929727",
       "text": "QUISPE LEON LUIS BRAYAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70929727'"
      },
      {
       "value": "72571571",
       "text": "RAMOS PEÑA JOSE MANUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '72571571'"
      },
      {
       "value": "4747804",
       "text": "Yusmelis Del Valle Diaz",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '4747804'"
      },
      {
       "value": "3885974",
       "text": "COA MUÑOZ OLVELIS KAROLINA",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '3885974'"
      },
      {
       "value": "44725608",
       "text": "HUIDOBRO SOSA DARWINS ALBERTO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '44725608'"
      },
      {
       "value": "70043083",
       "text": "RUESTA MENDOZA KEVIN BRYAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70043083'"
      },
      {
       "value": "60898227",
       "text": "BALDEON DIAZ VICENTE PAUL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '60898227'"
      },
      {
       "value": "48918807",
       "text": "DIAZ GUTIERREZ ARMANDO ALONSO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '48918807'"
      },
      {
       "value": "41964218",
       "text": "PALACIOS CARRILLO RONALD ALFREDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '41964218'"
      },
      {
       "value": "40164421",
       "text": "GAMARRA PINEDO JORGE ANTONIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '40164421'"
      },
      {
       "value": "3029052",
       "text": "ZERPA REYES HECTOR JOSE GREGORIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '3029052'"
      },
      {
       "value": "44420443",
       "text": "RAMOS SANDOVAL CARLOS EDUARDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '44420443'"
      },
      {
       "value": "46943958",
       "text": "CHAMORRO GERONIMO ALISON JONATHAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46943958'"
      },
      {
       "value": "41916191",
       "text": "NEYRA SILVA JORGE ALEXANDER",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '41916191'"
      },
      {
       "value": "71427195",
       "text": "CALDERON RODAS CRISTIAN OMAR ANTHONY",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '71427195'"
      },
      {
       "value": "45653891",
       "text": "PRINCIPE VASQUEZ ABRAHAM ANTONIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45653891'"
      },
      {
       "value": "46564768",
       "text": "PAEZ LLORONA YOEL RICARDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46564768'"
      },
      {
       "value": "74157431",
       "text": "CANAYO MARAPARA JUAN CARLOS",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '74157431'"
      },
      {
       "value": "46887147",
       "text": "CHANG MAICEL ANGEL ENRIQUE",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46887147'"
      },
      {
       "value": "71342771",
       "text": "AGUIRRE SILVA PAOLO FRANCESCO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '71342771'"
      },
      {
       "value": "41051204",
       "text": "SAAVEDRA LUCANO SEGUNDO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '41051204'"
      },
      {
       "value": "74303496",
       "text": "GOMEZ HERRERA RUBEN JESUS",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '74303496'"
      },
      {
       "value": "43538545",
       "text": "AGURTO OBREGON CESAR VICTORINO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '43538545'"
      },
      {
       "value": "47622051",
       "text": "ASPAJO LLERENA JOAQUIN AMADO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '47622051'"
      },
      {
       "value": "45314983",
       "text": "BARTRA VELA KELMER ALAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '45314983'"
      },
      {
       "value": "46074034",
       "text": "BENITES SILVA JONATHAN ANGEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '46074034'"
      },
      {
       "value": "25846925",
       "text": "CABRERA MAURTUA JAIME ALONSO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '25846925'"
      },
      {
       "value": "71258662",
       "text": "CARDENAS SHUAN JORGE FERNANDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '71258662'"
      },
      {
       "value": "41852611",
       "text": "CORDOVA CASTRO WILSSON STARLEY",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '41852611'"
      },
      {
       "value": "45189828",
       "text": "CORDOVA PASACHE JESUS MANUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '45189828'"
      },
      {
       "value": "77300330",
       "text": "ESCOBEDO SANTA CRUZ HENRRY BRAYAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '77300330'"
      },
      {
       "value": "41916922",
       "text": "FLORES FERREYRA JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '41916922'"
      },
      {
       "value": "48101536",
       "text": "LOAYZA VASQUEZ CARLOS ALFREDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '48101536'"
      },
      {
       "value": "72204123",
       "text": "MANRIQUE LOPEZ JHON LUIS",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '72204123'"
      },
      {
       "value": "7735664",
       "text": "PACHAS LAZO LIZANDRO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '7735664'"
      },
      {
       "value": "47531304",
       "text": "PACHECO HIDALGO DAVID VLADIMIR",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '47531304'"
      },
      {
       "value": "7641667",
       "text": "PARRA FERNANDEZ ANDRES PEDRO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '7641667'"
      },
      {
       "value": "42249673",
       "text": "RAMIREZ OBREGON OSCAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '42249673'"
      },
      {
       "value": "43082794",
       "text": "RAMOS CAMASITA CELSO ESTANISLAO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '43082794'"
      },
      {
       "value": "42443873",
       "text": "REAL AVALOS NILTON JAVIER",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '42443873'"
      },
      {
       "value": "6542042",
       "text": "RODRIGUEZ VASQUEZ ORLANDO EUGENIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '6542042'"
      },
      {
       "value": "48222926",
       "text": "SALAZAR LLAJA DEIBIS JHONATAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '48222926'"
      },
      {
       "value": "72009438",
       "text": "SANDOVAL LEYVA GERSON TINO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '72009438'"
      },
      {
       "value": "74543283",
       "text": "SUAREZ VALERIO LENER JACKSON",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '74543283'"
      },
      {
       "value": "72848198",
       "text": "TEJADA ROMERO MARIO SIXTO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '72848198'"
      },
      {
       "value": "70055383",
       "text": "CHOKEWANCA BLANCO PAMELA",
       "visibleIf": "{select-colabs-from-area-ATRACCION Y DESARROLLO} contains '70055383'"
      },
      {
       "value": "46277915",
       "text": "VILLACORTA TARDIO ALENE ELIZABETH",
       "visibleIf": "{select-colabs-from-area-ATRACCION Y DESARROLLO} contains '46277915'"
      },
      {
       "value": "43772138",
       "text": "RODRIGUEZ CONTRERAS CLAUDIA ALEJANDRA",
       "visibleIf": "{select-colabs-from-area-AUDITORIA INTERNA} contains '43772138'"
      },
      {
       "value": "48315976",
       "text": "RODRIGUEZ AGREDA DIANA KATHERINE",
       "visibleIf": "{select-colabs-from-area-AUDITORIA INTERNA} contains '48315976'"
      },
      {
       "value": "47797685",
       "text": "OLIVARES CERNA KENJE BRIGGIT",
       "visibleIf": "{select-colabs-from-area-AUDITORIA INTERNA} contains '47797685'"
      },
      {
       "value": "10792396",
       "text": "MANRIQUE RAMOS WILLARD MARTIN",
       "visibleIf": "{select-colabs-from-area-AUTOMOTRIZ} contains '10792396'"
      },
      {
       "value": "7629078",
       "text": "ROMANET GALVAN RICARDO CARLOS",
       "visibleIf": "{select-colabs-from-area-AUTOMOTRIZ} contains '7629078'"
      },
      {
       "value": "70976479",
       "text": "MONCADA COLE MARIA ALEJANDRA",
       "visibleIf": "{select-colabs-from-area-AUTOMOTRIZ} contains '70976479'"
      },
      {
       "value": "41345981",
       "text": "MONTEVERDE LUQUE ZARELLA LIZBETH",
       "visibleIf": "{select-colabs-from-area-BIENESTAR Y SSOMA} contains '41345981'"
      },
      {
       "value": "45929767",
       "text": "VILLANUEVA BRUNO JEANCARLO DINO",
       "visibleIf": "{select-colabs-from-area-BIENESTAR Y SSOMA} contains '45929767'"
      },
      {
       "value": "10686006",
       "text": "ALARCON RODRIGUEZ LORELAY EVELYN",
       "visibleIf": "{select-colabs-from-area-BIENESTAR Y SSOMA} contains '10686006'"
      },
      {
       "value": "10136205",
       "text": "GHIGLINO ECHEGARAY JORGE LUIS",
       "visibleIf": "{select-colabs-from-area-CFO} contains '10136205'"
      },
      {
       "value": "10152944",
       "text": "ORTIZ RODAS GABRIELA ISABEL",
       "visibleIf": "{select-colabs-from-area-CFO} contains '10152944'"
      },
      {
       "value": "71242989",
       "text": "VARGAS SOLIS ROXANA MARIBEL",
       "visibleIf": "{select-colabs-from-area-CFO} contains '71242989'"
      },
      {
       "value": "72971290",
       "text": "PAJUELO MUÑOZ ARIEL RUBEN",
       "visibleIf": "{select-colabs-from-area-CFO} contains '72971290'"
      },
      {
       "value": "40323364",
       "text": "ROSADIO BENDEZU MARCO ANTONIO",
       "visibleIf": "{select-colabs-from-area-CFO} contains '40323364'"
      },
      {
       "value": "71539402",
       "text": "ESPINOZA PRINCIPE TIMOTEO JEFFERSON",
       "visibleIf": "{select-colabs-from-area-CFO} contains '71539402'"
      },
      {
       "value": "40485772",
       "text": "ANTON HUACHES CARLOS FELIPE",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40485772'"
      },
      {
       "value": "7504002",
       "text": "ARMAS DURAND MARIA ISABEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '7504002'"
      },
      {
       "value": "40153974",
       "text": "CARO TOMANGUILLA JIMMY GANDY",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40153974'"
      },
      {
       "value": "40560274",
       "text": "CARPIO MAINZA KARLA MAGALI",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40560274'"
      },
      {
       "value": "42434684",
       "text": "CUADROS AQUINO ARELIZ ESTRELLA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '42434684'"
      },
      {
       "value": "70002376",
       "text": "CURAY RODRIGUEZ NICOLE XIOMARA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '70002376'"
      },
      {
       "value": "5353330",
       "text": "DEL AGUILA UTIA JUAN MANUEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '5353330'"
      },
      {
       "value": "2816473",
       "text": "DELFIN CALDERON HERMINIA VICTORIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '2816473'"
      },
      {
       "value": "70442257",
       "text": "DIAZ LOPEZ MIRELLA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '70442257'"
      },
      {
       "value": "40432801",
       "text": "DIAZ TEJADA ELIANA CAROLINA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40432801'"
      },
      {
       "value": "43715528",
       "text": "FERNANDEZ ROSALES HAROLD PETTER",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '43715528'"
      },
      {
       "value": "46195520",
       "text": "HUAPAYA TAFUR LUIS ALBERTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '46195520'"
      },
      {
       "value": "6078620",
       "text": "JIMENEZ JULCA MIGUEL ANGEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '6078620'"
      },
      {
       "value": "40031813",
       "text": "MARQUINA ESCALANTE CESAR FABIAN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40031813'"
      },
      {
       "value": "10001657",
       "text": "MERCADO CHUMPITASI PIERO CESAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '10001657'"
      },
      {
       "value": "44360734",
       "text": "MESONES HUAMAN PAULO CESAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '44360734'"
      },
      {
       "value": "2883536",
       "text": "NAVARRO SANCHEZ CESAR AUGUSTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '2883536'"
      },
      {
       "value": "42846238",
       "text": "PORTELLA PORTUGAL JORGE OSWALDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '42846238'"
      },
      {
       "value": "46560478",
       "text": "RAVELLO CUELLAR JORGE LUIS",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '46560478'"
      },
      {
       "value": "47260953",
       "text": "BALAREZO CANTELLA ALESSIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '47260953'"
      },
      {
       "value": "46356695",
       "text": "CASTAÑEDA PASTOR VICTOR ERNESTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '46356695'"
      },
      {
       "value": "47519255",
       "text": "CRISTOBAL MADRID GUSTAVO MARIO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '47519255'"
      },
      {
       "value": "25683170",
       "text": "FERNANDEZ AMAYA ROBERTO FELIX",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '25683170'"
      },
      {
       "value": "40687895",
       "text": "FLOR BALDEON RICHARD VINDER",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '40687895'"
      },
      {
       "value": "10182159",
       "text": "GALVEZ TAGLE CESAR EDMUNDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '10182159'"
      },
      {
       "value": "72963805",
       "text": "GAMARRA QUISPE LUIS ENRIQUE",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '72963805'"
      },
      {
       "value": "25682528",
       "text": "MANSILLA FARFAN JOSE LEONARDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '25682528'"
      },
      {
       "value": "10028844",
       "text": "MENESES RAMOS MARIA CONSUELO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '10028844'"
      },
      {
       "value": "45847315",
       "text": "PADILLA FIGUEROA NOEMI TATIANA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '45847315'"
      },
      {
       "value": "45938071",
       "text": "PATROCINIO CHOQUE JOSE ALFREDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '45938071'"
      },
      {
       "value": "47603529",
       "text": "PIZARRO ESPICHAN RONALD OMAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '47603529'"
      },
      {
       "value": "9924529",
       "text": "QUISPE GUTIERREZ RUTH GLORIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '9924529'"
      },
      {
       "value": "18215648",
       "text": "RODRIGUEZ REYNA ROBERTO MARTIN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '18215648'"
      },
      {
       "value": "72906586",
       "text": "ROJAS AHUMADA JOSE ANTONIO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '72906586'"
      },
      {
       "value": "8885370",
       "text": "SALAZAR ORE MARCOS ENRIQUE",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '8885370'"
      },
      {
       "value": "6813880",
       "text": "VILLAORDUÑA CARDENAS EVER JUSTINIANO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '6813880'"
      },
      {
       "value": "6162086",
       "text": "ZORRILLA PIO JOSE MARTIN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '6162086'"
      },
      {
       "value": "10860243",
       "text": "ALIAGA DUEÑAS GABRIELA SILVIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10860243'"
      },
      {
       "value": "10861110",
       "text": "ANGULO ARISTA SHEYLA JAKELEEN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10861110'"
      },
      {
       "value": "9885877",
       "text": "CABRERA VERDE JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '9885877'"
      },
      {
       "value": "42977491",
       "text": "CANARIO HUAROTO ABEL OMAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '42977491'"
      },
      {
       "value": "45642418",
       "text": "CASTRO VELASCO ROLANDO AGUSTIN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '45642418'"
      },
      {
       "value": "48053125",
       "text": "COLLANTES MIYASHIRO ZULEIKA YADIRA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '48053125'"
      },
      {
       "value": "40807560",
       "text": "DE LA CRUZ SALAZAR JHONY",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '40807560'"
      },
      {
       "value": "41080674",
       "text": "ESPINOZA LUNA YERKO ALFREDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '41080674'"
      },
      {
       "value": "44850775",
       "text": "FLORES ZULOETA JUAN CARLOS",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '44850775'"
      },
      {
       "value": "40000963",
       "text": "GARCIA HUAMANI ISABEL CRISTINA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '40000963'"
      },
      {
       "value": "47125982",
       "text": "GIRON RIOJA KIARA VICTORIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '47125982'"
      },
      {
       "value": "42410874",
       "text": "LAVADO BLAS EDWIN ADEMIR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '42410874'"
      },
      {
       "value": "44539637",
       "text": "LIMAS CRUZ JESUS EDUARDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '44539637'"
      },
      {
       "value": "10032439",
       "text": "MANGIER LIZAMA FRANKLIN ALBERTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10032439'"
      },
      {
       "value": "10612032",
       "text": "PIZARRO AQUINO AUGUSTO CARLOS",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10612032'"
      },
      {
       "value": "43743468",
       "text": "RUBINA AVILA ROBERTO JONATHAN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '43743468'"
      },
      {
       "value": "10622377",
       "text": "SAUSA CARRION REYNALDO ALEJANDRO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10622377'"
      },
      {
       "value": "49016868",
       "text": "CARDENAS SMITH MICHAEL ABRAHAM",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '49016868'"
      },
      {
       "value": "42011663",
       "text": "CUBAS RAMIREZ MIKY ADAN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '42011663'"
      },
      {
       "value": "5402391",
       "text": "ICOMENA GUERRA JOB DAVID",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '5402391'"
      },
      {
       "value": "43270715",
       "text": "MEJIA GONGORA JULLIER",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '43270715'"
      },
      {
       "value": "46721392",
       "text": "MUÑOZ MEDINA SARA PATRICIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '46721392'"
      },
      {
       "value": "47426857",
       "text": "SAAVEDRA VARGAS NATAHALY ROMINA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '47426857'"
      },
      {
       "value": "46724649",
       "text": "SANCHEZ GUTIERREZ RUBEN ISMAEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '46724649'"
      },
      {
       "value": "71532747",
       "text": "ARAUJO JULCA FERNANDO MANUEL",
       "visibleIf": "{select-colabs-from-area-COMPENSACIONES Y BENEFICIOS} contains '71532747'"
      },
      {
       "value": "46414993",
       "text": "MEDRANO NOBLECILLA FIORELLA SHARON",
       "visibleIf": "{select-colabs-from-area-COMPENSACIONES Y BENEFICIOS} contains '46414993'"
      },
      {
       "value": "72747159",
       "text": "MALDONADO LUNA DAYANA NATY",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '72747159'"
      },
      {
       "value": "75473478",
       "text": "MARTINEZ YARANGA YONE ALEXANDRA",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '75473478'"
      },
      {
       "value": "42183454",
       "text": "OTINIANO LOPEZ IRIS RAQUEL",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '42183454'"
      },
      {
       "value": "72883933",
       "text": "VILLANUEVA VALENCIA LILIBETH CRISTY",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '72883933'"
      },
      {
       "value": "47072568",
       "text": "ASTUÑAUPA NAJERA LUIS YONATAN",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '47072568'"
      },
      {
       "value": "40060377",
       "text": "ZAMORA TAPIA VIRNA IVETT",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '40060377'"
      },
      {
       "value": "74929399",
       "text": "FELIX MORALES WALTER HUBER",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '74929399'"
      },
      {
       "value": "71122395",
       "text": "QUISPE AYALA LEESLY ESTEFANY",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '71122395'"
      },
      {
       "value": "45833793",
       "text": "ARANDA SEVILLANO ROSIO",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '45833793'"
      },
      {
       "value": "71748333",
       "text": "CHAVEZ CORAL CRISTIAN ARMANDO",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '71748333'"
      },
      {
       "value": "72204506",
       "text": "REZZA PAJARES HILARY JOSELYN",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '72204506'"
      },
      {
       "value": "74635307",
       "text": "CAJAHUARINGA MACHUCA ZAMIRA CRISTINA",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '74635307'"
      },
      {
       "value": "44444130",
       "text": "YATACO CASTILLO JOSE ALFREDO",
       "visibleIf": "{select-colabs-from-area-CONTROL DE GESTION} contains '44444130'"
      },
      {
       "value": "70124696",
       "text": "VILLENA NAVARRO CARLOS ENRIQUE",
       "visibleIf": "{select-colabs-from-area-CONTROL DE GESTION} contains '70124696'"
      },
      {
       "value": "76156527",
       "text": "PANDURO BARRANTES JUAN DIEGO",
       "visibleIf": "{select-colabs-from-area-CONTROL DE GESTION} contains '76156527'"
      },
      {
       "value": "9956020",
       "text": "BAUTISTA QUINTANILLA JESSICA JUDITH",
       "visibleIf": "{select-colabs-from-area-CREDITOS} contains '9956020'"
      },
      {
       "value": "2833264",
       "text": "HIDALGO CHAVEZ LUIS FELIPE",
       "visibleIf": "{select-colabs-from-area-CREDITOS} contains '2833264'"
      },
      {
       "value": "76479059",
       "text": "SANCHEZ ROBLEDO ALEXIS SANTINO",
       "visibleIf": "{select-colabs-from-area-CREDITOS} contains '76479059'"
      },
      {
       "value": "40803796",
       "text": "SHIKIYA HURTADO ANA TERESA",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '40803796'"
      },
      {
       "value": "47314100",
       "text": "HINOSTROZA HUANAY LUCIA DEL CARMEN",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '47314100'"
      },
      {
       "value": "41797768",
       "text": "MEDRANO NECOCHEA VICTOR JAVIER",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '41797768'"
      },
      {
       "value": "73657312",
       "text": "TALLEDO NAVARRO PAMELA",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '73657312'"
      },
      {
       "value": "10558194",
       "text": "LARRABURE PEREZ WILSON RICARDO",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '10558194'"
      },
      {
       "value": "47837733",
       "text": "PANDURO FERNANDEZ GIAN PIERRE",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '47837733'"
      },
      {
       "value": "45519571",
       "text": "VIZCARDO PANCORVO JUAN JOSE",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '45519571'"
      },
      {
       "value": "6543622",
       "text": "FORSYTH ALARCO JUAN ALBERTO",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '6543622'"
      },
      {
       "value": "6543619",
       "text": "FORSYTH RIVAROLA JUAN ALBERTO FELIPE",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '6543619'"
      },
      {
       "value": "6430409",
       "text": "OCHOA CHAUCA PABLO CESAR",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '6430409'"
      },
      {
       "value": "25800748",
       "text": "QUIROZ AVILA HENRY",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '25800748'"
      },
      {
       "value": "19996041",
       "text": "SOLIS CALDERON HECTOR ELEODORO",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '19996041'"
      },
      {
       "value": "42915146",
       "text": "PIZARRO ZAPATA BENJAMIN JESUS",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '42915146'"
      },
      {
       "value": "9302319",
       "text": "KALINOWSKI BARCLAY VIRNA LUZ",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '9302319'"
      },
      {
       "value": "10476350",
       "text": "AMEGHINO ANDALUZ GIANCARLO",
       "visibleIf": "{select-colabs-from-area-GESTIÓN Y DESARROLLO HUMANO} contains '10476350'"
      },
      {
       "value": "44647618",
       "text": "EDEN VILLEGAS OMAR ALEJANDRO",
       "visibleIf": "{select-colabs-from-area-IMPORTACIONES} contains '44647618'"
      },
      {
       "value": "70193596",
       "text": "KIWAKI ARAUCO AKEMI LUZ",
       "visibleIf": "{select-colabs-from-area-IMPORTACIONES} contains '70193596'"
      },
      {
       "value": "48588559",
       "text": "ZAPATA CORTEZ STEPHANIE",
       "visibleIf": "{select-colabs-from-area-IMPORTACIONES} contains '48588559'"
      },
      {
       "value": "45335304",
       "text": "CHAVEZ OTINIANO LORENA JHAZMIN",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '45335304'"
      },
      {
       "value": "41727660",
       "text": "MARCELO CELEDONIO LUIS CARLOS",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '41727660'"
      },
      {
       "value": "8035974",
       "text": "MARTINEZ SANCHEZ FREDDY AUGUSTO",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '8035974'"
      },
      {
       "value": "46761555",
       "text": "GAMARRA CASTILLO URIEL LEANDRO",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '46761555'"
      },
      {
       "value": "75267982",
       "text": "CAMACHO YACSAHUACHE GABRIEL ANTAR",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '75267982'"
      },
      {
       "value": "77575494",
       "text": "RAMIREZ SILVA MELANNY DENISSE",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '77575494'"
      },
      {
       "value": "44363769",
       "text": "PEÑA TORRES LUISA RICARDINA",
       "visibleIf": "{select-colabs-from-area-INNOVACION Y PROCESOS} contains '44363769'"
      },
      {
       "value": "47486524",
       "text": "CHINCHA MATA STEVEN BRYANT",
       "visibleIf": "{select-colabs-from-area-INNOVACION Y PROCESOS} contains '47486524'"
      },
      {
       "value": "70289458",
       "text": "VILCAHUAMAN VALDIVIESO IAN RAUL",
       "visibleIf": "{select-colabs-from-area-INNOVACION Y PROCESOS} contains '70289458'"
      },
      {
       "value": "40449992",
       "text": "CORREA VERGARA MARIA DEL CARMEN",
       "visibleIf": "{select-colabs-from-area-LEGAL} contains '40449992'"
      },
      {
       "value": "45073283",
       "text": "VELEZ DE VILLA YUPANQUI CINDY MARLENY",
       "visibleIf": "{select-colabs-from-area-LEGAL} contains '45073283'"
      },
      {
       "value": "70609901",
       "text": "SABOYA CORDOVA INTI CATARI",
       "visibleIf": "{select-colabs-from-area-LEGAL} contains '70609901'"
      },
      {
       "value": "82466",
       "text": "DEL AGUILA HIDALGO SAMUEL",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '82466'"
      },
      {
       "value": "40646048",
       "text": "JIMENEZ ASPILCUETA JOEL",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '40646048'"
      },
      {
       "value": "42850407",
       "text": "MALASQUEZ GARCIA ALDO LEONARDO",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '42850407'"
      },
      {
       "value": "10744655",
       "text": "CONEJO GUARDAMINO JOE MIGUEL",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '10744655'"
      },
      {
       "value": "45613368",
       "text": "SILVA VASQUEZ DEIVID CRISTHIAN",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '45613368'"
      },
      {
       "value": "45092398",
       "text": "MENZALA ORTEGA ALEX RODOLFO",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '45092398'"
      },
      {
       "value": "47154147",
       "text": "CHUMPITAZI BARRETO DIEGO JESUS",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '47154147'"
      },
      {
       "value": "45256809",
       "text": "CHEAN RUIZ SERGIO",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '45256809'"
      },
      {
       "value": "40006296",
       "text": "RUIZ FLORES LUZ GISSELLA",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '40006296'"
      },
      {
       "value": "44871244",
       "text": "BLUDAU TUPAC YUPANQUI JAN HENRY",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '44871244'"
      },
      {
       "value": "43569973",
       "text": "DELGADO UNDA RENZO JESUS",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '43569973'"
      },
      {
       "value": "74438666",
       "text": "COTRINA VERANO VIVIANA PURITA",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '74438666'"
      },
      {
       "value": "72191719",
       "text": "CURI GRADOS ELVIS RICARDO PIERO",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '72191719'"
      },
      {
       "value": "10672242",
       "text": "BALCAZER LOLI LIBER MARTIN",
       "visibleIf": "{select-colabs-from-area-OPERACIONES} contains '10672242'"
      },
      {
       "value": "47845515",
       "text": "TORO PALOMINO GIANCARLO EDINSON",
       "visibleIf": "{select-colabs-from-area-OPERACIONES} contains '47845515'"
      },
      {
       "value": "2899681",
       "text": "SALAS PEZUA HAROLD ALBERTO",
       "visibleIf": "{select-colabs-from-area-OPERACIONES} contains '2899681'"
      },
      {
       "value": "8247662",
       "text": "REYES BENAVIDES MELSI ELIZABETH",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '8247662'"
      },
      {
       "value": "70944487",
       "text": "BARRIENTOS TAPIA LAURA LUCIA",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '70944487'"
      },
      {
       "value": "10459679",
       "text": "JUAREZ CRUZ GUSTAVO ERWIN",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '10459679'"
      },
      {
       "value": "43068853",
       "text": "BUENDIA GRAZIANI GUSTAVO ADOLFO",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '43068853'"
      },
      {
       "value": "46457171",
       "text": "RODRIGUEZ PAREDES BRENDA ALEJANDRA",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '46457171'"
      },
      {
       "value": "73087145",
       "text": "ORIHUELA BEJARANO PATRICIA KENDY",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '73087145'"
      },
      {
       "value": "44652717",
       "text": "VELASQUEZ SALDAÑA WILMER GERARDO",
       "visibleIf": "{select-colabs-from-area-PLANILLAS} contains '44652717'"
      },
      {
       "value": "43308092",
       "text": "JURADO HUAMAN JOJHANSON FERNANDO",
       "visibleIf": "{select-colabs-from-area-PLANILLAS} contains '43308092'"
      },
      {
       "value": "72894842",
       "text": "DAVILA MUÑOZ FIORELLA ESTEFANY",
       "visibleIf": "{select-colabs-from-area-PLANILLAS} contains '72894842'"
      },
      {
       "value": "10741277",
       "text": "MORILLO MACHADO JUAN RENE",
       "visibleIf": "{select-colabs-from-area-SEGURIDAD} contains '10741277'"
      },
      {
       "value": "40715092",
       "text": "DIAZ CAMPOS ARTURO",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '40715092'"
      },
      {
       "value": "10004335",
       "text": "BRINGAS PROCHAZKA SANDRA SILVANA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '10004335'"
      },
      {
       "value": "6771922",
       "text": "RODRIGUEZ CARPIO RUTH SELENE",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '6771922'"
      },
      {
       "value": "9865016",
       "text": "VARGAS PEÑA ERICK",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '9865016'"
      },
      {
       "value": "45453006",
       "text": "SALVADOR SALVADOR ERIC DEIBY",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '45453006'"
      },
      {
       "value": "72306819",
       "text": "ACUÑA VENTO MILENY SHERYL",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '72306819'"
      },
      {
       "value": "46286135",
       "text": "FLORES FERNANDEZ CLAUDIA CECILIA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '46286135'"
      },
      {
       "value": "45938129",
       "text": "ALBA SANCHEZ DIANA CAROLINA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '45938129'"
      },
      {
       "value": "47484915",
       "text": "PUMA RAMOS BRAYAN CRISTIAN",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '47484915'"
      },
      {
       "value": "44482449",
       "text": "LOPEZ AGUIRRE JAVIER JESUS",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '44482449'"
      },
      {
       "value": "46316278",
       "text": "CHAVEZ CONDE SMITH JOSEPH",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '46316278'"
      },
      {
       "value": "73634296",
       "text": "CALDERON TORRES MARTIN MAURICIO",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '73634296'"
      },
      {
       "value": "47437046",
       "text": "MORI CUENCA KATTYA LIZBETH",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '47437046'"
      },
      {
       "value": "74158343",
       "text": "MEDINA ESPINOZA ANGELICA MILAGROS ANTONIETA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '74158343'"
      },
      {
       "value": "40241539",
       "text": "RAMIREZ ZEVALLOS JOSE MIGUEL",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '40241539'"
      },
      {
       "value": "40487202",
       "text": "CONDOR CASTILLO JUAN HARRY",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '40487202'"
      },
      {
       "value": "7488058",
       "text": "CABANA BUITRON WILBER CELEDONIO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '7488058'"
      },
      {
       "value": "47805975",
       "text": "CARDENAS HUAMANI EDWIN JAVIER",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '47805975'"
      },
      {
       "value": "73875549",
       "text": "JIHUA TAPAHUASCO JUAN JOSE",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '73875549'"
      },
      {
       "value": "43077392",
       "text": "RUIZ VASQUEZ SANDRO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '43077392'"
      },
      {
       "value": "47036204",
       "text": "GOMEZ CACHA JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '47036204'"
      },
      {
       "value": "41261260",
       "text": "RIVERA QUISPE MARTIN JULIO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '41261260'"
      },
      {
       "value": "44954065",
       "text": "GAMBOA QUILICHE DANILO MAX",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '44954065'"
      },
      {
       "value": "70319277",
       "text": "LUPUCHE SILVA ELISEO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '70319277'"
      },
      {
       "value": "25817327",
       "text": "AYALA CHIROQUE LUIS",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '25817327'"
      },
      {
       "value": "9620603",
       "text": "CANALES CORBETTA HERNAN JAVIER",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '9620603'"
      },
      {
       "value": "25444867",
       "text": "CARHUAPOMA FLORES HERNAN JAIME",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '25444867'"
      },
      {
       "value": "9555005",
       "text": "YUPANQUI ALARCON FERMIN",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '9555005'"
      },
      {
       "value": "7508404",
       "text": "NAUPARI HURTADO RAFAEL",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '7508404'"
      },
      {
       "value": "43909967",
       "text": "SOSA SAN MARTIN PEDRO MANUEL",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '43909967'"
      },
      {
       "value": "44829465",
       "text": "CASTELLARES CUYA ENRIQUE LUIS",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '44829465'"
      },
      {
       "value": "25720478",
       "text": "BAZALAR PIZARRO EDUARDO GONZALO",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '25720478'"
      },
      {
       "value": "7262835",
       "text": "RODRIGUEZ PORRAS JUAN CARLOS",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '7262835'"
      },
      {
       "value": "43220913",
       "text": "DE LA CRUZ PAUCAR LUZ JUDITH",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '43220913'"
      },
      {
       "value": "44646487",
       "text": "PANDO GUILLEN EDITH IVET",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '44646487'"
      },
      {
       "value": "73824248",
       "text": "CANO ÑATO PILAR SOLEDAD",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '73824248'"
      },
      {
       "value": "73983886",
       "text": "OTOYA SILVA CLAUDIA FIORELA",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '73983886'"
      },
      {
       "value": "47257757",
       "text": "HENDRICK HURTADO SHIRLEY MILAGROS",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '47257757'"
      }
     ]
    },
    {
     "type": "matrix",
     "name": "evaluate-colabs-from-pilar-Vivimos y disfrutamosb",
     "title": "Vivimos y disfrutamos",
     "description": "Es una persona que busca relacionarse con el resto de sus compañeros y siempre está dispuesto a trabajar en equipo. Respeta a los demás y ve en el logro de uno, el logro de todos.",
     "columns": [
      "1",
      "2",
      "3",
      "4",
      "5"
     ],
     "rows": [
      {
       "value": "2845348",
       "text": "SEMINARIO REUSCHE MARTIN HERNAN",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '2845348'"
      },
      {
       "value": "72505476",
       "text": "PARIONA ANDRADE JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '72505476'"
      },
      {
       "value": "40802587",
       "text": "NUÑEZ VERA DANTE EDUARDO RANJIT",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '40802587'"
      },
      {
       "value": "48038893",
       "text": "GALOPINO ANCAJIMA SHARON GERALDINNE",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '48038893'"
      },
      {
       "value": "16757835",
       "text": "VELEZ ZAMORA ANTONIO HUMBERTO",
       "visibleIf": "{select-colabs-from-area-ADMINISTRACION Y FINANZAS} contains '16757835'"
      },
      {
       "value": "40335197",
       "text": "LOVEDAY MEJIA CHRISTIAN",
       "visibleIf": "{select-colabs-from-area-ALIANZAS COMERCIALES} contains '40335197'"
      },
      {
       "value": "72635353",
       "text": "SOTOMAYOR WOOLCOTT KENNETHY SONJA",
       "visibleIf": "{select-colabs-from-area-ALIANZAS COMERCIALES} contains '72635353'"
      },
      {
       "value": "32738701",
       "text": "CAHUA SALAZAR DANIEL SALVADOR",
       "visibleIf": "{select-colabs-from-area-ALMACEN DE DOCUMENTOS} contains '32738701'"
      },
      {
       "value": "71996517",
       "text": "CAHUA TORRES SEBASTIAN ALEJANDRO",
       "visibleIf": "{select-colabs-from-area-ALMACEN DE DOCUMENTOS} contains '71996517'"
      },
      {
       "value": "72029026",
       "text": "CIENFUEGOS GAMBOA JOHN PETHER",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '72029026'"
      },
      {
       "value": "43489421",
       "text": "ALEJANDRIA ZAPATA LUIS ALBERTO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43489421'"
      },
      {
       "value": "46409441",
       "text": "BASTIDAS ORELLANA EDWIN YOEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46409441'"
      },
      {
       "value": "45176954",
       "text": "CACERES GARCIA DIEGO ANGEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45176954'"
      },
      {
       "value": "40986494",
       "text": "CARHUAPOMA FLORES JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '40986494'"
      },
      {
       "value": "76348533",
       "text": "CASTILLO MARTINEZ KEVIN JOSE",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '76348533'"
      },
      {
       "value": "42654496",
       "text": "CASTRO ARRASCO JOVER SMIT",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '42654496'"
      },
      {
       "value": "42053463",
       "text": "DICHE PAREDES CLODOALDO ABRAHAM",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '42053463'"
      },
      {
       "value": "47216327",
       "text": "LEVANO RODRIGUEZ JOSIMAR WILFREDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '47216327'"
      },
      {
       "value": "4081715",
       "text": "MELGAREJO HIDALGO JUAN MANUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '4081715'"
      },
      {
       "value": "80106120",
       "text": "RIVERA VASQUEZ MARTIN RODOLFO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '80106120'"
      },
      {
       "value": "48584092",
       "text": "RUIZ PAZ LUIS ANGEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '48584092'"
      },
      {
       "value": "10085191",
       "text": "TORRES SURITA YSOCERES AUDON",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '10085191'"
      },
      {
       "value": "70327335",
       "text": "UGAZ BASTANTE BRUNO EDUARDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70327335'"
      },
      {
       "value": "46722514",
       "text": "RAMOS CORONADO LUIS GUSTAVO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46722514'"
      },
      {
       "value": "47023258",
       "text": "GUTIERREZ URBINA CESAR ALFONSO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '47023258'"
      },
      {
       "value": "70272674",
       "text": "SANDOVAL GONZALES MARCELO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70272674'"
      },
      {
       "value": "43993340",
       "text": "PERALES QUINTANA CARLOS EMILIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43993340'"
      },
      {
       "value": "43632179",
       "text": "ALIAGA RAMIREZ FREDDY ALEXANDER",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43632179'"
      },
      {
       "value": "42946534",
       "text": "CORREA HUAMAN JHONY RAUL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '42946534'"
      },
      {
       "value": "6432246",
       "text": "PEREZ MOSQUERA BARNAD DY FELIX",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '6432246'"
      },
      {
       "value": "43959477",
       "text": "ASTOCONDOR MOLINA JOSE MIGUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43959477'"
      },
      {
       "value": "48484614",
       "text": "TAIPE HUAIRA YOBER YONATAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '48484614'"
      },
      {
       "value": "44138783",
       "text": "GUEVARA CIEZA ANNER MIGUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '44138783'"
      },
      {
       "value": "72730699",
       "text": "SANTIVAÑEZ GOÑEZ GEANPIERRE",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '72730699'"
      },
      {
       "value": "45168261",
       "text": "CHAUCA MILIAN JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45168261'"
      },
      {
       "value": "73572438",
       "text": "BAUTISTA SOTOMAYOR ALDAIR ESMIR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '73572438'"
      },
      {
       "value": "77271310",
       "text": "TORBISCO ALVARADO JESUS ALEX",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '77271310'"
      },
      {
       "value": "70654934",
       "text": "SANTAMARIA CHINCHAY JUNIOR EDUARDO DARIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70654934'"
      },
      {
       "value": "45165391",
       "text": "MORENO PEREZ JORGE ARMANDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45165391'"
      },
      {
       "value": "70929727",
       "text": "QUISPE LEON LUIS BRAYAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70929727'"
      },
      {
       "value": "72571571",
       "text": "RAMOS PEÑA JOSE MANUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '72571571'"
      },
      {
       "value": "4747804",
       "text": "Yusmelis Del Valle Diaz",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '4747804'"
      },
      {
       "value": "3885974",
       "text": "COA MUÑOZ OLVELIS KAROLINA",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '3885974'"
      },
      {
       "value": "44725608",
       "text": "HUIDOBRO SOSA DARWINS ALBERTO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '44725608'"
      },
      {
       "value": "70043083",
       "text": "RUESTA MENDOZA KEVIN BRYAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70043083'"
      },
      {
       "value": "60898227",
       "text": "BALDEON DIAZ VICENTE PAUL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '60898227'"
      },
      {
       "value": "48918807",
       "text": "DIAZ GUTIERREZ ARMANDO ALONSO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '48918807'"
      },
      {
       "value": "41964218",
       "text": "PALACIOS CARRILLO RONALD ALFREDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '41964218'"
      },
      {
       "value": "40164421",
       "text": "GAMARRA PINEDO JORGE ANTONIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '40164421'"
      },
      {
       "value": "3029052",
       "text": "ZERPA REYES HECTOR JOSE GREGORIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '3029052'"
      },
      {
       "value": "44420443",
       "text": "RAMOS SANDOVAL CARLOS EDUARDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '44420443'"
      },
      {
       "value": "46943958",
       "text": "CHAMORRO GERONIMO ALISON JONATHAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46943958'"
      },
      {
       "value": "41916191",
       "text": "NEYRA SILVA JORGE ALEXANDER",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '41916191'"
      },
      {
       "value": "71427195",
       "text": "CALDERON RODAS CRISTIAN OMAR ANTHONY",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '71427195'"
      },
      {
       "value": "45653891",
       "text": "PRINCIPE VASQUEZ ABRAHAM ANTONIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45653891'"
      },
      {
       "value": "46564768",
       "text": "PAEZ LLORONA YOEL RICARDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46564768'"
      },
      {
       "value": "74157431",
       "text": "CANAYO MARAPARA JUAN CARLOS",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '74157431'"
      },
      {
       "value": "46887147",
       "text": "CHANG MAICEL ANGEL ENRIQUE",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46887147'"
      },
      {
       "value": "71342771",
       "text": "AGUIRRE SILVA PAOLO FRANCESCO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '71342771'"
      },
      {
       "value": "41051204",
       "text": "SAAVEDRA LUCANO SEGUNDO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '41051204'"
      },
      {
       "value": "74303496",
       "text": "GOMEZ HERRERA RUBEN JESUS",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '74303496'"
      },
      {
       "value": "43538545",
       "text": "AGURTO OBREGON CESAR VICTORINO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '43538545'"
      },
      {
       "value": "47622051",
       "text": "ASPAJO LLERENA JOAQUIN AMADO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '47622051'"
      },
      {
       "value": "45314983",
       "text": "BARTRA VELA KELMER ALAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '45314983'"
      },
      {
       "value": "46074034",
       "text": "BENITES SILVA JONATHAN ANGEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '46074034'"
      },
      {
       "value": "25846925",
       "text": "CABRERA MAURTUA JAIME ALONSO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '25846925'"
      },
      {
       "value": "71258662",
       "text": "CARDENAS SHUAN JORGE FERNANDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '71258662'"
      },
      {
       "value": "41852611",
       "text": "CORDOVA CASTRO WILSSON STARLEY",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '41852611'"
      },
      {
       "value": "45189828",
       "text": "CORDOVA PASACHE JESUS MANUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '45189828'"
      },
      {
       "value": "77300330",
       "text": "ESCOBEDO SANTA CRUZ HENRRY BRAYAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '77300330'"
      },
      {
       "value": "41916922",
       "text": "FLORES FERREYRA JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '41916922'"
      },
      {
       "value": "48101536",
       "text": "LOAYZA VASQUEZ CARLOS ALFREDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '48101536'"
      },
      {
       "value": "72204123",
       "text": "MANRIQUE LOPEZ JHON LUIS",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '72204123'"
      },
      {
       "value": "7735664",
       "text": "PACHAS LAZO LIZANDRO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '7735664'"
      },
      {
       "value": "47531304",
       "text": "PACHECO HIDALGO DAVID VLADIMIR",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '47531304'"
      },
      {
       "value": "7641667",
       "text": "PARRA FERNANDEZ ANDRES PEDRO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '7641667'"
      },
      {
       "value": "42249673",
       "text": "RAMIREZ OBREGON OSCAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '42249673'"
      },
      {
       "value": "43082794",
       "text": "RAMOS CAMASITA CELSO ESTANISLAO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '43082794'"
      },
      {
       "value": "42443873",
       "text": "REAL AVALOS NILTON JAVIER",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '42443873'"
      },
      {
       "value": "6542042",
       "text": "RODRIGUEZ VASQUEZ ORLANDO EUGENIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '6542042'"
      },
      {
       "value": "48222926",
       "text": "SALAZAR LLAJA DEIBIS JHONATAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '48222926'"
      },
      {
       "value": "72009438",
       "text": "SANDOVAL LEYVA GERSON TINO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '72009438'"
      },
      {
       "value": "74543283",
       "text": "SUAREZ VALERIO LENER JACKSON",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '74543283'"
      },
      {
       "value": "72848198",
       "text": "TEJADA ROMERO MARIO SIXTO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '72848198'"
      },
      {
       "value": "70055383",
       "text": "CHOKEWANCA BLANCO PAMELA",
       "visibleIf": "{select-colabs-from-area-ATRACCION Y DESARROLLO} contains '70055383'"
      },
      {
       "value": "46277915",
       "text": "VILLACORTA TARDIO ALENE ELIZABETH",
       "visibleIf": "{select-colabs-from-area-ATRACCION Y DESARROLLO} contains '46277915'"
      },
      {
       "value": "43772138",
       "text": "RODRIGUEZ CONTRERAS CLAUDIA ALEJANDRA",
       "visibleIf": "{select-colabs-from-area-AUDITORIA INTERNA} contains '43772138'"
      },
      {
       "value": "48315976",
       "text": "RODRIGUEZ AGREDA DIANA KATHERINE",
       "visibleIf": "{select-colabs-from-area-AUDITORIA INTERNA} contains '48315976'"
      },
      {
       "value": "47797685",
       "text": "OLIVARES CERNA KENJE BRIGGIT",
       "visibleIf": "{select-colabs-from-area-AUDITORIA INTERNA} contains '47797685'"
      },
      {
       "value": "10792396",
       "text": "MANRIQUE RAMOS WILLARD MARTIN",
       "visibleIf": "{select-colabs-from-area-AUTOMOTRIZ} contains '10792396'"
      },
      {
       "value": "7629078",
       "text": "ROMANET GALVAN RICARDO CARLOS",
       "visibleIf": "{select-colabs-from-area-AUTOMOTRIZ} contains '7629078'"
      },
      {
       "value": "70976479",
       "text": "MONCADA COLE MARIA ALEJANDRA",
       "visibleIf": "{select-colabs-from-area-AUTOMOTRIZ} contains '70976479'"
      },
      {
       "value": "41345981",
       "text": "MONTEVERDE LUQUE ZARELLA LIZBETH",
       "visibleIf": "{select-colabs-from-area-BIENESTAR Y SSOMA} contains '41345981'"
      },
      {
       "value": "45929767",
       "text": "VILLANUEVA BRUNO JEANCARLO DINO",
       "visibleIf": "{select-colabs-from-area-BIENESTAR Y SSOMA} contains '45929767'"
      },
      {
       "value": "10686006",
       "text": "ALARCON RODRIGUEZ LORELAY EVELYN",
       "visibleIf": "{select-colabs-from-area-BIENESTAR Y SSOMA} contains '10686006'"
      },
      {
       "value": "10136205",
       "text": "GHIGLINO ECHEGARAY JORGE LUIS",
       "visibleIf": "{select-colabs-from-area-CFO} contains '10136205'"
      },
      {
       "value": "10152944",
       "text": "ORTIZ RODAS GABRIELA ISABEL",
       "visibleIf": "{select-colabs-from-area-CFO} contains '10152944'"
      },
      {
       "value": "71242989",
       "text": "VARGAS SOLIS ROXANA MARIBEL",
       "visibleIf": "{select-colabs-from-area-CFO} contains '71242989'"
      },
      {
       "value": "72971290",
       "text": "PAJUELO MUÑOZ ARIEL RUBEN",
       "visibleIf": "{select-colabs-from-area-CFO} contains '72971290'"
      },
      {
       "value": "40323364",
       "text": "ROSADIO BENDEZU MARCO ANTONIO",
       "visibleIf": "{select-colabs-from-area-CFO} contains '40323364'"
      },
      {
       "value": "71539402",
       "text": "ESPINOZA PRINCIPE TIMOTEO JEFFERSON",
       "visibleIf": "{select-colabs-from-area-CFO} contains '71539402'"
      },
      {
       "value": "40485772",
       "text": "ANTON HUACHES CARLOS FELIPE",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40485772'"
      },
      {
       "value": "7504002",
       "text": "ARMAS DURAND MARIA ISABEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '7504002'"
      },
      {
       "value": "40153974",
       "text": "CARO TOMANGUILLA JIMMY GANDY",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40153974'"
      },
      {
       "value": "40560274",
       "text": "CARPIO MAINZA KARLA MAGALI",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40560274'"
      },
      {
       "value": "42434684",
       "text": "CUADROS AQUINO ARELIZ ESTRELLA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '42434684'"
      },
      {
       "value": "70002376",
       "text": "CURAY RODRIGUEZ NICOLE XIOMARA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '70002376'"
      },
      {
       "value": "5353330",
       "text": "DEL AGUILA UTIA JUAN MANUEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '5353330'"
      },
      {
       "value": "2816473",
       "text": "DELFIN CALDERON HERMINIA VICTORIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '2816473'"
      },
      {
       "value": "70442257",
       "text": "DIAZ LOPEZ MIRELLA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '70442257'"
      },
      {
       "value": "40432801",
       "text": "DIAZ TEJADA ELIANA CAROLINA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40432801'"
      },
      {
       "value": "43715528",
       "text": "FERNANDEZ ROSALES HAROLD PETTER",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '43715528'"
      },
      {
       "value": "46195520",
       "text": "HUAPAYA TAFUR LUIS ALBERTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '46195520'"
      },
      {
       "value": "6078620",
       "text": "JIMENEZ JULCA MIGUEL ANGEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '6078620'"
      },
      {
       "value": "40031813",
       "text": "MARQUINA ESCALANTE CESAR FABIAN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40031813'"
      },
      {
       "value": "10001657",
       "text": "MERCADO CHUMPITASI PIERO CESAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '10001657'"
      },
      {
       "value": "44360734",
       "text": "MESONES HUAMAN PAULO CESAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '44360734'"
      },
      {
       "value": "2883536",
       "text": "NAVARRO SANCHEZ CESAR AUGUSTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '2883536'"
      },
      {
       "value": "42846238",
       "text": "PORTELLA PORTUGAL JORGE OSWALDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '42846238'"
      },
      {
       "value": "46560478",
       "text": "RAVELLO CUELLAR JORGE LUIS",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '46560478'"
      },
      {
       "value": "47260953",
       "text": "BALAREZO CANTELLA ALESSIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '47260953'"
      },
      {
       "value": "46356695",
       "text": "CASTAÑEDA PASTOR VICTOR ERNESTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '46356695'"
      },
      {
       "value": "47519255",
       "text": "CRISTOBAL MADRID GUSTAVO MARIO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '47519255'"
      },
      {
       "value": "25683170",
       "text": "FERNANDEZ AMAYA ROBERTO FELIX",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '25683170'"
      },
      {
       "value": "40687895",
       "text": "FLOR BALDEON RICHARD VINDER",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '40687895'"
      },
      {
       "value": "10182159",
       "text": "GALVEZ TAGLE CESAR EDMUNDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '10182159'"
      },
      {
       "value": "72963805",
       "text": "GAMARRA QUISPE LUIS ENRIQUE",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '72963805'"
      },
      {
       "value": "25682528",
       "text": "MANSILLA FARFAN JOSE LEONARDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '25682528'"
      },
      {
       "value": "10028844",
       "text": "MENESES RAMOS MARIA CONSUELO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '10028844'"
      },
      {
       "value": "45847315",
       "text": "PADILLA FIGUEROA NOEMI TATIANA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '45847315'"
      },
      {
       "value": "45938071",
       "text": "PATROCINIO CHOQUE JOSE ALFREDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '45938071'"
      },
      {
       "value": "47603529",
       "text": "PIZARRO ESPICHAN RONALD OMAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '47603529'"
      },
      {
       "value": "9924529",
       "text": "QUISPE GUTIERREZ RUTH GLORIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '9924529'"
      },
      {
       "value": "18215648",
       "text": "RODRIGUEZ REYNA ROBERTO MARTIN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '18215648'"
      },
      {
       "value": "72906586",
       "text": "ROJAS AHUMADA JOSE ANTONIO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '72906586'"
      },
      {
       "value": "8885370",
       "text": "SALAZAR ORE MARCOS ENRIQUE",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '8885370'"
      },
      {
       "value": "6813880",
       "text": "VILLAORDUÑA CARDENAS EVER JUSTINIANO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '6813880'"
      },
      {
       "value": "6162086",
       "text": "ZORRILLA PIO JOSE MARTIN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '6162086'"
      },
      {
       "value": "10860243",
       "text": "ALIAGA DUEÑAS GABRIELA SILVIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10860243'"
      },
      {
       "value": "10861110",
       "text": "ANGULO ARISTA SHEYLA JAKELEEN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10861110'"
      },
      {
       "value": "9885877",
       "text": "CABRERA VERDE JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '9885877'"
      },
      {
       "value": "42977491",
       "text": "CANARIO HUAROTO ABEL OMAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '42977491'"
      },
      {
       "value": "45642418",
       "text": "CASTRO VELASCO ROLANDO AGUSTIN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '45642418'"
      },
      {
       "value": "48053125",
       "text": "COLLANTES MIYASHIRO ZULEIKA YADIRA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '48053125'"
      },
      {
       "value": "40807560",
       "text": "DE LA CRUZ SALAZAR JHONY",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '40807560'"
      },
      {
       "value": "41080674",
       "text": "ESPINOZA LUNA YERKO ALFREDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '41080674'"
      },
      {
       "value": "44850775",
       "text": "FLORES ZULOETA JUAN CARLOS",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '44850775'"
      },
      {
       "value": "40000963",
       "text": "GARCIA HUAMANI ISABEL CRISTINA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '40000963'"
      },
      {
       "value": "47125982",
       "text": "GIRON RIOJA KIARA VICTORIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '47125982'"
      },
      {
       "value": "42410874",
       "text": "LAVADO BLAS EDWIN ADEMIR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '42410874'"
      },
      {
       "value": "44539637",
       "text": "LIMAS CRUZ JESUS EDUARDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '44539637'"
      },
      {
       "value": "10032439",
       "text": "MANGIER LIZAMA FRANKLIN ALBERTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10032439'"
      },
      {
       "value": "10612032",
       "text": "PIZARRO AQUINO AUGUSTO CARLOS",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10612032'"
      },
      {
       "value": "43743468",
       "text": "RUBINA AVILA ROBERTO JONATHAN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '43743468'"
      },
      {
       "value": "10622377",
       "text": "SAUSA CARRION REYNALDO ALEJANDRO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10622377'"
      },
      {
       "value": "49016868",
       "text": "CARDENAS SMITH MICHAEL ABRAHAM",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '49016868'"
      },
      {
       "value": "42011663",
       "text": "CUBAS RAMIREZ MIKY ADAN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '42011663'"
      },
      {
       "value": "5402391",
       "text": "ICOMENA GUERRA JOB DAVID",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '5402391'"
      },
      {
       "value": "43270715",
       "text": "MEJIA GONGORA JULLIER",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '43270715'"
      },
      {
       "value": "46721392",
       "text": "MUÑOZ MEDINA SARA PATRICIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '46721392'"
      },
      {
       "value": "47426857",
       "text": "SAAVEDRA VARGAS NATAHALY ROMINA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '47426857'"
      },
      {
       "value": "46724649",
       "text": "SANCHEZ GUTIERREZ RUBEN ISMAEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '46724649'"
      },
      {
       "value": "71532747",
       "text": "ARAUJO JULCA FERNANDO MANUEL",
       "visibleIf": "{select-colabs-from-area-COMPENSACIONES Y BENEFICIOS} contains '71532747'"
      },
      {
       "value": "46414993",
       "text": "MEDRANO NOBLECILLA FIORELLA SHARON",
       "visibleIf": "{select-colabs-from-area-COMPENSACIONES Y BENEFICIOS} contains '46414993'"
      },
      {
       "value": "72747159",
       "text": "MALDONADO LUNA DAYANA NATY",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '72747159'"
      },
      {
       "value": "75473478",
       "text": "MARTINEZ YARANGA YONE ALEXANDRA",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '75473478'"
      },
      {
       "value": "42183454",
       "text": "OTINIANO LOPEZ IRIS RAQUEL",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '42183454'"
      },
      {
       "value": "72883933",
       "text": "VILLANUEVA VALENCIA LILIBETH CRISTY",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '72883933'"
      },
      {
       "value": "47072568",
       "text": "ASTUÑAUPA NAJERA LUIS YONATAN",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '47072568'"
      },
      {
       "value": "40060377",
       "text": "ZAMORA TAPIA VIRNA IVETT",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '40060377'"
      },
      {
       "value": "74929399",
       "text": "FELIX MORALES WALTER HUBER",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '74929399'"
      },
      {
       "value": "71122395",
       "text": "QUISPE AYALA LEESLY ESTEFANY",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '71122395'"
      },
      {
       "value": "45833793",
       "text": "ARANDA SEVILLANO ROSIO",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '45833793'"
      },
      {
       "value": "71748333",
       "text": "CHAVEZ CORAL CRISTIAN ARMANDO",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '71748333'"
      },
      {
       "value": "72204506",
       "text": "REZZA PAJARES HILARY JOSELYN",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '72204506'"
      },
      {
       "value": "74635307",
       "text": "CAJAHUARINGA MACHUCA ZAMIRA CRISTINA",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '74635307'"
      },
      {
       "value": "44444130",
       "text": "YATACO CASTILLO JOSE ALFREDO",
       "visibleIf": "{select-colabs-from-area-CONTROL DE GESTION} contains '44444130'"
      },
      {
       "value": "70124696",
       "text": "VILLENA NAVARRO CARLOS ENRIQUE",
       "visibleIf": "{select-colabs-from-area-CONTROL DE GESTION} contains '70124696'"
      },
      {
       "value": "76156527",
       "text": "PANDURO BARRANTES JUAN DIEGO",
       "visibleIf": "{select-colabs-from-area-CONTROL DE GESTION} contains '76156527'"
      },
      {
       "value": "9956020",
       "text": "BAUTISTA QUINTANILLA JESSICA JUDITH",
       "visibleIf": "{select-colabs-from-area-CREDITOS} contains '9956020'"
      },
      {
       "value": "2833264",
       "text": "HIDALGO CHAVEZ LUIS FELIPE",
       "visibleIf": "{select-colabs-from-area-CREDITOS} contains '2833264'"
      },
      {
       "value": "76479059",
       "text": "SANCHEZ ROBLEDO ALEXIS SANTINO",
       "visibleIf": "{select-colabs-from-area-CREDITOS} contains '76479059'"
      },
      {
       "value": "40803796",
       "text": "SHIKIYA HURTADO ANA TERESA",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '40803796'"
      },
      {
       "value": "47314100",
       "text": "HINOSTROZA HUANAY LUCIA DEL CARMEN",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '47314100'"
      },
      {
       "value": "41797768",
       "text": "MEDRANO NECOCHEA VICTOR JAVIER",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '41797768'"
      },
      {
       "value": "73657312",
       "text": "TALLEDO NAVARRO PAMELA",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '73657312'"
      },
      {
       "value": "10558194",
       "text": "LARRABURE PEREZ WILSON RICARDO",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '10558194'"
      },
      {
       "value": "47837733",
       "text": "PANDURO FERNANDEZ GIAN PIERRE",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '47837733'"
      },
      {
       "value": "45519571",
       "text": "VIZCARDO PANCORVO JUAN JOSE",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '45519571'"
      },
      {
       "value": "6543622",
       "text": "FORSYTH ALARCO JUAN ALBERTO",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '6543622'"
      },
      {
       "value": "6543619",
       "text": "FORSYTH RIVAROLA JUAN ALBERTO FELIPE",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '6543619'"
      },
      {
       "value": "6430409",
       "text": "OCHOA CHAUCA PABLO CESAR",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '6430409'"
      },
      {
       "value": "25800748",
       "text": "QUIROZ AVILA HENRY",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '25800748'"
      },
      {
       "value": "19996041",
       "text": "SOLIS CALDERON HECTOR ELEODORO",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '19996041'"
      },
      {
       "value": "42915146",
       "text": "PIZARRO ZAPATA BENJAMIN JESUS",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '42915146'"
      },
      {
       "value": "9302319",
       "text": "KALINOWSKI BARCLAY VIRNA LUZ",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '9302319'"
      },
      {
       "value": "10476350",
       "text": "AMEGHINO ANDALUZ GIANCARLO",
       "visibleIf": "{select-colabs-from-area-GESTIÓN Y DESARROLLO HUMANO} contains '10476350'"
      },
      {
       "value": "44647618",
       "text": "EDEN VILLEGAS OMAR ALEJANDRO",
       "visibleIf": "{select-colabs-from-area-IMPORTACIONES} contains '44647618'"
      },
      {
       "value": "70193596",
       "text": "KIWAKI ARAUCO AKEMI LUZ",
       "visibleIf": "{select-colabs-from-area-IMPORTACIONES} contains '70193596'"
      },
      {
       "value": "48588559",
       "text": "ZAPATA CORTEZ STEPHANIE",
       "visibleIf": "{select-colabs-from-area-IMPORTACIONES} contains '48588559'"
      },
      {
       "value": "45335304",
       "text": "CHAVEZ OTINIANO LORENA JHAZMIN",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '45335304'"
      },
      {
       "value": "41727660",
       "text": "MARCELO CELEDONIO LUIS CARLOS",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '41727660'"
      },
      {
       "value": "8035974",
       "text": "MARTINEZ SANCHEZ FREDDY AUGUSTO",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '8035974'"
      },
      {
       "value": "46761555",
       "text": "GAMARRA CASTILLO URIEL LEANDRO",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '46761555'"
      },
      {
       "value": "75267982",
       "text": "CAMACHO YACSAHUACHE GABRIEL ANTAR",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '75267982'"
      },
      {
       "value": "77575494",
       "text": "RAMIREZ SILVA MELANNY DENISSE",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '77575494'"
      },
      {
       "value": "44363769",
       "text": "PEÑA TORRES LUISA RICARDINA",
       "visibleIf": "{select-colabs-from-area-INNOVACION Y PROCESOS} contains '44363769'"
      },
      {
       "value": "47486524",
       "text": "CHINCHA MATA STEVEN BRYANT",
       "visibleIf": "{select-colabs-from-area-INNOVACION Y PROCESOS} contains '47486524'"
      },
      {
       "value": "70289458",
       "text": "VILCAHUAMAN VALDIVIESO IAN RAUL",
       "visibleIf": "{select-colabs-from-area-INNOVACION Y PROCESOS} contains '70289458'"
      },
      {
       "value": "40449992",
       "text": "CORREA VERGARA MARIA DEL CARMEN",
       "visibleIf": "{select-colabs-from-area-LEGAL} contains '40449992'"
      },
      {
       "value": "45073283",
       "text": "VELEZ DE VILLA YUPANQUI CINDY MARLENY",
       "visibleIf": "{select-colabs-from-area-LEGAL} contains '45073283'"
      },
      {
       "value": "70609901",
       "text": "SABOYA CORDOVA INTI CATARI",
       "visibleIf": "{select-colabs-from-area-LEGAL} contains '70609901'"
      },
      {
       "value": "82466",
       "text": "DEL AGUILA HIDALGO SAMUEL",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '82466'"
      },
      {
       "value": "40646048",
       "text": "JIMENEZ ASPILCUETA JOEL",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '40646048'"
      },
      {
       "value": "42850407",
       "text": "MALASQUEZ GARCIA ALDO LEONARDO",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '42850407'"
      },
      {
       "value": "10744655",
       "text": "CONEJO GUARDAMINO JOE MIGUEL",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '10744655'"
      },
      {
       "value": "45613368",
       "text": "SILVA VASQUEZ DEIVID CRISTHIAN",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '45613368'"
      },
      {
       "value": "45092398",
       "text": "MENZALA ORTEGA ALEX RODOLFO",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '45092398'"
      },
      {
       "value": "47154147",
       "text": "CHUMPITAZI BARRETO DIEGO JESUS",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '47154147'"
      },
      {
       "value": "45256809",
       "text": "CHEAN RUIZ SERGIO",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '45256809'"
      },
      {
       "value": "40006296",
       "text": "RUIZ FLORES LUZ GISSELLA",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '40006296'"
      },
      {
       "value": "44871244",
       "text": "BLUDAU TUPAC YUPANQUI JAN HENRY",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '44871244'"
      },
      {
       "value": "43569973",
       "text": "DELGADO UNDA RENZO JESUS",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '43569973'"
      },
      {
       "value": "74438666",
       "text": "COTRINA VERANO VIVIANA PURITA",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '74438666'"
      },
      {
       "value": "72191719",
       "text": "CURI GRADOS ELVIS RICARDO PIERO",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '72191719'"
      },
      {
       "value": "10672242",
       "text": "BALCAZER LOLI LIBER MARTIN",
       "visibleIf": "{select-colabs-from-area-OPERACIONES} contains '10672242'"
      },
      {
       "value": "47845515",
       "text": "TORO PALOMINO GIANCARLO EDINSON",
       "visibleIf": "{select-colabs-from-area-OPERACIONES} contains '47845515'"
      },
      {
       "value": "2899681",
       "text": "SALAS PEZUA HAROLD ALBERTO",
       "visibleIf": "{select-colabs-from-area-OPERACIONES} contains '2899681'"
      },
      {
       "value": "8247662",
       "text": "REYES BENAVIDES MELSI ELIZABETH",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '8247662'"
      },
      {
       "value": "70944487",
       "text": "BARRIENTOS TAPIA LAURA LUCIA",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '70944487'"
      },
      {
       "value": "10459679",
       "text": "JUAREZ CRUZ GUSTAVO ERWIN",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '10459679'"
      },
      {
       "value": "43068853",
       "text": "BUENDIA GRAZIANI GUSTAVO ADOLFO",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '43068853'"
      },
      {
       "value": "46457171",
       "text": "RODRIGUEZ PAREDES BRENDA ALEJANDRA",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '46457171'"
      },
      {
       "value": "73087145",
       "text": "ORIHUELA BEJARANO PATRICIA KENDY",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '73087145'"
      },
      {
       "value": "44652717",
       "text": "VELASQUEZ SALDAÑA WILMER GERARDO",
       "visibleIf": "{select-colabs-from-area-PLANILLAS} contains '44652717'"
      },
      {
       "value": "43308092",
       "text": "JURADO HUAMAN JOJHANSON FERNANDO",
       "visibleIf": "{select-colabs-from-area-PLANILLAS} contains '43308092'"
      },
      {
       "value": "72894842",
       "text": "DAVILA MUÑOZ FIORELLA ESTEFANY",
       "visibleIf": "{select-colabs-from-area-PLANILLAS} contains '72894842'"
      },
      {
       "value": "10741277",
       "text": "MORILLO MACHADO JUAN RENE",
       "visibleIf": "{select-colabs-from-area-SEGURIDAD} contains '10741277'"
      },
      {
       "value": "40715092",
       "text": "DIAZ CAMPOS ARTURO",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '40715092'"
      },
      {
       "value": "10004335",
       "text": "BRINGAS PROCHAZKA SANDRA SILVANA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '10004335'"
      },
      {
       "value": "6771922",
       "text": "RODRIGUEZ CARPIO RUTH SELENE",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '6771922'"
      },
      {
       "value": "9865016",
       "text": "VARGAS PEÑA ERICK",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '9865016'"
      },
      {
       "value": "45453006",
       "text": "SALVADOR SALVADOR ERIC DEIBY",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '45453006'"
      },
      {
       "value": "72306819",
       "text": "ACUÑA VENTO MILENY SHERYL",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '72306819'"
      },
      {
       "value": "46286135",
       "text": "FLORES FERNANDEZ CLAUDIA CECILIA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '46286135'"
      },
      {
       "value": "45938129",
       "text": "ALBA SANCHEZ DIANA CAROLINA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '45938129'"
      },
      {
       "value": "47484915",
       "text": "PUMA RAMOS BRAYAN CRISTIAN",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '47484915'"
      },
      {
       "value": "44482449",
       "text": "LOPEZ AGUIRRE JAVIER JESUS",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '44482449'"
      },
      {
       "value": "46316278",
       "text": "CHAVEZ CONDE SMITH JOSEPH",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '46316278'"
      },
      {
       "value": "73634296",
       "text": "CALDERON TORRES MARTIN MAURICIO",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '73634296'"
      },
      {
       "value": "47437046",
       "text": "MORI CUENCA KATTYA LIZBETH",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '47437046'"
      },
      {
       "value": "74158343",
       "text": "MEDINA ESPINOZA ANGELICA MILAGROS ANTONIETA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '74158343'"
      },
      {
       "value": "40241539",
       "text": "RAMIREZ ZEVALLOS JOSE MIGUEL",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '40241539'"
      },
      {
       "value": "40487202",
       "text": "CONDOR CASTILLO JUAN HARRY",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '40487202'"
      },
      {
       "value": "7488058",
       "text": "CABANA BUITRON WILBER CELEDONIO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '7488058'"
      },
      {
       "value": "47805975",
       "text": "CARDENAS HUAMANI EDWIN JAVIER",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '47805975'"
      },
      {
       "value": "73875549",
       "text": "JIHUA TAPAHUASCO JUAN JOSE",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '73875549'"
      },
      {
       "value": "43077392",
       "text": "RUIZ VASQUEZ SANDRO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '43077392'"
      },
      {
       "value": "47036204",
       "text": "GOMEZ CACHA JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '47036204'"
      },
      {
       "value": "41261260",
       "text": "RIVERA QUISPE MARTIN JULIO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '41261260'"
      },
      {
       "value": "44954065",
       "text": "GAMBOA QUILICHE DANILO MAX",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '44954065'"
      },
      {
       "value": "70319277",
       "text": "LUPUCHE SILVA ELISEO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '70319277'"
      },
      {
       "value": "25817327",
       "text": "AYALA CHIROQUE LUIS",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '25817327'"
      },
      {
       "value": "9620603",
       "text": "CANALES CORBETTA HERNAN JAVIER",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '9620603'"
      },
      {
       "value": "25444867",
       "text": "CARHUAPOMA FLORES HERNAN JAIME",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '25444867'"
      },
      {
       "value": "9555005",
       "text": "YUPANQUI ALARCON FERMIN",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '9555005'"
      },
      {
       "value": "7508404",
       "text": "NAUPARI HURTADO RAFAEL",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '7508404'"
      },
      {
       "value": "43909967",
       "text": "SOSA SAN MARTIN PEDRO MANUEL",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '43909967'"
      },
      {
       "value": "44829465",
       "text": "CASTELLARES CUYA ENRIQUE LUIS",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '44829465'"
      },
      {
       "value": "25720478",
       "text": "BAZALAR PIZARRO EDUARDO GONZALO",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '25720478'"
      },
      {
       "value": "7262835",
       "text": "RODRIGUEZ PORRAS JUAN CARLOS",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '7262835'"
      },
      {
       "value": "43220913",
       "text": "DE LA CRUZ PAUCAR LUZ JUDITH",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '43220913'"
      },
      {
       "value": "44646487",
       "text": "PANDO GUILLEN EDITH IVET",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '44646487'"
      },
      {
       "value": "73824248",
       "text": "CANO ÑATO PILAR SOLEDAD",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '73824248'"
      },
      {
       "value": "73983886",
       "text": "OTOYA SILVA CLAUDIA FIORELA",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '73983886'"
      },
      {
       "value": "47257757",
       "text": "HENDRICK HURTADO SHIRLEY MILAGROS",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '47257757'"
      }
     ]
    },
    {
     "type": "matrix",
     "name": "evaluate-colabs-from-pilar-Buscamos la excelenciac",
     "title": "Buscamos la excelencia",
     "description": "Es una persona que no está contenta solo con cumplir sus objetivos en el tiempo y calidad esperados, sino que intenta siempre ir más allá. Está dispuesto a aprender nuevas cosas y, desde la posición en la que se encuentra, busca hacer uso de sus fortalezas para contribuir con la meta de su equipo y de la empresa. Saca de cada experiencia algún aprendizaje y lo comparte con los demás.",
     "columns": [
      "1",
      "2",
      "3",
      "4",
      "5"
     ],
     "rows": [
      {
       "value": "2845348",
       "text": "SEMINARIO REUSCHE MARTIN HERNAN",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '2845348'"
      },
      {
       "value": "72505476",
       "text": "PARIONA ANDRADE JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '72505476'"
      },
      {
       "value": "40802587",
       "text": "NUÑEZ VERA DANTE EDUARDO RANJIT",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '40802587'"
      },
      {
       "value": "48038893",
       "text": "GALOPINO ANCAJIMA SHARON GERALDINNE",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '48038893'"
      },
      {
       "value": "16757835",
       "text": "VELEZ ZAMORA ANTONIO HUMBERTO",
       "visibleIf": "{select-colabs-from-area-ADMINISTRACION Y FINANZAS} contains '16757835'"
      },
      {
       "value": "40335197",
       "text": "LOVEDAY MEJIA CHRISTIAN",
       "visibleIf": "{select-colabs-from-area-ALIANZAS COMERCIALES} contains '40335197'"
      },
      {
       "value": "72635353",
       "text": "SOTOMAYOR WOOLCOTT KENNETHY SONJA",
       "visibleIf": "{select-colabs-from-area-ALIANZAS COMERCIALES} contains '72635353'"
      },
      {
       "value": "32738701",
       "text": "CAHUA SALAZAR DANIEL SALVADOR",
       "visibleIf": "{select-colabs-from-area-ALMACEN DE DOCUMENTOS} contains '32738701'"
      },
      {
       "value": "71996517",
       "text": "CAHUA TORRES SEBASTIAN ALEJANDRO",
       "visibleIf": "{select-colabs-from-area-ALMACEN DE DOCUMENTOS} contains '71996517'"
      },
      {
       "value": "72029026",
       "text": "CIENFUEGOS GAMBOA JOHN PETHER",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '72029026'"
      },
      {
       "value": "43489421",
       "text": "ALEJANDRIA ZAPATA LUIS ALBERTO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43489421'"
      },
      {
       "value": "46409441",
       "text": "BASTIDAS ORELLANA EDWIN YOEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46409441'"
      },
      {
       "value": "45176954",
       "text": "CACERES GARCIA DIEGO ANGEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45176954'"
      },
      {
       "value": "40986494",
       "text": "CARHUAPOMA FLORES JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '40986494'"
      },
      {
       "value": "76348533",
       "text": "CASTILLO MARTINEZ KEVIN JOSE",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '76348533'"
      },
      {
       "value": "42654496",
       "text": "CASTRO ARRASCO JOVER SMIT",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '42654496'"
      },
      {
       "value": "42053463",
       "text": "DICHE PAREDES CLODOALDO ABRAHAM",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '42053463'"
      },
      {
       "value": "47216327",
       "text": "LEVANO RODRIGUEZ JOSIMAR WILFREDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '47216327'"
      },
      {
       "value": "4081715",
       "text": "MELGAREJO HIDALGO JUAN MANUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '4081715'"
      },
      {
       "value": "80106120",
       "text": "RIVERA VASQUEZ MARTIN RODOLFO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '80106120'"
      },
      {
       "value": "48584092",
       "text": "RUIZ PAZ LUIS ANGEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '48584092'"
      },
      {
       "value": "10085191",
       "text": "TORRES SURITA YSOCERES AUDON",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '10085191'"
      },
      {
       "value": "70327335",
       "text": "UGAZ BASTANTE BRUNO EDUARDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70327335'"
      },
      {
       "value": "46722514",
       "text": "RAMOS CORONADO LUIS GUSTAVO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46722514'"
      },
      {
       "value": "47023258",
       "text": "GUTIERREZ URBINA CESAR ALFONSO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '47023258'"
      },
      {
       "value": "70272674",
       "text": "SANDOVAL GONZALES MARCELO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70272674'"
      },
      {
       "value": "43993340",
       "text": "PERALES QUINTANA CARLOS EMILIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43993340'"
      },
      {
       "value": "43632179",
       "text": "ALIAGA RAMIREZ FREDDY ALEXANDER",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43632179'"
      },
      {
       "value": "42946534",
       "text": "CORREA HUAMAN JHONY RAUL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '42946534'"
      },
      {
       "value": "6432246",
       "text": "PEREZ MOSQUERA BARNAD DY FELIX",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '6432246'"
      },
      {
       "value": "43959477",
       "text": "ASTOCONDOR MOLINA JOSE MIGUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43959477'"
      },
      {
       "value": "48484614",
       "text": "TAIPE HUAIRA YOBER YONATAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '48484614'"
      },
      {
       "value": "44138783",
       "text": "GUEVARA CIEZA ANNER MIGUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '44138783'"
      },
      {
       "value": "72730699",
       "text": "SANTIVAÑEZ GOÑEZ GEANPIERRE",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '72730699'"
      },
      {
       "value": "45168261",
       "text": "CHAUCA MILIAN JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45168261'"
      },
      {
       "value": "73572438",
       "text": "BAUTISTA SOTOMAYOR ALDAIR ESMIR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '73572438'"
      },
      {
       "value": "77271310",
       "text": "TORBISCO ALVARADO JESUS ALEX",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '77271310'"
      },
      {
       "value": "70654934",
       "text": "SANTAMARIA CHINCHAY JUNIOR EDUARDO DARIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70654934'"
      },
      {
       "value": "45165391",
       "text": "MORENO PEREZ JORGE ARMANDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45165391'"
      },
      {
       "value": "70929727",
       "text": "QUISPE LEON LUIS BRAYAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70929727'"
      },
      {
       "value": "72571571",
       "text": "RAMOS PEÑA JOSE MANUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '72571571'"
      },
      {
       "value": "4747804",
       "text": "Yusmelis Del Valle Diaz",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '4747804'"
      },
      {
       "value": "3885974",
       "text": "COA MUÑOZ OLVELIS KAROLINA",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '3885974'"
      },
      {
       "value": "44725608",
       "text": "HUIDOBRO SOSA DARWINS ALBERTO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '44725608'"
      },
      {
       "value": "70043083",
       "text": "RUESTA MENDOZA KEVIN BRYAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70043083'"
      },
      {
       "value": "60898227",
       "text": "BALDEON DIAZ VICENTE PAUL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '60898227'"
      },
      {
       "value": "48918807",
       "text": "DIAZ GUTIERREZ ARMANDO ALONSO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '48918807'"
      },
      {
       "value": "41964218",
       "text": "PALACIOS CARRILLO RONALD ALFREDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '41964218'"
      },
      {
       "value": "40164421",
       "text": "GAMARRA PINEDO JORGE ANTONIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '40164421'"
      },
      {
       "value": "3029052",
       "text": "ZERPA REYES HECTOR JOSE GREGORIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '3029052'"
      },
      {
       "value": "44420443",
       "text": "RAMOS SANDOVAL CARLOS EDUARDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '44420443'"
      },
      {
       "value": "46943958",
       "text": "CHAMORRO GERONIMO ALISON JONATHAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46943958'"
      },
      {
       "value": "41916191",
       "text": "NEYRA SILVA JORGE ALEXANDER",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '41916191'"
      },
      {
       "value": "71427195",
       "text": "CALDERON RODAS CRISTIAN OMAR ANTHONY",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '71427195'"
      },
      {
       "value": "45653891",
       "text": "PRINCIPE VASQUEZ ABRAHAM ANTONIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45653891'"
      },
      {
       "value": "46564768",
       "text": "PAEZ LLORONA YOEL RICARDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46564768'"
      },
      {
       "value": "74157431",
       "text": "CANAYO MARAPARA JUAN CARLOS",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '74157431'"
      },
      {
       "value": "46887147",
       "text": "CHANG MAICEL ANGEL ENRIQUE",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46887147'"
      },
      {
       "value": "71342771",
       "text": "AGUIRRE SILVA PAOLO FRANCESCO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '71342771'"
      },
      {
       "value": "41051204",
       "text": "SAAVEDRA LUCANO SEGUNDO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '41051204'"
      },
      {
       "value": "74303496",
       "text": "GOMEZ HERRERA RUBEN JESUS",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '74303496'"
      },
      {
       "value": "43538545",
       "text": "AGURTO OBREGON CESAR VICTORINO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '43538545'"
      },
      {
       "value": "47622051",
       "text": "ASPAJO LLERENA JOAQUIN AMADO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '47622051'"
      },
      {
       "value": "45314983",
       "text": "BARTRA VELA KELMER ALAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '45314983'"
      },
      {
       "value": "46074034",
       "text": "BENITES SILVA JONATHAN ANGEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '46074034'"
      },
      {
       "value": "25846925",
       "text": "CABRERA MAURTUA JAIME ALONSO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '25846925'"
      },
      {
       "value": "71258662",
       "text": "CARDENAS SHUAN JORGE FERNANDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '71258662'"
      },
      {
       "value": "41852611",
       "text": "CORDOVA CASTRO WILSSON STARLEY",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '41852611'"
      },
      {
       "value": "45189828",
       "text": "CORDOVA PASACHE JESUS MANUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '45189828'"
      },
      {
       "value": "77300330",
       "text": "ESCOBEDO SANTA CRUZ HENRRY BRAYAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '77300330'"
      },
      {
       "value": "41916922",
       "text": "FLORES FERREYRA JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '41916922'"
      },
      {
       "value": "48101536",
       "text": "LOAYZA VASQUEZ CARLOS ALFREDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '48101536'"
      },
      {
       "value": "72204123",
       "text": "MANRIQUE LOPEZ JHON LUIS",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '72204123'"
      },
      {
       "value": "7735664",
       "text": "PACHAS LAZO LIZANDRO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '7735664'"
      },
      {
       "value": "47531304",
       "text": "PACHECO HIDALGO DAVID VLADIMIR",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '47531304'"
      },
      {
       "value": "7641667",
       "text": "PARRA FERNANDEZ ANDRES PEDRO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '7641667'"
      },
      {
       "value": "42249673",
       "text": "RAMIREZ OBREGON OSCAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '42249673'"
      },
      {
       "value": "43082794",
       "text": "RAMOS CAMASITA CELSO ESTANISLAO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '43082794'"
      },
      {
       "value": "42443873",
       "text": "REAL AVALOS NILTON JAVIER",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '42443873'"
      },
      {
       "value": "6542042",
       "text": "RODRIGUEZ VASQUEZ ORLANDO EUGENIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '6542042'"
      },
      {
       "value": "48222926",
       "text": "SALAZAR LLAJA DEIBIS JHONATAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '48222926'"
      },
      {
       "value": "72009438",
       "text": "SANDOVAL LEYVA GERSON TINO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '72009438'"
      },
      {
       "value": "74543283",
       "text": "SUAREZ VALERIO LENER JACKSON",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '74543283'"
      },
      {
       "value": "72848198",
       "text": "TEJADA ROMERO MARIO SIXTO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '72848198'"
      },
      {
       "value": "70055383",
       "text": "CHOKEWANCA BLANCO PAMELA",
       "visibleIf": "{select-colabs-from-area-ATRACCION Y DESARROLLO} contains '70055383'"
      },
      {
       "value": "46277915",
       "text": "VILLACORTA TARDIO ALENE ELIZABETH",
       "visibleIf": "{select-colabs-from-area-ATRACCION Y DESARROLLO} contains '46277915'"
      },
      {
       "value": "43772138",
       "text": "RODRIGUEZ CONTRERAS CLAUDIA ALEJANDRA",
       "visibleIf": "{select-colabs-from-area-AUDITORIA INTERNA} contains '43772138'"
      },
      {
       "value": "48315976",
       "text": "RODRIGUEZ AGREDA DIANA KATHERINE",
       "visibleIf": "{select-colabs-from-area-AUDITORIA INTERNA} contains '48315976'"
      },
      {
       "value": "47797685",
       "text": "OLIVARES CERNA KENJE BRIGGIT",
       "visibleIf": "{select-colabs-from-area-AUDITORIA INTERNA} contains '47797685'"
      },
      {
       "value": "10792396",
       "text": "MANRIQUE RAMOS WILLARD MARTIN",
       "visibleIf": "{select-colabs-from-area-AUTOMOTRIZ} contains '10792396'"
      },
      {
       "value": "7629078",
       "text": "ROMANET GALVAN RICARDO CARLOS",
       "visibleIf": "{select-colabs-from-area-AUTOMOTRIZ} contains '7629078'"
      },
      {
       "value": "70976479",
       "text": "MONCADA COLE MARIA ALEJANDRA",
       "visibleIf": "{select-colabs-from-area-AUTOMOTRIZ} contains '70976479'"
      },
      {
       "value": "41345981",
       "text": "MONTEVERDE LUQUE ZARELLA LIZBETH",
       "visibleIf": "{select-colabs-from-area-BIENESTAR Y SSOMA} contains '41345981'"
      },
      {
       "value": "45929767",
       "text": "VILLANUEVA BRUNO JEANCARLO DINO",
       "visibleIf": "{select-colabs-from-area-BIENESTAR Y SSOMA} contains '45929767'"
      },
      {
       "value": "10686006",
       "text": "ALARCON RODRIGUEZ LORELAY EVELYN",
       "visibleIf": "{select-colabs-from-area-BIENESTAR Y SSOMA} contains '10686006'"
      },
      {
       "value": "10136205",
       "text": "GHIGLINO ECHEGARAY JORGE LUIS",
       "visibleIf": "{select-colabs-from-area-CFO} contains '10136205'"
      },
      {
       "value": "10152944",
       "text": "ORTIZ RODAS GABRIELA ISABEL",
       "visibleIf": "{select-colabs-from-area-CFO} contains '10152944'"
      },
      {
       "value": "71242989",
       "text": "VARGAS SOLIS ROXANA MARIBEL",
       "visibleIf": "{select-colabs-from-area-CFO} contains '71242989'"
      },
      {
       "value": "72971290",
       "text": "PAJUELO MUÑOZ ARIEL RUBEN",
       "visibleIf": "{select-colabs-from-area-CFO} contains '72971290'"
      },
      {
       "value": "40323364",
       "text": "ROSADIO BENDEZU MARCO ANTONIO",
       "visibleIf": "{select-colabs-from-area-CFO} contains '40323364'"
      },
      {
       "value": "71539402",
       "text": "ESPINOZA PRINCIPE TIMOTEO JEFFERSON",
       "visibleIf": "{select-colabs-from-area-CFO} contains '71539402'"
      },
      {
       "value": "40485772",
       "text": "ANTON HUACHES CARLOS FELIPE",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40485772'"
      },
      {
       "value": "7504002",
       "text": "ARMAS DURAND MARIA ISABEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '7504002'"
      },
      {
       "value": "40153974",
       "text": "CARO TOMANGUILLA JIMMY GANDY",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40153974'"
      },
      {
       "value": "40560274",
       "text": "CARPIO MAINZA KARLA MAGALI",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40560274'"
      },
      {
       "value": "42434684",
       "text": "CUADROS AQUINO ARELIZ ESTRELLA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '42434684'"
      },
      {
       "value": "70002376",
       "text": "CURAY RODRIGUEZ NICOLE XIOMARA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '70002376'"
      },
      {
       "value": "5353330",
       "text": "DEL AGUILA UTIA JUAN MANUEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '5353330'"
      },
      {
       "value": "2816473",
       "text": "DELFIN CALDERON HERMINIA VICTORIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '2816473'"
      },
      {
       "value": "70442257",
       "text": "DIAZ LOPEZ MIRELLA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '70442257'"
      },
      {
       "value": "40432801",
       "text": "DIAZ TEJADA ELIANA CAROLINA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40432801'"
      },
      {
       "value": "43715528",
       "text": "FERNANDEZ ROSALES HAROLD PETTER",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '43715528'"
      },
      {
       "value": "46195520",
       "text": "HUAPAYA TAFUR LUIS ALBERTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '46195520'"
      },
      {
       "value": "6078620",
       "text": "JIMENEZ JULCA MIGUEL ANGEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '6078620'"
      },
      {
       "value": "40031813",
       "text": "MARQUINA ESCALANTE CESAR FABIAN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40031813'"
      },
      {
       "value": "10001657",
       "text": "MERCADO CHUMPITASI PIERO CESAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '10001657'"
      },
      {
       "value": "44360734",
       "text": "MESONES HUAMAN PAULO CESAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '44360734'"
      },
      {
       "value": "2883536",
       "text": "NAVARRO SANCHEZ CESAR AUGUSTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '2883536'"
      },
      {
       "value": "42846238",
       "text": "PORTELLA PORTUGAL JORGE OSWALDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '42846238'"
      },
      {
       "value": "46560478",
       "text": "RAVELLO CUELLAR JORGE LUIS",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '46560478'"
      },
      {
       "value": "47260953",
       "text": "BALAREZO CANTELLA ALESSIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '47260953'"
      },
      {
       "value": "46356695",
       "text": "CASTAÑEDA PASTOR VICTOR ERNESTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '46356695'"
      },
      {
       "value": "47519255",
       "text": "CRISTOBAL MADRID GUSTAVO MARIO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '47519255'"
      },
      {
       "value": "25683170",
       "text": "FERNANDEZ AMAYA ROBERTO FELIX",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '25683170'"
      },
      {
       "value": "40687895",
       "text": "FLOR BALDEON RICHARD VINDER",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '40687895'"
      },
      {
       "value": "10182159",
       "text": "GALVEZ TAGLE CESAR EDMUNDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '10182159'"
      },
      {
       "value": "72963805",
       "text": "GAMARRA QUISPE LUIS ENRIQUE",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '72963805'"
      },
      {
       "value": "25682528",
       "text": "MANSILLA FARFAN JOSE LEONARDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '25682528'"
      },
      {
       "value": "10028844",
       "text": "MENESES RAMOS MARIA CONSUELO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '10028844'"
      },
      {
       "value": "45847315",
       "text": "PADILLA FIGUEROA NOEMI TATIANA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '45847315'"
      },
      {
       "value": "45938071",
       "text": "PATROCINIO CHOQUE JOSE ALFREDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '45938071'"
      },
      {
       "value": "47603529",
       "text": "PIZARRO ESPICHAN RONALD OMAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '47603529'"
      },
      {
       "value": "9924529",
       "text": "QUISPE GUTIERREZ RUTH GLORIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '9924529'"
      },
      {
       "value": "18215648",
       "text": "RODRIGUEZ REYNA ROBERTO MARTIN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '18215648'"
      },
      {
       "value": "72906586",
       "text": "ROJAS AHUMADA JOSE ANTONIO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '72906586'"
      },
      {
       "value": "8885370",
       "text": "SALAZAR ORE MARCOS ENRIQUE",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '8885370'"
      },
      {
       "value": "6813880",
       "text": "VILLAORDUÑA CARDENAS EVER JUSTINIANO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '6813880'"
      },
      {
       "value": "6162086",
       "text": "ZORRILLA PIO JOSE MARTIN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '6162086'"
      },
      {
       "value": "10860243",
       "text": "ALIAGA DUEÑAS GABRIELA SILVIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10860243'"
      },
      {
       "value": "10861110",
       "text": "ANGULO ARISTA SHEYLA JAKELEEN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10861110'"
      },
      {
       "value": "9885877",
       "text": "CABRERA VERDE JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '9885877'"
      },
      {
       "value": "42977491",
       "text": "CANARIO HUAROTO ABEL OMAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '42977491'"
      },
      {
       "value": "45642418",
       "text": "CASTRO VELASCO ROLANDO AGUSTIN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '45642418'"
      },
      {
       "value": "48053125",
       "text": "COLLANTES MIYASHIRO ZULEIKA YADIRA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '48053125'"
      },
      {
       "value": "40807560",
       "text": "DE LA CRUZ SALAZAR JHONY",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '40807560'"
      },
      {
       "value": "41080674",
       "text": "ESPINOZA LUNA YERKO ALFREDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '41080674'"
      },
      {
       "value": "44850775",
       "text": "FLORES ZULOETA JUAN CARLOS",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '44850775'"
      },
      {
       "value": "40000963",
       "text": "GARCIA HUAMANI ISABEL CRISTINA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '40000963'"
      },
      {
       "value": "47125982",
       "text": "GIRON RIOJA KIARA VICTORIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '47125982'"
      },
      {
       "value": "42410874",
       "text": "LAVADO BLAS EDWIN ADEMIR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '42410874'"
      },
      {
       "value": "44539637",
       "text": "LIMAS CRUZ JESUS EDUARDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '44539637'"
      },
      {
       "value": "10032439",
       "text": "MANGIER LIZAMA FRANKLIN ALBERTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10032439'"
      },
      {
       "value": "10612032",
       "text": "PIZARRO AQUINO AUGUSTO CARLOS",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10612032'"
      },
      {
       "value": "43743468",
       "text": "RUBINA AVILA ROBERTO JONATHAN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '43743468'"
      },
      {
       "value": "10622377",
       "text": "SAUSA CARRION REYNALDO ALEJANDRO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10622377'"
      },
      {
       "value": "49016868",
       "text": "CARDENAS SMITH MICHAEL ABRAHAM",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '49016868'"
      },
      {
       "value": "42011663",
       "text": "CUBAS RAMIREZ MIKY ADAN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '42011663'"
      },
      {
       "value": "5402391",
       "text": "ICOMENA GUERRA JOB DAVID",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '5402391'"
      },
      {
       "value": "43270715",
       "text": "MEJIA GONGORA JULLIER",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '43270715'"
      },
      {
       "value": "46721392",
       "text": "MUÑOZ MEDINA SARA PATRICIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '46721392'"
      },
      {
       "value": "47426857",
       "text": "SAAVEDRA VARGAS NATAHALY ROMINA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '47426857'"
      },
      {
       "value": "46724649",
       "text": "SANCHEZ GUTIERREZ RUBEN ISMAEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '46724649'"
      },
      {
       "value": "71532747",
       "text": "ARAUJO JULCA FERNANDO MANUEL",
       "visibleIf": "{select-colabs-from-area-COMPENSACIONES Y BENEFICIOS} contains '71532747'"
      },
      {
       "value": "46414993",
       "text": "MEDRANO NOBLECILLA FIORELLA SHARON",
       "visibleIf": "{select-colabs-from-area-COMPENSACIONES Y BENEFICIOS} contains '46414993'"
      },
      {
       "value": "72747159",
       "text": "MALDONADO LUNA DAYANA NATY",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '72747159'"
      },
      {
       "value": "75473478",
       "text": "MARTINEZ YARANGA YONE ALEXANDRA",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '75473478'"
      },
      {
       "value": "42183454",
       "text": "OTINIANO LOPEZ IRIS RAQUEL",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '42183454'"
      },
      {
       "value": "72883933",
       "text": "VILLANUEVA VALENCIA LILIBETH CRISTY",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '72883933'"
      },
      {
       "value": "47072568",
       "text": "ASTUÑAUPA NAJERA LUIS YONATAN",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '47072568'"
      },
      {
       "value": "40060377",
       "text": "ZAMORA TAPIA VIRNA IVETT",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '40060377'"
      },
      {
       "value": "74929399",
       "text": "FELIX MORALES WALTER HUBER",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '74929399'"
      },
      {
       "value": "71122395",
       "text": "QUISPE AYALA LEESLY ESTEFANY",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '71122395'"
      },
      {
       "value": "45833793",
       "text": "ARANDA SEVILLANO ROSIO",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '45833793'"
      },
      {
       "value": "71748333",
       "text": "CHAVEZ CORAL CRISTIAN ARMANDO",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '71748333'"
      },
      {
       "value": "72204506",
       "text": "REZZA PAJARES HILARY JOSELYN",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '72204506'"
      },
      {
       "value": "74635307",
       "text": "CAJAHUARINGA MACHUCA ZAMIRA CRISTINA",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '74635307'"
      },
      {
       "value": "44444130",
       "text": "YATACO CASTILLO JOSE ALFREDO",
       "visibleIf": "{select-colabs-from-area-CONTROL DE GESTION} contains '44444130'"
      },
      {
       "value": "70124696",
       "text": "VILLENA NAVARRO CARLOS ENRIQUE",
       "visibleIf": "{select-colabs-from-area-CONTROL DE GESTION} contains '70124696'"
      },
      {
       "value": "76156527",
       "text": "PANDURO BARRANTES JUAN DIEGO",
       "visibleIf": "{select-colabs-from-area-CONTROL DE GESTION} contains '76156527'"
      },
      {
       "value": "9956020",
       "text": "BAUTISTA QUINTANILLA JESSICA JUDITH",
       "visibleIf": "{select-colabs-from-area-CREDITOS} contains '9956020'"
      },
      {
       "value": "2833264",
       "text": "HIDALGO CHAVEZ LUIS FELIPE",
       "visibleIf": "{select-colabs-from-area-CREDITOS} contains '2833264'"
      },
      {
       "value": "76479059",
       "text": "SANCHEZ ROBLEDO ALEXIS SANTINO",
       "visibleIf": "{select-colabs-from-area-CREDITOS} contains '76479059'"
      },
      {
       "value": "40803796",
       "text": "SHIKIYA HURTADO ANA TERESA",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '40803796'"
      },
      {
       "value": "47314100",
       "text": "HINOSTROZA HUANAY LUCIA DEL CARMEN",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '47314100'"
      },
      {
       "value": "41797768",
       "text": "MEDRANO NECOCHEA VICTOR JAVIER",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '41797768'"
      },
      {
       "value": "73657312",
       "text": "TALLEDO NAVARRO PAMELA",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '73657312'"
      },
      {
       "value": "10558194",
       "text": "LARRABURE PEREZ WILSON RICARDO",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '10558194'"
      },
      {
       "value": "47837733",
       "text": "PANDURO FERNANDEZ GIAN PIERRE",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '47837733'"
      },
      {
       "value": "45519571",
       "text": "VIZCARDO PANCORVO JUAN JOSE",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '45519571'"
      },
      {
       "value": "6543622",
       "text": "FORSYTH ALARCO JUAN ALBERTO",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '6543622'"
      },
      {
       "value": "6543619",
       "text": "FORSYTH RIVAROLA JUAN ALBERTO FELIPE",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '6543619'"
      },
      {
       "value": "6430409",
       "text": "OCHOA CHAUCA PABLO CESAR",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '6430409'"
      },
      {
       "value": "25800748",
       "text": "QUIROZ AVILA HENRY",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '25800748'"
      },
      {
       "value": "19996041",
       "text": "SOLIS CALDERON HECTOR ELEODORO",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '19996041'"
      },
      {
       "value": "42915146",
       "text": "PIZARRO ZAPATA BENJAMIN JESUS",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '42915146'"
      },
      {
       "value": "9302319",
       "text": "KALINOWSKI BARCLAY VIRNA LUZ",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '9302319'"
      },
      {
       "value": "10476350",
       "text": "AMEGHINO ANDALUZ GIANCARLO",
       "visibleIf": "{select-colabs-from-area-GESTIÓN Y DESARROLLO HUMANO} contains '10476350'"
      },
      {
       "value": "44647618",
       "text": "EDEN VILLEGAS OMAR ALEJANDRO",
       "visibleIf": "{select-colabs-from-area-IMPORTACIONES} contains '44647618'"
      },
      {
       "value": "70193596",
       "text": "KIWAKI ARAUCO AKEMI LUZ",
       "visibleIf": "{select-colabs-from-area-IMPORTACIONES} contains '70193596'"
      },
      {
       "value": "48588559",
       "text": "ZAPATA CORTEZ STEPHANIE",
       "visibleIf": "{select-colabs-from-area-IMPORTACIONES} contains '48588559'"
      },
      {
       "value": "45335304",
       "text": "CHAVEZ OTINIANO LORENA JHAZMIN",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '45335304'"
      },
      {
       "value": "41727660",
       "text": "MARCELO CELEDONIO LUIS CARLOS",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '41727660'"
      },
      {
       "value": "8035974",
       "text": "MARTINEZ SANCHEZ FREDDY AUGUSTO",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '8035974'"
      },
      {
       "value": "46761555",
       "text": "GAMARRA CASTILLO URIEL LEANDRO",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '46761555'"
      },
      {
       "value": "75267982",
       "text": "CAMACHO YACSAHUACHE GABRIEL ANTAR",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '75267982'"
      },
      {
       "value": "77575494",
       "text": "RAMIREZ SILVA MELANNY DENISSE",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '77575494'"
      },
      {
       "value": "44363769",
       "text": "PEÑA TORRES LUISA RICARDINA",
       "visibleIf": "{select-colabs-from-area-INNOVACION Y PROCESOS} contains '44363769'"
      },
      {
       "value": "47486524",
       "text": "CHINCHA MATA STEVEN BRYANT",
       "visibleIf": "{select-colabs-from-area-INNOVACION Y PROCESOS} contains '47486524'"
      },
      {
       "value": "70289458",
       "text": "VILCAHUAMAN VALDIVIESO IAN RAUL",
       "visibleIf": "{select-colabs-from-area-INNOVACION Y PROCESOS} contains '70289458'"
      },
      {
       "value": "40449992",
       "text": "CORREA VERGARA MARIA DEL CARMEN",
       "visibleIf": "{select-colabs-from-area-LEGAL} contains '40449992'"
      },
      {
       "value": "45073283",
       "text": "VELEZ DE VILLA YUPANQUI CINDY MARLENY",
       "visibleIf": "{select-colabs-from-area-LEGAL} contains '45073283'"
      },
      {
       "value": "70609901",
       "text": "SABOYA CORDOVA INTI CATARI",
       "visibleIf": "{select-colabs-from-area-LEGAL} contains '70609901'"
      },
      {
       "value": "82466",
       "text": "DEL AGUILA HIDALGO SAMUEL",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '82466'"
      },
      {
       "value": "40646048",
       "text": "JIMENEZ ASPILCUETA JOEL",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '40646048'"
      },
      {
       "value": "42850407",
       "text": "MALASQUEZ GARCIA ALDO LEONARDO",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '42850407'"
      },
      {
       "value": "10744655",
       "text": "CONEJO GUARDAMINO JOE MIGUEL",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '10744655'"
      },
      {
       "value": "45613368",
       "text": "SILVA VASQUEZ DEIVID CRISTHIAN",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '45613368'"
      },
      {
       "value": "45092398",
       "text": "MENZALA ORTEGA ALEX RODOLFO",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '45092398'"
      },
      {
       "value": "47154147",
       "text": "CHUMPITAZI BARRETO DIEGO JESUS",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '47154147'"
      },
      {
       "value": "45256809",
       "text": "CHEAN RUIZ SERGIO",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '45256809'"
      },
      {
       "value": "40006296",
       "text": "RUIZ FLORES LUZ GISSELLA",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '40006296'"
      },
      {
       "value": "44871244",
       "text": "BLUDAU TUPAC YUPANQUI JAN HENRY",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '44871244'"
      },
      {
       "value": "43569973",
       "text": "DELGADO UNDA RENZO JESUS",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '43569973'"
      },
      {
       "value": "74438666",
       "text": "COTRINA VERANO VIVIANA PURITA",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '74438666'"
      },
      {
       "value": "72191719",
       "text": "CURI GRADOS ELVIS RICARDO PIERO",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '72191719'"
      },
      {
       "value": "10672242",
       "text": "BALCAZER LOLI LIBER MARTIN",
       "visibleIf": "{select-colabs-from-area-OPERACIONES} contains '10672242'"
      },
      {
       "value": "47845515",
       "text": "TORO PALOMINO GIANCARLO EDINSON",
       "visibleIf": "{select-colabs-from-area-OPERACIONES} contains '47845515'"
      },
      {
       "value": "2899681",
       "text": "SALAS PEZUA HAROLD ALBERTO",
       "visibleIf": "{select-colabs-from-area-OPERACIONES} contains '2899681'"
      },
      {
       "value": "8247662",
       "text": "REYES BENAVIDES MELSI ELIZABETH",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '8247662'"
      },
      {
       "value": "70944487",
       "text": "BARRIENTOS TAPIA LAURA LUCIA",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '70944487'"
      },
      {
       "value": "10459679",
       "text": "JUAREZ CRUZ GUSTAVO ERWIN",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '10459679'"
      },
      {
       "value": "43068853",
       "text": "BUENDIA GRAZIANI GUSTAVO ADOLFO",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '43068853'"
      },
      {
       "value": "46457171",
       "text": "RODRIGUEZ PAREDES BRENDA ALEJANDRA",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '46457171'"
      },
      {
       "value": "73087145",
       "text": "ORIHUELA BEJARANO PATRICIA KENDY",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '73087145'"
      },
      {
       "value": "44652717",
       "text": "VELASQUEZ SALDAÑA WILMER GERARDO",
       "visibleIf": "{select-colabs-from-area-PLANILLAS} contains '44652717'"
      },
      {
       "value": "43308092",
       "text": "JURADO HUAMAN JOJHANSON FERNANDO",
       "visibleIf": "{select-colabs-from-area-PLANILLAS} contains '43308092'"
      },
      {
       "value": "72894842",
       "text": "DAVILA MUÑOZ FIORELLA ESTEFANY",
       "visibleIf": "{select-colabs-from-area-PLANILLAS} contains '72894842'"
      },
      {
       "value": "10741277",
       "text": "MORILLO MACHADO JUAN RENE",
       "visibleIf": "{select-colabs-from-area-SEGURIDAD} contains '10741277'"
      },
      {
       "value": "40715092",
       "text": "DIAZ CAMPOS ARTURO",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '40715092'"
      },
      {
       "value": "10004335",
       "text": "BRINGAS PROCHAZKA SANDRA SILVANA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '10004335'"
      },
      {
       "value": "6771922",
       "text": "RODRIGUEZ CARPIO RUTH SELENE",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '6771922'"
      },
      {
       "value": "9865016",
       "text": "VARGAS PEÑA ERICK",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '9865016'"
      },
      {
       "value": "45453006",
       "text": "SALVADOR SALVADOR ERIC DEIBY",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '45453006'"
      },
      {
       "value": "72306819",
       "text": "ACUÑA VENTO MILENY SHERYL",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '72306819'"
      },
      {
       "value": "46286135",
       "text": "FLORES FERNANDEZ CLAUDIA CECILIA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '46286135'"
      },
      {
       "value": "45938129",
       "text": "ALBA SANCHEZ DIANA CAROLINA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '45938129'"
      },
      {
       "value": "47484915",
       "text": "PUMA RAMOS BRAYAN CRISTIAN",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '47484915'"
      },
      {
       "value": "44482449",
       "text": "LOPEZ AGUIRRE JAVIER JESUS",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '44482449'"
      },
      {
       "value": "46316278",
       "text": "CHAVEZ CONDE SMITH JOSEPH",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '46316278'"
      },
      {
       "value": "73634296",
       "text": "CALDERON TORRES MARTIN MAURICIO",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '73634296'"
      },
      {
       "value": "47437046",
       "text": "MORI CUENCA KATTYA LIZBETH",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '47437046'"
      },
      {
       "value": "74158343",
       "text": "MEDINA ESPINOZA ANGELICA MILAGROS ANTONIETA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '74158343'"
      },
      {
       "value": "40241539",
       "text": "RAMIREZ ZEVALLOS JOSE MIGUEL",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '40241539'"
      },
      {
       "value": "40487202",
       "text": "CONDOR CASTILLO JUAN HARRY",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '40487202'"
      },
      {
       "value": "7488058",
       "text": "CABANA BUITRON WILBER CELEDONIO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '7488058'"
      },
      {
       "value": "47805975",
       "text": "CARDENAS HUAMANI EDWIN JAVIER",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '47805975'"
      },
      {
       "value": "73875549",
       "text": "JIHUA TAPAHUASCO JUAN JOSE",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '73875549'"
      },
      {
       "value": "43077392",
       "text": "RUIZ VASQUEZ SANDRO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '43077392'"
      },
      {
       "value": "47036204",
       "text": "GOMEZ CACHA JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '47036204'"
      },
      {
       "value": "41261260",
       "text": "RIVERA QUISPE MARTIN JULIO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '41261260'"
      },
      {
       "value": "44954065",
       "text": "GAMBOA QUILICHE DANILO MAX",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '44954065'"
      },
      {
       "value": "70319277",
       "text": "LUPUCHE SILVA ELISEO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '70319277'"
      },
      {
       "value": "25817327",
       "text": "AYALA CHIROQUE LUIS",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '25817327'"
      },
      {
       "value": "9620603",
       "text": "CANALES CORBETTA HERNAN JAVIER",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '9620603'"
      },
      {
       "value": "25444867",
       "text": "CARHUAPOMA FLORES HERNAN JAIME",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '25444867'"
      },
      {
       "value": "9555005",
       "text": "YUPANQUI ALARCON FERMIN",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '9555005'"
      },
      {
       "value": "7508404",
       "text": "NAUPARI HURTADO RAFAEL",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '7508404'"
      },
      {
       "value": "43909967",
       "text": "SOSA SAN MARTIN PEDRO MANUEL",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '43909967'"
      },
      {
       "value": "44829465",
       "text": "CASTELLARES CUYA ENRIQUE LUIS",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '44829465'"
      },
      {
       "value": "25720478",
       "text": "BAZALAR PIZARRO EDUARDO GONZALO",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '25720478'"
      },
      {
       "value": "7262835",
       "text": "RODRIGUEZ PORRAS JUAN CARLOS",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '7262835'"
      },
      {
       "value": "43220913",
       "text": "DE LA CRUZ PAUCAR LUZ JUDITH",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '43220913'"
      },
      {
       "value": "44646487",
       "text": "PANDO GUILLEN EDITH IVET",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '44646487'"
      },
      {
       "value": "73824248",
       "text": "CANO ÑATO PILAR SOLEDAD",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '73824248'"
      },
      {
       "value": "73983886",
       "text": "OTOYA SILVA CLAUDIA FIORELA",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '73983886'"
      },
      {
       "value": "47257757",
       "text": "HENDRICK HURTADO SHIRLEY MILAGROS",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '47257757'"
      }
     ]
    },
    {
     "type": "matrix",
     "name": "evaluate-colabs-from-pilar-Trabajamos juntosd",
     "title": "Trabajamos juntos",
     "description": "Encuentra el balance entre el trabajo y sus motivaciones personales. Se enfoca en lo positivo de la vida y le transmite ese estado de ánimo a los demás.",
     "columns": [
      "1",
      "2",
      "3",
      "4",
      "5"
     ],
     "rows": [
      {
       "value": "2845348",
       "text": "SEMINARIO REUSCHE MARTIN HERNAN",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '2845348'"
      },
      {
       "value": "72505476",
       "text": "PARIONA ANDRADE JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '72505476'"
      },
      {
       "value": "40802587",
       "text": "NUÑEZ VERA DANTE EDUARDO RANJIT",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '40802587'"
      },
      {
       "value": "48038893",
       "text": "GALOPINO ANCAJIMA SHARON GERALDINNE",
       "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '48038893'"
      },
      {
       "value": "16757835",
       "text": "VELEZ ZAMORA ANTONIO HUMBERTO",
       "visibleIf": "{select-colabs-from-area-ADMINISTRACION Y FINANZAS} contains '16757835'"
      },
      {
       "value": "40335197",
       "text": "LOVEDAY MEJIA CHRISTIAN",
       "visibleIf": "{select-colabs-from-area-ALIANZAS COMERCIALES} contains '40335197'"
      },
      {
       "value": "72635353",
       "text": "SOTOMAYOR WOOLCOTT KENNETHY SONJA",
       "visibleIf": "{select-colabs-from-area-ALIANZAS COMERCIALES} contains '72635353'"
      },
      {
       "value": "32738701",
       "text": "CAHUA SALAZAR DANIEL SALVADOR",
       "visibleIf": "{select-colabs-from-area-ALMACEN DE DOCUMENTOS} contains '32738701'"
      },
      {
       "value": "71996517",
       "text": "CAHUA TORRES SEBASTIAN ALEJANDRO",
       "visibleIf": "{select-colabs-from-area-ALMACEN DE DOCUMENTOS} contains '71996517'"
      },
      {
       "value": "72029026",
       "text": "CIENFUEGOS GAMBOA JOHN PETHER",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '72029026'"
      },
      {
       "value": "43489421",
       "text": "ALEJANDRIA ZAPATA LUIS ALBERTO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43489421'"
      },
      {
       "value": "46409441",
       "text": "BASTIDAS ORELLANA EDWIN YOEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46409441'"
      },
      {
       "value": "45176954",
       "text": "CACERES GARCIA DIEGO ANGEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45176954'"
      },
      {
       "value": "40986494",
       "text": "CARHUAPOMA FLORES JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '40986494'"
      },
      {
       "value": "76348533",
       "text": "CASTILLO MARTINEZ KEVIN JOSE",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '76348533'"
      },
      {
       "value": "42654496",
       "text": "CASTRO ARRASCO JOVER SMIT",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '42654496'"
      },
      {
       "value": "42053463",
       "text": "DICHE PAREDES CLODOALDO ABRAHAM",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '42053463'"
      },
      {
       "value": "47216327",
       "text": "LEVANO RODRIGUEZ JOSIMAR WILFREDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '47216327'"
      },
      {
       "value": "4081715",
       "text": "MELGAREJO HIDALGO JUAN MANUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '4081715'"
      },
      {
       "value": "80106120",
       "text": "RIVERA VASQUEZ MARTIN RODOLFO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '80106120'"
      },
      {
       "value": "48584092",
       "text": "RUIZ PAZ LUIS ANGEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '48584092'"
      },
      {
       "value": "10085191",
       "text": "TORRES SURITA YSOCERES AUDON",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '10085191'"
      },
      {
       "value": "70327335",
       "text": "UGAZ BASTANTE BRUNO EDUARDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70327335'"
      },
      {
       "value": "46722514",
       "text": "RAMOS CORONADO LUIS GUSTAVO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46722514'"
      },
      {
       "value": "47023258",
       "text": "GUTIERREZ URBINA CESAR ALFONSO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '47023258'"
      },
      {
       "value": "70272674",
       "text": "SANDOVAL GONZALES MARCELO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70272674'"
      },
      {
       "value": "43993340",
       "text": "PERALES QUINTANA CARLOS EMILIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43993340'"
      },
      {
       "value": "43632179",
       "text": "ALIAGA RAMIREZ FREDDY ALEXANDER",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43632179'"
      },
      {
       "value": "42946534",
       "text": "CORREA HUAMAN JHONY RAUL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '42946534'"
      },
      {
       "value": "6432246",
       "text": "PEREZ MOSQUERA BARNAD DY FELIX",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '6432246'"
      },
      {
       "value": "43959477",
       "text": "ASTOCONDOR MOLINA JOSE MIGUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43959477'"
      },
      {
       "value": "48484614",
       "text": "TAIPE HUAIRA YOBER YONATAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '48484614'"
      },
      {
       "value": "44138783",
       "text": "GUEVARA CIEZA ANNER MIGUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '44138783'"
      },
      {
       "value": "72730699",
       "text": "SANTIVAÑEZ GOÑEZ GEANPIERRE",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '72730699'"
      },
      {
       "value": "45168261",
       "text": "CHAUCA MILIAN JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45168261'"
      },
      {
       "value": "73572438",
       "text": "BAUTISTA SOTOMAYOR ALDAIR ESMIR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '73572438'"
      },
      {
       "value": "77271310",
       "text": "TORBISCO ALVARADO JESUS ALEX",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '77271310'"
      },
      {
       "value": "70654934",
       "text": "SANTAMARIA CHINCHAY JUNIOR EDUARDO DARIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70654934'"
      },
      {
       "value": "45165391",
       "text": "MORENO PEREZ JORGE ARMANDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45165391'"
      },
      {
       "value": "70929727",
       "text": "QUISPE LEON LUIS BRAYAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70929727'"
      },
      {
       "value": "72571571",
       "text": "RAMOS PEÑA JOSE MANUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '72571571'"
      },
      {
       "value": "4747804",
       "text": "Yusmelis Del Valle Diaz",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '4747804'"
      },
      {
       "value": "3885974",
       "text": "COA MUÑOZ OLVELIS KAROLINA",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '3885974'"
      },
      {
       "value": "44725608",
       "text": "HUIDOBRO SOSA DARWINS ALBERTO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '44725608'"
      },
      {
       "value": "70043083",
       "text": "RUESTA MENDOZA KEVIN BRYAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70043083'"
      },
      {
       "value": "60898227",
       "text": "BALDEON DIAZ VICENTE PAUL",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '60898227'"
      },
      {
       "value": "48918807",
       "text": "DIAZ GUTIERREZ ARMANDO ALONSO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '48918807'"
      },
      {
       "value": "41964218",
       "text": "PALACIOS CARRILLO RONALD ALFREDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '41964218'"
      },
      {
       "value": "40164421",
       "text": "GAMARRA PINEDO JORGE ANTONIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '40164421'"
      },
      {
       "value": "3029052",
       "text": "ZERPA REYES HECTOR JOSE GREGORIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '3029052'"
      },
      {
       "value": "44420443",
       "text": "RAMOS SANDOVAL CARLOS EDUARDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '44420443'"
      },
      {
       "value": "46943958",
       "text": "CHAMORRO GERONIMO ALISON JONATHAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46943958'"
      },
      {
       "value": "41916191",
       "text": "NEYRA SILVA JORGE ALEXANDER",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '41916191'"
      },
      {
       "value": "71427195",
       "text": "CALDERON RODAS CRISTIAN OMAR ANTHONY",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '71427195'"
      },
      {
       "value": "45653891",
       "text": "PRINCIPE VASQUEZ ABRAHAM ANTONIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45653891'"
      },
      {
       "value": "46564768",
       "text": "PAEZ LLORONA YOEL RICARDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46564768'"
      },
      {
       "value": "74157431",
       "text": "CANAYO MARAPARA JUAN CARLOS",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '74157431'"
      },
      {
       "value": "46887147",
       "text": "CHANG MAICEL ANGEL ENRIQUE",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46887147'"
      },
      {
       "value": "71342771",
       "text": "AGUIRRE SILVA PAOLO FRANCESCO",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '71342771'"
      },
      {
       "value": "41051204",
       "text": "SAAVEDRA LUCANO SEGUNDO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '41051204'"
      },
      {
       "value": "74303496",
       "text": "GOMEZ HERRERA RUBEN JESUS",
       "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '74303496'"
      },
      {
       "value": "43538545",
       "text": "AGURTO OBREGON CESAR VICTORINO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '43538545'"
      },
      {
       "value": "47622051",
       "text": "ASPAJO LLERENA JOAQUIN AMADO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '47622051'"
      },
      {
       "value": "45314983",
       "text": "BARTRA VELA KELMER ALAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '45314983'"
      },
      {
       "value": "46074034",
       "text": "BENITES SILVA JONATHAN ANGEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '46074034'"
      },
      {
       "value": "25846925",
       "text": "CABRERA MAURTUA JAIME ALONSO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '25846925'"
      },
      {
       "value": "71258662",
       "text": "CARDENAS SHUAN JORGE FERNANDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '71258662'"
      },
      {
       "value": "41852611",
       "text": "CORDOVA CASTRO WILSSON STARLEY",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '41852611'"
      },
      {
       "value": "45189828",
       "text": "CORDOVA PASACHE JESUS MANUEL",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '45189828'"
      },
      {
       "value": "77300330",
       "text": "ESCOBEDO SANTA CRUZ HENRRY BRAYAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '77300330'"
      },
      {
       "value": "41916922",
       "text": "FLORES FERREYRA JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '41916922'"
      },
      {
       "value": "48101536",
       "text": "LOAYZA VASQUEZ CARLOS ALFREDO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '48101536'"
      },
      {
       "value": "72204123",
       "text": "MANRIQUE LOPEZ JHON LUIS",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '72204123'"
      },
      {
       "value": "7735664",
       "text": "PACHAS LAZO LIZANDRO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '7735664'"
      },
      {
       "value": "47531304",
       "text": "PACHECO HIDALGO DAVID VLADIMIR",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '47531304'"
      },
      {
       "value": "7641667",
       "text": "PARRA FERNANDEZ ANDRES PEDRO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '7641667'"
      },
      {
       "value": "42249673",
       "text": "RAMIREZ OBREGON OSCAR",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '42249673'"
      },
      {
       "value": "43082794",
       "text": "RAMOS CAMASITA CELSO ESTANISLAO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '43082794'"
      },
      {
       "value": "42443873",
       "text": "REAL AVALOS NILTON JAVIER",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '42443873'"
      },
      {
       "value": "6542042",
       "text": "RODRIGUEZ VASQUEZ ORLANDO EUGENIO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '6542042'"
      },
      {
       "value": "48222926",
       "text": "SALAZAR LLAJA DEIBIS JHONATAN",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '48222926'"
      },
      {
       "value": "72009438",
       "text": "SANDOVAL LEYVA GERSON TINO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '72009438'"
      },
      {
       "value": "74543283",
       "text": "SUAREZ VALERIO LENER JACKSON",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '74543283'"
      },
      {
       "value": "72848198",
       "text": "TEJADA ROMERO MARIO SIXTO",
       "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '72848198'"
      },
      {
       "value": "70055383",
       "text": "CHOKEWANCA BLANCO PAMELA",
       "visibleIf": "{select-colabs-from-area-ATRACCION Y DESARROLLO} contains '70055383'"
      },
      {
       "value": "46277915",
       "text": "VILLACORTA TARDIO ALENE ELIZABETH",
       "visibleIf": "{select-colabs-from-area-ATRACCION Y DESARROLLO} contains '46277915'"
      },
      {
       "value": "43772138",
       "text": "RODRIGUEZ CONTRERAS CLAUDIA ALEJANDRA",
       "visibleIf": "{select-colabs-from-area-AUDITORIA INTERNA} contains '43772138'"
      },
      {
       "value": "48315976",
       "text": "RODRIGUEZ AGREDA DIANA KATHERINE",
       "visibleIf": "{select-colabs-from-area-AUDITORIA INTERNA} contains '48315976'"
      },
      {
       "value": "47797685",
       "text": "OLIVARES CERNA KENJE BRIGGIT",
       "visibleIf": "{select-colabs-from-area-AUDITORIA INTERNA} contains '47797685'"
      },
      {
       "value": "10792396",
       "text": "MANRIQUE RAMOS WILLARD MARTIN",
       "visibleIf": "{select-colabs-from-area-AUTOMOTRIZ} contains '10792396'"
      },
      {
       "value": "7629078",
       "text": "ROMANET GALVAN RICARDO CARLOS",
       "visibleIf": "{select-colabs-from-area-AUTOMOTRIZ} contains '7629078'"
      },
      {
       "value": "70976479",
       "text": "MONCADA COLE MARIA ALEJANDRA",
       "visibleIf": "{select-colabs-from-area-AUTOMOTRIZ} contains '70976479'"
      },
      {
       "value": "41345981",
       "text": "MONTEVERDE LUQUE ZARELLA LIZBETH",
       "visibleIf": "{select-colabs-from-area-BIENESTAR Y SSOMA} contains '41345981'"
      },
      {
       "value": "45929767",
       "text": "VILLANUEVA BRUNO JEANCARLO DINO",
       "visibleIf": "{select-colabs-from-area-BIENESTAR Y SSOMA} contains '45929767'"
      },
      {
       "value": "10686006",
       "text": "ALARCON RODRIGUEZ LORELAY EVELYN",
       "visibleIf": "{select-colabs-from-area-BIENESTAR Y SSOMA} contains '10686006'"
      },
      {
       "value": "10136205",
       "text": "GHIGLINO ECHEGARAY JORGE LUIS",
       "visibleIf": "{select-colabs-from-area-CFO} contains '10136205'"
      },
      {
       "value": "10152944",
       "text": "ORTIZ RODAS GABRIELA ISABEL",
       "visibleIf": "{select-colabs-from-area-CFO} contains '10152944'"
      },
      {
       "value": "71242989",
       "text": "VARGAS SOLIS ROXANA MARIBEL",
       "visibleIf": "{select-colabs-from-area-CFO} contains '71242989'"
      },
      {
       "value": "72971290",
       "text": "PAJUELO MUÑOZ ARIEL RUBEN",
       "visibleIf": "{select-colabs-from-area-CFO} contains '72971290'"
      },
      {
       "value": "40323364",
       "text": "ROSADIO BENDEZU MARCO ANTONIO",
       "visibleIf": "{select-colabs-from-area-CFO} contains '40323364'"
      },
      {
       "value": "71539402",
       "text": "ESPINOZA PRINCIPE TIMOTEO JEFFERSON",
       "visibleIf": "{select-colabs-from-area-CFO} contains '71539402'"
      },
      {
       "value": "40485772",
       "text": "ANTON HUACHES CARLOS FELIPE",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40485772'"
      },
      {
       "value": "7504002",
       "text": "ARMAS DURAND MARIA ISABEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '7504002'"
      },
      {
       "value": "40153974",
       "text": "CARO TOMANGUILLA JIMMY GANDY",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40153974'"
      },
      {
       "value": "40560274",
       "text": "CARPIO MAINZA KARLA MAGALI",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40560274'"
      },
      {
       "value": "42434684",
       "text": "CUADROS AQUINO ARELIZ ESTRELLA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '42434684'"
      },
      {
       "value": "70002376",
       "text": "CURAY RODRIGUEZ NICOLE XIOMARA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '70002376'"
      },
      {
       "value": "5353330",
       "text": "DEL AGUILA UTIA JUAN MANUEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '5353330'"
      },
      {
       "value": "2816473",
       "text": "DELFIN CALDERON HERMINIA VICTORIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '2816473'"
      },
      {
       "value": "70442257",
       "text": "DIAZ LOPEZ MIRELLA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '70442257'"
      },
      {
       "value": "40432801",
       "text": "DIAZ TEJADA ELIANA CAROLINA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40432801'"
      },
      {
       "value": "43715528",
       "text": "FERNANDEZ ROSALES HAROLD PETTER",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '43715528'"
      },
      {
       "value": "46195520",
       "text": "HUAPAYA TAFUR LUIS ALBERTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '46195520'"
      },
      {
       "value": "6078620",
       "text": "JIMENEZ JULCA MIGUEL ANGEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '6078620'"
      },
      {
       "value": "40031813",
       "text": "MARQUINA ESCALANTE CESAR FABIAN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40031813'"
      },
      {
       "value": "10001657",
       "text": "MERCADO CHUMPITASI PIERO CESAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '10001657'"
      },
      {
       "value": "44360734",
       "text": "MESONES HUAMAN PAULO CESAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '44360734'"
      },
      {
       "value": "2883536",
       "text": "NAVARRO SANCHEZ CESAR AUGUSTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '2883536'"
      },
      {
       "value": "42846238",
       "text": "PORTELLA PORTUGAL JORGE OSWALDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '42846238'"
      },
      {
       "value": "46560478",
       "text": "RAVELLO CUELLAR JORGE LUIS",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '46560478'"
      },
      {
       "value": "47260953",
       "text": "BALAREZO CANTELLA ALESSIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '47260953'"
      },
      {
       "value": "46356695",
       "text": "CASTAÑEDA PASTOR VICTOR ERNESTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '46356695'"
      },
      {
       "value": "47519255",
       "text": "CRISTOBAL MADRID GUSTAVO MARIO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '47519255'"
      },
      {
       "value": "25683170",
       "text": "FERNANDEZ AMAYA ROBERTO FELIX",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '25683170'"
      },
      {
       "value": "40687895",
       "text": "FLOR BALDEON RICHARD VINDER",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '40687895'"
      },
      {
       "value": "10182159",
       "text": "GALVEZ TAGLE CESAR EDMUNDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '10182159'"
      },
      {
       "value": "72963805",
       "text": "GAMARRA QUISPE LUIS ENRIQUE",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '72963805'"
      },
      {
       "value": "25682528",
       "text": "MANSILLA FARFAN JOSE LEONARDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '25682528'"
      },
      {
       "value": "10028844",
       "text": "MENESES RAMOS MARIA CONSUELO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '10028844'"
      },
      {
       "value": "45847315",
       "text": "PADILLA FIGUEROA NOEMI TATIANA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '45847315'"
      },
      {
       "value": "45938071",
       "text": "PATROCINIO CHOQUE JOSE ALFREDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '45938071'"
      },
      {
       "value": "47603529",
       "text": "PIZARRO ESPICHAN RONALD OMAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '47603529'"
      },
      {
       "value": "9924529",
       "text": "QUISPE GUTIERREZ RUTH GLORIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '9924529'"
      },
      {
       "value": "18215648",
       "text": "RODRIGUEZ REYNA ROBERTO MARTIN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '18215648'"
      },
      {
       "value": "72906586",
       "text": "ROJAS AHUMADA JOSE ANTONIO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '72906586'"
      },
      {
       "value": "8885370",
       "text": "SALAZAR ORE MARCOS ENRIQUE",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '8885370'"
      },
      {
       "value": "6813880",
       "text": "VILLAORDUÑA CARDENAS EVER JUSTINIANO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '6813880'"
      },
      {
       "value": "6162086",
       "text": "ZORRILLA PIO JOSE MARTIN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '6162086'"
      },
      {
       "value": "10860243",
       "text": "ALIAGA DUEÑAS GABRIELA SILVIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10860243'"
      },
      {
       "value": "10861110",
       "text": "ANGULO ARISTA SHEYLA JAKELEEN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10861110'"
      },
      {
       "value": "9885877",
       "text": "CABRERA VERDE JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '9885877'"
      },
      {
       "value": "42977491",
       "text": "CANARIO HUAROTO ABEL OMAR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '42977491'"
      },
      {
       "value": "45642418",
       "text": "CASTRO VELASCO ROLANDO AGUSTIN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '45642418'"
      },
      {
       "value": "48053125",
       "text": "COLLANTES MIYASHIRO ZULEIKA YADIRA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '48053125'"
      },
      {
       "value": "40807560",
       "text": "DE LA CRUZ SALAZAR JHONY",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '40807560'"
      },
      {
       "value": "41080674",
       "text": "ESPINOZA LUNA YERKO ALFREDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '41080674'"
      },
      {
       "value": "44850775",
       "text": "FLORES ZULOETA JUAN CARLOS",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '44850775'"
      },
      {
       "value": "40000963",
       "text": "GARCIA HUAMANI ISABEL CRISTINA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '40000963'"
      },
      {
       "value": "47125982",
       "text": "GIRON RIOJA KIARA VICTORIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '47125982'"
      },
      {
       "value": "42410874",
       "text": "LAVADO BLAS EDWIN ADEMIR",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '42410874'"
      },
      {
       "value": "44539637",
       "text": "LIMAS CRUZ JESUS EDUARDO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '44539637'"
      },
      {
       "value": "10032439",
       "text": "MANGIER LIZAMA FRANKLIN ALBERTO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10032439'"
      },
      {
       "value": "10612032",
       "text": "PIZARRO AQUINO AUGUSTO CARLOS",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10612032'"
      },
      {
       "value": "43743468",
       "text": "RUBINA AVILA ROBERTO JONATHAN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '43743468'"
      },
      {
       "value": "10622377",
       "text": "SAUSA CARRION REYNALDO ALEJANDRO",
       "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10622377'"
      },
      {
       "value": "49016868",
       "text": "CARDENAS SMITH MICHAEL ABRAHAM",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '49016868'"
      },
      {
       "value": "42011663",
       "text": "CUBAS RAMIREZ MIKY ADAN",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '42011663'"
      },
      {
       "value": "5402391",
       "text": "ICOMENA GUERRA JOB DAVID",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '5402391'"
      },
      {
       "value": "43270715",
       "text": "MEJIA GONGORA JULLIER",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '43270715'"
      },
      {
       "value": "46721392",
       "text": "MUÑOZ MEDINA SARA PATRICIA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '46721392'"
      },
      {
       "value": "47426857",
       "text": "SAAVEDRA VARGAS NATAHALY ROMINA",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '47426857'"
      },
      {
       "value": "46724649",
       "text": "SANCHEZ GUTIERREZ RUBEN ISMAEL",
       "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '46724649'"
      },
      {
       "value": "71532747",
       "text": "ARAUJO JULCA FERNANDO MANUEL",
       "visibleIf": "{select-colabs-from-area-COMPENSACIONES Y BENEFICIOS} contains '71532747'"
      },
      {
       "value": "46414993",
       "text": "MEDRANO NOBLECILLA FIORELLA SHARON",
       "visibleIf": "{select-colabs-from-area-COMPENSACIONES Y BENEFICIOS} contains '46414993'"
      },
      {
       "value": "72747159",
       "text": "MALDONADO LUNA DAYANA NATY",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '72747159'"
      },
      {
       "value": "75473478",
       "text": "MARTINEZ YARANGA YONE ALEXANDRA",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '75473478'"
      },
      {
       "value": "42183454",
       "text": "OTINIANO LOPEZ IRIS RAQUEL",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '42183454'"
      },
      {
       "value": "72883933",
       "text": "VILLANUEVA VALENCIA LILIBETH CRISTY",
       "visibleIf": "{select-colabs-from-area-COMPRAS} contains '72883933'"
      },
      {
       "value": "47072568",
       "text": "ASTUÑAUPA NAJERA LUIS YONATAN",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '47072568'"
      },
      {
       "value": "40060377",
       "text": "ZAMORA TAPIA VIRNA IVETT",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '40060377'"
      },
      {
       "value": "74929399",
       "text": "FELIX MORALES WALTER HUBER",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '74929399'"
      },
      {
       "value": "71122395",
       "text": "QUISPE AYALA LEESLY ESTEFANY",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '71122395'"
      },
      {
       "value": "45833793",
       "text": "ARANDA SEVILLANO ROSIO",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '45833793'"
      },
      {
       "value": "71748333",
       "text": "CHAVEZ CORAL CRISTIAN ARMANDO",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '71748333'"
      },
      {
       "value": "72204506",
       "text": "REZZA PAJARES HILARY JOSELYN",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '72204506'"
      },
      {
       "value": "74635307",
       "text": "CAJAHUARINGA MACHUCA ZAMIRA CRISTINA",
       "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '74635307'"
      },
      {
       "value": "44444130",
       "text": "YATACO CASTILLO JOSE ALFREDO",
       "visibleIf": "{select-colabs-from-area-CONTROL DE GESTION} contains '44444130'"
      },
      {
       "value": "70124696",
       "text": "VILLENA NAVARRO CARLOS ENRIQUE",
       "visibleIf": "{select-colabs-from-area-CONTROL DE GESTION} contains '70124696'"
      },
      {
       "value": "76156527",
       "text": "PANDURO BARRANTES JUAN DIEGO",
       "visibleIf": "{select-colabs-from-area-CONTROL DE GESTION} contains '76156527'"
      },
      {
       "value": "9956020",
       "text": "BAUTISTA QUINTANILLA JESSICA JUDITH",
       "visibleIf": "{select-colabs-from-area-CREDITOS} contains '9956020'"
      },
      {
       "value": "2833264",
       "text": "HIDALGO CHAVEZ LUIS FELIPE",
       "visibleIf": "{select-colabs-from-area-CREDITOS} contains '2833264'"
      },
      {
       "value": "76479059",
       "text": "SANCHEZ ROBLEDO ALEXIS SANTINO",
       "visibleIf": "{select-colabs-from-area-CREDITOS} contains '76479059'"
      },
      {
       "value": "40803796",
       "text": "SHIKIYA HURTADO ANA TERESA",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '40803796'"
      },
      {
       "value": "47314100",
       "text": "HINOSTROZA HUANAY LUCIA DEL CARMEN",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '47314100'"
      },
      {
       "value": "41797768",
       "text": "MEDRANO NECOCHEA VICTOR JAVIER",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '41797768'"
      },
      {
       "value": "73657312",
       "text": "TALLEDO NAVARRO PAMELA",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '73657312'"
      },
      {
       "value": "10558194",
       "text": "LARRABURE PEREZ WILSON RICARDO",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '10558194'"
      },
      {
       "value": "47837733",
       "text": "PANDURO FERNANDEZ GIAN PIERRE",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '47837733'"
      },
      {
       "value": "45519571",
       "text": "VIZCARDO PANCORVO JUAN JOSE",
       "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '45519571'"
      },
      {
       "value": "6543622",
       "text": "FORSYTH ALARCO JUAN ALBERTO",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '6543622'"
      },
      {
       "value": "6543619",
       "text": "FORSYTH RIVAROLA JUAN ALBERTO FELIPE",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '6543619'"
      },
      {
       "value": "6430409",
       "text": "OCHOA CHAUCA PABLO CESAR",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '6430409'"
      },
      {
       "value": "25800748",
       "text": "QUIROZ AVILA HENRY",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '25800748'"
      },
      {
       "value": "19996041",
       "text": "SOLIS CALDERON HECTOR ELEODORO",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '19996041'"
      },
      {
       "value": "42915146",
       "text": "PIZARRO ZAPATA BENJAMIN JESUS",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '42915146'"
      },
      {
       "value": "9302319",
       "text": "KALINOWSKI BARCLAY VIRNA LUZ",
       "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '9302319'"
      },
      {
       "value": "10476350",
       "text": "AMEGHINO ANDALUZ GIANCARLO",
       "visibleIf": "{select-colabs-from-area-GESTIÓN Y DESARROLLO HUMANO} contains '10476350'"
      },
      {
       "value": "44647618",
       "text": "EDEN VILLEGAS OMAR ALEJANDRO",
       "visibleIf": "{select-colabs-from-area-IMPORTACIONES} contains '44647618'"
      },
      {
       "value": "70193596",
       "text": "KIWAKI ARAUCO AKEMI LUZ",
       "visibleIf": "{select-colabs-from-area-IMPORTACIONES} contains '70193596'"
      },
      {
       "value": "48588559",
       "text": "ZAPATA CORTEZ STEPHANIE",
       "visibleIf": "{select-colabs-from-area-IMPORTACIONES} contains '48588559'"
      },
      {
       "value": "45335304",
       "text": "CHAVEZ OTINIANO LORENA JHAZMIN",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '45335304'"
      },
      {
       "value": "41727660",
       "text": "MARCELO CELEDONIO LUIS CARLOS",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '41727660'"
      },
      {
       "value": "8035974",
       "text": "MARTINEZ SANCHEZ FREDDY AUGUSTO",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '8035974'"
      },
      {
       "value": "46761555",
       "text": "GAMARRA CASTILLO URIEL LEANDRO",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '46761555'"
      },
      {
       "value": "75267982",
       "text": "CAMACHO YACSAHUACHE GABRIEL ANTAR",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '75267982'"
      },
      {
       "value": "77575494",
       "text": "RAMIREZ SILVA MELANNY DENISSE",
       "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '77575494'"
      },
      {
       "value": "44363769",
       "text": "PEÑA TORRES LUISA RICARDINA",
       "visibleIf": "{select-colabs-from-area-INNOVACION Y PROCESOS} contains '44363769'"
      },
      {
       "value": "47486524",
       "text": "CHINCHA MATA STEVEN BRYANT",
       "visibleIf": "{select-colabs-from-area-INNOVACION Y PROCESOS} contains '47486524'"
      },
      {
       "value": "70289458",
       "text": "VILCAHUAMAN VALDIVIESO IAN RAUL",
       "visibleIf": "{select-colabs-from-area-INNOVACION Y PROCESOS} contains '70289458'"
      },
      {
       "value": "40449992",
       "text": "CORREA VERGARA MARIA DEL CARMEN",
       "visibleIf": "{select-colabs-from-area-LEGAL} contains '40449992'"
      },
      {
       "value": "45073283",
       "text": "VELEZ DE VILLA YUPANQUI CINDY MARLENY",
       "visibleIf": "{select-colabs-from-area-LEGAL} contains '45073283'"
      },
      {
       "value": "70609901",
       "text": "SABOYA CORDOVA INTI CATARI",
       "visibleIf": "{select-colabs-from-area-LEGAL} contains '70609901'"
      },
      {
       "value": "82466",
       "text": "DEL AGUILA HIDALGO SAMUEL",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '82466'"
      },
      {
       "value": "40646048",
       "text": "JIMENEZ ASPILCUETA JOEL",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '40646048'"
      },
      {
       "value": "42850407",
       "text": "MALASQUEZ GARCIA ALDO LEONARDO",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '42850407'"
      },
      {
       "value": "10744655",
       "text": "CONEJO GUARDAMINO JOE MIGUEL",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '10744655'"
      },
      {
       "value": "45613368",
       "text": "SILVA VASQUEZ DEIVID CRISTHIAN",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '45613368'"
      },
      {
       "value": "45092398",
       "text": "MENZALA ORTEGA ALEX RODOLFO",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '45092398'"
      },
      {
       "value": "47154147",
       "text": "CHUMPITAZI BARRETO DIEGO JESUS",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '47154147'"
      },
      {
       "value": "45256809",
       "text": "CHEAN RUIZ SERGIO",
       "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '45256809'"
      },
      {
       "value": "40006296",
       "text": "RUIZ FLORES LUZ GISSELLA",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '40006296'"
      },
      {
       "value": "44871244",
       "text": "BLUDAU TUPAC YUPANQUI JAN HENRY",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '44871244'"
      },
      {
       "value": "43569973",
       "text": "DELGADO UNDA RENZO JESUS",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '43569973'"
      },
      {
       "value": "74438666",
       "text": "COTRINA VERANO VIVIANA PURITA",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '74438666'"
      },
      {
       "value": "72191719",
       "text": "CURI GRADOS ELVIS RICARDO PIERO",
       "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '72191719'"
      },
      {
       "value": "10672242",
       "text": "BALCAZER LOLI LIBER MARTIN",
       "visibleIf": "{select-colabs-from-area-OPERACIONES} contains '10672242'"
      },
      {
       "value": "47845515",
       "text": "TORO PALOMINO GIANCARLO EDINSON",
       "visibleIf": "{select-colabs-from-area-OPERACIONES} contains '47845515'"
      },
      {
       "value": "2899681",
       "text": "SALAS PEZUA HAROLD ALBERTO",
       "visibleIf": "{select-colabs-from-area-OPERACIONES} contains '2899681'"
      },
      {
       "value": "8247662",
       "text": "REYES BENAVIDES MELSI ELIZABETH",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '8247662'"
      },
      {
       "value": "70944487",
       "text": "BARRIENTOS TAPIA LAURA LUCIA",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '70944487'"
      },
      {
       "value": "10459679",
       "text": "JUAREZ CRUZ GUSTAVO ERWIN",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '10459679'"
      },
      {
       "value": "43068853",
       "text": "BUENDIA GRAZIANI GUSTAVO ADOLFO",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '43068853'"
      },
      {
       "value": "46457171",
       "text": "RODRIGUEZ PAREDES BRENDA ALEJANDRA",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '46457171'"
      },
      {
       "value": "73087145",
       "text": "ORIHUELA BEJARANO PATRICIA KENDY",
       "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '73087145'"
      },
      {
       "value": "44652717",
       "text": "VELASQUEZ SALDAÑA WILMER GERARDO",
       "visibleIf": "{select-colabs-from-area-PLANILLAS} contains '44652717'"
      },
      {
       "value": "43308092",
       "text": "JURADO HUAMAN JOJHANSON FERNANDO",
       "visibleIf": "{select-colabs-from-area-PLANILLAS} contains '43308092'"
      },
      {
       "value": "72894842",
       "text": "DAVILA MUÑOZ FIORELLA ESTEFANY",
       "visibleIf": "{select-colabs-from-area-PLANILLAS} contains '72894842'"
      },
      {
       "value": "10741277",
       "text": "MORILLO MACHADO JUAN RENE",
       "visibleIf": "{select-colabs-from-area-SEGURIDAD} contains '10741277'"
      },
      {
       "value": "40715092",
       "text": "DIAZ CAMPOS ARTURO",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '40715092'"
      },
      {
       "value": "10004335",
       "text": "BRINGAS PROCHAZKA SANDRA SILVANA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '10004335'"
      },
      {
       "value": "6771922",
       "text": "RODRIGUEZ CARPIO RUTH SELENE",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '6771922'"
      },
      {
       "value": "9865016",
       "text": "VARGAS PEÑA ERICK",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '9865016'"
      },
      {
       "value": "45453006",
       "text": "SALVADOR SALVADOR ERIC DEIBY",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '45453006'"
      },
      {
       "value": "72306819",
       "text": "ACUÑA VENTO MILENY SHERYL",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '72306819'"
      },
      {
       "value": "46286135",
       "text": "FLORES FERNANDEZ CLAUDIA CECILIA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '46286135'"
      },
      {
       "value": "45938129",
       "text": "ALBA SANCHEZ DIANA CAROLINA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '45938129'"
      },
      {
       "value": "47484915",
       "text": "PUMA RAMOS BRAYAN CRISTIAN",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '47484915'"
      },
      {
       "value": "44482449",
       "text": "LOPEZ AGUIRRE JAVIER JESUS",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '44482449'"
      },
      {
       "value": "46316278",
       "text": "CHAVEZ CONDE SMITH JOSEPH",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '46316278'"
      },
      {
       "value": "73634296",
       "text": "CALDERON TORRES MARTIN MAURICIO",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '73634296'"
      },
      {
       "value": "47437046",
       "text": "MORI CUENCA KATTYA LIZBETH",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '47437046'"
      },
      {
       "value": "74158343",
       "text": "MEDINA ESPINOZA ANGELICA MILAGROS ANTONIETA",
       "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '74158343'"
      },
      {
       "value": "40241539",
       "text": "RAMIREZ ZEVALLOS JOSE MIGUEL",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '40241539'"
      },
      {
       "value": "40487202",
       "text": "CONDOR CASTILLO JUAN HARRY",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '40487202'"
      },
      {
       "value": "7488058",
       "text": "CABANA BUITRON WILBER CELEDONIO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '7488058'"
      },
      {
       "value": "47805975",
       "text": "CARDENAS HUAMANI EDWIN JAVIER",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '47805975'"
      },
      {
       "value": "73875549",
       "text": "JIHUA TAPAHUASCO JUAN JOSE",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '73875549'"
      },
      {
       "value": "43077392",
       "text": "RUIZ VASQUEZ SANDRO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '43077392'"
      },
      {
       "value": "47036204",
       "text": "GOMEZ CACHA JULIO CESAR",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '47036204'"
      },
      {
       "value": "41261260",
       "text": "RIVERA QUISPE MARTIN JULIO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '41261260'"
      },
      {
       "value": "44954065",
       "text": "GAMBOA QUILICHE DANILO MAX",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '44954065'"
      },
      {
       "value": "70319277",
       "text": "LUPUCHE SILVA ELISEO",
       "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '70319277'"
      },
      {
       "value": "25817327",
       "text": "AYALA CHIROQUE LUIS",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '25817327'"
      },
      {
       "value": "9620603",
       "text": "CANALES CORBETTA HERNAN JAVIER",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '9620603'"
      },
      {
       "value": "25444867",
       "text": "CARHUAPOMA FLORES HERNAN JAIME",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '25444867'"
      },
      {
       "value": "9555005",
       "text": "YUPANQUI ALARCON FERMIN",
       "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '9555005'"
      },
      {
       "value": "7508404",
       "text": "NAUPARI HURTADO RAFAEL",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '7508404'"
      },
      {
       "value": "43909967",
       "text": "SOSA SAN MARTIN PEDRO MANUEL",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '43909967'"
      },
      {
       "value": "44829465",
       "text": "CASTELLARES CUYA ENRIQUE LUIS",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '44829465'"
      },
      {
       "value": "25720478",
       "text": "BAZALAR PIZARRO EDUARDO GONZALO",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '25720478'"
      },
      {
       "value": "7262835",
       "text": "RODRIGUEZ PORRAS JUAN CARLOS",
       "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '7262835'"
      },
      {
       "value": "43220913",
       "text": "DE LA CRUZ PAUCAR LUZ JUDITH",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '43220913'"
      },
      {
       "value": "44646487",
       "text": "PANDO GUILLEN EDITH IVET",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '44646487'"
      },
      {
       "value": "73824248",
       "text": "CANO ÑATO PILAR SOLEDAD",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '73824248'"
      },
      {
       "value": "73983886",
       "text": "OTOYA SILVA CLAUDIA FIORELA",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '73983886'"
      },
      {
       "value": "47257757",
       "text": "HENDRICK HURTADO SHIRLEY MILAGROS",
       "visibleIf": "{select-colabs-from-area-TESORERIA} contains '47257757'"
      }
     ]
    }
   ],
   "title": "Califica a tus compañeros según los pilares",
   "description": "Del 1 al 5, siendo 1: Muy en desacuerdo y 5: Muy de acuerdo, ¿Qué tanto vive el colaborador el pilar?"
  },
  {
   "name": "feedbackColabs",
   "elements": [
    {
     "type": "comment",
     "name": "feedback-colabs-2845348",
     "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '2845348'",
     "title": "SEMINARIO REUSCHE MARTIN HERNAN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72505476",
     "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '72505476'",
     "title": "PARIONA ANDRADE JULIO CESAR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40802587",
     "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '40802587'",
     "title": "NUÑEZ VERA DANTE EDUARDO RANJIT",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-48038893",
     "visibleIf": "{select-colabs-from-area-ACCESORIOS} contains '48038893'",
     "title": "GALOPINO ANCAJIMA SHARON GERALDINNE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-16757835",
     "visibleIf": "{select-colabs-from-area-ADMINISTRACION Y FINANZAS} contains '16757835'",
     "title": "VELEZ ZAMORA ANTONIO HUMBERTO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40335197",
     "visibleIf": "{select-colabs-from-area-ALIANZAS COMERCIALES} contains '40335197'",
     "title": "LOVEDAY MEJIA CHRISTIAN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72635353",
     "visibleIf": "{select-colabs-from-area-ALIANZAS COMERCIALES} contains '72635353'",
     "title": "SOTOMAYOR WOOLCOTT KENNETHY SONJA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-32738701",
     "visibleIf": "{select-colabs-from-area-ALMACEN DE DOCUMENTOS} contains '32738701'",
     "title": "CAHUA SALAZAR DANIEL SALVADOR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-71996517",
     "visibleIf": "{select-colabs-from-area-ALMACEN DE DOCUMENTOS} contains '71996517'",
     "title": "CAHUA TORRES SEBASTIAN ALEJANDRO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72029026",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '72029026'",
     "title": "CIENFUEGOS GAMBOA JOHN PETHER",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43489421",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43489421'",
     "title": "ALEJANDRIA ZAPATA LUIS ALBERTO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46409441",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46409441'",
     "title": "BASTIDAS ORELLANA EDWIN YOEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45176954",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45176954'",
     "title": "CACERES GARCIA DIEGO ANGEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40986494",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '40986494'",
     "title": "CARHUAPOMA FLORES JULIO CESAR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-76348533",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '76348533'",
     "title": "CASTILLO MARTINEZ KEVIN JOSE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-42654496",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '42654496'",
     "title": "CASTRO ARRASCO JOVER SMIT",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-42053463",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '42053463'",
     "title": "DICHE PAREDES CLODOALDO ABRAHAM",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47216327",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '47216327'",
     "title": "LEVANO RODRIGUEZ JOSIMAR WILFREDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-4081715",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '4081715'",
     "title": "MELGAREJO HIDALGO JUAN MANUEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-80106120",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '80106120'",
     "title": "RIVERA VASQUEZ MARTIN RODOLFO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-48584092",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '48584092'",
     "title": "RUIZ PAZ LUIS ANGEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10085191",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '10085191'",
     "title": "TORRES SURITA YSOCERES AUDON",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-70327335",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70327335'",
     "title": "UGAZ BASTANTE BRUNO EDUARDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46722514",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46722514'",
     "title": "RAMOS CORONADO LUIS GUSTAVO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47023258",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '47023258'",
     "title": "GUTIERREZ URBINA CESAR ALFONSO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-70272674",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70272674'",
     "title": "SANDOVAL GONZALES MARCELO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43993340",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43993340'",
     "title": "PERALES QUINTANA CARLOS EMILIO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43632179",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43632179'",
     "title": "ALIAGA RAMIREZ FREDDY ALEXANDER",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-42946534",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '42946534'",
     "title": "CORREA HUAMAN JHONY RAUL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-6432246",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '6432246'",
     "title": "PEREZ MOSQUERA BARNAD DY FELIX",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43959477",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '43959477'",
     "title": "ASTOCONDOR MOLINA JOSE MIGUEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-48484614",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '48484614'",
     "title": "TAIPE HUAIRA YOBER YONATAN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-44138783",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '44138783'",
     "title": "GUEVARA CIEZA ANNER MIGUEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72730699",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '72730699'",
     "title": "SANTIVAÑEZ GOÑEZ GEANPIERRE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45168261",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45168261'",
     "title": "CHAUCA MILIAN JULIO CESAR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-73572438",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '73572438'",
     "title": "BAUTISTA SOTOMAYOR ALDAIR ESMIR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-77271310",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '77271310'",
     "title": "TORBISCO ALVARADO JESUS ALEX",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-70654934",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70654934'",
     "title": "SANTAMARIA CHINCHAY JUNIOR EDUARDO DARIO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45165391",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45165391'",
     "title": "MORENO PEREZ JORGE ARMANDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-70929727",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70929727'",
     "title": "QUISPE LEON LUIS BRAYAN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72571571",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '72571571'",
     "title": "RAMOS PEÑA JOSE MANUEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-4747804",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '4747804'",
     "title": "Yusmelis Del Valle Diaz",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-3885974",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '3885974'",
     "title": "COA MUÑOZ OLVELIS KAROLINA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-44725608",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '44725608'",
     "title": "HUIDOBRO SOSA DARWINS ALBERTO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-70043083",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '70043083'",
     "title": "RUESTA MENDOZA KEVIN BRYAN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-60898227",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '60898227'",
     "title": "BALDEON DIAZ VICENTE PAUL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-48918807",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '48918807'",
     "title": "DIAZ GUTIERREZ ARMANDO ALONSO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-41964218",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '41964218'",
     "title": "PALACIOS CARRILLO RONALD ALFREDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40164421",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '40164421'",
     "title": "GAMARRA PINEDO JORGE ANTONIO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-3029052",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '3029052'",
     "title": "ZERPA REYES HECTOR JOSE GREGORIO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-44420443",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '44420443'",
     "title": "RAMOS SANDOVAL CARLOS EDUARDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46943958",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46943958'",
     "title": "CHAMORRO GERONIMO ALISON JONATHAN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-41916191",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '41916191'",
     "title": "NEYRA SILVA JORGE ALEXANDER",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-71427195",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '71427195'",
     "title": "CALDERON RODAS CRISTIAN OMAR ANTHONY",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45653891",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '45653891'",
     "title": "PRINCIPE VASQUEZ ABRAHAM ANTONIO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46564768",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46564768'",
     "title": "PAEZ LLORONA YOEL RICARDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-74157431",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '74157431'",
     "title": "CANAYO MARAPARA JUAN CARLOS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46887147",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '46887147'",
     "title": "CHANG MAICEL ANGEL ENRIQUE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-71342771",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '71342771'",
     "title": "AGUIRRE SILVA PAOLO FRANCESCO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-41051204",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '41051204'",
     "title": "SAAVEDRA LUCANO SEGUNDO CESAR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-74303496",
     "visibleIf": "{select-colabs-from-area-ALMACEN REPUESTOS} contains '74303496'",
     "title": "GOMEZ HERRERA RUBEN JESUS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43538545",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '43538545'",
     "title": "AGURTO OBREGON CESAR VICTORINO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47622051",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '47622051'",
     "title": "ASPAJO LLERENA JOAQUIN AMADO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45314983",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '45314983'",
     "title": "BARTRA VELA KELMER ALAN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46074034",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '46074034'",
     "title": "BENITES SILVA JONATHAN ANGEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-25846925",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '25846925'",
     "title": "CABRERA MAURTUA JAIME ALONSO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-71258662",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '71258662'",
     "title": "CARDENAS SHUAN JORGE FERNANDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-41852611",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '41852611'",
     "title": "CORDOVA CASTRO WILSSON STARLEY",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45189828",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '45189828'",
     "title": "CORDOVA PASACHE JESUS MANUEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-77300330",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '77300330'",
     "title": "ESCOBEDO SANTA CRUZ HENRRY BRAYAN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-41916922",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '41916922'",
     "title": "FLORES FERREYRA JULIO CESAR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-48101536",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '48101536'",
     "title": "LOAYZA VASQUEZ CARLOS ALFREDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72204123",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '72204123'",
     "title": "MANRIQUE LOPEZ JHON LUIS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-7735664",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '7735664'",
     "title": "PACHAS LAZO LIZANDRO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47531304",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '47531304'",
     "title": "PACHECO HIDALGO DAVID VLADIMIR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-7641667",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '7641667'",
     "title": "PARRA FERNANDEZ ANDRES PEDRO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-42249673",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '42249673'",
     "title": "RAMIREZ OBREGON OSCAR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43082794",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '43082794'",
     "title": "RAMOS CAMASITA CELSO ESTANISLAO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-42443873",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '42443873'",
     "title": "REAL AVALOS NILTON JAVIER",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-6542042",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '6542042'",
     "title": "RODRIGUEZ VASQUEZ ORLANDO EUGENIO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-48222926",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '48222926'",
     "title": "SALAZAR LLAJA DEIBIS JHONATAN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72009438",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '72009438'",
     "title": "SANDOVAL LEYVA GERSON TINO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-74543283",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '74543283'",
     "title": "SUAREZ VALERIO LENER JACKSON",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72848198",
     "visibleIf": "{select-colabs-from-area-ALMACEN VEHICULOS} contains '72848198'",
     "title": "TEJADA ROMERO MARIO SIXTO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-70055383",
     "visibleIf": "{select-colabs-from-area-ATRACCION Y DESARROLLO} contains '70055383'",
     "title": "CHOKEWANCA BLANCO PAMELA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46277915",
     "visibleIf": "{select-colabs-from-area-ATRACCION Y DESARROLLO} contains '46277915'",
     "title": "VILLACORTA TARDIO ALENE ELIZABETH",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43772138",
     "visibleIf": "{select-colabs-from-area-AUDITORIA INTERNA} contains '43772138'",
     "title": "RODRIGUEZ CONTRERAS CLAUDIA ALEJANDRA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-48315976",
     "visibleIf": "{select-colabs-from-area-AUDITORIA INTERNA} contains '48315976'",
     "title": "RODRIGUEZ AGREDA DIANA KATHERINE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47797685",
     "visibleIf": "{select-colabs-from-area-AUDITORIA INTERNA} contains '47797685'",
     "title": "OLIVARES CERNA KENJE BRIGGIT",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10792396",
     "visibleIf": "{select-colabs-from-area-AUTOMOTRIZ} contains '10792396'",
     "title": "MANRIQUE RAMOS WILLARD MARTIN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-7629078",
     "visibleIf": "{select-colabs-from-area-AUTOMOTRIZ} contains '7629078'",
     "title": "ROMANET GALVAN RICARDO CARLOS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-70976479",
     "visibleIf": "{select-colabs-from-area-AUTOMOTRIZ} contains '70976479'",
     "title": "MONCADA COLE MARIA ALEJANDRA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-41345981",
     "visibleIf": "{select-colabs-from-area-BIENESTAR Y SSOMA} contains '41345981'",
     "title": "MONTEVERDE LUQUE ZARELLA LIZBETH",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45929767",
     "visibleIf": "{select-colabs-from-area-BIENESTAR Y SSOMA} contains '45929767'",
     "title": "VILLANUEVA BRUNO JEANCARLO DINO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10686006",
     "visibleIf": "{select-colabs-from-area-BIENESTAR Y SSOMA} contains '10686006'",
     "title": "ALARCON RODRIGUEZ LORELAY EVELYN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10136205",
     "visibleIf": "{select-colabs-from-area-CFO} contains '10136205'",
     "title": "GHIGLINO ECHEGARAY JORGE LUIS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10152944",
     "visibleIf": "{select-colabs-from-area-CFO} contains '10152944'",
     "title": "ORTIZ RODAS GABRIELA ISABEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-71242989",
     "visibleIf": "{select-colabs-from-area-CFO} contains '71242989'",
     "title": "VARGAS SOLIS ROXANA MARIBEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72971290",
     "visibleIf": "{select-colabs-from-area-CFO} contains '72971290'",
     "title": "PAJUELO MUÑOZ ARIEL RUBEN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40323364",
     "visibleIf": "{select-colabs-from-area-CFO} contains '40323364'",
     "title": "ROSADIO BENDEZU MARCO ANTONIO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-71539402",
     "visibleIf": "{select-colabs-from-area-CFO} contains '71539402'",
     "title": "ESPINOZA PRINCIPE TIMOTEO JEFFERSON",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40485772",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40485772'",
     "title": "ANTON HUACHES CARLOS FELIPE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-7504002",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '7504002'",
     "title": "ARMAS DURAND MARIA ISABEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40153974",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40153974'",
     "title": "CARO TOMANGUILLA JIMMY GANDY",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40560274",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40560274'",
     "title": "CARPIO MAINZA KARLA MAGALI",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-42434684",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '42434684'",
     "title": "CUADROS AQUINO ARELIZ ESTRELLA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-70002376",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '70002376'",
     "title": "CURAY RODRIGUEZ NICOLE XIOMARA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-5353330",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '5353330'",
     "title": "DEL AGUILA UTIA JUAN MANUEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-2816473",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '2816473'",
     "title": "DELFIN CALDERON HERMINIA VICTORIA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-70442257",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '70442257'",
     "title": "DIAZ LOPEZ MIRELLA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40432801",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40432801'",
     "title": "DIAZ TEJADA ELIANA CAROLINA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43715528",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '43715528'",
     "title": "FERNANDEZ ROSALES HAROLD PETTER",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46195520",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '46195520'",
     "title": "HUAPAYA TAFUR LUIS ALBERTO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-6078620",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '6078620'",
     "title": "JIMENEZ JULCA MIGUEL ANGEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40031813",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '40031813'",
     "title": "MARQUINA ESCALANTE CESAR FABIAN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10001657",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '10001657'",
     "title": "MERCADO CHUMPITASI PIERO CESAR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-44360734",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '44360734'",
     "title": "MESONES HUAMAN PAULO CESAR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-2883536",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '2883536'",
     "title": "NAVARRO SANCHEZ CESAR AUGUSTO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-42846238",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '42846238'",
     "title": "PORTELLA PORTUGAL JORGE OSWALDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46560478",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 2R} contains '46560478'",
     "title": "RAVELLO CUELLAR JORGE LUIS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47260953",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '47260953'",
     "title": "BALAREZO CANTELLA ALESSIA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46356695",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '46356695'",
     "title": "CASTAÑEDA PASTOR VICTOR ERNESTO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47519255",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '47519255'",
     "title": "CRISTOBAL MADRID GUSTAVO MARIO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-25683170",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '25683170'",
     "title": "FERNANDEZ AMAYA ROBERTO FELIX",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40687895",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '40687895'",
     "title": "FLOR BALDEON RICHARD VINDER",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10182159",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '10182159'",
     "title": "GALVEZ TAGLE CESAR EDMUNDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72963805",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '72963805'",
     "title": "GAMARRA QUISPE LUIS ENRIQUE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-25682528",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '25682528'",
     "title": "MANSILLA FARFAN JOSE LEONARDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10028844",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '10028844'",
     "title": "MENESES RAMOS MARIA CONSUELO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45847315",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '45847315'",
     "title": "PADILLA FIGUEROA NOEMI TATIANA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45938071",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '45938071'",
     "title": "PATROCINIO CHOQUE JOSE ALFREDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47603529",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '47603529'",
     "title": "PIZARRO ESPICHAN RONALD OMAR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-9924529",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '9924529'",
     "title": "QUISPE GUTIERREZ RUTH GLORIA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-18215648",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '18215648'",
     "title": "RODRIGUEZ REYNA ROBERTO MARTIN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72906586",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '72906586'",
     "title": "ROJAS AHUMADA JOSE ANTONIO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-8885370",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '8885370'",
     "title": "SALAZAR ORE MARCOS ENRIQUE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-6813880",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '6813880'",
     "title": "VILLAORDUÑA CARDENAS EVER JUSTINIANO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-6162086",
     "visibleIf": "{select-colabs-from-area-COMERCIAL 3R} contains '6162086'",
     "title": "ZORRILLA PIO JOSE MARTIN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10860243",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10860243'",
     "title": "ALIAGA DUEÑAS GABRIELA SILVIA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10861110",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10861110'",
     "title": "ANGULO ARISTA SHEYLA JAKELEEN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-9885877",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '9885877'",
     "title": "CABRERA VERDE JULIO CESAR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-42977491",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '42977491'",
     "title": "CANARIO HUAROTO ABEL OMAR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45642418",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '45642418'",
     "title": "CASTRO VELASCO ROLANDO AGUSTIN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-48053125",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '48053125'",
     "title": "COLLANTES MIYASHIRO ZULEIKA YADIRA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40807560",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '40807560'",
     "title": "DE LA CRUZ SALAZAR JHONY",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-41080674",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '41080674'",
     "title": "ESPINOZA LUNA YERKO ALFREDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-44850775",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '44850775'",
     "title": "FLORES ZULOETA JUAN CARLOS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40000963",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '40000963'",
     "title": "GARCIA HUAMANI ISABEL CRISTINA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47125982",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '47125982'",
     "title": "GIRON RIOJA KIARA VICTORIA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-42410874",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '42410874'",
     "title": "LAVADO BLAS EDWIN ADEMIR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-44539637",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '44539637'",
     "title": "LIMAS CRUZ JESUS EDUARDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10032439",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10032439'",
     "title": "MANGIER LIZAMA FRANKLIN ALBERTO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10612032",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10612032'",
     "title": "PIZARRO AQUINO AUGUSTO CARLOS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43743468",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '43743468'",
     "title": "RUBINA AVILA ROBERTO JONATHAN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10622377",
     "visibleIf": "{select-colabs-from-area-COMERCIAL REPUESTOS} contains '10622377'",
     "title": "SAUSA CARRION REYNALDO ALEJANDRO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-49016868",
     "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '49016868'",
     "title": "CARDENAS SMITH MICHAEL ABRAHAM",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-42011663",
     "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '42011663'",
     "title": "CUBAS RAMIREZ MIKY ADAN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-5402391",
     "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '5402391'",
     "title": "ICOMENA GUERRA JOB DAVID",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43270715",
     "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '43270715'",
     "title": "MEJIA GONGORA JULLIER",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46721392",
     "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '46721392'",
     "title": "MUÑOZ MEDINA SARA PATRICIA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47426857",
     "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '47426857'",
     "title": "SAAVEDRA VARGAS NATAHALY ROMINA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46724649",
     "visibleIf": "{select-colabs-from-area-COMERCIAL SELVA} contains '46724649'",
     "title": "SANCHEZ GUTIERREZ RUBEN ISMAEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-71532747",
     "visibleIf": "{select-colabs-from-area-COMPENSACIONES Y BENEFICIOS} contains '71532747'",
     "title": "ARAUJO JULCA FERNANDO MANUEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46414993",
     "visibleIf": "{select-colabs-from-area-COMPENSACIONES Y BENEFICIOS} contains '46414993'",
     "title": "MEDRANO NOBLECILLA FIORELLA SHARON",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72747159",
     "visibleIf": "{select-colabs-from-area-COMPRAS} contains '72747159'",
     "title": "MALDONADO LUNA DAYANA NATY",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-75473478",
     "visibleIf": "{select-colabs-from-area-COMPRAS} contains '75473478'",
     "title": "MARTINEZ YARANGA YONE ALEXANDRA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-42183454",
     "visibleIf": "{select-colabs-from-area-COMPRAS} contains '42183454'",
     "title": "OTINIANO LOPEZ IRIS RAQUEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72883933",
     "visibleIf": "{select-colabs-from-area-COMPRAS} contains '72883933'",
     "title": "VILLANUEVA VALENCIA LILIBETH CRISTY",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47072568",
     "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '47072568'",
     "title": "ASTUÑAUPA NAJERA LUIS YONATAN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40060377",
     "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '40060377'",
     "title": "ZAMORA TAPIA VIRNA IVETT",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-74929399",
     "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '74929399'",
     "title": "FELIX MORALES WALTER HUBER",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-71122395",
     "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '71122395'",
     "title": "QUISPE AYALA LEESLY ESTEFANY",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45833793",
     "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '45833793'",
     "title": "ARANDA SEVILLANO ROSIO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-71748333",
     "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '71748333'",
     "title": "CHAVEZ CORAL CRISTIAN ARMANDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72204506",
     "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '72204506'",
     "title": "REZZA PAJARES HILARY JOSELYN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-74635307",
     "visibleIf": "{select-colabs-from-area-CONTABILIDAD} contains '74635307'",
     "title": "CAJAHUARINGA MACHUCA ZAMIRA CRISTINA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-44444130",
     "visibleIf": "{select-colabs-from-area-CONTROL DE GESTION} contains '44444130'",
     "title": "YATACO CASTILLO JOSE ALFREDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-70124696",
     "visibleIf": "{select-colabs-from-area-CONTROL DE GESTION} contains '70124696'",
     "title": "VILLENA NAVARRO CARLOS ENRIQUE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-76156527",
     "visibleIf": "{select-colabs-from-area-CONTROL DE GESTION} contains '76156527'",
     "title": "PANDURO BARRANTES JUAN DIEGO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-9956020",
     "visibleIf": "{select-colabs-from-area-CREDITOS} contains '9956020'",
     "title": "BAUTISTA QUINTANILLA JESSICA JUDITH",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-2833264",
     "visibleIf": "{select-colabs-from-area-CREDITOS} contains '2833264'",
     "title": "HIDALGO CHAVEZ LUIS FELIPE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-76479059",
     "visibleIf": "{select-colabs-from-area-CREDITOS} contains '76479059'",
     "title": "SANCHEZ ROBLEDO ALEXIS SANTINO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40803796",
     "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '40803796'",
     "title": "SHIKIYA HURTADO ANA TERESA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47314100",
     "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '47314100'",
     "title": "HINOSTROZA HUANAY LUCIA DEL CARMEN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-41797768",
     "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '41797768'",
     "title": "MEDRANO NECOCHEA VICTOR JAVIER",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-73657312",
     "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '73657312'",
     "title": "TALLEDO NAVARRO PAMELA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10558194",
     "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '10558194'",
     "title": "LARRABURE PEREZ WILSON RICARDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47837733",
     "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '47837733'",
     "title": "PANDURO FERNANDEZ GIAN PIERRE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45519571",
     "visibleIf": "{select-colabs-from-area-DESARROLLO NEGOCIOS} contains '45519571'",
     "title": "VIZCARDO PANCORVO JUAN JOSE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-6543622",
     "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '6543622'",
     "title": "FORSYTH ALARCO JUAN ALBERTO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-6543619",
     "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '6543619'",
     "title": "FORSYTH RIVAROLA JUAN ALBERTO FELIPE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-6430409",
     "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '6430409'",
     "title": "OCHOA CHAUCA PABLO CESAR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-25800748",
     "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '25800748'",
     "title": "QUIROZ AVILA HENRY",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-19996041",
     "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '19996041'",
     "title": "SOLIS CALDERON HECTOR ELEODORO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-42915146",
     "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '42915146'",
     "title": "PIZARRO ZAPATA BENJAMIN JESUS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-9302319",
     "visibleIf": "{select-colabs-from-area-GERENCIA GENERAL} contains '9302319'",
     "title": "KALINOWSKI BARCLAY VIRNA LUZ",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10476350",
     "visibleIf": "{select-colabs-from-area-GESTIÓN Y DESARROLLO HUMANO} contains '10476350'",
     "title": "AMEGHINO ANDALUZ GIANCARLO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-44647618",
     "visibleIf": "{select-colabs-from-area-IMPORTACIONES} contains '44647618'",
     "title": "EDEN VILLEGAS OMAR ALEJANDRO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-70193596",
     "visibleIf": "{select-colabs-from-area-IMPORTACIONES} contains '70193596'",
     "title": "KIWAKI ARAUCO AKEMI LUZ",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-48588559",
     "visibleIf": "{select-colabs-from-area-IMPORTACIONES} contains '48588559'",
     "title": "ZAPATA CORTEZ STEPHANIE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45335304",
     "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '45335304'",
     "title": "CHAVEZ OTINIANO LORENA JHAZMIN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-41727660",
     "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '41727660'",
     "title": "MARCELO CELEDONIO LUIS CARLOS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-8035974",
     "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '8035974'",
     "title": "MARTINEZ SANCHEZ FREDDY AUGUSTO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46761555",
     "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '46761555'",
     "title": "GAMARRA CASTILLO URIEL LEANDRO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-75267982",
     "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '75267982'",
     "title": "CAMACHO YACSAHUACHE GABRIEL ANTAR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-77575494",
     "visibleIf": "{select-colabs-from-area-IMPUESTOS} contains '77575494'",
     "title": "RAMIREZ SILVA MELANNY DENISSE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-44363769",
     "visibleIf": "{select-colabs-from-area-INNOVACION Y PROCESOS} contains '44363769'",
     "title": "PEÑA TORRES LUISA RICARDINA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47486524",
     "visibleIf": "{select-colabs-from-area-INNOVACION Y PROCESOS} contains '47486524'",
     "title": "CHINCHA MATA STEVEN BRYANT",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-70289458",
     "visibleIf": "{select-colabs-from-area-INNOVACION Y PROCESOS} contains '70289458'",
     "title": "VILCAHUAMAN VALDIVIESO IAN RAUL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40449992",
     "visibleIf": "{select-colabs-from-area-LEGAL} contains '40449992'",
     "title": "CORREA VERGARA MARIA DEL CARMEN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45073283",
     "visibleIf": "{select-colabs-from-area-LEGAL} contains '45073283'",
     "title": "VELEZ DE VILLA YUPANQUI CINDY MARLENY",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-70609901",
     "visibleIf": "{select-colabs-from-area-LEGAL} contains '70609901'",
     "title": "SABOYA CORDOVA INTI CATARI",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-82466",
     "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '82466'",
     "title": "DEL AGUILA HIDALGO SAMUEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40646048",
     "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '40646048'",
     "title": "JIMENEZ ASPILCUETA JOEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-42850407",
     "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '42850407'",
     "title": "MALASQUEZ GARCIA ALDO LEONARDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10744655",
     "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '10744655'",
     "title": "CONEJO GUARDAMINO JOE MIGUEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45613368",
     "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '45613368'",
     "title": "SILVA VASQUEZ DEIVID CRISTHIAN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45092398",
     "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '45092398'",
     "title": "MENZALA ORTEGA ALEX RODOLFO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47154147",
     "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '47154147'",
     "title": "CHUMPITAZI BARRETO DIEGO JESUS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45256809",
     "visibleIf": "{select-colabs-from-area-LINEA KAWASAKI} contains '45256809'",
     "title": "CHEAN RUIZ SERGIO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40006296",
     "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '40006296'",
     "title": "RUIZ FLORES LUZ GISSELLA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-44871244",
     "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '44871244'",
     "title": "BLUDAU TUPAC YUPANQUI JAN HENRY",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43569973",
     "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '43569973'",
     "title": "DELGADO UNDA RENZO JESUS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-74438666",
     "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '74438666'",
     "title": "COTRINA VERANO VIVIANA PURITA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72191719",
     "visibleIf": "{select-colabs-from-area-NEGOCIO INMOBILIARIO} contains '72191719'",
     "title": "CURI GRADOS ELVIS RICARDO PIERO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10672242",
     "visibleIf": "{select-colabs-from-area-OPERACIONES} contains '10672242'",
     "title": "BALCAZER LOLI LIBER MARTIN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47845515",
     "visibleIf": "{select-colabs-from-area-OPERACIONES} contains '47845515'",
     "title": "TORO PALOMINO GIANCARLO EDINSON",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-2899681",
     "visibleIf": "{select-colabs-from-area-OPERACIONES} contains '2899681'",
     "title": "SALAS PEZUA HAROLD ALBERTO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-8247662",
     "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '8247662'",
     "title": "REYES BENAVIDES MELSI ELIZABETH",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-70944487",
     "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '70944487'",
     "title": "BARRIENTOS TAPIA LAURA LUCIA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10459679",
     "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '10459679'",
     "title": "JUAREZ CRUZ GUSTAVO ERWIN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43068853",
     "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '43068853'",
     "title": "BUENDIA GRAZIANI GUSTAVO ADOLFO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46457171",
     "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '46457171'",
     "title": "RODRIGUEZ PAREDES BRENDA ALEJANDRA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-73087145",
     "visibleIf": "{select-colabs-from-area-PLANEAMIENTO} contains '73087145'",
     "title": "ORIHUELA BEJARANO PATRICIA KENDY",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-44652717",
     "visibleIf": "{select-colabs-from-area-PLANILLAS} contains '44652717'",
     "title": "VELASQUEZ SALDAÑA WILMER GERARDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43308092",
     "visibleIf": "{select-colabs-from-area-PLANILLAS} contains '43308092'",
     "title": "JURADO HUAMAN JOJHANSON FERNANDO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72894842",
     "visibleIf": "{select-colabs-from-area-PLANILLAS} contains '72894842'",
     "title": "DAVILA MUÑOZ FIORELLA ESTEFANY",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10741277",
     "visibleIf": "{select-colabs-from-area-SEGURIDAD} contains '10741277'",
     "title": "MORILLO MACHADO JUAN RENE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40715092",
     "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '40715092'",
     "title": "DIAZ CAMPOS ARTURO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-10004335",
     "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '10004335'",
     "title": "BRINGAS PROCHAZKA SANDRA SILVANA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-6771922",
     "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '6771922'",
     "title": "RODRIGUEZ CARPIO RUTH SELENE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-9865016",
     "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '9865016'",
     "title": "VARGAS PEÑA ERICK",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45453006",
     "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '45453006'",
     "title": "SALVADOR SALVADOR ERIC DEIBY",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-72306819",
     "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '72306819'",
     "title": "ACUÑA VENTO MILENY SHERYL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46286135",
     "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '46286135'",
     "title": "FLORES FERNANDEZ CLAUDIA CECILIA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-45938129",
     "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '45938129'",
     "title": "ALBA SANCHEZ DIANA CAROLINA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47484915",
     "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '47484915'",
     "title": "PUMA RAMOS BRAYAN CRISTIAN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-44482449",
     "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '44482449'",
     "title": "LOPEZ AGUIRRE JAVIER JESUS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-46316278",
     "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '46316278'",
     "title": "CHAVEZ CONDE SMITH JOSEPH",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-73634296",
     "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '73634296'",
     "title": "CALDERON TORRES MARTIN MAURICIO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47437046",
     "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '47437046'",
     "title": "MORI CUENCA KATTYA LIZBETH",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-74158343",
     "visibleIf": "{select-colabs-from-area-SERVICIO AL CLIENTE} contains '74158343'",
     "title": "MEDINA ESPINOZA ANGELICA MILAGROS ANTONIETA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40241539",
     "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '40241539'",
     "title": "RAMIREZ ZEVALLOS JOSE MIGUEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-40487202",
     "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '40487202'",
     "title": "CONDOR CASTILLO JUAN HARRY",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-7488058",
     "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '7488058'",
     "title": "CABANA BUITRON WILBER CELEDONIO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47805975",
     "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '47805975'",
     "title": "CARDENAS HUAMANI EDWIN JAVIER",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-73875549",
     "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '73875549'",
     "title": "JIHUA TAPAHUASCO JUAN JOSE",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43077392",
     "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '43077392'",
     "title": "RUIZ VASQUEZ SANDRO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47036204",
     "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '47036204'",
     "title": "GOMEZ CACHA JULIO CESAR",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-41261260",
     "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '41261260'",
     "title": "RIVERA QUISPE MARTIN JULIO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-44954065",
     "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '44954065'",
     "title": "GAMBOA QUILICHE DANILO MAX",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-70319277",
     "visibleIf": "{select-colabs-from-area-SERVICIO TECNICO} contains '70319277'",
     "title": "LUPUCHE SILVA ELISEO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-25817327",
     "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '25817327'",
     "title": "AYALA CHIROQUE LUIS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-9620603",
     "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '9620603'",
     "title": "CANALES CORBETTA HERNAN JAVIER",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-25444867",
     "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '25444867'",
     "title": "CARHUAPOMA FLORES HERNAN JAIME",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-9555005",
     "visibleIf": "{select-colabs-from-area-SERVICIOS GENERALES} contains '9555005'",
     "title": "YUPANQUI ALARCON FERMIN",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-7508404",
     "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '7508404'",
     "title": "NAUPARI HURTADO RAFAEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43909967",
     "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '43909967'",
     "title": "SOSA SAN MARTIN PEDRO MANUEL",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-44829465",
     "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '44829465'",
     "title": "CASTELLARES CUYA ENRIQUE LUIS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-25720478",
     "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '25720478'",
     "title": "BAZALAR PIZARRO EDUARDO GONZALO",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-7262835",
     "visibleIf": "{select-colabs-from-area-SISTEMAS} contains '7262835'",
     "title": "RODRIGUEZ PORRAS JUAN CARLOS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-43220913",
     "visibleIf": "{select-colabs-from-area-TESORERIA} contains '43220913'",
     "title": "DE LA CRUZ PAUCAR LUZ JUDITH",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-44646487",
     "visibleIf": "{select-colabs-from-area-TESORERIA} contains '44646487'",
     "title": "PANDO GUILLEN EDITH IVET",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-73824248",
     "visibleIf": "{select-colabs-from-area-TESORERIA} contains '73824248'",
     "title": "CANO ÑATO PILAR SOLEDAD",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-73983886",
     "visibleIf": "{select-colabs-from-area-TESORERIA} contains '73983886'",
     "title": "OTOYA SILVA CLAUDIA FIORELA",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    },
    {
     "type": "comment",
     "name": "feedback-colabs-47257757",
     "visibleIf": "{select-colabs-from-area-TESORERIA} contains '47257757'",
     "title": "HENDRICK HURTADO SHIRLEY MILAGROS",
     "description": "¿Qué crees que debería seguir haciendo y/o qué crees que debería hacer para mejorar?"
    }
   ],
   "title": "Feedback",
   "description": "Si calificaste con 1 o 2 tu feedback es muy valioso para contribuir en la mejora de tus compañeros. Recuerda que también puedes dejar comentarios positivos :)"
  },
  {
   "name": "selfassesment",
   "elements": [
    {
     "type": "matrix",
     "name": "selfassesment-from-pilar-Contagiamos pasióna",
     "title": "Contagiamos pasión",
     "description": "Te atreves a probar cosas nuevas, levantas la mano cuando tienes alguna idea y si crees que puedes generar un impacto positivo, la ejecutas. Estás siempre dispuesto a asumir nuevos retos e impulsas al resto de tus compañeros a que actúen con esa misma motivación.? ",
     "columns": [
      "1",
      "2",
      "3",
      "4",
      "5"
     ],
     "rows": [
      {
       "value": "self",
       "text": "Yo"
      }
     ]
    },
    {
     "type": "matrix",
     "name": "selfassesment-from-pilar-Vivimos y disfrutamosb",
     "title": "Vivimos y disfrutamos",
     "description": "Encuentras el balance entre el trabajo y tus motivaciones personales. Te enfocas en lo positivo de la vida y le transmites ese estado de ánimo a los demás.",
     "columns": [
      "1",
      "2",
      "3",
      "4",
      "5"
     ],
     "rows": [
      {
       "value": "self",
       "text": "Yo"
      }
     ]
    },
    {
     "type": "matrix",
     "name": "selfassesment-from-pilar-Buscamos la excelenciac",
     "title": "Buscamos la excelencia",
     "description": " Eres una persona que no está contenta solo con cumplir sus objetivos en el tiempo y calidad esperados, sino que intenta siempre ir más allá. Estás dispuesto a aprender nuevas cosas y, desde la posición en la que te encuentras, buscas hacer uso de tus fortalezas para contribuir con la meta de tu equipo y de la empresa. Saca de cada experiencia algún aprendizaje y lo comparte con los demás. ",
     "columns": [
      "1",
      "2",
      "3",
      "4",
      "5"
     ],
     "rows": [
      {
       "value": "self",
       "text": "Yo"
      }
     ]
    },
    {
     "type": "matrix",
     "name": "selfassesment-from-pilar-Trabajamos juntosd",
     "title": "Trabajamos juntos",
     "description": "Eres una persona que busca relacionarte con el resto de tus compañeros y siempre estás dispuesto a trabajar en equipo. Respeta a los demás y ves en el logro de uno, el logro de todos.",
     "columns": [
      "1",
      "2",
      "3",
      "4",
      "5"
     ],
     "rows": [
      {
       "value": "self",
       "text": "Yo"
      }
     ]
    }
   ],
   "title": "Autoevaluacion",
   "description": "¡Hola Crosranger! Hoy también toca hacer introspección y evaluarnos a nosotros mismos, lee atentamente los enunciados y elige conscientemente"
  }
 ]
}