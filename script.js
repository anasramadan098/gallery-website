// Change Footer Date Span
document.querySelector('footer span.date').innerHTML = new Date().getFullYear();

// Add Click On ( X ) To Close The img-container
const imgContainer = document.querySelector('.img-container');
const x = document.querySelector('.img-container .x');

x.addEventListener('click',function() {
    imgContainer.classList.remove('active');
    document.querySelector('.img-container img').remove();
});

// Add Click On All Imgs That Have Uniqe Class
document.querySelectorAll('img.event').forEach(img => {
    img.addEventListener('click',() => {
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        imgContainer.appendChild(imgElement);
        imgContainer.classList.add('active');
    })
})


// Show & Hide Sections

// Get All Links
const links = document.querySelectorAll('header .links li');

// Loop On Links
links.forEach(link => {
    // Add Click Event
    link.addEventListener('click', () => {
        // Remove Class Active From All Div's
        document.querySelectorAll('.main div').forEach(div =>  div.classList.remove('active','d-flex'));
        if (link.className == 'contact-us') {
            // Add Class Active To The Current Div
            document.querySelector(`.main div.${link.className}`).classList.add('d-flex');
        } else {
            // Add Class Active To The Current Div
            document.querySelector(`.main div.${link.className}`).classList.add('active');
        }
    })
})



// Filter The Categories
const filterElemetns = document.querySelectorAll('.collection .toolbar span');


filterElemetns.forEach(e => {
    e.addEventListener('click' , () => {
        // Filter The Imgs
        filterImgsFrom(e.innerHTML);
    })
})



function filterImgsFrom(categoriesName) {
    document.querySelectorAll('.collection img').forEach(img => {
        if ( img.dataset.category == categoriesName) {
            document.querySelector('.collection .imgs').innerHTML += img
        }
    })
    
}