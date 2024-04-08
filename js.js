function dienasLidzDatumam() {
   
    const sodienasDatums = new Date();


    const noraditaisDatums = new Date(document.getElementById('noraditaisDatumsLauks').value);


    const milisekundes = noraditaisDatums.getTime() - sodienasDatums.getTime();
    const dienas = Math.ceil(milisekundes / (1000 * 60 * 60 * 24));


    document.getElementById('rezultats').innerHTML = 'Dienas līdz atmakasas datumam: ' + dienas;
}