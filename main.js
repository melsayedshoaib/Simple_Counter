let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btns");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const val = e.currentTarget.classList;
    if (val.contains("count")) {
      count++;
    } else if (val.contains("reset")) {
      count = 0;
    }
    value.textContent = count;
  });
});
