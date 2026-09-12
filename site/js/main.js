document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var navLeft = document.querySelector('.nav-left');
  var navRight = document.querySelector('.nav-right');

  if (burger) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('open');
      if (navLeft) navLeft.classList.toggle('open');
      if (navRight) navRight.classList.toggle('open');
    });
  }

  // Simple arrow buttons on the quote section (no real carousel data yet,
  // just a subtle visual click state so they don't feel dead)
  document.querySelectorAll('.quote-arrow').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.style.transform = 'translateY(-50%) scale(0.9)';
      setTimeout(function () {
        btn.style.transform = 'translateY(-50%) scale(1)';
      }, 150);
    });
  });
});
