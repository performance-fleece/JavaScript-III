/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global binding
* 2. implicit which is left of dot. It's implied that it is referring to the immediately preceding object
* 3. new binding , when using a constructor function, so it is tied to the newly created object.
* 4. explicit binding - using .call() or .apply() to overwrite whatever this is currently set to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function globalthis() {
  console.log(this);
}

globalthis();
// Principle 2

// code example for Implicit Binding
let jeremy = {
    name: "Jeremy",
    speak: function(words) {
        console.log(`${this.name} says ${words}`);
    }

};
jeremy.speak("ooga booga");


// Principle 3

// code example for New Binding
function newDog(name, breed) {
    this.name = name;
    this.breed = breed;
    this.whois = function () {
        console.log(`${this.name} is a ${this.breed}`);
    };
}

const sam = new newDog("Sam", "Pug");
const mae = new newDog("Mae", "Tibetan Spaniel");
const delilah = new newDog("Gizmo", "Shih Tsu")

mae.whois();s
sam.whois();

// Principle 4

// code example for Explicit Binding

mae.whois.call(delilah);
