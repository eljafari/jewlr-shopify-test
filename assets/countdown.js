document.querySelectorAll('.hero-countdown [data-end-time]').forEach(function(el) {
  function updateCountdown() {
    const end = new Date(el.getAttribute('data-end-time').replace(/-/g, '/'));
    const now = new Date();
    let diff = Math.max(0, end - now);

    if (isNaN(end.getTime())) {
      el.textContent = 'Ends soon';
      return;
    }

    if (diff <= 0) {
      el.textContent = 'Ended';
      return;
    }

    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minute = Math.floor((diff / (1000 * 60)) % 60);
    const second = Math.floor((diff / 1000) % 60);

    el.textContent =
      (day > 1 ? day + ' days ' : (day === 1 ? '1 day ' : '')) +
      (hour < 10 ? '0' : '') + hour + ':' +
      (minute < 10 ? '0' : '') + minute + ':' +
      (second < 10 ? '0' : '') + second;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
