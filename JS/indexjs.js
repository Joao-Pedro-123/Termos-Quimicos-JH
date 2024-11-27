var tA = document.getElementById('tA');
var tB = document.getElementById('tB');
var tC = document.getElementById('tC');
var tD = document.getElementById('tD');
var espA = document.getElementById('espA');
var espB = document.getElementById('espB');
var espC = document.getElementById('espC');
var espD = document.getElementById('espD');

function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

document.getElementById('Pesquisa').addEventListener('input', function () {
    const digt = removerAcentos(this.value.toLowerCase());
    const items = document.querySelectorAll('.content');
    const txitems = document.querySelectorAll('.titl');

    items.forEach((item, index) => {
        const itemText = removerAcentos(item.textContent.toLowerCase());
        const titleText = removerAcentos(txitems[index].textContent.toLowerCase());

        if (itemText.includes(digt) || titleText.includes(digt)) {
            item.style.display = 'block';
            txitems[index].style.display = 'block';
            space.style.display = 'none';

        } else {
            item.style.display = 'none';
            item.style.color = 'black';
            txitems[index].style.display = 'none';
            space.style.display = 'none';
        }

    });
});

function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

document.getElementById('Pesquisa2').addEventListener('input', function () {
    const digt = removerAcentos(this.value.toLowerCase());
    const items = document.querySelectorAll('.content');
    const txitems = document.querySelectorAll('.titl');

    items.forEach((item, index) => {
        const itemText = removerAcentos(item.textContent.toLowerCase());
        const titleText = removerAcentos(txitems[index].textContent.toLowerCase());

        if (itemText.includes(digt) || titleText.includes(digt)) {
            item.style.display = 'block';
            txitems[index].style.display = 'block';

        } else {
            item.style.display = 'none';
            item.style.color = 'black';
            txitems[index].style.display = 'none';
        }
    });
});

function showContentA() {
    espA.style.display = 'none';
    espB.style.display = 'none';
    espC.style.display = 'none';
    espD.style.display = 'none';
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartA' && element.id !== 'tA') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    });
}

function showContentB() {
    espA.style.display = 'none';
    espB.style.display = 'none';
    espC.style.display = 'none';
    espD.style.display = 'none';
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartB' && element.id !== 'tB') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    });
}

function showContentC() {
    espA.style.display = 'none';
    espB.style.display = 'none';
    espC.style.display = 'none';
    espD.style.display = 'none';
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartC' && element.id !== 'tC') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    });
}

function showContentD() {
    espA.style.display = 'none';
    espB.style.display = 'none';
    espC.style.display = 'none';
    espD.style.display = 'none';
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartD' && element.id !== 'tD') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentTD() {
    espA.style.display = 'block';
    espB.style.display = 'block';
    espC.style.display = 'block';
    espD.style.display = 'block';
    document.querySelectorAll('.content, .titl').forEach(element => {
        element.style.display = 'block';
    });
}
