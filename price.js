
// AOS Animation 
window.addEventListener("load", () => {
    let preloader = document.querySelector(".js-preloader");
    preloader.classList.add("fade-out");
 
    setTimeout(() => {
     preloader.style.display = "none";
     AOS.init();
    }, 1800);
 });

 //----------------------------

 // Get Price 

 let bedroom = document.getElementById('bedroom');
 let bathroom = document.getElementById('bathroom');
 let extra = document.getElementById('extra-rooms');
 let charge = document.getElementById('charge');
 let tip = document.getElementById('tip');
 let button = document.getElementById('button');
 let output = document.getElementById('output');

 button.addEventListener("click", () => {
     let beValue = bedroom.value;
     let baValue = bathroom.value;
     let eValue = extra.value;
     let tValue = tip.value;


     // Formula to calculate = ((No. of bedrooms * 20) + (No. of Bathrooms * 30) + (No. of Extra rooms * 15) + (Service Charge(20)) + (tip amount))
     let out = (beValue * 20) + (baValue * 30) + (eValue * 15) + (20* 1) + (tValue * 1) ;

     output.innerHTML = `Total Price = $${out}`;
     alert(`Your Total Price including service Charge is $${out}`)
 });

 // Sidebar

 // Sidebar Menu

function showSidebar(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}


function hideSidebar(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
