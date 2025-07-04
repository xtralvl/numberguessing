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

ujVeletlenSzam(); // első induláskor

tippGomb.addEventListener('click', function () {
  const beirtSzam = Number(beirtSzamElem.value);

  // Minden próbálkozás előtt töröljük a zöld stílust
  visszajelzesElem.classList.remove('success');

  if (isNaN(beirtSzam) || beirtSzam < 1 || beirtSzam > 20) {
    visszajelzesElem.textContent = 'Kérlek, adj meg egy számot 1 és 20 között!';
    return;
  }

  probalkozasokSzama++;
  probalkozasokElem.textContent = probalkozasokSzama;

  if (beirtSzam < veletlenSzam) {
    visszajelzesElem.textContent = 'Nagyobb számra gondoltam.';
  } else if (beirtSzam > veletlenSzam) {
    visszajelzesElem.textContent = 'Kisebb számra gondoltam.';
  } else {
    visszajelzesElem.textContent = `Gratulálok, eltaláltad! A szám: ${veletlenSzam} volt!`;
    visszajelzesElem.classList.add('success'); // zöld szín hozzáadása
  }

  beirtSzamElem.value = '';
  beirtSzamElem.focus();
});

ujJatekGomb.addEventListener('click', function () {
  visszajelzesElem.textContent = '';
  visszajelzesElem.classList.remove('success'); // új játék → vissza normál szín
  probalkozasokSzama = 0;
  probalkozasokElem.textContent = probalkozasokSzama;
  beirtSzamElem.value = '';
  beirtSzamElem.focus();
  ujVeletlenSzam();
});
