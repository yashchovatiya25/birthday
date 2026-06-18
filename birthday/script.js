

function nextPage(pageNumber){

    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById("page"+pageNumber)
    .classList.add("active");

}

/* ==========================
   PAGE 1
   STARS
========================== */

function createStars(){

    const starContainer =
    document.getElementById("stars");

    if(!starContainer) return;

    for(let i=0;i<120;i++){

        const star =
        document.createElement("div");

        star.classList.add("star");

        star.innerHTML = "✦";

        star.style.left =
        Math.random()*100+"vw";

        star.style.top =
        Math.random()*100+"vh";

        star.style.fontSize =
        (Math.random()*10+8)+"px";

        star.style.animationDuration =
        (Math.random()*3+1)+"s";

        starContainer.appendChild(star);
    }

}

createStars();

/* ==========================
   PAGE 2
   BALLOONS
========================== */

function createBalloon(){

    const page2 =
    document.getElementById("page2");

    if(!page2) return;

    const balloon =
    document.createElement("div");

    balloon.classList.add("balloon");

    const balloons = [
        "🎈",
        "🎈",
        "🎈",
        "🎉",
        "✨"
    ];

    balloon.innerHTML =
    balloons[Math.floor(
    Math.random()*balloons.length
    )];

    balloon.style.left =
    Math.random()*100+"vw";

    balloon.style.animationDuration =
    (Math.random()*8+6)+"s";

    page2.appendChild(balloon);

    setTimeout(()=>{
        balloon.remove();
    },14000);

}

setInterval(createBalloon,600);

/* ==========================
   PAGE 3
   CAKE CUTTING
========================== */

let cakeAlreadyCut = false;

function cutCake(){

    if(cakeAlreadyCut) return;

    cakeAlreadyCut = true;

    const cake =
    document.getElementById("cake");

    cake.style.transform =
    "scale(.9) rotate(-8deg)";

    cake.style.opacity = ".8";

    document.getElementById(
    "cakeMessage"
    ).innerHTML =
    "Yayyyyy Bauuu ❤️<br>Chocolate Surprise Time 🍫";

    startChocolateRain();

    document.getElementById(
    "galleryBtn"
    ).classList.remove("hidden");

}

/* ==========================
   CHOCOLATE RAIN
========================== */

function startChocolateRain(){

    const chocolates = [
        "🍫",
        "🍬",
        "🍩",
        "🍪",
        "🧁"
    ];

    for(let i=0;i<120;i++){

        setTimeout(()=>{

            const choco =
            document.createElement("div");

            choco.classList.add("chocolate");

            choco.innerHTML =
            chocolates[Math.floor(
            Math.random()*chocolates.length
            )];

            choco.style.left =
            Math.random()*100+"vw";

            choco.style.animationDuration =
            (Math.random()*3+2)+"s";

            document.body.appendChild(choco);

            setTimeout(()=>{
                choco.remove();
            },6000);

        },i*40);

    }

}

/* ==========================
   PAGE 5
   LANTERNS
========================== */

function createLantern(){

    const page5 =
    document.getElementById("page5");

    if(!page5) return;

    const lantern =
    document.createElement("div");

    lantern.classList.add("lantern");

    lantern.innerHTML = "🏮";

    lantern.style.left =
    Math.random()*100+"vw";

    lantern.style.animationDuration =
    (Math.random()*8+10)+"s";

    page5.appendChild(lantern);

    setTimeout(()=>{
        lantern.remove();
    },20000);

}

setInterval(createLantern,1500);

/* ==========================
   LOVE LETTER TYPE EFFECT
========================== */

window.addEventListener("load",()=>{

    const letter =
    document.getElementById("typedLetter");

    if(!letter) return;

    const fullText =
    letter.innerHTML;

    letter.innerHTML = "";

    let i = 0;

    function typeLetter(){

        if(i < fullText.length){

            letter.innerHTML +=
            fullText.charAt(i);

            i++;

            setTimeout(
            typeLetter,
            35
            );

        }

    }

    setTimeout(
    typeLetter,
    1500
    );

});

/* ==========================
   EXTRA SPARKLES
========================== */

function createSparkle(){

    const sparkle =
    document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position =
    "absolute";

    sparkle.style.left =
    Math.random()*100+"vw";

    sparkle.style.top =
    Math.random()*100+"vh";

    sparkle.style.fontSize =
    (Math.random()*12+10)+"px";

    sparkle.style.pointerEvents =
    "none";

    sparkle.style.opacity = ".8";

    sparkle.style.transition =
    "all 2s linear";

    document.body.appendChild(
    sparkle
    );

    setTimeout(()=>{

        sparkle.style.opacity = "0";
        sparkle.style.transform =
        "translateY(-40px)";

    },100);

    setTimeout(()=>{
        sparkle.remove();
    },2500);

}

setInterval(createSparkle,900);

/* ==========================
   PHOTO LOADING CHECK
========================== */

document
.querySelectorAll(".photo-card img")
.forEach(img=>{

    img.onerror = function(){

        this.src =
        "https://via.placeholder.com/300x300.png?text=Add+Your+Photo";

    };

});

/* ==========================
   BIRTHDAY ENTRY EFFECT
========================== */

window.onload = ()=>{

    document.body.style.opacity = "0";

    setTimeout(()=>{

        document.body.style.transition =
        "opacity 2s";

        document.body.style.opacity = "1";

    },200);

};

