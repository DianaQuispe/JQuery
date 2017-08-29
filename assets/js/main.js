'use strict';
$('.h2-play').click(function () {
    let jueguito = $('#juego');
    let $juego = $('.juego').empty();
    let principal = $('.principal').empty();
    principal.addClass("nuevito");
    agregar();
});

function agregar() {
    let principal = $('.principal').html(" ").height(600).attr('class', 'nuevito');
    let jueguito = $('#juego').css("display", "none");
     var divGrande = document.createElement("div");
    divGrande.setAttribute("id","divGrande");
    var divdeTexto = document.createElement("div");
    var divdeButtons = document.createElement("div");
    divGrande.append(divdeTexto);
    divGrande.append(divdeButtons);
    divdeButtons.setAttribute("id","divdeButton")
    var B1 = document.createElement("button");
    B1.innerHTML = "★ Start Game";
    B1.setAttribute("onclick", "startGame()");
    B1.setAttribute("class","button");
    var B2 = document.createElement("button");
    B2.innerHTML = "★ Instructions";
    B2.setAttribute("onclick", "instructions()");
    B2.setAttribute("class","button");
    var B3 = document.createElement("button");
    B3.innerHTML = "★ Credits";
    B3.setAttribute("onclick", "credits()");
    B3.setAttribute("class","button");
    divdeButtons.append(B1);
    divdeButtons.append(B2);
    divdeButtons.append(B3);
    divdeTexto.setAttribute("id","divdeTexto");
    divdeTexto.innerHTML += "Road Blocks";
    principal.append(divGrande);
}

function startGame() {
    var level = 1;
    
    s = mapas.length - 1;
    mapa = mapas[s];
    document.createElement("button");
    B4.setAttribute("id", "B4");
    B4.setAttribute("onclick", "agregar()");
    B4.innerHTML = "Menu";
    B4.setAttribute("class", "button");

   /*     let B4 = $('<button>', {
        'id': 'B4',
        'click': 'agregar()',
        'text': 'Menu',
        'class' : 'button',
        
    } );
    */
    $('#juego').css("display", 'block');

    let nuevito = $('.nuevito');
    nuevito.empty();
    nuevito.append(B4);
    nuevito.height(50);

    iniciar();
    generarMapa(map);
}

function instructions() {
    let B4 = $('<button>', {
        'text': 'Menu',
        'id': 'B4',
        'click': 'agregar()',
    }).addClass('button');
    let divdePrrafo = $('<div>', {
        'class': 'divdeParrafo',
        'text': '<h4> Ayuda a la nave a aterrizar en un planeta, evita chocar y ayudate de los agujeros negros</h4>',

    }).attr({
        style: 'Orbitron'
    });


    let nuevito = $('.nuevito');
    nuevito.empty();
    nuevito.append(B4);
    nuevito.append(divdeParrafo)
}

function credits() {
    let B4 = $('<button>', {
        'text': 'Menu',
        'id': 'B4',
        'click': 'agregar()',
    }).addClass('button');
    let divdeCredits = document.createElement("section");
    divdeCredits.style.fontFamily = 'Orbitron';
    divdeCredits.setAttribute("class", "star-wars");
    let divdV = document.createElement("div");
    divdV.setAttribute("class", "crawl");
    let divtitle = document.createElement("div");
    divtitle.setAttribute("class", "title");
    let h1 = document.createElement("h1");
    let textoh1 = document.createTextNode("CREDITS");
    h1.append(textoh1);
    divtitle.append(h1);
    let p = document.createElement("p");
    let textoP = document.createTextNode("Tienes que usar los botones del teclado para poder jugar. En total hay seis niveles uno mas complicado que el otro... Te deseo mucha suerte!");
    p.append(textoP);
    divdV.append(divtitle);
    divdV.append(p);
    divdeCredits.append(divdV);
    let nuevito = document.getElementsByClassName("nuevito")[0];
    while (nuevito.firstChild) {
        nuevito.removeChild(nuevito.firstChild);
    }
    nuevito.append(divdeCredits);
    nuevito.append(B4);
}