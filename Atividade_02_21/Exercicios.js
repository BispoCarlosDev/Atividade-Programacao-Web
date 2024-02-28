function calcular(){
    function calcular(){
        let nota01 = parseFloat(document.getElementById('nota01').value);
        let nota02 = parseFloat(document.getElementById('nota02').value);
        let nota03 = parseFloat(document.getElementById('nota03').value);
        let nota04 = parseFloat(document.getElementById('nota04').value);
        let media = (nota01 + nota02 + nota03 + nota04) / 4;
        document.getElementById('media').innerText = `O valor da Média das notas é ${media}`;
    }
}
