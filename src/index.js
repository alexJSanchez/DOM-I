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

console.log('project wired!')

//nav
let nav = document.querySelector("nav");
nav.children[0].textContent = siteContent.nav["nav-item-1"];
nav.children[1].textContent = siteContent.nav["nav-item-2"];
nav.children[2].textContent = siteContent.nav["nav-item-3"];
nav.children[3].textContent = siteContent.nav["nav-item-4"];
nav.children[4].textContent = siteContent.nav["nav-item-5"];
nav.children[5].textContent = siteContent.nav["nav-item-6"];
//nav add class, my loops weren't working so i just used children again.
console.log(nav.children.length);
for(let i = 0;i < nav.children.length;i++){
  nav.children[i].setAttribute("class", "italic");
}
console.log(nav)
//logo img
let logoImg = document.querySelector("#logo-img");
logoImg.src = siteContent.images["logo-img"];

//cta-text, H1
let ctaText = document.querySelector(".cta");

ctaText.querySelector('h1').textContent = siteContent.cta["h1"];
//cta-text, Button
ctaText.querySelector('button').textContent = siteContent.cta["button"];
//cta-text, img
document.querySelector("#cta-img").src = siteContent.images["cta-img"];
//main content / img
let middleImg = document.querySelector(".middle-img");
middleImg.src = siteContent.images["accent-img"]
//main content / top content
let topContent = document.querySelector(".top-content");
topContent.children[0].querySelector("h4").textContent = siteContent["main-content"]['features-h4'];
topContent.children[0].querySelector("p").textContent = siteContent["main-content"]['features-content'];
// top content second section
topContent.children[1].querySelector("h4").textContent = siteContent["main-content"]['about-h4'];
topContent.children[1].querySelector("p").textContent = siteContent["main-content"]['about-content'];
  
// bottom content
let bottomContent = document.querySelector(".bottom-content");
bottomContent.children[0].children[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent.children[0].children[1].textContent = siteContent["main-content"]["services-content"];
bottomContent.children[1].children[0].textContent = siteContent["main-content"]["product-h4"];
bottomContent.children[1].children[1].textContent = siteContent["main-content"]["product-content"];
bottomContent.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
bottomContent.children[2].children[1].textContent = siteContent["main-content"]["vision-content"];

//contact section
let contactSection = document.querySelector(".contact");
contactSection.children[0].textContent = siteContent['contact']["contact-h4"];
contactSection.children[1].textContent = siteContent['contact']["address"];
contactSection.children[2].textContent = siteContent['contact']["phone"];
contactSection.children[3].textContent = siteContent['contact']["email"];

//footer section
let footerSection = document.querySelector("footer");
footerSection.children[0].textContent = siteContent.footer.copyright

