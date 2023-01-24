import { strickEquals } from "./strickEquals.js";

console.log(strickEquals(10, 10));
console.log(strickEquals(NaN, NaN));
console.log(strickEquals(0, -0));
console.log(strickEquals(-0, 0));
console.log(strickEquals(1, "1"));
console.log(strickEquals(true, false));
console.log(strickEquals(false, false));
console.log(strickEquals("water", "oil"));
