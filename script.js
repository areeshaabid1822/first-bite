
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
const heroBtn = document.querySelector(".btn");

if(heroBtn){
    heroBtn.addEventListener("click", () => {
        alert("Thank you for choosing Tasty Bites!");
    });
}

const search = document.getElementById("search");

if(search){

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

}

 function filterMenu(category){

 const cards = document.querySelectorAll(".card");

 cards.forEach(card => {

if(category === "all"){
 card.style.display = "block";
 }
 else if(card.classList.contains(category)){
 card.style.display = "block";
 }
 else{ card.style.display = "none";
}

 });

 }


const counters = document.querySelectorAll('.stat-box h3');

if(counters.length > 0){

    counters.forEach(counter => {

        const updateCount = () => {

            const target = parseInt(counter.innerText);
            let count = +counter.getAttribute('data-count') || 0;

            const increment = target / 100;

            if(count < target){
                const newCount = Math.ceil(count + increment);
                counter.setAttribute('data-count', newCount);
                counter.innerText = newCount + "+";
                setTimeout(updateCount, 20);
            }
            else{
                counter.innerText = target + "+";
            }
        };

        updateCount();
    });

}

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit",function(e){

        e.preventDefault();

        let name=document.getElementById("name").value.trim();
        let email=document.getElementById("email").value.trim();
        let subject=document.getElementById("subject").value.trim();
        let message=document.getElementById("message").value.trim();

        let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(name==="" || email==="" || subject==="" || message===""){
            alert("Please fill all fields");
            return;
        }

        if(!email.match(emailPattern)){
            alert("Please enter valid email");
            return;
        }

        alert("Message Sent Successfully!");

        contactForm.reset();

    });

}