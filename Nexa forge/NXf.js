let mainAnchor = document.querySelector("#icon-anchor");
let toganchors = document.querySelector(".anchors");

mainAnchor.addEventListener("click", () => {
    toganchors.classList.toggle('active')
})

//buttonshandling
let btn1 = document.querySelector("#pri")
btn1.addEventListener("click", () => {
    window.location.href ="aboutpage.html";
})

let btn2 = document.querySelector("#sec")
btn2.addEventListener("click", () => {
    window.location.href ="MyworkPage.html";
})

// copying text

let gmail = document.querySelector(".gmail");
let text1 = document.getElementById("light1");

gmail.addEventListener("click", () => {
    navigator.clipboard.writeText(text1.innerText);
});

let pnum = document.querySelector(".phone");
let text2 = document.getElementById("light2");
pnum.addEventListener("click", () => {
    navigator.clipboard.writeText(text2.innerText);
});

// social links
 
let instagram = document.getElementById("app1");
let youtube = document.getElementById("app2");
let whatsapp = document.getElementById("app3");
let facebook = document.getElementById("app4");

instagram.addEventListener("click", () => {
 window.open(" https://www.instagram.com/walhariamanullah?igsi=MzBnMjZpYXc4am4z", "blank")
})
whatsapp.addEventListener("click", () => {
    window.open("https://wa.me/923232413249")
})

youtube.addEventListener("click", () => {
    window.open(" https://youtube.com/@lgamanofficial?si=AV_6FHfvx-4dALWp", "blank")

})

facebook.addEventListener("click", () => {
    window.open("https://www.facebook.com/share/19QAX6aW5b/")
})

