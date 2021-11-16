// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Parker Van Every" // HINT: Replace this with your own name!





// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let count = 0
let count2 = 0
let count3 = 0



updateDisplay();

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`



//line of code for gb cookie buttons
document.getElementById('add-gb').addEventListener('click', function() {
    count ++;
    console.log(count);
    updateDisplay();

    
});
document.getElementById('minus-gb').addEventListener('click', function() {
    if (count > 0)
    count --;
    console.log(count);
    updateDisplay();
});


//line of code for cc cookie buttons
document.getElementById('add-cc').addEventListener('click', function() {
    count2 ++;
    console.log(count2);
    updateDisplay();

    
});
document.getElementById('minus-cc').addEventListener('click', function() {
    if (count2 > 0)
    count2 --;
    console.log(count2);
    updateDisplay();
});


//line of code for sugar cookie buttons
document.getElementById('add-sugar').addEventListener('click', function() {
    count3 ++;
    console.log(count3);
    updateDisplay();

    
});
document.getElementById('minus-sugar').addEventListener('click', function() {
    if (count3 > 0)
    count3 --;
    console.log(count3);
    updateDisplay();
});


function updateDisplay(){
    document.getElementById('qty-gb').innerHTML = count;
    document.getElementById('qty-cc').innerHTML = count2;
    document.getElementById('qty-sugar').innerHTML = count3;
    document.getElementById('qty-total').innerHTML = (count + count2 + count3);
    
};
// TODO: Hook up event listeners for the rest of the buttons