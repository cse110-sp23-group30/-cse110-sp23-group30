document.addEventListener('DOMContentLoaded', function () {
  const instructionsList = document.getElementById('instructionsList')
  const instructions = instructionsList.getElementsByClassName('instruction')
  let currentIndex = 0

  showInstruction(currentIndex)

  const prevArrow = document.getElementById('prevArrow')
  prevArrow.addEventListener('click', function () {
    hideInstruction(currentIndex)
    currentIndex = (currentIndex - 1 + instructions.length) % instructions.length
    showInstruction(currentIndex)
  })

  const nextArrow = document.getElementById('nextArrow')
  nextArrow.addEventListener('click', function () {
    hideInstruction(currentIndex)
    currentIndex = (currentIndex + 1) % instructions.length
    showInstruction(currentIndex)
  })

  function showInstruction (index) {
    if (index >= 0 && index < instructions.length) {
      instructions[index].style.display = 'block'
    }
  }

  function hideInstruction (index) {
    if (index >= 0 && index < instructions.length) {
      instructions[index].style.display = 'none'
    }
  }
})

function play () {
  window.location.href = '/source/cart_screen/cart.html'
}

function goBack () {
  window.location.href = '/source/opening_screen/opening-screen.html'
}
