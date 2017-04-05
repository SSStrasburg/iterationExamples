(function() {
  'use strict';



  let paragraph = 'practice practice practice makes perfect time is of the essence no time like the present many more miles before I rest before I rest many more miles';
  //console.log(paragraph);  // my random paragraph

  let arrayOfStrings = paragraph.split(' '); // This makes the string and puts it into an array
  //console.log(arrayOfStrings);  //

  let results = {};

// this array iterates though the array of words.  checks if it is new to the array then (adds or counts) the word in an object
//
//   for(var i = 0; i < arrayOfStrings.length; i++) {
//     if(!results[arrayOfStrings[i]]){
//       //console.log(results[arrayOfStrings[i]]);
//       results[arrayOfStrings[i]] = 1;
//     } else{
//       results[arrayOfStrings[i]]++;
//     }
//     //console.log(results);
//   }
// console.log(results);

arrayOfStrings.forEach(function(word){
  if(results[word]){
    results[word]++;
  } else{
    results[word] = 1;
  }

});
console.log(results);


}());
