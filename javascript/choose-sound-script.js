let osc = ["fatsawtooth", "sawtooth", "sine", "square", "triangle"];

document.getElementById(osc[0]).addEventListener("click", function() {
    sessionStorage.setItem('oscnum', 0);
});
document.getElementById(osc[1]).addEventListener("click", function() {
    sessionStorage.setItem('oscnum', 1);
});
document.getElementById(osc[2]).addEventListener("click", function() {
    sessionStorage.setItem('oscnum', 2);
});
document.getElementById(osc[3]).addEventListener("click", function() {
    sessionStorage.setItem('oscnum', 3);
});
document.getElementById(osc[4]).addEventListener("click", function() {
    sessionStorage.setItem('oscnum', 4);
});