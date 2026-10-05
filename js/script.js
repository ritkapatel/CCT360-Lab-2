// Initialize variables for drink, food and dessert
let food = "";
dessert = "";

// change background color when button is clicked
function pinkclickFunction() {
    document.body.style.backgroundColor = "rgb(255, 156, 214)";
}

// change background color when button is clicked
function blueclickFunction() {
    document.body.style.backgroundColor = "rgb(112, 192, 241)";
}

// change background color when button is clicked
function greenclickFunction() {
    document.body.style.backgroundColor = "rgb(222, 255, 176)";
}

// set the value of the drink to what user selects
function drinkFunction(item) {
    drink = item;
}

// set the value of the food to what user selects
function foodFunction(item) {
    food = item;
}

// set the value of the dessert to what user selects
function dessertFunction(item) {
    dessert = item;
}

// check if all options are selected before placing the order
function orderFunction() {
    // if any of the options are not selected, alert the user to select all options
    if (drink === "" || food === "" || dessert === "") {
        alert("Please select all options before placing your order.");
    } else {
    // if all options are selected, alert the user with their order
        alert("You have ordered a " + drink + ", " + food + ", and " + dessert + "." + " Thanks for ordering!");
        drink = "";
        food = "";
        dessert = "";
    }
}

// reset the order and change the images back to default
function resetFunction() {
    drink = "";
    food = "";
    dessert = "";
    alert("Your order has been reset.");
    document.getElementById("foods").src = "images/food.png";
    document.getElementById("drinks").src = "images/drink.jpg";
    document.getElementById("desserts").src = "images/dessert.jpg";
    document.body.style.backgroundColor = "rgb(255, 253, 230)";
}

// change the image of the drink when the button is clicked
document.getElementById("button4").addEventListener("click", function() {
    document.getElementById("drinks").src = "images/juice.jpg";
});

// change the image of the drink when the button is clicked
document.getElementById("button5").addEventListener("click", function() {
    document.getElementById("drinks").src = "images/water.jpeg";
});

// change the image of the drink when the button is clicked
document.getElementById("button6").addEventListener("click", function() {
    document.getElementById("drinks").src = "images/coffee.jpg";
});

// change the image of the drink when the button is clicked
document.getElementById("button7").addEventListener("click", function() {
    document.getElementById("drinks").src = "images/soda.jpeg";
});

// change the image of the food when the button is clicked
document.getElementById("button8").addEventListener("click", function() {
    document.getElementById("foods").src = "images/pizza.webp";
});

//  change the image of the food when the button is clicked
document.getElementById("button9").addEventListener("click", function() {
    document.getElementById("foods").src = "images/burger.jpg";
});

// change the image of the food when the button is clicked
document.getElementById("button10").addEventListener("click", function() {
    document.getElementById("foods").src = "images/salad.jpg";
});

// change the image of the food when the button is clicked
document.getElementById("button11").addEventListener("click", function() {
    document.getElementById("foods").src = "images/pasta.webp";
});

// change the image of the dessert when the button is clicked
document.getElementById("button12").addEventListener("click", function() {
    document.getElementById("desserts").src = "images/icecream.jpeg";
});

// change the image of the dessert when the button is clicked
document.getElementById("button13").addEventListener("click", function() {
    document.getElementById("desserts").src = "images/cake.jpeg";
});

// change the image of the dessert when the button is clicked
document.getElementById("button14").addEventListener("click", function() {
    document.getElementById("desserts").src = "images/brownie.jpeg";
});

// change the image of the dessert when the button is clicked
document.getElementById("button15").addEventListener("click", function() {
    document.getElementById("desserts").src = "images/cookie.webp";
});