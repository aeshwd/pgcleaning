alert("Welcome to PG Cleaning Organisation. Make your surroundings neat and clean from our professional Cleaning Team. Thanks");



// Reviews 

let testimonials = [
    {
        name: "Joseph P",
        country: "Canada",
        text: "I've been using this cleaning service for over a year now, and I couldn't be happier. The team is always punctual, thorough and leaving my house sparkling clean every time. Highly recommended!",
    },

    {
        name: "Sarah W",
        country: "USA",
        text: "As a busy professional, I rely on this cleaning company to keep my apartment in order. Plus, their eco-friendly cleaning products are a big bonus for me. 5 stars!",
    },

    {
        name: "Emily L",
        country: "Canada",
        text: "I'm a stickler for cleanliness, so finding a cleaning company that meets my standards was no easy task. I appreciate how they tailor their services to fit my needs. I couldn't be happier with the results!",
    },

    {
        name: "David H",
        country: "USA",
        text: "I booked a last-minute cleaning service with this company. I was impressed by their professionalism and attention to detail. My apartment has never looked better. I'll definitely be a repeat customer!",
    },
];

let i = 0;
let j = testimonials.length;

let input = document.getElementById('input');
let previous = document.getElementById('previous');
let next = document.getElementById('next');

let displayTestimonial = () => {
    input.innerHTML = `<p>${testimonials[i].text}</p>
    <h3>${testimonials[i].name}
    <h5>${testimonials[i].country}`
};
window.onload = displayTestimonial;

next.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
});

previous.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
});

// --------------------------------------


// Form 

let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let button = document.getElementById('submit');

button.addEventListener("click", () => {
    let fValue = fname.value;
    let eValue = email.value;

    console.log(mess);

    if(!fValue){
        alert("Please fill First Name");
        return;
    } else if(!eValue){
        alert("Please fill Email address");
        return;
    }  else{
      alert("Done! Your Form has been submitted successfully. We will contact you shortly. Thanks");
    }
});

// Sidebar Menu

function showSidebar(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}


function hideSidebar(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


// AOS Animation 
window.addEventListener("load", () => {
   let preloader = document.querySelector(".js-preloader");
   preloader.classList.add("fade-out");

   setTimeout(() => {
    preloader.style.display = "none";
    AOS.init();
   }, 1200);
});
  


