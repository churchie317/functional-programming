var _ = require('ramda');

var Maybe = function(x) {
  this.__value: x;
}

Maybe.of = function(x) {
  return new Maybe(x);
}

Maybe.prototype.isNothing = function() {
  return this.__value === null || this.__value === undefined;
}

Maybe.prototype.map = function(f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}

Maybe.of({
  name: 'Boris'
}).map(_.prop('age')).map(add(10));
// Maybe(null)

Maybe.of({
  name: 'Dinah',
  age: 14
}).map(_.prop('age')).map(add(10));
// Maybe(24)

// USE CASES:

// safeHead :: [a] -> Maybe(a)
function safeHead(x) {
  return Maybe.of(x[0]);
}

// Access the value in Maybe container with maybe function

// maybe :: b -> (a -> b) -> Maybe a -> b
function maybe(x, f, m) {
  return m.isNothing() ? x : f(this.__value);
}
