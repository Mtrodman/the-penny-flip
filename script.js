let headsCount = 0;
if(localStorage.getItem("headsCount") !== null){
    headsCount = parseInt(localStorage.getItem("headsCount"));
}

let tailsCount = 0;
if(localStorage.getItem("tailsCount") !== null){
    tailsCount = parseInt(localStorage.getItem("tailsCount"));
}

scoreUpdate()

document.querySelector("#flip").addEventListener("click", function(){
    // console.log("I was clicked!")
    let isHeads = Math.random() < 0.5;

    if(isHeads){
        console.log('Its heads', headsCount);
        document.querySelector("img").src = "./assets/images/penny-heads.jpg";
        document.querySelector("#outcome-header").textContent = "You Flipped Heads!";

        headsCount++;
    } else {
        console.log('Its tails', tailsCount);
        document.querySelector("img").src = "./assets/images/penny-tails.jpg";
        document.querySelector("#outcome-header").textContent = "You Flipped Tails!";

        tailsCount++;
    }

    localStorage.setItem("headsCount",headsCount);
    localStorage.setItem("tailsCount",tailsCount);

    scoreUpdate()
})

// comments for fuction, what is does 
function scoreUpdate() {
    // the following code computes totals and percentages 
    let total = headsCount + tailsCount;

    let percentageHeads = 0;
    let percentageTails = 0; 
    
    if(total > 0) {
        percentageHeads = Math.round(headsCount/total * 100);
        percentageTails = Math.round(tailsCount/total * 100);
    }

    // this section selects and updates the dom elements
    document.querySelector("#heads-counter").textContent = headsCount;
    document.querySelector("#tails-counter").textContent = tailsCount;
    document.querySelector("#heads-percentage").textContent = percentageHeads + "%";
    document.querySelector("#tails-percentage").textContent = percentageTails + "%";
}