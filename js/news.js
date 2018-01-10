$(document).ready(function() {
  // Get a reference to the database service
  var database = firebase.database();
  console.log(database);
  
  // var firebasedata = new Firebase('https://primer-proyecto-c38c2.firebaseio.com/');
  // console.log(firebasedata);
  
  // Esta función me jalará todos los datos pero con el uid ya establecito
  
  firebase.database().ref('newDB/' + '2r4L1tKAGRYVW2zDsS3j9usMkwf1').on('child_added', function(s) {
    var user = s.val();   
    console.log(user);
  })
  // END FIREBASE
});