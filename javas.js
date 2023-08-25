const htmlCode = `
<section class="d3-section">
<div class="d3d-modal">
  <!-- <button id="openEdMoel">Sign in ISL</button> -->
  <button id="openEdMoel" class="button-container">
    <img
      src="./images/Blade_Runner.png"
      alt="Sign in ISL"
      class="button-image"
    />
  </button>
</div>
<div id="model-conatiner">
  <button id="closeModel">X</button>
  <div id="conatet"></div>
  <!-- <button id="StopModel">Stop</button> -->
</div>
</section>
`;

const cssCode = `
.d3d-modal {
    position: fixed;
    top: 70%;
    right: 0;
    z-index: 999;
    transform: translateY(-50%);
  }
  
  .button-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    transform: translateY(0%);
  }
  
  .button-image {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  
  #openEdMoel {
    border: none;
    outline: none;
    background-color: rgb(255, 48, 48);
    border-radius: 10px;
    padding: 5px;
    color: white;
  }
  
  #model-conatiner {
    display: none;
    position: fixed;
    top: 50%;
    right: 0;
    z-index: 999;
    width: 220px;
    height: 350px;
  }
  
  #conatet {
    padding: 5px;
    /* background-color: #9BA4B5 !important; */
    background-color: #000000 !important;
    width: 200px;
    height: 300px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  
  #closeModel {
    position: relative;
    top: 0;
    left: 80%;
    width: 30px;
    height: 30px;
    border-radius: 40%;
    background-color: rgb(21, 21, 100);
    color: white;
    border: none;
    outline: none;
    font-size: 18px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
function embedPackage() {
    const htmlContainer = document.createElement('div');
    htmlContainer.innerHTML = htmlCode;
    document.body.appendChild(htmlContainer);
  
    const style = document.createElement('style');
    style.textContent = cssCode;
    document.head.appendChild(style);

    const container = document.getElementById("conatet");
let currentVideo = null;


const modelButton = document.getElementById("openEdMoel");
const screenArea = document.getElementById("model-conatiner");
modelButton.addEventListener("click", function () {
  screenArea.style.display = "block";
  modelButton.style.display = "none";
});
const closeModel = document.getElementById("closeModel");
closeModel.addEventListener("click", function () {
  modelButton.style.display = "block";
  screenArea.style.display = "none";
  if (currentVideo) { 
    currentVideo.pause();
    currentVideo = null;
  }
});

const translationText = document.querySelectorAll(".translationText");
translationText.forEach(function (convert) {
  convert.addEventListener("mouseover", function () {
    convert.classList.add("highlight");
  });
  convert.addEventListener("mouseout", function () {
    convert.classList.remove("highlight");
  });
  convert.addEventListener("click", function () {
    if (currentVideo) {
      currentVideo.pause();
    }

    const videoFileName = this.getAttribute("data-video");
    if (videoFileName) {
      const video = document.createElement("video");
      video.src = videoFileName;
      video.controls = false;
      video.muted = true;
      container.innerHTML = "";
      container.appendChild(video);
      currentVideo = video;
      currentVideo.play();
    } else {
      // mixer.stopAllAction();
    }
  });
});


  }
  