$(document).ready(function() {
  var $friends = $('#friends');
  var $invitationForm = $('#invitation-form');
  var $searchFriends = $('#search-friends');
  
  // Ocultando formulario de invitación
  $invitationForm.hide();
  // FIREBASE
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
  // LOGIN
  var provider = new firebase.auth.GoogleAuthProvider();
  // Jalando a todos los usuarios de la BD
  firebase.database().ref('newDB').on('child_added', function(s) {
    var user = s.val();   
    console.log(user);
    $friends.append('<img width=\'100px\' src=\'' + user.foto + '\'/>', '<p> ' + user.nombre + '<p/>');  
  });
  // END FIREBASE
  
  // Evento para enviar mensaje de invitación
  $searchFriends.on('click');
  
});