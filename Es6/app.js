////////////////////////CLASSES/////////////////////

class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(point){
        return {
            x: this.x + point.x,
            y: this.y + point.y
        }
    }
}

//console.log(new Point(1, 2).plus(new Point(2, 1)));

//////////////////////////////////////////////////////////////////

class Speaker {
    constructor(name, verb){
        this.name = name;
        this.verb = verb || 'says'
    }
    speak(text){
        console.log(`${this.name} ${this.verb} '${text}'`);
    }
}

class Shouter extends Speaker{
    constructor(name){
        super(name, "shouts");
    }
    speak(text){
        super.speak(text.toUpperCase());
    }
}

//new Shouter("Dr. Loudmouth").speak("hello there");
//new Speaker("Dr. Loudmouth").speak("hello there");

////////////////////////////////////////////////////////////////////

class Speaker2 {
    constructor(name, verb){
        this.name = name;
        this._verb = verb || 'says'
    }

    get verb(){
        return this._verb || 'says';
    }

    set verb(value){
        this._verb = value;
    }

    speak(text){
        console.log(`${this.name} ${this.verb} '${text}'`);
    }
}

class Shouter2 extends Speaker2{
    constructor(name){
        super(name, "shouts");
    }
    speak(text){
        super.speak(text.toUpperCase());
    }
}