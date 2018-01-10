$(document).ready(function() {

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyCAUbpYmk_OKh_Cq6SVbIeyQN3YX6OL9KA',
    authDomain: 'lab-code-22f26.firebaseapp.com',
    databaseURL: 'https://lab-code-22f26.firebaseio.com',
    projectId: 'lab-code-22f26',
    storageBucket: '',
    messagingSenderId: '586036156732'
  };
  firebase.initializeApp(config);

  $('#share-btn').click(function() {
    event.preventDefault();
    var $post = $('#input-post').val();
    // agregando los post
    $('#new-post').prepend('<div class="col-xs-10 col-xs-offset-1"><p>' + $post + '</p></div>');
    // var $input = $('#input-file');
    // console.log($input);
    // console.log($('#capture').val());

    $('#input-post').val('');
  });
});