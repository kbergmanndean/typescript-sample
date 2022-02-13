"use strict";
class Robot {
    constructor(name) {
        this.name = name;
    }
    askName() {
        console.log(`my name is ${this.name}`);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}
