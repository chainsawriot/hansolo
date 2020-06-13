// 按 Esc 喊 Solo
// 還應有 pass, draw 等


// a lambda function called by background.js after click extention icon in
// browser, this script will be executed

document.onkeyup = function(e) {
    var e = e || window.event;
    if (e.which == 27) {
        document.querySelector('#bottom_button_call').click()
        return false;
    }
}