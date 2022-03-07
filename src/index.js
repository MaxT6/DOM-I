const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// h1 variable 
const siteTitle = document.querySelector("h1");
// h1 visible change
siteTitle.textContent = "DOM Is Awesome";

// button variable 
const buttonElm = document.querySelector("button");
// button visible change
buttonElm.textContent = "Get Started";

// main img
const ctaImg = document.querySelector("#cta-img");

ctaImg.src = "http://localhost:9000/img/cta.png"


//
const headerImg = document.querySelector("#logo-img");

headerImg.src = "http://localhost:9000/img/logo.png"


// h4 top
const topContent = document.querySelector('.top-content')
const headerTop = topContent.querySelectorAll('h4');

headerTop[0].textContent = siteContent['main-content']['features-h4'];
headerTop[1].textContent = siteContent['main-content']['about-h4'];


// p top
const topContentP = document.querySelector('.top-content')
const headerTopP = topContent.querySelectorAll('p');

headerTopP[0].textContent = siteContent['main-content']['features-content'];
headerTopP[1].textContent = siteContent['main-content']['about-content'];

// h4 bottom
const bottomContent = document.querySelector('.bottom-content')
const bottomTop = bottomContent.querySelectorAll('h4');

bottomTop[0].textContent = siteContent['main-content']['services-h4'];
bottomTop[1].textContent = siteContent['main-content']['product-h4'];
bottomTop[2].textContent = siteContent['main-content']['vision-h4'];

// p bottom
const bottomContentP = document.querySelector('.bottom-content')
const bottomTopP = bottomContent.querySelectorAll('p');

bottomTopP[0].textContent = siteContent['main-content']['services-content'];
bottomTopP[1].textContent = siteContent['main-content']['product-content'];
bottomTopP[2].textContent = siteContent['main-content']['vision-content'];

// bottom img

const mainImg = document.querySelector("#middle-img");
mainImg.src = "http://localhost:9000/img/accent.png"



//contact
const contact = document.querySelector('.contact');

contact.children[0].textContent = siteContent.contact['contact-h4'];
contact.children[1].textContent = siteContent.contact['address'];
contact.children[2].textContent = siteContent.contact['phone'];
contact.children[3].textContent = siteContent.contact['email'];



const navLinks = document.querySelectorAll('header nav a');
navLinks[0].textContent = siteContent.nav['nav-item-1'];
navLinks[1].textContent = siteContent.nav['nav-item-2'];
navLinks[2].textContent = siteContent.nav['nav-item-3'];
navLinks[3].textContent = siteContent.nav['nav-item-4'];
navLinks[4].textContent = siteContent.nav['nav-item-5'];
navLinks[5].textContent = siteContent.nav['nav-item-6'];

navLinks[0].classList.add('italic');
navLinks[1].classList.add('italic');
navLinks[2].classList.add('italic');
navLinks[3].classList.add('italic');
navLinks[4].classList.add('italic');
navLinks[5].classList.add('italic');

const footerLink = document.querySelector('footer a');
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add('bold');

console.log('project wired!')
