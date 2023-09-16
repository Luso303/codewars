// https://www.codewars.com/kata/53369039d7ab3ac506000467/javascript

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool){
  return bool ? 'Yes' : 'No'
}

// short form
let boolToWord = bool => bool ? 'Yes' : 'No';

// or if we wanted it "spelled out"
function boolToWord(bool){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}