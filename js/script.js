// =======================================
// ELEMENTOS
// =======================================

const screens = document.querySelectorAll(".screen");

const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const finalButton = document.getElementById("finalButton");

const giftBox = document.getElementById("giftBox");
const loveButton = document.getElementById("loveButton");

const music = document.getElementById("bgMusic");

const heartsContainer = document.querySelector(".hearts-container");
const starsContainer = document.querySelector(".stars-container");
const particles = document.getElementById("particles");
const heartRain = document.getElementById("heartRain");
const confetti = document.getElementById("confetti");

// =======================================
// CAMBIAR PANTALLA
// =======================================

function showScreen(id){

    const current = document.querySelector(".screen.active");

    current.style.opacity = "0";
    current.style.transform = "translateY(40px)";

    setTimeout(()=>{

        current.classList.remove("active");

        const next = document.getElementById(id);

        next.classList.add("active");

        requestAnimationFrame(()=>{

            next.style.opacity="1";
            next.style.transform="translateY(0)";

        });

    },500);

}
// =======================================
// MÚSICA
// =======================================

function playMusic(){

    music.play().catch(()=>{});

}

// =======================================
// BOTONES
// =======================================

startButton.addEventListener("click",()=>{

    playMusic();

    showScreen("message");

});

continueButton.addEventListener("click",()=>{

    showScreen("gift");

});

giftBox.addEventListener("click",()=>{

    giftBox.style.transform="scale(1.2) rotate(8deg)";

    setTimeout(()=>{

        giftBox.style.transform="scale(0)";

    },300);

    createConfetti();

    setTimeout(()=>{

        showScreen("voucher");

    },700);

});

finalButton.addEventListener("click",()=>{

    showScreen("final");

});

loveButton.addEventListener("click",()=>{

    createHeartRain();

});

// =======================================
// CORAZONES FLOTANTES
// =======================================

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="💜";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.animation=`floatHeart ${5+Math.random()*5}s linear`;

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,700);

// =======================================
// ESTRELLAS
// =======================================

function createStar(){

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="absolute";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.opacity=Math.random();

    star.style.fontSize=(10+Math.random()*15)+"px";

    starsContainer.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },3000);

}

setInterval(createStar,300);

// =======================================
// PARTÍCULAS
// =======================================

function createParticle(){

    const p=document.createElement("span");

    p.style.position="absolute";

    p.style.width="8px";

    p.style.height="8px";

    p.style.borderRadius="50%";

    p.style.background="rgba(255,255,255,.6)";

    p.style.left=Math.random()*100+"vw";

    p.style.top=Math.random()*100+"vh";

    p.style.opacity=".5";

    particles.appendChild(p);

    p.animate([

        {transform:"translateY(0px)"},
        {transform:"translateY(-40px)"}

    ],{

        duration:4000,

        easing:"ease-in-out"

    });

    setTimeout(()=>{

        p.remove();

    },4000);

}

setInterval(createParticle,250);

// =======================================
// LLUVIA DE CORAZONES
// =======================================

function createHeartRain(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💜";

        heart.style.position="absolute";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="-30px";

        heart.style.fontSize=(20+Math.random()*25)+"px";

        heartRain.appendChild(heart);

        heart.animate([

            {transform:"translateY(0px) rotate(0deg)"},
            {transform:`translateY(${window.innerHeight+100}px) rotate(360deg)`}

        ],{

            duration:2500+Math.random()*2500

        });

        setTimeout(()=>{

            heart.remove();

        },5000);

    }

}

// =======================================
// CONFETTI
// =======================================

function createConfetti(){

    const colors=[
        "#C084FC",
        "#F9A8D4",
        "#FFFFFF",
        "#DDD6FE",
        "#FDE68A"
    ];

    for(let i=0;i<80;i++){

        const piece=document.createElement("div");

        piece.style.position="absolute";

        piece.style.width="8px";

        piece.style.height="12px";

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.background=colors[Math.floor(Math.random()*colors.length)];

        confetti.appendChild(piece);

        piece.animate([

            {
                transform:"translateY(0px) rotate(0deg)"
            },

            {
                transform:`translateY(${window.innerHeight+100}px)
                rotate(${Math.random()*720}deg)`
            }

        ],{

            duration:2000+Math.random()*1500

        });

        setTimeout(()=>{

            piece.remove();

        },4000);

    }

}