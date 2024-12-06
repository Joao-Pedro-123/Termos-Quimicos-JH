var tA = document.getElementById('tA');
var tB = document.getElementById('tB');
var tC = document.getElementById('tC');
var tD = document.getElementById('tD');

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

        } else {
            item.style.display = 'none';
            txitems[index].style.display = 'none';
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
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartA' && element.id !== 'tA') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    });
}

function showContentB() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartB' && element.id !== 'tB') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    });
}

function showContentC() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartC' && element.id !== 'tC') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    });
}

function showContentD() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartD' && element.id !== 'tD') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}
function showContentE() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartE' && element.id !== 'tE') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
 }

function showContentF() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartF' && element.id !== 'tF') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentG() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartG' && element.id !== 'tG') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentH() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartH' && element.id !== 'tH') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentI() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartI' && element.id !== 'tI') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentJ() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartJ' && element.id !== 'tJ') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentK() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartK' && element.id !== 'tK') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentL() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartL' && element.id !== 'tL') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentM() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartM' && element.id !== 'tM') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentN() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartN' && element.id !== 'tN') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentO() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartO' && element.id !== 'tO') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentP() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartP' && element.id !== 'tP') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentQ() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartQ' && element.id !== 'tQ') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentR() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartR' && element.id !== 'tR') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentS() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartS' && element.id !== 'tS') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentT() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartT' && element.id !== 'tT') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentU() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartU' && element.id !== 'tU') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentV() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartV' && element.id !== 'tV') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentW() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartW' && element.id !== 'tW') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentX() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartX' && element.id !== 'tX') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentY() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartY' && element.id !== 'tY') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';

        }
    });
}

function showContentZ() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        if (element.id !== 'txtpartZ' && element.id !== 'tZ') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    });
}

function showContentTD() {
    document.querySelectorAll('.content, .titl').forEach(element => {
        element.style.display = 'block';
    });
}
