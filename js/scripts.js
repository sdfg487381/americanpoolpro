function toggleMenu() {
  const nav = document.getElementById('site-nav');
  nav.classList.toggle('show');
}

  function toggleForm(event) {
    event.preventDefault();
    document.getElementById('quote-form').style.display = 'flex';
  }

  function closeForm() {
    document.getElementById('quote-form').style.display = 'none';
  }
