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
  // function start() {
  //   var imgFile = $('#input-file');
  //   var imgCamera = $('#capture');
  //   var momentaneo = $('#momentaneo');
  //   imgFile.change(function(e) {
  //     var $file = e.target.files;
  //     var $myFile = $file[0];
  //     console.log($myFile);
      
  //     var $reader = new FileReader();
  //     console.log($reader);
      
  //     $reader.readAsText($myFile);
  //     console.log($reader.result);
      
  //     $reader.load(function(e) {
  //       var $resultFile = e.target.result;
  //       momentaneo.append($resultFile);
  //     });
  //   });
  // }
  // start();

  $('#share-btn').click(function() {
    event.preventDefault();
    var $post = $('#input-post').val();
    var $moment = moment().format('LLL');
    // agregando los post
    $('#new-post').prepend('<div class="col-xs-10 col-xs-offset-1 div-post"><p><strong>' + 'nombre y apellido' + '</strong></p><p>' + $post + '</p><p>' + $moment + '</p></div>');

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
    
    $('#input-post').val('');
  });
});