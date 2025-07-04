const tippGomb = document.getElementById('guessBtn');
const ujJatekGomb = document.getElementById('restartBtn');
let probalkozasokSzama = 0;
const probalkozasokElem = document.getElementById('tries');
const beirtSzamElem = document.getElementById('guessInput');
const visszajelzesElem = document.getElementById('feedback');

let veletlenSzam;

function ujVeletlenSzam() {
  veletlenSzam = Math.floor(Math.random() * 20) + 1; // 1–20 között
}

// Első induláskor generálunk egy számot
ujVeletlenSzam();

tippGomb.addEventListener('click', function () {
  const beirtSzam = Number(beirtSzamElem.value);

  if (isNaN(beirtSzam) || beirtSzam < 1 || beirtSzam > 20) {
    visszajelzesElem.textContent = 'Kérlek, adj meg egy számot 1 és 20 között!';
    return;
  }

  probalkozasokSzama++;
  probalkozasokElem.textContent = probalkozasokSzama;

  if (beirtSzam < veletlenSzam) {
    visszajelzesElem.textContent = 'A gép nagyobb számra gondolt.';
  } else if (beirtSzam > veletlenSzam) {
    visszajelzesElem.textContent = 'A gép kisebb számra gondolt.';
  } else {
    visszajelzesElem.textContent = `Gratulálok, eltaláltad! A szám: ${veletlenSzam} volt!`;
  }

  beirtSzamElem.value = '';
  beirtSzamElem.focus();
});

ujJatekGomb.addEventListener('click', function () {
  visszajelzesElem.textContent = '';
  probalkozasokSzama = 0;
  probalkozasokElem.textContent = probalkozasokSzama;

  beirtSzamElem.value = '';
  beirtSzamElem.focus();

  ujVeletlenSzam(); // új szám generálása
});
