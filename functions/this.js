const testing = () => {
    console.log(this); // {} window objesi
}
testing();

function Person(){
    this.showInfos = function(){
          console.log("Bu objemiz bir " + this.constructor.name + " objesidir");
  }
}
const person = new Person();
person.showInfos();

