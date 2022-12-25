let inputs = document.getElementById("inputValues");
let button = document.getElementsByTagName("button")[0];


class Book {
    constructor(title,author){
        this.title = title;
        this.author = author
    }
    readingStatus(bool){
        if(bool == "true"){
            console.log(`Already read '${this.title}' by ${this.author}.`);
            alert(`Already read '${this.title}' by ${this.author}.`);
        }else {
            console.log(`You still need to read '${this.title}' by ${this.author}.`);
            alert(`You still need to read '${this.title}' by ${this.author}.`);
        }
    }
}

button.addEventListener('click',function(){
    const book = new Book(inputs.children[0].value, inputs.children[1].value);
    let bool = inputs.children[2].value;
    book.readingStatus(bool);
})