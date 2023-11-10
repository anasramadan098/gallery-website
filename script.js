
// Add Click On ( X ) To Close The img-container
const imgContainer = document.querySelector('.img-container');
const x = document.querySelector('.img-container .x');

x.addEventListener('click',function() {
    imgContainer.classList.remove('active');
    document.querySelector('.img-container .img img').remove();
});

// Add Click On All Imgs That Have Uniqe Class
document.querySelectorAll('.imgs img').forEach(img => {
    img.addEventListener('click',() => {
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        document.querySelector('.img-container .img').appendChild(imgElement);
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



// Create Imgs

// Set Holder
const holder = document.querySelector('.collection .imgs')

// Loop
for (let i = 1; i <= 16; i++ ) {
    const img = document.createElement('img');
    const imgData = ''
    img.src = `imgs/gallery-${i}.jpg`;
    img.alt = `gallery img-${i}`;
    img.classList.add('active');
    holder.append(img)
}


// // Filter The Categories
// const filterElemetns = document.querySelectorAll('.collection .toolbar span');


// filterElemetns.forEach(e => {
//     e.addEventListener('click' , () => {
//         // Filter The Imgs
//         filterImgsFrom(e.className);
//     })
// })



// function filterImgsFrom(categoriesName) {
//     document.querySelectorAll('.collection img').forEach(img => {
//         // Remove The Active Class
//         img.classList.remove('active');
        
        
//         if ( img.getAttribute('data-category') == categoriesName) {
//             img.classList.add('active');
//         }
//         //  Check If It All Category
//         if (categoriesName == 'all') {
//             img.classList.add('active')
//         }

//     })
    
// }


// // Get Mouse Event
// document.addEventListener('mousemove' , (e) => {
//     document.querySelector('.main').style.backgroundPosition = '-' + e.clientX +'px'
// })