class Game {
    construction(name, rating){
    this.name = name;
    this.rating = rating;
    }
    describe() {
        return `${this.name} is rated as ${this.rating}. `;
    }
}

class Console {
    constructor(name){
        this.name = name;
        this.games = [];
    }

    addGame(game){
        if(game instanceof Game){
            this.games.push(game);
        } else{
            throw new Error (`You can only add an instance of Game. Argument is not a Game: ${game}`);
        }
    }
    describe() {
        return `${this.name} has ${this.games.length} books. `;
    }
        
        
         
    
    
}

class Menu {
    constructor(){
        this.consoles = [];
        this.selectedConsole = null;
    }
    start(){
        let selection = this.showMainMenuOptions();

        while(selection != 0) {
            switch (selection){
                case '1':
                         this.createConsole();
                    break;
                 case '2': 
                         this.viewConsole();
                    break;
                 case '3':
                        this.deleteConsole();
                    break;
                 case '4':
                        this.displayConsole();
                            break;
                    default:
                                selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    } 

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create new Console
        2) View Console
        3) Delete Console
        4) Display all Consoles
        `);
    }

    showConsoleMenuOptions(Consoleinfo){
        return prompt(`
        0) Back
        1) Create Game
        2) Delete Game
        ---------------------
        ${Consoleinfo}

        `);
    }

    displayConsole() {
        let consoleString = '';
        for (let i = 0; i < this.consoles.length; i++) {
            consoleString += i + ') ' + this.consoles[i].name + '\n';
        }
        alert(consoleString);
    }

    createConsole(){
        let name = prompt('Enter name for New Console');
        this.consoles.push(new Console(name));
    }

    viewConsole(){
        let index = prompt('Enter the index of the Console you wish to view');
        if (index > -1 && index < this.consoles.length) {
            this.selectedConsole = this.consoles[index];
            let description = 'Console Name: ' + this.selectedConsole.name + ' \n';
            
            for(let i =0; i < this.selectedConsole.games.length; i++){
                description += i + ') ' + this.selectedConsole.games[i].name
                 + ' - ' + this.selectedConsole.games[i].rating + '\n';

            }

            let selection = this.showConsoleMenuOptions(description);
            switch (selection){
                case '1':
                    this.createGame();
                    break;
                case '2':
                     this.deleteGame();
            }

        }
    }

    deleteConsole(){
      let index = prompt('Endter the index of the Console you wish to delete');
      if (index > -1 && index < this.consoles.length) {
        this.consoles.splice(index, 1);
      }
    }

    createGame() {
        let name = prompt('Enter name for new Game:');
        let rating = prompt('Enter rating for new Game:');
        this.selectedConsole.games.push(new Game(name, rating));
    }

    deleteGame() {
        let index = prompt('Enter the index of the game you wish to delete:');
        if (index > -1 && index < this.selectedConsole.games.length){
            this.selectedConsole.games.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();