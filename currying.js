var curry = require('lodash/curry');
var _ = require('ramda');

// var match = curry(function(what, str) {
//   return str.match(what);
// });
//
// var replace = curry(function(what, replacement, str) {
//   return str.replace(what, replacement);
// });
//
// var filter = curry(function(f, array) {
//   return array.filter(f);
// });
//
// var map = curry(function(f, ary) {
//   return ary.map(f);
// });
//
// console.log(match(/\s+/g, 'hello world'));
// console.log(match(/\s+/g)('hello world'));
//
// var hasSpaces = match(/\s+/g);
//
// console.log(hasSpaces('hello world'));
// console.log(hasSpaces('spaceless'));
//
// console.log(filter(hasSpaces, [ 'tori_spelling', 'tori amos' ]));
//
// var findSpaces = filter(hasSpaces);
//
// console.log(findSpaces([ 'tori_spelling', 'tori amos' ]));

// var words = function(str) {
//   return _.split(' ', str);
// }

var words = _.split(' ');
var sentences = _.map(words);
console.log(words('what a lovely day')); // => [ 'what', 'a', 'lovely', 'day' ]
console.log(sentences([ 'what a lovely day', 'for a walk in the park' ]));
  // => [ [ 'what', 'a', 'lovely', 'day' ], [ 'for', 'a', 'walk', 'in', 'the', 'park' ] ]

// var filterQs = function(xs) {
//   return _.filter(function(x) {
//     return match(/q/i, x);
//   }, xs);
// }

var filterQs = _.filter(_.match(/q/i));
console.log(filterQs(['hi', 'quick']));

var _keepHighest = function(x,y){ return x >= y ? x : y; };

// var max = function(xs) {
//   return reduce(function(acc, x){
//     return _keepHighest(acc, x);
//   }, -Infinity, xs);
// };

var max = _.reduce(_keepHighest, Number.NEGATIVE_INFINITY);
console.log(max([ 1, 2, 7, 4 ]));

var slice = curry(function(start, end, ary) {
  return ary.slice(start, end);
});

var secondAndThird = slice(1, 3);
console.log(secondAndThird([1, 2, 3, 4, 5]));

var take = slice(0);

var take6 = take(6);

console.log(take6([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(secondAndThird(take6([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])));
