function aprēķinātMaksājumu() {
    let kredītaSumma = parseFloat(document.getElementById('loanAmount').value);
    let likme = 6;
    let kredītaTermiņšMēnešos = parseFloat(document.getElementById('loanTerm').value);

    if (kredītaSumma > 50000) {
      document.getElementById('monthlyPayment').innerText = "Nepareiza kredīta summa";
      return;
    }

    if (kredītaTermiņšMēnešos > 120) {
      document.getElementById('monthlyPayment').innerText = "Nepareizs kredīta termiņš";
      return;
    }

    let mēnešaProcentuLikme = (likme / 100) / 12;

    let maksājumuSkaits = kredītaTermiņšMēnešos;

    let mēnešaMaksājums = (kredītaSumma * mēnešaProcentuLikme) / (1 - Math.pow(1 + mēnešaProcentuLikme, -maksājumuSkaits));

    document.getElementById('monthlyPayment').innerText = "Mēneša maksājums: " + mēnešaMaksājums.toFixed(2) + " EUR";
  }