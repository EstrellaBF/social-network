$('document').ready(function() {
  // Se crea variables para cada div y se filtrará por find ya que en clase explicaron que de esta forma evitaremos cargar de muchas cosas la página y se hace ligera
  var $signup = $('#signup');
  var $photoChrome = $('#photo-chrome');
  var $password = $('#password');
  var $passwordInput = $('#password input');
  var $signupBox = $('#signup-box');

  // Ocultando input de password y la etiuqeta p de bienvenida
  $password.hide();
  $signupBox.find('p').hide();

  // desactivando boton de registro
  $signupBox.find('button').prop('disabled', true);

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

  // signInWithPopup
  $signup.on('click', function() {
    // Pegando la primera línea del punto 5    
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result.user);
      saveAccount(result.user);
      $signup.hide();
      // añadiendo mi imagen de google
      $photoChrome.append('<img width="100px" src=" ' + result.user.photoURL + ' " />', '<p> '+result.user.displayName+ '<p/>');
      $password.show();
    });   
  });

  // Se limita la contraseña entre 4 y 10 dígitos
  $passwordInput.on('input', function() {
    // console.log($(this).val());
    // console.log($(this).val().length);
    if ($(this).val().length >= 4 && $(this).val().length <= 10) {
      $signupBox.find('button').prop('disabled', false);
    } else {
      $next.prop('disabled', true);
      $messageSMS.text('');
    };
  });
  
  // Evento para poder confirmar la cantidad de números que se ingresa.
  // Dígitos serán entre 9 o 10, 9 para Perú y 10 como máximo como se pide en el LMS
  // $input.on('input', function () {
  //   if ($(this).val().length >= 9 && $(this).val().length <= 10) {
  //     localStorage.phoneNumber = $(this).val();
  //     $messageSMS.text('We\'ll send a text to verify your phone');
  //     $buttonSendSms.show().css({ 'background-color': 'green', 'color': '#fff' });
  //   } else {
  //     $next.prop('disabled', true);
  //     $messageSMS.text('');
  //   };
  // });


  // Guardando datos 
  function saveAccount(user) {
    // creando var para almacenar del usuario su nombre mail y foto
    var userInfo = {
      // cuando se inicia sesion, es un unico numer
      uid: user.uid,
      nombre: user.displayName,
      correo: user.email,
      foto: user.photoURL
    };
    // guardando en firebase, recuerda que set grabaría en toda la rama, osea se sustituiria. Se concatena para que se almacene en la misma user id
    firebase.database().ref('newDB/' + user.uid).set(userInfo); 
  }

  // // Jalando a todos los usuarios de la BD
  // firebase.database().ref('newDB').on('child_added', function(s) {
  //   var user = s.val();   
  //   $('#amigos-foto').append('<img width=\'100px\' src=\''+ user.foto +'\'/>', '<p> '+user.nombre+ '<p/>');
    
  // })
  // END FIREBASE



});