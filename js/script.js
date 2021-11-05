
console.log("ajsdkf")
var menuBtn = document.getElementById('menuBtn');
var contentDivEl = document.getElementById("contentDiv")
var contentDivSecondEl = document.getElementById("contentDivSecond")
let prevBtnEl = document.getElementById("prevBtn");
let nextBtnEl = document.getElementById("nextBtn");

menuBtn.onclick = function() {
    document.body.classList.toggle('menu-open');
};

/*Get horizontal srcollbarr width value*/
let contentDivWidth = contentDivEl.offsetWidth;
/*hold position value to horizontal srollbar*/
var moveSlide = 0;

let activity = [
    {
        name: "kohde 1",
        images: "images/landscape-2990060_1920.jpg",
        tag: [
            "uusimmat",
            "perheystävällinen"
        ]
    },
    {
        name: "kohde 2",
        images: "images/metsa1.jpg",
        tag: [
            "suosituimmat",
            "uusimmat",
            "perheystävällinen"
        ]
    },
    {
        name: "kohde 3",
        images: "images/mountains-2098408_1920.jpg",
        tag: [
            "suosituimmat",
            "uusimmat",
        ]
    },
    {
        name: "kohde 4",
        images: "images/log-cabin-1886620_1920.jpg",
        tag: [
            "suosituimmat",
            "uusimmat",
            "perheystävällinen"
        ]
    },
    {
        name: "kohde 5",
        images: "images/landscape-2990060_1920.jpg",
        tag: [
            "suosituimmat",
            "uusimmat",
            "perheystävällinen"
        ]
    },
    {
        name: "kohde 6",
        images: "images/jarvi1.jpg",
        tag: [
            "suosituimmat",
            "uusimmat",
        ]
    },
    {
        name: "kohde SS 7",
        images: "images/travel-1749508_1920.jpg",
        tag: [
            "suosituimmat",
            "uusimmat",
        ]
    },
]

/*----- Greate horizontal list of contenent-----------*/ 
function uploadContent(div) {

    for (let i in activity) {

        /*Greate col-div inside row-div id=ContentDiv */
        let contentColEl = document.createElement("div");
        div.appendChild(contentColEl);
        
        contentColEl.classList.add("col-6")
        contentColEl.classList.add("col-sm-4")
        contentColEl.classList.add("move")
        contentColEl.classList.add("position-relative")

        /*Greate contentCard*/
        let contentCardEl = document.createElement("div");
        contentColEl.appendChild(contentCardEl);
        contentCardEl.classList.add("slide-img");


        /*Greate a-link inside div name contentCardEl*/
        let a = document.createElement("a");
        contentCardEl.appendChild(a);
        a.href = "#";

        /*Greate images inside a-link*/
        let img = document.createElement("img");
        a.appendChild(img)
        img.src = activity[i].images;
      /*img.classList.add("d-block");
        img.classList.add("img-fluid");----*/
        img.classList.add("rounded");

        /*Greate span element inside contentCard element*/
        let span = document.createElement("span");
        contentCardEl.appendChild(span);
        span.textContent = activity[i].name; 


        console.log("sdjkf")
    }
}

/*Horizontal scrollbarr prevButton*/
prevBtnEl.onclick = () => {
    console.log(prevBtnEl.style.move = contentDivWidth)
    var cols = document.getElementsByClassName('move');
    for(i = 0; i < cols.length; i++) {
      cols[i].style.right = -contentDivWidth + moveSlide +  "px";
    }
    moveSlide -= contentDivWidth;

}

/*Horizontal scrollbarr nextButton*/
nextBtnEl.onclick = () => {
    console.log("helldfsdfo")
    var cols = document.getElementsByClassName('move');
    for(i = 0; i < cols.length; i++) {
      cols[i].style.right = contentDivWidth + moveSlide +  "px";
    }
    moveSlide += contentDivWidth;
}
uploadContent(contentDivEl);
uploadContent(contentDivSecondEl);
uploadContent();
uploadContent();
uploadContent();
uploadContent();