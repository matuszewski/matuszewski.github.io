
let after = 5000; // time in ms

$(function () {
    setTimeout(function () { goToSecondTab(); }, after);
    function goToSecondTab() {
        window.location.hash = '#navbar';
    }
});