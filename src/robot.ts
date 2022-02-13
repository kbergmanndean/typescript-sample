class Robot {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    askName() {
        console.log(`my name is ${this.name}`);
    }

    move(distance: number) {
        console.log(`${this.name} moved ${distance} meters.`)
    }
}