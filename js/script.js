
console.log("ajsdkf")

var contentDivEl = document.getElementById("contentDiv")
var contentDivTestEl = document.getElementById("contentDivTest")
var contentDivFirstEl = document.getElementById("contentDivFirst")
var contentDivSecondEl = document.getElementById("contentDivSecond")
var contentDivThirdEl = document.getElementById("contentDivThird")
var contentDivFourthEl = document.getElementById("contentDivFourth")

//Index-page buttons
let prevBtnEl = document.getElementById("prevBtn");
let nextBtnEl = document.getElementById("nextBtn");

//Aktiviteetti-page buttons
let prevBtnFirstEl = document.getElementById("prevBtnFirst");
let nextBtnFirstEl = document.getElementById("nextBtnFirst");
let prevBtnSecondEl = document.getElementById("prevBtnSecond");
let nextBtnSecondEl = document.getElementById("nextBtnSecond");
let prevBtnThirdEl = document.getElementById("prevBtnThird");
let nextBtnThirdEl = document.getElementById("nextBtnThird");
let prevBtnFourthEl = document.getElementById("prevBtnFourth");
let nextBtnFourthEl = document.getElementById("nextBtnFourth");

const bodyEl = document.getElementById("body");


/*Get horizontal srcollbarr width value*/
//let contentDivWidth = contentDivEl.offsetWidth;


/*hold position value to horizontal srollbar*/
let moveSlide = 0;
let moveSlideFirst = 0;
let moveSlideSecond = 0;
let moveSlideThird = 0;
let moveSlideFourth = 0;

let activities = [
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
    {
        name: "kohde SS 7",
        images: "images/travel-1749508_1920.jpg",
        tag: [
            "suosituimmat",
            "uusimmat",
        ]
    },

]

let hobby = {
    helppokulkuiset: [
        "Lyhyet kävelyt",
        "liikuntarajoitteisille",
        "lapsille",
        "Yllätys",
        "Jotain vielä",
        "Ja lisää",
        "Loppui vaihtoehdot"
    ],
    Vesistö: [
        "Isot järvet",
        "Suoalueet",
        "Erämaa lammet",
        "Meri näköalat"
    ],
    Pyöräilijöille: [
        "Maisema pyöräilyt",
        "Matka",
        "Mäkiset",
        "Metsä reitit"
    ],
    Muumilaakso: [
        "Haisuli",
        "Muumipeikko",
        "Nipsu",
        "Mörkö"
    ]
}



/*----- Greate horizontal list of contenent-----------*/ 
function uploadContent(div) {

    for (let i in activities) {

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
        a.href = "kohdesivu.html";

        /*Greate images inside a-link*/
        let img = document.createElement("img");
        a.appendChild(img)
        img.src = activities[i].images;
      /*img.classList.add("d-block");
        img.classList.add("img-fluid");----*/
       // img.classList.add("rounded");

        /*Greate span element inside contentCard element*/
        let span = document.createElement("span");
        contentCardEl.appendChild(span);
        span.textContent = activities[i].name; 


        console.log("sdjkf")
    }
}
/*----- Greate horizontal list of activities-----------*/ 
function uploadContentActivity(div, activity) {

    for (var i in hobby[activity]) {

        /*Greate col-div inside row-div id=ContentDiv */
        let contentColEl = document.createElement("div");
        div.appendChild(contentColEl);
        
        contentColEl.classList.add("col-6")
        contentColEl.classList.add("col-sm-4")
        contentColEl.classList.add(activity)
        contentColEl.classList.add("move")
        contentColEl.classList.add("position-relative")

        /*Greate contentCard*/
        let contentCardEl = document.createElement("div");
        contentColEl.appendChild(contentCardEl);
        contentCardEl.classList.add("slide-img");


        /*Greate a-link inside div name contentCardEl*/
        let a = document.createElement("a");
        contentCardEl.appendChild(a);
        a.href = "kohdesivu.html";

        /*Greate images inside a-link*/
        let img = document.createElement("img");
        a.appendChild(img)
        img.src = activities[ Math.floor(Math.random()*activities.length)].images;
        //img.classList.add("rounded");

        /*Greate span element inside contentCard element*/
        let span = document.createElement("span");
        contentCardEl.appendChild(span);
        span.textContent = hobby[activity][i]; 


        console.log("sdjkf")
    }
}






