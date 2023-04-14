
let food1s=document.getElementById("food1");
let food2s=document.getElementById("food2");
let foods=document.getElementById("food")

food1s.addEventListener('click', function(){
console.log("food1",foods)
    foods.style.backgroundImage="url('food1.png')";
})
food2s.addEventListener('click',function(){
    foods.style.backgroundImage="url('food.jpg')";
})