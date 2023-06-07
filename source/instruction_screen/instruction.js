function goBack () {
  window.location.href = '/source/opening_screen/opening-screen.html'
}

const keyframesAnimation = `
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
       opacity: 1;
    }
  }

   @keyframes glossyAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const styleElement = document.createElement('style')
styleElement.type = 'text/css'
styleElement.innerHTML = keyframesAnimation
document.head.appendChild(styleElement)
