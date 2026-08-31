// lightbox for thumbnails
let thumbnails = document.querySelectorAll(".imgt");
let box = document.querySelector(".lightbox");
let largeimg = document.querySelector("#lbimg");
let btnNext = document.querySelector(".next");
let btnprev = document.querySelector(".prev");
let btnclose = document.querySelector(".close");

let cindex = 0;
for (let thumbnail of thumbnails) {
     thumbnail.addEventListener("click" , () => {
      cindex == 0
      for (let th of thumbnails) {
        if (th === thumbnail){
            break;
        }
        cindex++;
      }
      largeimg.src = thumbnail.src
    box.style.display = "flex";
     })
    }
     btnNext.addEventListener("click", () => {
        cindex++;
        if(cindex >= thumbnails.length) {
            cindex = 0
        }
        largeimg.src = thumbnails[cindex].src
     });

     btnprev.addEventListener("click", () => {
        cindex--
        if (cindex < 0) {
            cindex = thumbnails.length - 1 ;
        }
        largeimg.src = thumbnails[cindex].src
     })
btnclose.addEventListener("click", () => {
    box.style.display = "none"
})
// Lightbox for posters

let posters = document.querySelectorAll(".imgp");
let box2 = document.querySelector(".lightbox2");
let largeimg2 = document.querySelector("#lbimg2");
let bOne= document.querySelector(".next2");
let bTwo = document.querySelector(".prev2");
let bThree = document.querySelector(".close2");

let index = 0 
for (let poster of posters){
    poster.addEventListener("click", () => {
        index = 0
        for (let pos of posters) {
            if (pos === poster) {
                break;
            }
       index++;
        }
        largeimg2.src = poster.src
    box2.style.display = "flex"
    })
}
bOne.addEventListener("click", () => {
        index++;
        if(index >= posters.length) {
            index = 0
        }
        largeimg2.src = posters[index].src
     });


bTwo.addEventListener("click", () => {
    index-- 
    if(index < 0) {
        index = posters.length - 1;
    }
    largeimg2.src = posters[index].src
})

bThree.addEventListener("click", () => { 
    box2.style.display = "none"
})
