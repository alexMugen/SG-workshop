// ======================== LET ======================== //
for ( let x=0 ; x < 3 ; x++ ) {
  console.log(x);
}
console.log('hey', x) // reference error i is not defined

for ( var j=0 ; j < 3 ; j++ ) {
  console.log(j); // 0 1 2 3
}
console.log('aaa', j) // 3

// ======================== CONST ======================== //
EXERCICE 1 {
  const TOTO = {};
  toto = 10; // Error.

  let tata = {};
  tata = 1000; // This is fine.
}

EXERCICE 2 {
  const TRUC = 7
// On notera l'importance de la portée de bloc :
  if (TRUC === 7) {
    // cela fonctionne sans problème et crée
    // une nouvelle variable dans cette portée
    let TRUC =  20;
    // Ici, MA_FAV vaut 20
    console.log("valeur let" + TRUC);

    // L'instruction suivante est remontée dans le
    // contexte global et provoque une erreur !
    var TRUC = 20;
  }
  // toute tentative de redéclaration renvoie une erreur
// SyntaxError: Identifier 'MY_FAV' has already been declared
}

EXERCICE 3 {
  // const fonctionne également avec les objects
  const monObjet = {"clé": "valeur"};

// Écraser l'objet échouera comme précédemment
  monObjet = {"autreClé": "valeur"};
}

// ======================== ARROW ======================== //
EXO1 {
  function Person() {
    this.age = 0;

    setInterval(function growUp() {
      // La fonction de rappel refère à la variable `self` dont
      // la valeur est l'objet espéré.

      this.age++;
      console.log(this.age)
    }, 1000);
  }

  var p = new Person()

  function Person() {
    var self = this;
    self.age = 0;

    setInterval(function growUp() {
      // La fonction de rappel refère à la variable `self` dont
      // la valeur est l'objet espéré.
      self.age++;
    }, 1000);
  }
  var p = new Person()

  function Person() {regular
    this.age = 0;

    setInterval(() => {
      setTimeout(() => {
        this.age++; // `this` referre proprement à l'objet person
      }, 1000);
    }, 1000);
  }

  var p = new Person();
}

// ======================== ARRAY ======================== //

// ======================== Destructuring ======================== //
{
  const citizen = {
    firstName: 'foo',
    lastName: 'foo',
    age: '25',
    job: 'dev'
  }
  let firstName = citizen.firstName
  let lastName = citizen.lastName
  let age = citizen.age
}