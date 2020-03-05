import Swiper from "swiper";
import $ from "jquery";
import "swiper/swiper.scss";

// инициализируем активный слайдер (1-ый)
new Swiper(".first-slider.active", {
  slidesPerView: 2,
  autoHeight: true,
  spaceBetween: 20,
  loop: true
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
