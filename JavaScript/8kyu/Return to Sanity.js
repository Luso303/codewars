// https://www.codewars.com/kata/514a7ac1a33775cbb500001e/javascript

// This function should return an object, but it's not doing what's intended. What's wrong?
// debugging

// function mystery() {
//   var results =
//     {sanity: 'Hello'};
//   return
//     results;
// }

function mystery() {
  var results = {sanity: 'Hello'};
  return results;
}

// shortened
var mystery = () => ({sanity: 'Hello'});