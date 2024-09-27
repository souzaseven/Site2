document.getElementById('c1v1').addEventListener('input', calcular1);
document.getElementById('c1v2').addEventListener('input', calcular1);
document.getElementById('c2v1').addEventListener('input', calcular2);
document.getElementById('c2v2').addEventListener('input', calcular2);
document.getElementById('c3v1').addEventListener('input', calcular3);
document.getElementById('c3v2').addEventListener('input', calcular3);
document.getElementById('c4v1').addEventListener('input', calcular4);
document.getElementById('c4v2').addEventListener('input', calcular4);
document.getElementById('c5v1').addEventListener('input', calcular5);
document.getElementById('c5v2').addEventListener('input', calcular5);

function calcular1() {
    var c1v1 = parseFloat(document.getElementById('c1v1').value);
    var c1v2 = parseFloat(document.getElementById('c1v2').value);
    if (!isNaN(c1v1) && !isNaN(c1v2)) {
        var result1 = (c1v1 / 100) * c1v2;
        document.getElementById('r1').textContent = ' ' + result1.toFixed(2);
    } else {
        document.getElementById('r1').textContent = '';
    }
}

function calcular2() {
    var c2v1 = parseFloat(document.getElementById('c2v1').value);
    var c2v2 = parseFloat(document.getElementById('c2v2').value);
    if (!isNaN(c2v1) && !isNaN(c2v2)) {
        var result2 = (c2v1 / c2v2) * 100;
        document.getElementById('r2').textContent = ' ' + result2.toFixed(2) + '%';
    } else {
        document.getElementById('r2').textContent = '';
    }
}

function calcular3() {
    var c3v1 = parseFloat(document.getElementById('c3v1').value);
    var c3v2 = parseFloat(document.getElementById('c3v2').value);
    if (!isNaN(c3v1) && !isNaN(c3v2)) {
        var result3 = ((c3v2 - c3v1) / c3v1) * 100;
        document.getElementById('r3').textContent = ' ' + result3.toFixed(2) + '%';
    } else {
        document.getElementById('r3').textContent = '';
    }
}

function calcular4() {
    var c4v1 = parseFloat(document.getElementById('c4v1').value);
    var c4v2 = parseFloat(document.getElementById('c4v2').value);
    if (!isNaN(c4v1) && !isNaN(c4v2)) {
        var result4 = c4v1 + (c4v1 * c4v2 / 100);
        document.getElementById('r4').textContent = ' ' + result4.toFixed(2);
    } else {
        document.getElementById('r4').textContent = '';
    }
}

function calcular5() {
    var c5v1 = parseFloat(document.getElementById('c5v1').value);
    var c5v2 = parseFloat(document.getElementById('c5v2').value);
    if (!isNaN(c5v1) && !isNaN(c5v2)) {
        var result5 = c5v1 - (c5v1 * c5v2 / 100);
        document.getElementById('r5').textContent = ' ' + result5.toFixed(2);
    } else {
        document.getElementById('r5').textContent = '';
    }
}