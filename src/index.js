import Swiper from "swiper";
import "swiper/swiper.scss";

new Swiper(".swiper-container", {
  slidesPerView: 2,
  autoHeight: true,
  spaceBetween: 20
});

document.querySelector(".js-modal-btn").addEventListener("click", () => {
  document.querySelector(".modal-request").classList.add("js-show");

  document.querySelector("body").classList.add("overflowed");
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
