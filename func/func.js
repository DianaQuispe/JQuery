class Player {
    constructor (maze) {
        this.maze = maze;
        this.x = maze.startX;
        this.y = maze.startY;
        this.orientation = maze.startOrientation;
        this.interface = null;
    }
    setInterface (mazeInterface) {
        this.interface = mazeInterface;
    }
    turnLeft() {
        const lefts = {
            up: "left",
            right: "up",
            down: "right",
            left: "down"
        };
        this.orientation = lefts[this.orientation];
        this.interface.setStyleAt(this.x, this.y, this.orientation);

    }
    turnRight() {
        const rights = {
            up: "right",
            right: "down",
            down: "left",
            left: "up"
        };
        this.orientation = rights[this.orientation];
        this.interface.setStyleAt(this.x, this.y, this.orientation);

    }
    move () {
        switch(this.orientation) {
            case "left": // left
                this.moveForward(0, -1, StyleEnum.LEFT);
                break;
            case "up": // up
                this.moveForward(-1, 0, StyleEnum.UP);
                break;
            case "right": // right
                this.moveForward(0, 1, StyleEnum.RIGHT);
                break;
            case "down": // down
                this.moveForward(1, 0, StyleEnum.DOWN);
                break;
        }
    }
    moveForward (a, b, direction) {
        if (!this.maze.isInBounds(this.x + a, this.y + b)) {
            // break the app!
            return;
        }

        const map = this.maze.matrix;
        if( this.maze.isWall (this.x + a, this.y + b) ){
            // stop !

        }
        else if ( this.maze.isSpace (this.x + a, this.y + b) ){
            this.interface.setStyleAt(this.x, this.y, StyleEnum.EMPTY);
            this.x = this.x + a;
            this.y = this.y + b;
            this.interface.setStyleAt(this.x, this.y, direction);
        }

        else if(  this.maze.isEnd (this.x + a, this.y + b) ){
            this.interface.setStyleAt(this.x, this.y, StyleEnum.EMPTY);
            this.x = this.x + a;
            this.y = this.y + b;
            alert("Ganaste...!");
        }
    }

    exitMaze() {
        let timer = setInterval( () => {
            let px = this.x;
            let py = this.y;

            this.turnLeft();
            this.move();

            if (this.x == px && this.y == py) {
                this.turnRight();
                this.move();
            }
            if (this.x == px && this.y == py) {
                this.turnRight();
                this.move();
            }
            if (this.maze.isEnd(this.x, this.y)) {
                clearInterval(timer);
            }
        }, 200);


    }
}

class Maze{

    constructor (matrix) {
        this.width = null;
        this.height = null;
        this.startX = null;
        this.startY = null;
        this.endX = null;
        this.endY = null;
        this.startOrientation = null;

        this.matrix = matrix;
        this.width = matrix.length;
        this.height = matrix[0].length;
    }

    isWall (x, y) {
        return this.matrix[x][y] == "*";
    }
    isSpace (x, y) {
        return this.matrix[x][y] == "_";
    }
    isEnd (x, y) {
        return x == this.endX && y == this.endY;
    }
    isInBounds (x, y) {
        return x > 0 && x <= this.width && y > 0 && y <= this.height;
    }

}

const StyleEnum = {
    LEFT: "left",
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    EMPTY: "space",
    BLOCK: "block"
};

class MazeInterface{
    constructor (player, maze){
        this.player =  player;
        this.maze = maze;
        this.domMatrix = [];
        $("#start").on("click", () => {
            this.renderMaze();
        });
        $("#left").on("click", () => {
            this.player.turnLeft();
        });
        $("#right").on("click", () => {
            this.player.turnRight();
        });
        $("#move").on("click", () => {
            this.player.move();
        });
        $("#exit").on("click",() => {
            this.player.exitMaze();
        });

        $(document).on("keydown", (e) => {
            switch(e.keyCode) {
                case 37: // left
                    this.moveForward(0, -1, StyleEnum.LEFT);
                    break;
                case 38: // up
                    this.moveForward(-1, 0, StyleEnum.UP);
                    break;
                case 39: // right
                    this.moveForward(0, 1, StyleEnum.RIGHT);
                    break;
                case 40: // down
                    this.moveForward(1, 0, StyleEnum.DOWN);
                    break;
            }
        });
    }

    moveForward(a, b, direction) {
        this.player.moveForward(a, b, direction);
    }

    setStyleAt (x, y, style) {
        let cellElement = this.domMatrix[x][y];
        cellElement.setAttribute('class', style);
    }
    renderMaze () {
        let map = this.maze.matrix;
        let divElement = $('#table_container');
        divElement.html('');
        let tableElement = document.createElement('table');

        this.domMatrix = [];
        for (let i = 0; i < map.length; i++) {
            let rowElement = document.createElement('tr');
            this.domMatrix[i] = [];
            for (let j = 0; j < map[i].length; j++) {
                let cellElement = document.createElement('td');
                if (map[i][j] == "*") {
                    cellElement.setAttribute('class', 'block');
                } else if (map[i][j] == "_") {
                    cellElement.setAttribute('class', 'space')
                } else if (map[i][j] == "o") {
                    this.maze.startX = i;
                    this.maze.startY = j;
                    this.player.x = i;
                    this.player.y = j;
                    this.player.orientation = StyleEnum.UP;
                    this.maze.startOrientation = StyleEnum.UP;
                    cellElement.setAttribute('class', StyleEnum.UP);
                } else if (map[i][j] == "W") {
                    this.maze.endX = i;
                    this.maze.endY = j;
                    cellElement.setAttribute('class', 'final');
                }
                rowElement.appendChild(cellElement);
                this.domMatrix[i][j] = cellElement;
            }
            tableElement.appendChild(rowElement);
        }
        divElement.append(tableElement);
    }
}

const mazeMap = [
    "******************",
    "*_________*______*",
    "*_*****_____******",
    "*______***__*__*_*",
    "***_*____*____**_*",
    "*___*____**__*___*",
    "*_********__**_*_*",
    "*____*______*__*_*",
    "*_**_*__*****_**_*",
    "*o*__*________**W*",
    "******************"
];
let maze = new Maze(mazeMap) ;
let player = new Player(maze);
let mazeInterface = new MazeInterface (player, maze);
player.setInterface(mazeInterface);
mazeInterface.renderMaze () ;
