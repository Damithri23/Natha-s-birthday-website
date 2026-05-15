// NAVIGATION
function goToLetter(){
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "letter.html";
  }, 600);
}

function goNext(){
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "memories.html";
  }, 600);
}

// LETTER TEXT
const text = "Hey panchii 💜\n"+
"You are really special to me...\n"+
"I'm so grateful to have you in my life.\n"+
"This small website is just a tiny way to show it ✨\n"+
"Hope this makes you smile ✨";
let i = 0;

function typeLetter(){
  const typed = document.getElementById("typedText");
  if (!typed) return;

  typed.innerHTML = "";

  let currentText = text.slice(0, i);

  // convert \n into <br>
  typed.innerHTML = currentText.replace(/\n/g, "<br>");

  if (i < text.length){
    i++;
    setTimeout(typeLetter, 40);
  } else {
    setTimeout(showPopup, 500);
  }
}

// MEMORY SYSTEM
let memoryIndex = 0;

const memories = [
  {
    img:"images/image1.jpeg",
    text:"Our beautiful memory 💜"
  },
  {
    img:"images/image2.jpeg",
    text:"Core memory 💜"
  },
  {
    img:"images/image5.jpeg",
    text:"Crazy fun times 😂💫"
  }
];

const finalMemory = {
  img:"images/image4.jpeg",
  text:"We’ve made so many memories… and many more to come 💜✨"
};

// LOAD FIRST MEMORY
function loadCoreMemory(){
  const img = document.getElementById("memoryImage");
  const caption = document.getElementById("caption");

  if(!img || !caption) return;

  memoryIndex = 0;
  img.src = memories[0].img;
  caption.innerText = memories[0].text;
}

// NEXT MEMORY
function nextMemory(){
  const img = document.getElementById("memoryImage");
  const caption = document.getElementById("caption");
  const button = document.querySelector(".start-btn");

  memoryIndex++;

  if(memoryIndex >= memories.length){
    img.src = finalMemory.img;
    caption.innerText = finalMemory.text;

    button.innerText = "Let’s Make More Memories 💫";
    button.onclick = function(){
      window.location.href = "reason.html";
    };

    return;
  }

  img.src = memories[memoryIndex].img;
  caption.innerText = memories[memoryIndex].text;
}

// INIT
window.onload = () => {
  typeLetter();
  loadCoreMemory();
  
};


function goToEnd(){
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "end.html";
  }, 600);
}

function goToFinal(){
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "final.html";
  }, 600);
}



