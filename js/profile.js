$(document).ready(function() {
  var $imageProfile = $('#image-profile');

  // var provider = new firebase.auth.GoogleAuthProvider();
  // var database = firebase.database();
  // console.log(database);

  // console.log(firebase.auth().R); // ruta uid de quien se enlaza. Se verificó en 3 computadoras distintas
  // var ruta =firebase.auth().R;
  // firebase.database().ref('newDB/' + ruta).on('value', function(s) {
  //   var user = s.val();   
  //   console.log(user);
  //   $imageProfile.attr('src', user.foto);
  // })
  gmailInfo();
  console.log($userInfo);

  
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