// ==UserScript==
// @name         hansolo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enable keyboard shortcuts for solo game on BBA
// @author       chainsawriot, lentychang
// @match        https://boardgamearena.com/*/solo*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
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
	// click #close_btn, #button_confirm #button_draw #button_pass
  // in this precedent order
	["#close_btn", "#button_confirm", "#button_draw", "#button_pass"].forEach(button_css => click_ignore(button_css))
    }
    // Press Shift to call "Solo"
    // Press left Ctrl - pass, draw, confirm
    // You need to manually press "play" or the card you want to play to prevent mistakes.
    window.addEventListener("keydown", function(e) {
	if([16].indexOf(e.keyCode) > -1) {
	    e.preventDefault()
	    document.querySelector("#bottom_button_call").click()
	} else if ([17].indexOf(e.keyCode) > -1) {
	    e.preventDefault()
	    forward()
	}
    }, false);
    var solo_button = document.querySelector("#bottom_button_call")
    solo_button.innerText = "hansolo Enabled. May the force be with you."
})();



