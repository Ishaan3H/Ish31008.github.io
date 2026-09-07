/* hamburger index + live dateline */
(function () {
  var burger = document.querySelector('.burger');
  var panel  = document.getElementById('nav-panel');

  if (burger && panel) {
    var setOpen = function (open) {
      burger.setAttribute('aria-expanded', String(open));
      panel.classList.toggle('open', open);
      burger.setAttribute('aria-label', open ? 'Close index' : 'Open index');
    };

    burger.addEventListener('click', function () {
      setOpen(burger.getAttribute('aria-expanded') !== 'true');
    });

    /* click anywhere off the index to close it */
    document.addEventListener('click', function (e) {
      if (!panel.classList.contains('open')) return;
      if (panel.contains(e.target) || burger.contains(e.target)) return;
      setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('open')) {
        setOpen(false);
        burger.focus();
      }
    });
  }

  /* today's date, in the dateline */
  var slot = document.getElementById('today');
  if (slot) {
    slot.textContent = new Date().toLocaleDateString('en-GB', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
  }
})();
