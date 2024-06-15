document.addEventListener('DOMContentLoaded', function() {
  const desc1 = document.querySelector('.about-desc');
  const chev1 = document.querySelector('.about-chev-right');
  const desc2 = document.querySelector('.desc2');
  const chev11 = document.querySelector('.chev11');
  const chev22 = document.querySelector('.chev22');
  const desc3 = document.querySelector('.desc3');
  const chev111 = document.querySelector('.chev111');
  const chev222 = document.querySelector('.chev222');

  // Hide desc1, desc2, and desc3 initially on page load
  desc1.classList.add('hidden');
  desc2.classList.add('hidden');
  desc3.classList.add('hidden');

  if (chev1 && desc1) {
    chev1.addEventListener('click', function() {
      toggleVisibility(about-desc);
      toggleVisibility(desc2);
      toggleVisibility(desc3);
      toggleChevronIcons(chev1, chev2);
      toggleChevronIcons(chev11, chev22);
      toggleChevronIcons(chev111, chev222);
    });
  }

  if (chev11 && desc2) {
    chev11.addEventListener('click', function() {
      toggleVisibility(desc1);
      toggleVisibility(desc2);
      toggleVisibility(desc3);
      toggleChevronIcons(chev1, chev2);
      toggleChevronIcons(chev11, chev22);
      toggleChevronIcons(chev111, chev222);
    });
  }

  if (chev111 && desc3) {
    chev111.addEventListener('click', function() {
      toggleVisibility(desc1);
      toggleVisibility(desc2);
      toggleVisibility(desc3);
      toggleChevronIcons(chev1, chev2);
      toggleChevronIcons(chev11, chev22);
      toggleChevronIcons(chev111, chev222);
    });
  }
});

function toggleVisibility(element) {
  element.classList.toggle('hidden');
}

function toggleChevronIcons(icon1, icon2) {
  if (icon1 && icon2) {
    icon1.classList.toggle('hidden');
    icon2.classList.toggle('hidden');
  }
}
