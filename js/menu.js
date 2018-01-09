// agregar evento al menu icon
$(document).ready(function() {
  $('.menu-01').click(function() {
    window.location.href = '../views/profile.html';
  });
  $('.menu-02').click(function() {
    window.location.href = '../views/news.html';
  });
  $('.menu-03').click(function() {
    window.location.href = '../views/friends.html';
  });
  $('.menu-04').click(function() {
    window.location.href = '../views/events.html';
  });
});