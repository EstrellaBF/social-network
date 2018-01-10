$(document).ready(function() {

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDjfb8eBnSQuL_ZLz1lldnhrfRmhh3P1AE',
    authDomain: 'primer-proyecto-c38c2.firebaseapp.com',
    databaseURL: 'https://primer-proyecto-c38c2.firebaseio.com',
    projectId: 'primer-proyecto-c38c2',
    storageBucket: 'primer-proyecto-c38c2.appspot.com',
    messagingSenderId: '352532098931'
  };
  firebase.initializeApp(config);

  $('#share-btn').click(function() {
    event.preventDefault();
    var $post = $('#input-post').val();
    // agregando los post
    $('#new-post').prepend('<div class="col-xs-10 col-xs-offset-1"><p>' + $post + '</p></div>');
    
    // var $input = $('#input-file');
    // console.log($input);
    console.log($('#capture').val());
    // si toma una imagen subirla al comparir
    
    $('#input-post').val('');
  });
});