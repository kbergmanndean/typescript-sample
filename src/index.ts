import * as divideModule from "./divide"
import Profile from "./profile"

const a=15
const b=5
console.log(`${a} divided by ${b} is ${divideModule.default(a,b)}`)

const profile: Profile = {
    name: "Joe"
}

profile.name="Jim"