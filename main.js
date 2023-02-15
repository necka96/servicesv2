const items = document.getElementById("items");
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");
const filterBtns = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("close-btn");
const consentForm = document.getElementById("modal-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtns = document.getElementById("modal-choice-btns");
const inputs = document.querySelectorAll("#modal-form input");
// event
inputs.forEach((input) => (input.value = ""));
setTimeout(() => {
  modal.style.opacity = 1;
  modal.style.visibility = "visible";
}, 2000);

modalCloseBtn.addEventListener("click", () => {
  modal.style.opacity = 0;
  modal.style.visibility = "hidden";
});
declineBtn.addEventListener("click", () => {
  modal.style.opacity = 0;
  modal.style.visibility = "hidden";
  ay = "none";
});
consentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  const fullName = consentFormData.get("fullName");

  modalText.innerHTML = `  <div class="modal-loading">
        <img src="image/loading.svg" class="loading">
        <p id="upload-text">Uploading your data.</p>
    </div>`;
  setTimeout(() => {
    document.getElementById("upload-text").innerHTML = `Please waith`;
  }, 1500);
  setTimeout(() => {
    document.getElementById(
      "modal-container"
    ).innerHTML = `<h2>Thanks ${fullName} for subscribe! </h2>
    <div class="gif"><img src="image/subscribe.gif" </div>
    `;
  }, 3000);
});

window.addEventListener("load", function () {
  const preloader = document.getElementById("loader-container");
  preloader.classList.add("loader-finish");
});
document.onclick = function (e) {
  if (e.target.id !== "items" && e.target.id !== "toggle") {
    toggle.classList.remove("active");
    items.classList.remove("active");
  }
};

toggle.onclick = function () {
  toggle.classList.toggle("active");
  items.classList.toggle("active");
};

window.addEventListener("scroll", function () {
  var sticky = document.querySelector("nav");
  sticky.classList.toggle("sticky", window.scrollY > 0);
});
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent = `${
    (scrollTop / (scrollHeight - window.innerHeight)) * 100 + "%"
  }`;
  const progressBar = document.getElementById("progres-bar");
  progressBar.style.setProperty("--width", scrollPercent);
});

// swiper carousel
var swiper = new Swiper(".header-swiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});
var swiper2 = new Swiper(".testimonial", {
  slidesPerView: 1,
  spaceBetween: 10,
  rewind: true,

  autoplay: true,
  loop: true,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    801: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// filter gallery
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const filter = this.dataset.filter;
    const items = document.querySelectorAll("#gallery .item");

    filterBtns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    this.classList.add("active");

    items.forEach(function (item) {
      if (filter === "all") {
        item.classList.remove("hidden");
        item.classList.add("show");
      } else {
        if (item.classList.contains(filter)) {
          item.classList.remove("hidden");
          item.classList.add("show");
        } else {
          item.classList.add("hidden");
          item.classList.remove("show");
        }
      }
    });
  });
});

// date year
document.getElementById("date").textContent = new Date().getFullYear();
