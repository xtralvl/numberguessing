const tippGomb = document.getElementById('guessBtn');
const ujJatekGomb = document.getElementById('restartBtn');
let probalkozasokSzama = 0;
const probalkozasokElem = document.getElementById('tries');
const veletlenSzam = Math.floor(Math.random() * 21); // 0-20 között, 0 is lehet
const beirtSzamElem = document.getElementById('guessInput'); // ide kitehetjük globálisan

tippGomb.addEventListener('click', function() {
  const beirtSzam = Number(beirtSzamElem.value);
  const visszajelzesElem = document.getElementById('feedback');

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
  }

  // Tipp beküldése után töröljük az inputot
  beirtSzamElem.value = '';
  // Opcionálisan fókuszáljuk is vissza az inputra
  beirtSzamElem.focus();
});

ujJatekGomb.addEventListener('click', function() {
  const visszajelzesElem = document.getElementById('feedback');
  visszajelzesElem.textContent = '';
  probalkozasokSzama = 0;
  probalkozasokElem.textContent = probalkozasokSzama;

  // Új játék indításakor is töröljük az inputot
  beirtSzamElem.value = '';
  beirtSzamElem.focus();
});
