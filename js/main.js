(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  // Sticky header shadow
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  }
  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  // Reveal on scroll and active nav link
  if ('IntersectionObserver' in window) {
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { revealer.observe(el); });

    var links = nav.querySelectorAll('a[href^="#"]:not(.btn)');
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (a) {
      var section = document.querySelector(a.getAttribute('href'));
      if (section) spy.observe(section);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Contact form: validate, then open the visitor's email app with the message filled in
  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var invalid = false;
      Array.prototype.forEach.call(form.elements, function (field) {
        if (!field.willValidate) return;
        var bad = !field.checkValidity();
        field.classList.toggle('invalid', bad);
        if (bad && !invalid) { field.focus(); invalid = true; }
      });
      if (invalid) {
        note.textContent = 'Please add your name, a valid email and a short message.';
        return;
      }

      var data = new FormData(form);
      var to = form.getAttribute('action').replace(/^mailto:/, '');
      var subject = 'Website inquiry: ' + data.get('topic') +
        (data.get('company') ? ' (' + data.get('company') + ')' : '');
      var body = [
        'Name: ' + data.get('name'),
        'Company: ' + (data.get('company') || '-'),
        'Email: ' + data.get('email'),
        'Phone: ' + (data.get('phone') || '-'),
        'Topic: ' + data.get('topic'),
        '',
        data.get('message')
      ].join('\n');

      window.location.href = 'mailto:' + to +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
      note.textContent = 'Your email app should open with the message ready to send. If it does not, write to ' + to + '.';
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
