window.addEventListener('load', function () {
    let $ = function (id) { return document.getElementById(id); };

    $('one').addEventListener('click', function () { tela(1) });
    $('two').addEventListener('click', function () { tela(2) });
    $('thr').addEventListener('click', function () { tela(3) });
    $('fou').addEventListener('click', function () { tela(4) });
    $('fiv').addEventListener('click', function () { tela(5) });
    $('six').addEventListener('click', function () { tela(6) });
    $('sev').addEventListener('click', function () { tela(7) });
    $('eig').addEventListener('click', function () { tela(8) });
    $('nin').addEventListener('click', function () { tela(9) });
    $('zer').addEventListener('click', function () { tela(0) });
    $('cle').addEventListener('click', function () { $('screen').value = ''; });

    $('sum').addEventListener('click', function () { tela("+") });
    $('subt').addEventListener('click', function () { tela("-") });
    $('mult').addEventListener('click', function () { tela("*") });
    $('divi').addEventListener('click', function () { tela("/") });
    $('resu').addEventListener('click', function () { calcule() });

    function tela(valor) { $('screen').value += valor; }
    function calcule() {
        let result = 0;
        result = $('screen').value;
        $('screen').value = "";
        $('screen').value = eval(result); 
    }
})