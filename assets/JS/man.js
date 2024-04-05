const navigation = document.querySelectorAll(".link");
const dataPage = document.querySelector('[data-page]');
navigation.forEach((a) => {
  if (a.textContent == dataPage.getAttribute('data-page')) {
    a.classList.add("active");
  }
});


console.log(navigation)