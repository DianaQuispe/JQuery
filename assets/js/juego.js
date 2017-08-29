'use strict';


let x;
let y;
let yinicial;
let xinicial;
let yfinal;
let xfinal;
let xtrans=[];
let ytrans=[];

let teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
document.addEventListener("keydown", movimiento);

let map1 = [" * * * * * * * * * * * * * * * * * * * * ",
    " * *           * * *             * *   * ",
    " * *             W                 *   * ",
    " *                           *     *   * ",
    " *         *                       *   * ",
    " *   * * * *             *         *   * ",
    " *     *     * *       *   *       *   * ",
    " *   * I o   * *         *   * * * *   * ",
    " *     *     * *   * *  **           I * ",
    " *   *          *        *         * * * ",
    " *           * ***   *   *     *   * * * ",
    " *       *      *        * *       * * * ",
    " *     * *             ***         * * * ",
    " * *   *           *     *         *   * ",
    " *     *   *      *      *     *       * ",
    " * *        *     *      *         *   * ",
    " * * * * * * * * * * * * * * * * * * * * "];

let  map2=[" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * *                                 *             * * * * ",
    " * *   *                             *       *       * * * ",
    " *   *   *            *              *     * *     *     * ",
    " *         *           * *           * * *       *   *   * ",
    " *     * *       *           *       *   *     *     *   * ",
    " *   *                       *       *   *   *       *   * ",
    " * *                             *   *   I          W* * * ",
    " * *              **     * *                             * ",
    " * *             *     I           *                     * ",
    " *               *   *         *                     *   * ",
    " *   *   *     *       *   *                             * ",
    " *     *                             *                   * ",
    " *       * *        *    *   *     * * *           *     * ",
    " *       * *                         *     *       *     * ",
    " * *             *       *       *                       * ",
    " *       *     *       *   * *     *     *   * *         * ",
    " *     *           *  o*   * *   *   *       * * *       * ",
    " * * *      *          * *         *   *             * * * ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

let map3=[" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * * * * * * * * * * *                                           ",
    " *       *  *  *       * *                                W*     ",
    " *               *     * * *           *                   I     ",
    " * *       *               * *                                   ",
    " *    *    * *   I           * *         *   *                   ",
    " *                   ****      * * * *   *     *         *       ",
    " *         *                 *           *   *                   ",
    " *       *                 *   *                                 ",
    " *         *   *         *       *   *                           ",
    " *             *         *                                       ",
    " * *                ** *                                   *     ",
    " *                **         * *                                 ",
    " *  **   *   *  **                     * *                 * *   ",
    " * *   *   *   *       * *                   * *           * *   ",
    " *                                         *   *                 ",
    " *               *     *               ***   * *                 ",
    " *             *               *                                 ",
    " *                       *         * *                           ",
    " *o  *       *           *       * *                           * ",
    " * * *           *                                         *     ",
    " * * * *                                  *                *     ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

let map4= ["                                                                 ",
    " *   o       * **  ** *                                  *****    ",
    "    *                                                        *    ",
    "    *           **                                           *    ",
    "   ** **************         **             ****             *    ",
    "   **          *           * *                              I*  * ",
    "   **                                        *                    ",
    "   *****************                         ****                 ",
    "       *************                                              ",
    "     ***************   *   W                                      ",
    "            ** **      **  **                                     ",
    "                      *    **                                     ",
    "  *                  *******                                      ",
    "   *****            **                                      W     ",
    "   ***        **  **          *                            ***    ",
    " **************************************************************** ",
    "   I  **       *           * *                             ***    ",
    " *            *                    ** * * * *       *      ***    ",
    "               *        *                           *       *     ",
    "    *                  ** *                         *    W        ",
    " *  **                  *           *             *               ",
    " *  ****                   *                 *    *          ***  ",
    " *  *******                *                ****  **              ",
    " *  ****                  **                ***   ****            ",
    " *  ***       *         W                   *****     *******     ",
    " **  *        **    *                        ***  ***********     ",
    " **    **                                    ****************     ",
    " **     ** *****       *  *****                 **                ",
    "           *    * ** **    ****                   *               ",
    " ** W****************    * ****                    *      ******* ",
    "                                                                  "];

let map5= ["                                                                 ",
    "                                W                     W          ",
    "         *                                       *               ",
    "   *                    *                            *           ",
    "                                              *                  ",
    "                                                  *        *     ",
    "   *                         W            *         *            ",
    "          *                                    *            *    ",
    "                                      *                      *   ",
    "                                           *                     ",
    "         *                             *                     I W ",
    "  *            *       *                                         ",
    "                                                                 ",
    "                                                   *             ",
    "    *               **W*************W********             *      ",
    "          *         *                       *                    ",
    "                    *   ******W**********   *                  * ",
    "                    *   *               *   *       *            ",
    "                    *   *   **********  *   W                    ",
    "                    *   W   *        *  *   *                    ",
    "         *          *   *   *        I  *   *                    ",
    "   *                *   *   ******** *  *   *    W               ",
    "                    *   *            *  W   *        *           ",
    "                    *   **************  *   W               ***  ",
    "          *         *                   *   *               **   ",
    "     *              *********************   *        *           ",
    "          *                                 *        *        W  ",
    "  *                                         *        *        *  ",
    "      *       ***W*********W****W****W*******        *******  *  ",
    " o *                                                             ",
    "                                                                 "] ;


let map6=[  "                                                 ",
    "                                                 ",
    "                                                 ",
    "       **o        ***                **W         ",
    "                  ***                 *          ",
    "                  *              *               ",
    "                  *                     *        ",
    "     *  *                     *   *     *        ",
    "      * *                    **** *              ",
    "      *                                 *        ",
    "                                       **        ",
    "                         **            **        ",
    "                          *                      ",
    "              ** *       ***                     ",
    "              ***                                ",
    "              **                  **             ",
    "       **                         **             ",
    "       **                         *              ",
    "         *            **                         ",
    "                     ***                         ",
    "                    * **                         ",
    "                                                 ",
    "                                                 "];

let mapas = [map1, map2, map3, map4, map5, map6];
let s=mapas.length-1;
let mapa = mapas[s];
let level=1;
let map = [];
let isrunning=false;

function iniciar(){
  map=[];
  for (let i = 0; i < mapa.length; i++){
    map[i]=[];
    for (let j = 0; j < mapa[0].length; j++) {
      map[i][j]=mapa[i][j];
      if(map[i][j]=='o'){
          xinicial=j;
          yinicial=i;
      }
    }
  }
}

function generarMapa(map, direccion) {
            let jueguito= $('#juego');

  xtrans=[];
  ytrans=[];
  yfinal=map.length-1;
  xfinal=map[0].length-1;
  jueguito.html(' ');
  let texto=document.createElement('div');
  texto.innerHTML='Nivel '+level;
  texto.setAttribute('class','ganador');
  let tabla = document.createElement('table');
  tabla.setAttribute('cellspacing','0');
  for (let i = 0; i < map.length; i++) {
    let fila = document.createElement('tr');
    for (let j = 0; j < map[i].length; j++) {
        let celda = document.createElement('td');
        if(map[i][j]=='*'){
          celda.setAttribute('class','pared');
        } else if(map[i][j]=='o'){
          x=j;
          y=i;
          celda.setAttribute('class','nave');
          celda.setAttribute('id',direccion);
        } else if
         (map[i][j]=='W') {
          celda.setAttribute('class', 'llegada');
        } else if (map[i][j]=='I'){
         celda.setAttribute('class','transporte');
          xtrans.push(j);
          ytrans.push(i);
        }
        fila.append(celda);
    }
    tabla.append(fila);
  }
  jueguito.append(texto);
  jueguito.append(tabla);
}

function nivel() {
  isrunning=false;
  $('#juego').className='';
  if(s<0){
    ganar();
    s=mapas.length-1;
    mapa=mapas[s];
  } else {
    level++;
    mapa=mapas[s];
    iniciar();
    generarMapa(map, 'empezar');
  }
}
function ganar() {
    $('#juego').html();
    level=1;
    let div=document.createElement('div');
    div.setAttribute('class', 'ganador');
    let imagen = document.createElement('img');
    imagen.setAttribute('src','assets/img/nave.png');
    let p=document.createElement('p');
    let texto= document.createTextNode('Ganaste!');
    p.appendChild(texto);
    div.appendChild(imagen);
    div.appendChild(p);
    jueguito.appendChild(div);
}
let t;
let d;
function move(a, b, direccion)
{
  isrunning=true;
  if( map[y+a][x+b]=="*" ){
      clearTimeout(t);
      isrunning=false;
      return;
  }
  if( map[y+a][x+b]=="W" ){
      clearTimeout(t);
      $('#juego').className='rotar';
      s--;
      d = setTimeout(nivel, 1500);
      return;
  }
  if( y+a==0 || x+b==0 || y+a==yfinal || x+b==xfinal){
      reiniciar();
      clearTimeout(t);
      return;
  }
  if(map[y+a][x+b]==' ' || map[y+a][x+b]=='_'){
    map[y][x]=' ';
    map[y+a][x+b]='o';
  }
  if(map[y+a][x+b]=='I'){
    map[y][x]=' ';
    if(y+a==ytrans[0]){
      y=ytrans[1];
      x=xtrans[1];
    } else {
      y=ytrans[0];
      x=xtrans[0];
    }
    map[y+a][x+b]='o';
  }
  generarMapa(map, direccion);

  t = setTimeout(function(){ move(a, b, direccion) }, 50);
}


function movimiento(evento)
{
  if(isrunning==false){
    switch(evento.keyCode)
    {
      case teclas.UP:
        move(-1, 0, 'up');
      break;
      case teclas.DOWN:
        move(1, 0, 'down');
      break;
      case teclas.LEFT:
        move(0, -1, 'left');
      break;
      case teclas.RIGHT:
        move(0, 1, 'right');
      break;
    }
  }
}

function reiniciar() {
  map[y][x]=' ';
  map[yinicial][xinicial]='o';
  isrunning=false;
  generarMapa(map, 'empezar');
}
