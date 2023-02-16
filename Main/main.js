
(function (window, document, undefined) {
  // code that should be taken care of right away

  window.onload = init;

  function init() {
    alert("1");

    var x = document.querySelector("#myLinks");

    const y = document.querySelectorAll(".icon");
    y.addEventListener("click", () => {
      x = document.querySelector("#myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
        alert("hola");

      } else {
        alert("adios");

        x.style.display = "block";
      }
    })




    const btnSwitch = document.querySelector("#switch-1");
    btnSwitch.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      btnSwitch.classList.toggle("active");
    });

    const rotar = document.querySelector("#rotate");
    const rotar2 = document.querySelector("#rotate2");
    const principal2 = document.querySelector("#picture-center-principal2");
    const principal = document.querySelector("#picture-center-principal");
    rotar.addEventListener("click", () => {
      principal2.style.transform = "rotateY(180deg)";
      principal2.style.transition = "2s";
      principal2.style.opacity = "100%";
      principal2.style.zIndex = "2";
      principal.style.transform = "rotateY(180deg)";
      principal.style.transition = "2s";
      principal.style.zIndex = "initial";
      principal.style.opacity = "1%";
    });

    rotar2.addEventListener("click", () => {
      principal.style.transform = "unset";
      principal.style.transition = "2s";
      principal.style.opacity = "unset";
      principal2.style.transform = "unset";
      principal2.style.transition = "2s";
      principal2.style.opacity = "1%";
      principal2.style.zIndex = "-1";
    });
    const slider = document.querySelector("#slider");
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    const btnLeft = document.querySelector(".slider__btn--left");
    const btnRight = document.querySelector(".slider__btn--right");
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    function Next() {
      let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
      slider.style.marginLeft = "-200%";
      slider.style.transition = "all 0.5s";
      setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
        slider.style.opacity = "100%";
      }, 500);
    }
    function Prev() {
      let sliderSection = document.querySelectorAll(".slider__section");
      sliderSectionLast = sliderSection[sliderSection.length - 1];
      slider.style.marginLeft = "0%";
      slider.style.transition = "all 0.5s";
      setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
        slider.style.opacity = "100%";
      }, 500);
    }

    btnRight.addEventListener("click", function () {
      Next();
    });

    btnLeft.addEventListener("click", function () {
      Prev();
    });

    // setInterval(function () {
    //   Next();
    // }, 5000);

  }

})(window, document, undefined);
