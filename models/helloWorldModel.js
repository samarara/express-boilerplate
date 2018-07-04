module.exports = class HelloWorld {
    constructor(name, time) {
        this.Name = name;
        this.Time = time; 
    }

    greeting(){
        return `Hi, ${this.Name}`;
    }

    get isoDateString(){
        return this.Time.toISOString();
    }
}