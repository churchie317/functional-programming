var curry = require('lodash/curry');

// A Functor is a type that implements map and obeys some laws

// Our functor can hold ANY value of ANY type
var Container = function(x) {
  this.__value: x;
}

// Constructor that saves user from writing 'new' keyword
Container.of = function(x) {
  return new Container(x);
}

// (a -> b) -> Container a -> Container b
Container.prototype.map(f) {
  return Container.of(f(this.__value));
}
// Our value in the Container is handed to its Container for safe-keeping; as a
// result of never leaving the Container, we can continue to map away, running
// functions as we please

Container.of(3);
// => Container(3)

Container.of('hotdogs');
// Container('hotdogs')

Container.of(Container.of({
  name: 'yoda'
}));
// Container(Container({ name: 'yoda' }));

// Container is an object with one property; we're arbitrarily named its property
// '__value'
//
// The '__value' cannot be one specific type
//
// Once data goes into our Container it stays there

// map :: Functor f => (a -> b) -> f a -> f b
var map = function(f, any_functor_at_all) {
  return any_functor_at_all.map(f);
}
