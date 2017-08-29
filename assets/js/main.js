'use strict';


$('.h2-play').click( function() {
  let jueguito= $('#juego');

    let $juego = $('.juego').empty();
    let principal =  $('.principal').empty();
    principal.className = "nuevito";
    agregar();
});
function agregar() {

    let principal = $('.principal').html(" ");
    $('.principal').attr('class','nuevito').height(600);
    let jueguito= $('#juego').css("display", "none");

    let divGrande = document.createElement("div");
    divGrande.setAttribute("id","divGrande");
    let divdeTexto = document.createElement("div");
    let divdeButtons = document.createElement("div");

    divdeButtons.setAttribute("id","divdeButton")
    let B1 = document.createElement("button");
    B1.innerHTML = "★ Start Game";
    B1.setAttribute("onclick", "startGame()");
    B1.className ="button";
    let B2 = document.createElement("button");
    B2.innerHTML = "★ Instructions";
    B2.setAttribute("onclick", "instructions()");
    B2.setAttribute("class","button");
    let B3 = document.createElement("button");
    B3.innerHTML = "★ Credits";
    B3.setAttribute("onclick", "credits()");
    B3.setAttribute("class","button");
    divdeButtons.appendChild(B1);
    divdeButtons.appendChild(B2);
    divdeButtons.appendChild(B3);
    divdeTexto.setAttribute("id","divdeTexto");
    divdeTexto.innerHTML += "Road Blocks";
    principal.append(divGrande);
    divGrande.append(divdeTexto);
    divGrande.append(divdeButtons);
}
function startGame() {
        let jueguito= $('#juego');

    level=1;
    s=mapas.length-1;
    mapa=mapas[s];
    let B4 = document.createElement("button");
    B4.setAttribute("id","B4");
    B4.setAttribute("onclick", "agregar()");
    B4.innerHTML = "Menu";
    B4.setAttribute("class","button");
    jueguito.css("display",'block');
    let nuevito = $('.nuevito');
    nuevito.empty();
    nuevito.append(B4);
    nuevito.height(50);

    iniciar();
    generarMapa(map);
}
function instructions() {
    let B4 = document.createElement("button");
    B4.setAttribute("id","B4");
    B4.setAttribute("onclick", "agregar()");
    B4.innerHTML = "Menu";
    B4.setAttribute("class","button");
    let divdeParrafo = document.createElement("div");
    divdeParrafo.style.fontFamily = 'Orbitron';
    divdeParrafo.setAttribute("class","divdeParrafo");
    divdeParrafo.innerHTML = "<h1> INSTRUCTIONS<span> &#160; </span> </h1>";
    divdeParrafo.innerHTML += "<h4> Ayuda a la nave a aterrizar en un planeta, evita chocar y ayudate de los agujeros negros</h4>";
    divdeParrafo.innerHTML += "<h4> Tienes que usar los botones del teclado para poder jugar. En total hay seis niveles uno mas complicado que el otro... Te deseo mucha suerte! </h4>";
    let nuevito = $('.nuevito');
    nuevito.empty();
    nuevito.appendChild(B4);
    nuevito.appendChild(divdeParrafo)
}
function credits() {
    let B4 = document.createElement("button");
    B4.setAttribute("id","B4");
    B4.setAttribute("onclick", "agregar()");
    B4.innerHTML += "Menu";
    B4.setAttribute("class","button");
    let divdeCredits = document.createElement("section");
    divdeCredits.style.fontFamily = 'Orbitron';
    divdeCredits.setAttribute("class","star-wars");
    let divdV = document.createElement("div");
    divdV.setAttribute("class","crawl");
    let divtitle = document.createElement("div");
    divtitle.setAttribute("class","title");
    let h1 = document.createElement("h1");
    let textoh1 = document.createTextNode("CREDITS");
    h1.appendChild(textoh1);
    divtitle.appendChild(h1);
    let p = document.createElement("p");
    let textoP = document.createTextNode("Tienes que usar los botones del teclado para poder jugar. En total hay seis niveles uno mas complicado que el otro... Te deseo mucha suerte!");
    p.appendChild(textoP);
    divdV.appendChild(divtitle);
    divdV.appendChild(p);
    divdeCredits.appendChild(divdV);
    let nuevito = document.getElementsByClassName("nuevito")[0];
    while (nuevito.firstChild) {
        nuevito.removeChild(nuevito.firstChild);
    }
    nuevito.appendChild(divdeCredits);
    nuevito.appendChild(B4);
}
