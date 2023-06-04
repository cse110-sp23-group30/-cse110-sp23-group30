document.addEventListener("DOMContentLoaded", function() {
    let instructionsList = document.getElementById("instructionsList");
    let instructions = instructionsList.getElementsByClassName("instruction");
    let currentIndex = 0;
  
    showInstruction(currentIndex);
    for (let i = 0; i < instructions.length; i++) {
      console.log(instructions[i]);
    }
  
    let goBackButton = document.getElementById("goBackButton");
    goBackButton.addEventListener("click", function() {
      window.location.href = "/group/source/opening_screen/opening-screen.html"; // Redirect to home screen
    });
  
    let proceedButton = document.getElementById("proceedButton");
    proceedButton.addEventListener("click", function() {
      window.location.href = "/group/source/cart_screen/cart.html"; // Redirect to cart screen
    });
  
    let prevArrow = document.getElementById("prevArrow");
    prevArrow.addEventListener("click", function() {
      hideInstruction(currentIndex);
      currentIndex = (currentIndex - 1 + instructions.length) % instructions.length;
      showInstruction(currentIndex);
    });
  
    let nextArrow = document.getElementById("nextArrow");
    nextArrow.addEventListener("click", function() {
      hideInstruction(currentIndex);
      currentIndex = (currentIndex + 1) % instructions.length;
      showInstruction(currentIndex);
    });
  
    function showInstruction(index) {
      if (index >= 0 && index < instructions.length) {
        instructions[index].style.display = "block";
      }
    }
  
    function hideInstruction(index) {
      if (index >= 0 && index < instructions.length) {
        instructions[index].style.display = "none";
      }
    }
  });
  