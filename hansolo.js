// Press Shift to call "Solo"
// Press left Ctrl - pass, draw, confirm
// You need to manually press "play" or the card you want to play to prevent mistakes.

function click_ignore(button_css) {
  var element = document.querySelector(button_css)
  if (element === null) {
    // do nothing
    return false
  } else {
    element.click()
    return false
  }
}

function forward () {
  // click #button_confirm #button_draw #button_pass
  // in this precedent order
  ["#button_confirm", "#button_draw", "#button_pass"].forEach(button_css => click_ignore(button_css))
}

window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([16].indexOf(e.keyCode) > -1) {
    e.preventDefault()
    document.querySelector("#bottom_button_call").click()
  } else if ([17].indexOf(e.keyCode) > -1) {
    e.preventDefault()
    forward()
  }
}, false);