//upload content in index.html
if (bodyEl.classList.contains('homepage')) {

    /*Get horizontal srcollbarr width value*/
    var contentDivWidth = contentDivEl.offsetWidth;

    uploadContent(contentDivEl);
    uploadContent(contentDivTestEl);

    /*Horizontal scrollbarr prevButton*/
    prevBtnEl.onclick = () => {

        //hide prevBntEl if srcoll position is back to start
        if (moveSlide <= contentDivWidth  ) {
            prevBtnEl.classList.add('d-none');
        }
        
        console.log(prevBtnEl.style.move = contentDivWidth)
        var cols = document.getElementsByClassName('move');
        for(i = 0; i < cols.length; i++) {
        cols[i].style.right = -contentDivWidth + moveSlide +  "px";
        }
        moveSlide -= contentDivWidth;
        nextBtnEl.classList.remove('d-none');

    }

    /*Horizontal scrollbarr nextButton*/
    nextBtnEl.onclick = () => {
        //show prevBtnEl after first click 
        prevBtnEl.classList.remove('d-none');
        var cols = document.getElementsByClassName('move');
        console.log(cols[0].offsetWidth *cols.length - contentDivWidth)
        console.log(moveSlide)
        console.log()
        //hide nextBtnEl if scroll position is end of the list
        if (cols[0].offsetWidth * cols.length - contentDivWidth < moveSlide + contentDivWidth) {
            nextBtnEl.classList.add('d-none')
            console.log(moveSlide)
        }
        for(i = 0; i < cols.length; i++) {
        cols[i].style.right = contentDivWidth + moveSlide +  "px";
        }
        moveSlide += contentDivWidth;
    }


}




