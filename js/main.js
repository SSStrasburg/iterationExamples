(function() {
  'use strict';



  let paragraph = 'practice practice practice makes perfect time is of the essence no time like the present many more miles before I rest before I rest many more miles';
  //console.log(paragraph);  // my random paragraph

  let arrayOfStrings = paragraph.split(' ');
  //console.log(arrayOfStrings);  //

  let results = {};


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
