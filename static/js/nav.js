var toggle = document.getElementById('nav-toggle');
if (toggle) {
    toggle.addEventListener('click', function() {
        var wrapper = document.querySelector('#nav .wrapper');
        wrapper.classList.toggle('is-open');
    });
}

// Mobile dropdown toggle
var dropdownToggle = document.querySelector('.nav-dropdown-toggle');
if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            var menu = document.querySelector('.nav-dropdown-menu');
            menu.classList.toggle('is-open');
        }
    });
}

// Track accordion
document.querySelectorAll('.track-header').forEach(function(header) {
  header.addEventListener('click', function() {
    var body = this.nextElementSibling;
    var isOpen = body.classList.contains('is-open');

    // Close all
    document.querySelectorAll('.track-body').forEach(function(b) {
      b.classList.remove('is-open');
    });
    document.querySelectorAll('.track-header').forEach(function(h) {
      h.classList.remove('is-open');
    });

    // Open clicked one if it was closed
    if (!isOpen) {
      body.classList.add('is-open');
      header.classList.add('is-open');
    }
  });
});
