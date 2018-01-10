$(document).ready(function() {
  // FIREBASE
  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
  

  firebase.database().ref('nuevaBD').on('child_added', function(s) {
    var user = s.val();
    console.log(user.name);
  });
  // END FIREBASE


  // Función para postear
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