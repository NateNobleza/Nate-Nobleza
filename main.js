document.addEventListener('DOMContentLoaded', function () {
  const aboutChevRight = document.querySelector('.about-chev-right');
  const aboutChevDown = document.querySelector('.about-chev-down');
  const aboutDesc = document.querySelector('.about-desc');

  const techChevRight = document.querySelector('.tech-chev-right');
  const techChevDown = document.querySelector('.tech-chev-down');
  const techDesc = document.querySelector('.tech-desc');

  const hobbyChevRight = document.querySelector('.hobby-chev-right');
  const hobbyChevDown = document.querySelector('.hobby-chev-down');
  const hobbyDesc = document.querySelector('.hobby-desc');

  // Hide descriptions and down chevrons initially on page load
  aboutDesc.classList.add('hidden');
  techDesc.classList.add('hidden');
  hobbyDesc.classList.add('hidden');
  aboutChevDown.classList.add('hidden');
  techChevDown.classList.add('hidden');
  hobbyChevDown.classList.add('hidden');

  // Function to toggle visibility of description and chevron icons
  function toggleVisibilityAndChevron(descElement, chevRight, chevDown) {
    descElement.classList.toggle('hidden');
    chevRight.classList.toggle('chev-rotate');
    chevDown.classList.toggle('chev-rotate');
  }

  // Event listeners for About section
  if (aboutChevRight && aboutChevDown && aboutDesc) {
    aboutChevRight.addEventListener('click', function () {
      toggleVisibilityAndChevron(aboutDesc, aboutChevRight, aboutChevDown);
    });

    aboutChevDown.addEventListener('click', function () {
      toggleVisibilityAndChevron(aboutDesc, aboutChevRight, aboutChevDown);
    });
  }

  // Event listeners for Technologies section
  if (techChevRight && techChevDown && techDesc) {
    techChevRight.addEventListener('click', function () {
      toggleVisibilityAndChevron(techDesc, techChevRight, techChevDown);
    });

    techChevDown.addEventListener('click', function () {
      toggleVisibilityAndChevron(techDesc, techChevRight, techChevDown);
    });
  }

  // Event listeners for Hobbies section
  if (hobbyChevRight && hobbyChevDown && hobbyDesc) {
    hobbyChevRight.addEventListener('click', function () {
      toggleVisibilityAndChevron(hobbyDesc, hobbyChevRight, hobbyChevDown);
    });

    hobbyChevDown.addEventListener('click', function () {
      toggleVisibilityAndChevron(hobbyDesc, hobbyChevRight, hobbyChevDown);
    });
  }
});
