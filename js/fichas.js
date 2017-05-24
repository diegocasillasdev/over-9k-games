var rutasImagenes = [
    ["life-strange", "img/life-strange.jpg", "img/life-strange.gif"],
    ["doom", "img/doom.jpg", "img/doomgif.gif"],
    ["tiny", "img/tiny.png", "img/tinygif.gif"],
    ["rocket", "img/rocket.jpg", "img/rocketgif.gif"]
];



/**************************************************************************
    
    Cada elemento del array es un apartado de la ficha
    
    Los elementos del array de plataformas son las rutas de los iconos
        de cada plataforma.
    
    Los elementos del array de descripción son cada uno de los párrafos
        que la componen.

    Los elementos del array de miniaturas son las rutas de cada una de
        ellas.

**************************************************************************/
var fichas = [
    {
        id: "life-strange",
        opinion: "opiniones/life-is-strange.html",
        titulo: "Life is Strange",
        plataformas: [
            "img/steam.ico",
            "img/ps3.jpg",
            "img/ps4.png",
            "img/360.png",
            "img/xbox.ico"
        ],
        portada: "img/life-strangecaratula.jpg",
        pegi: "img/16.gif",
        desarrollador: "DONTNOD Entertainment",
        genero: "Aventura",
        precio: "19,99€",
        fecha: "30-1-2015",
        descripcion: [
            "Sigue la historia de Max Caulfield, una estudiante de fotografía que descubre " +
                "que es capaz de retroceder en el tiempo al salvar a su mejor amiga, Chloe Price.",

            "Juntas comienzan a investigar la misteriosa desaparición de otra estudiante, " +
                "Rachel Amber, y pronto descubren el lado más oscuro de Arcadia Bay. " +
                "Max debe aprender cuanto antes que cambiar el pasado a veces puede " +
                "traer consecuencias desastrosas en el futuro."
        ],
        miniaturas: [
            "img/life-strange-miniatura1.jpg",
            "img/life-strange-miniatura2.jpg",
            "img/life-strange-miniatura3.jpg",
            "img/life-strange-miniatura4.jpg"
        ]
    },

    {
        id: "doom",
        opinion: "opiniones/doom.html",
        titulo: "Doom",
        plataformas: [
            "img/steam.ico",
            "img/ps4.png",
            "img/xbox.ico"
        ],
        portada: "img/doomcaratula.jpg",
        pegi: "img/18.gif",
        desarrollador: "Id Software",
        genero: "First Person Shooter",
        precio: "59,99€",
        fecha: "13-5-2016",
        descripcion: [
            "DOOM, desarrollado por id Software, estudio pionero en el género de los " +
                "shooters en primera persona y creador de las partidas multijugador en " +
                "formato Deathmatch, regresa una vez más como un moderno shooter repleto " +
                "de diversión y desafíos."
        ],
        miniaturas: [
            "img/doom-miniatura1.jpg",
            "img/doom-miniatura2.jpg",
            "img/doom-miniatura3.jpg",
            "img/doom-miniatura4.jpg"
        ]
    },

    {
        id: "tiny",
        opinion: "opiniones/tiny-and-big.html",
        titulo: "Tiny and Big",
        plataformas: [
            "img/steam.ico"
        ],
        portada: "img/tinycaratula.jpg",
        puntuacion: "6",
        pegi: "img/7.gif",
        desarrollador: "Black Pants Studio",
        genero: "Indie",
        precio: "9,99€",
        fecha: "19-6-2012",
        descripcion: [
            "¡Tiny & Big, un plataformas de saltar y cortar de estilo comic, te da la " +
                "única habilidad de dar forma a un mundo entero como desees!",

            "Eres Tiny, un inventor nerd que trata de recuperar su más preciada posesión: " +
                "¡los calzoncillos blancos de fina costura del abuelo!",

            "En su viaje a través de un desierto olvidado conocerá misteriosas criaturas, " +
                "no payasos, un robot taxi y su archienemigo: ¡Big!"
        ],
        miniaturas: [
            "img/tiny-miniatura1.jpg",
            "img/tiny-miniatura2.jpg",
            "img/tiny-miniatura3.jpg",
            "img/tiny-miniatura4.jpg"
        ]
    },

    {
        id: "rocket",
        opinion: "opiniones/rocket-league.html",
        titulo: "Rocket League",
        plataformas: [
            "img/steam.ico",
            "img/ps4.png",
            "img/xbox.ico"
        ],
        portada: "img/rocketcaratula.jpg",
        pegi: "img/3.gif",
        desarrollador: "Psyonix",
        genero: "Carreras, Deportes, Arcade",
        precio: "19,99€",
        fecha: "7-7-2015",
        descripcion: [
            "¡El fútbol conoce a la conducción una vez más en la largamente esperada, " + 
                "basada en físicas y enfocada al multijugador secuela de Supersonic " +
                "Acrobatic Rocket-Powered Battle-Cars!",

            "¡Elige una variedad de vehículos voladores equipados con enormes rocket " +
                "boosters para marcar goles aéreos alucinantes y sacarte de la manga " +
                "increíbles paradas para cambiar el partido!"
        ],
        miniaturas: [
            "img/rocket-miniatura1.jpg",
            "img/rocket-miniatura2.jpg",
            "img/rocket-miniatura3.jpg",
            "img/rocket-miniatura4.jpg"
        ]
    }
]