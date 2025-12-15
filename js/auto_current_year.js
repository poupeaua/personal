document.addEventListener('DOMContentLoaded', function() {
    const curYear = new Date().getFullYear();
    const birthYear = 1996;
    const magicStartAge = 17;
    const guitarStartAge = 15;

    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
      yearSpan.textContent = curYear;
    }

    const yearsExpMagic = document.getElementById('yearsExpMagic');
    if (yearsExpMagic) {
      yearsExpMagic.textContent = curYear - birthYear - magicStartAge;
    }

    const yearsExpGuitar = document.getElementById('yearsExpGuitar');
    if (yearsExpGuitar) {
      yearsExpGuitar.textContent = curYear - birthYear - guitarStartAge;
    }
});