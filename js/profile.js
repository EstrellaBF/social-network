$(document).ready(function() {

  // console.log(firebase.auth().R);

  // var uidhere = firebase.auth().R;
  // console.log(firebase.auth());

  // console.log(uidhere.foto);

  // console.log(firebase.database().ref('newDB/'))

  // console.log(newDB);

  // var userf = firebase.database().ref('newDB/' + user.uid);
  // console.log(userf)

  // $('#picture-profile').attr('src','')

  
  $('#share-btn').click(function() {
    event.preventDefault();
    var $post = $('#input-post').val();
    // agregando los post
    $('#new-post').prepend('<div class="col-xs-10 col-xs-offset-1 div-post"><p>' + $post + '</p></div>');
    
    // $('#capture').change(previewFile());
    // function previewFile() {
    //   var preview = $('.image-new');
    //   var file = $('#capture').file;
    //   var reader = new FileReader();

    //   reader.onloadend = function() {
    //     preview.src = reader.result;
    //   };
    //   if (file) {
    //     reader.readAsDataURL(file);
    //   } else {
    //     preview.src = '';
    //   }
    // }

    // var $input = $('#input-file');
    // console.log($input);
    console.log($('#capture').val());
    // si toma una imagen subirla al comparir
    
    $('#input-post').val('');
  });
});