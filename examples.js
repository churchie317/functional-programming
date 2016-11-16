const add1 = (a) => a + 1;
class MyFunctor { //Custom "Functor"
  constructor(value) {
    this.val = value;
  }
  map(fn) {   //Applies function to this.val + returns new Myfunctor
   return new MyFunctor(fn(this.val));
  }
}
//temp is a Functor instance that's storing value 1
let temp = new MyFunctor(1);
console.log(temp.map(add1));

class Monad {
    constructor(val) {
        this.__value = val;
    }
    static of(val) {//Monad.of is simpler than "new Monad(val)
        return new Monad(val);
    };
    map(f) {//Applies the function but returns another Monad!
        return Monad.of(f(this.__value));
    };
    join() { // used to get the value out of the Monad
        return this.__value;
    };
    chain(f) {//Helper func that maps and then gets the value out
        return this.map(f).join();
    };
     ap(someOtherMonad) {//Used to deal w/ multiple Monads
        return someOtherMonad.map(this.__value);
    }
}

let monad = new Monad(3);
console.log(monad.chain(add1));
