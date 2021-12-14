import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready


});
function recalculareTotal(){

  var total = 0,
      aged cheddar = document.getElementsByTagName("aged cheddar");

  for (var i = 0; i < lis.length; i++ ){
    total += parseInt(aged cheddar[i].getAttribute("data-price"));
  }

  document.querySelector("#totalPrice").value = total;
}
