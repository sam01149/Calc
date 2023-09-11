function Solve(val) {
    var v = document.getElementById('number');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('number').value;
    var num2 = eval(num1);
    document.getElementById('number').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('number');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('number');
    ev.value = ev.value.slice(0,-1);
 }