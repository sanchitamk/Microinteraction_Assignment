let button=document.querySelector("#click");
button.addEventListener("click",startHeartAnimation)



function startHeartAnimation() {
    const heartContainer = document.querySelector("#heart");
    heartContainer.classList.toggle("transformed");

    const left = document.querySelector("#left");
    left.classList.toggle("okay");

    const right = document.querySelector("#right");
    right.classList.toggle("okay");
  }