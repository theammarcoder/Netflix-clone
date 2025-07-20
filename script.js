 const faqBoxes = document.querySelectorAll('.faqbox');
  faqBoxes.forEach(box => {
    box.addEventListener('click', () => {
      box.classList.toggle('active');
    });
  });
