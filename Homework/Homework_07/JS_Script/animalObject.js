let inputs = document.getElementById("inputValues");
let submitBtn = inputs.getElementsByTagName("button")[0];



class Animal  {
    constructor(name, kind) {
        this.name = name;
        this.kind = kind;
      }
    speak(dogSpeak){
        console.log(`Dog says: ${dogSpeak}`);
        return alert(`${this.name} is a ${this.kind} of dog. It can say: ${dogSpeak}`);
    }
}

submitBtn.addEventListener(`click`, function(){

    const animal = new Animal(inputs.children[0].value,inputs.children[1].value)
    let dogSpeak = inputs.children[2].value;
    animal.speak(dogSpeak);
})