//uploadContent in aktiviteetit.html
if (bodyEl.classList.contains('aktiviteetit')) {
    /*Get horizontal srcollbarr width value*/
    var contentDivWidth = contentDivFirstEl.offsetWidth;


    uploadContentActivity(contentDivFirstEl, "helppokulkuiset");
    uploadContentActivity(contentDivSecondEl, "Vesistö");
    uploadContentActivity(contentDivThirdEl, "Pyöräilijöille");
    uploadContentActivity(contentDivFourthEl, "Muumilaakso");



    /*Horizontal scrollbarr prevButton*/
    prevBtnFirstEl.onclick = () => {
        //hide prevBntEl if srcoll position is back to start
        if (moveSlideFirst <= contentDivWidth  ) {
            prevBtnFirstEl.classList.add('d-none');
        }
        
        var cols = document.getElementsByClassName("helppokulkuiset");
        for(i = 0; i < cols.length; i++) {
        cols[i].style.right = -contentDivWidth + moveSlideFirst +  "px";
        }
        moveSlideFirst -= contentDivWidth;
        nextBtnFirstEl.classList.remove('d-none');

    }
    /*Horizontal scrollbarr nextButton*/
    nextBtnFirstEl.onclick = () => {
        //show prevBtnEl after first click 
        prevBtnFirstEl.classList.remove('d-none');
        var cols = document.getElementsByClassName('helppokulkuiset');
        //hide nextBtnEl if scroll position is end of the list
        if (cols[0].offsetWidth * cols.length - contentDivWidth < moveSlideFirst + contentDivWidth) {
            nextBtnFirstEl.classList.add('d-none')
        }
        for(i = 0; i < cols.length; i++) {
        cols[i].style.right = contentDivWidth + moveSlideFirst +  "px";
        }
        moveSlideFirst += contentDivWidth;
    }

    /*Horizontal scrollbarr prevButton*/    
    prevBtnSecondEl.onclick = () => {

        //hide prevBntEl if srcoll position is back to start
        if (moveSlideSecond <= contentDivWidth  ) {
            prevBtnSecondEl.classList.add('d-none');
        }
        var cols = document.getElementsByClassName('Vesistö');
        for(i = 0; i < cols.length; i++) {
        cols[i].style.right = -contentDivWidth + moveSlideSecond +  "px";
        }
        moveSlideSecond -= contentDivWidth;
        nextBtnSecondEl.classList.remove('d-none');
    }
    /*Horizontal scrollbarr nextButton*/
    nextBtnSecondEl.onclick = () => {
        //show prevBtnEl after first click 
        prevBtnSecondEl.classList.remove('d-none');
        var cols = document.getElementsByClassName('Vesistö');
        //hide nextBtnEl if scroll position is end of the list
        if (cols[0].offsetWidth * cols.length - contentDivWidth < moveSlideSecond + contentDivWidth) {
            nextBtnSecondEl.classList.add('d-none')
        }
        for(i = 0; i < cols.length; i++) {
        cols[i].style.right = contentDivWidth + moveSlideSecond +  "px";
        }
        moveSlideSecond += contentDivWidth;
    }

    /*Horizontal scrollbarr prevButton*/
    prevBtnThirdEl.onclick = () => {

        //hide prevBntEl if srcoll position is back to start
        if (moveSlideThird <= contentDivWidth  ) {
            prevBtnThirdEl.classList.add('d-none');
        }
        var cols = document.getElementsByClassName('Pyöräilijöille');
        for(i = 0; i < cols.length; i++) {
        cols[i].style.right = -contentDivWidth + moveSlideThird +  "px";
        }
        moveSlideThird -= contentDivWidth;
        nextBtnThirdEl.classList.remove('d-none');

    }
    /*Horizontal scrollbarr nextButton*/
    nextBtnThirdEl.onclick = () => {
        //show prevBtnEl after first click 
        prevBtnThirdEl.classList.remove('d-none');
        var cols = document.getElementsByClassName('Pyöräilijöille');
        //hide nextBtnEl if scroll position is end of the list
        if (cols[0].offsetWidth * cols.length - contentDivWidth < moveSlideThird + contentDivWidth) {
            nextBtnThirdEl.classList.add('d-none')
        }
        for(i = 0; i < cols.length; i++) {
        cols[i].style.right = contentDivWidth + moveSlideThird +  "px";
        }
        moveSlideThird += contentDivWidth;
    }

    /*Horizontal scrollbarr prevButton*/
    prevBtnEl.onclick = () => {

        //hide prevBntEl if srcoll position is back to start
        if (moveSlide <= contentDivWidth  ) {
            prevBtnEl.classList.add('d-none');
        }
        
        console.log(prevBtnEl.style.move = contentDivWidth)
        var cols = document.getElementsByClassName('move');
        for(i = 0; i < cols.length; i++) {
        cols[i].style.right = -contentDivWidth + moveSlide +  "px";
        }
        moveSlide -= contentDivWidth;
        nextBtnEl.classList.remove('d-none');

    }

    /*Horizontal scrollbarr nextButton*/
    nextBtnEl.onclick = () => {
        //show prevBtnEl after first click 
        prevBtnEl.classList.remove('d-none');
        var cols = document.getElementsByClassName('move');
        console.log(cols[0].offsetWidth *cols.length - contentDivWidth)
        console.log(moveSlide)
        console.log()
        //hide nextBtnEl if scroll position is end of the list
        if (cols[0].offsetWidth * cols.length - contentDivWidth < moveSlide + contentDivWidth) {
            nextBtnEl.classList.add('d-none')
            console.log(moveSlide)
        }
        for(i = 0; i < cols.length; i++) {
        cols[i].style.right = contentDivWidth + moveSlide +  "px";
        }
        moveSlide += contentDivWidth;
    }
   
}