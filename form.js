class Form{
    constructor(){
       this.input = createInput("").attribute("placeholder", "Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("UN-NAMED");
        this.title.position(500, 300);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(500,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(500,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(displayWidth-380,130);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            fun += 1;
            
        });

        
      }

    } 