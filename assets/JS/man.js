const navigation = document.querySelectorAll(".link");
const dataPage = document.querySelector('[data-page]');
navigation.forEach((a) => {
  if (a.textContent == dataPage.getAtttibut('data-page')) {
    a.classList.add("active");
  }
});


console.log(navigation)