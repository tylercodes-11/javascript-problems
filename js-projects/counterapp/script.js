let add =  document.getElementById('increment'); // getting plus button
let subtract = document.getElementById('decrement'); // getting minus button

let int = document.getElementById('number'); // number counter element
let integer = 0; // starting count at 0

add.addEventListener('click',function(){ //onclick, adding 1 to count
    integer += 1;
    int.innerHTML = integer; // changing front end value to integer
});

subtract.addEventListener('click',function(){ // on click subtracting 1 from count
    integer -=1;
    int.innerHTML = integer; // changing value to integer
});

