/**
 * Created by RFreeman on 9/9/2016.
 */
// link to filesystem module
var fs = require('fs');

// load food list asynchronously
var food = fs.readFile('food.txt', 'utf8', function(err, food) {
    console.log(food);
    if (err) {
       console.log(err);
   }
    else {

       console.log('\nDRINKS');
   }
});

console.log('FOOD');

// repeat with drinks
var drinks = fs.readFile('drinks.txt', 'utf8', function(err, drinks) {
   if (err) {
       console.log(err);
   }
    else {

       console.log(drinks);
   }
});

