let slideParent = document.querySelector(".slides-parent")
let LeftBtn = document.querySelector(".button1")
let RightBtn = document.querySelector(".button2")
let slides = document.querySelectorAll(".slide")
let radio = document.querySelectorAll("#radio1")
let image2 = document.querySelectorAll(".image2")
let pics = document.querySelectorAll(".photo")

let count = 0




for (let s = 0; s < image2.length; s++) {
    image2[s].addEventListener("click", function () {
        console.log(image2);
        slideParent.style.marginLeft = `-${s * 100}%`

            radio[s].checked = true;          

        for (let L = 0; L < image2.length; L++) {
            if (image2[L].classList.contains("border")) {
                image2[L].classList.remove("border")
            }
        }
        image2[s].classList.add("border")
    })
}



for (let s = 0; s < radio.length; s++) {
    radio[s].addEventListener("click", function () {
        console.log(radio[s]);
        slideParent.style.marginLeft = `-${s * 100}%`
        for (let L = 0; L < image2.length; L++) {
            if (image2[L].classList.contains("border")) {
                image2[L].classList.remove("border")
            }
        }
        image2[s].classList.add("border")
    })
}


LeftBtn.addEventListener("click", function () {
    console.log(LeftBtn);
    count--
    if (count < 0) {
        count = slides.length - 1
    }

    console.log(count);
    slideParent.style.marginLeft = `-${count * 100}%`

    for (let i = 0; i < radio.length; i++) {
        radio[i].checked = false;
      }
      
      radio[count].checked = true;      

    for (let f = 0; f < image2.length; f++) {
        if (image2[f].classList.contains("border")) {
            image2[f].classList.remove("border")
            console.log(image2);

        }
        image2[count].classList.add("border")
    }

})


RightBtn.addEventListener("click", function () {
    console.log(LeftBtn);
    count++
    if (count > slides.length - 1) {
        count = 0
    }
    console.log(count);
    slideParent.style.marginLeft = `-${count * 100}%`

    for (let i = 0; i < radio.length; i++) {
        radio[i].checked = false;
      }
      radio[count].checked = true;

    for (let h = 0; h < image2.length; h++) {
        if (image2[h].classList.contains("border")) {
            image2[h].classList.remove("border")
            console.log(image2);
        }
        image2[count].classList.add("border")
    }
})


