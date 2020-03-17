import Swiper from "swiper";
import $ from "jquery";
import "swiper/swiper.scss";

// ********slider for projects ********

// инициализируем активный слайдер (1-ый)
new Swiper(".first-slider.active", {
  slidesPerView: 2,
  autoHeight: true,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".first-slider-next-btn",
    prevEl: ".first-slider-prev-btn"
  }
});

$(".js-project-button").click(event => {
  // удаляем .active во всех кнопках:
  $(".js-project-button").removeClass("active");
  // добавляем .active нажатой кнопке:
  $(event.target).addClass("active");

  // // ========== находим индекс кнопки:
  let index = event.target.dataset.index;

  // // удаляем .active во всех секциях:
  $(".projects-info").removeClass("active");

  // //добавляем .active соответствующей секции по индексу:
  $(".projects-info[data-index=" + index + "]")
    .first()
    .addClass("active");

  $(".first-slider").removeClass("active");

  $(".first-slider[data-index=" + index + "]")
    .first()
    .addClass("active");

  new Swiper(".first-slider.active", {
    slidesPerView: 2,
    autoHeight: true,
    spaceBetween: 20,
    loop: true
  });
});

// ********button for styles-of-repair ********

$(".js-style-button").click(event => {
  // удаляем .active во всех кнопках:
  $(".js-style-button").removeClass("active");
  // добавляем .active нажатой кнопке:
  $(event.target).addClass("active");

  // // ========== находим индекс кнопки:
  let index = event.target.dataset.index;

  // // удаляем .active во всех секциях:
  $(".tabs-images").removeClass("active");

  // //добавляем .active соответствующей секции по индексу:
  $(".tabs-images[data-index=" + index + "]")
    .first()
    .addClass("active");
});

// ********button for steps-of-repair ********

$(".js-step-button").click(event => {
  $(".js-step-button").removeClass("active");
  $(event.target).addClass("active");

  let index = event.target.dataset.index;

  $(".step-content-body").removeClass("active");

  $(".step-content-body[data-index=" + index + "]")
    .first()
    .addClass("active");

  $(".step-image").removeClass("active");

  $(".step-image[data-index=" + index + "]")
    .first()
    .addClass("active");
});

// ********slider for width <=760 ********

let stylesSlider;

const addStylesSlider = () => {
  let width = window.innerWidth;

  // Init slider when user on mobile
  if (width <= 760 && !stylesSlider) {
    document.querySelector(".styles-slider").classList.add("swiper-container");
    document
      .querySelector(".styles-slider-wrapper")
      .classList.add("swiper-wrapper");
    document.querySelectorAll(".tabs-images").forEach(item => {
      item.classList.add("swiper-slide");
    });

    stylesSlider = new Swiper(".styles-slider", {
      autoHeight: true,
      loop: true
    });
  }

  // Destroy slider on desktop
  if (width > 760 && stylesSlider) {
    stylesSlider.destroy();

    document
      .querySelector(".styles-slider")
      .classList.remove("swiper-container");
    document
      .querySelector(".styles-slider-wrapper")
      .classList.remove("swiper-wrapper");
    document.querySelectorAll(".tabs-images").forEach(item => {
      item.classList.remove("swiper-slide");
    });

    stylesSlider = undefined;
  }
};

window.addEventListener("resize", () => {
  addStylesSlider();
});

addStylesSlider();

// ******** modal-request ********

document.querySelectorAll(".js-modal-btn").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    document.querySelector(".modal-request").classList.add("js-show");

    document.querySelector("body").classList.add("overflowed");
  });
});

document.querySelector(".modal-close").addEventListener("click", () => {
  document.querySelector(".modal-request").classList.remove("js-show");

  document.querySelector("body").classList.remove("overflowed");
});

document.querySelector(".modal-request").addEventListener("click", event => {
  const isClickInside = document
    .querySelector(".modal-request-content")
    .contains(event.target);

  if (!isClickInside) {
    document.querySelector(".modal-request").classList.remove("js-show");
  }
});
