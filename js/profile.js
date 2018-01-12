$(document).ready(function() {

  console.log(firebase.auth().R);

  var uidhere = firebase.auth().R
  console.log(uidhere['foto']);
  

  // var userf = firebase.database().ref('newDB/' + user.uid);
  // console.log(userf)

  // $('#picture-profile').attr('src','')
  
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