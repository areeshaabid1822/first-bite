const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelector(".btn").addEventListener("click", () => {
    alert("Thank you for choosing Tasty Bites!");
});
const search = document.getElementById("search");

search.addEventListener("keyup", () => {

const value = search.value.toLowerCase();
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

const text = card.textContent.toLowerCase();

if(text.includes(value)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

});

function filterMenu(category){

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

if(category === "all"){
card.style.display = "block";
}
else if(card.classList.contains(category)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

}