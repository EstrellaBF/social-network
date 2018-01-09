$('document').ready(function() {
  // Se crea variables para cada div y se filtrará por find ya que en clase explicaron que de esta forma evitaremos cargar de muchas cosas la página y se hace ligera
  // Ecxcepto los que tendrán eventos
  var $signupGoogle = $('#signup-google');
  var $photoChrome = $('#photo-chrome');
  var $password = $('#password');
  var $passwordInput = $('#password input');
  var $signupBox = $('#signup-box');
  var $signupBoxSend = $('#signup-box button'); // botón de enviar 

  // Ocultando input de password y la etiuqeta p de bienvenida
  $password.hide();
  $signupBox.find('p').hide();

  // desactivando boton de registro
  $signupBoxSend.prop('disabled', true);

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

  // Al dar click en registrate con google se lanza el modal
  $signupGoogle.on('click', gmailInfo);

  // Función del modal de google
  function gmailInfo() {
    // Pegando la primera línea del punto 5    
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result.user);
      saveAccount(result.user);
      $signupGoogle.hide();
      // añadiendo mi imagen de google
      $photoChrome.append('<img width="100px" src=" ' + result.user.photoURL + ' " />', '<p> '+result.user.displayName+ '<p/>');
      $password.show();
    });   
  }
  
  // objeto de la base de datos
  var userInfo = {};
  // Guardando datos 
  function saveAccount(user) {
    userInfo.uid = user.uid;
    userInfo.nombre = user.displayName;
    userInfo.correo = user.email;
    userInfo.foto = user.photoURL;
    console.log(localStorage.password);
    // userInfo.nombrecito = getPassword;
    // guardando en firebase, recuerda que set grabaría en toda la rama, osea se sustituiria. Se concatena para que se almacene en la misma user id
    firebase.database().ref('newDB/' + user.uid).set(userInfo); 
  }
  
  // Evento que limita la contraseña entre 4 y 10 dígitos
  $passwordInput.on('input', passwordLength);

  // función que limita la contraseña entre 4 y 10 dígitos
  function passwordLength() {
    // console.log($(this).val());
    // console.log($(this).val().length);
    if ($(this).val().length >= 4 && $(this).val().length <= 10) {
      $signupBoxSend.prop('disabled', false);
      localStorage.password = $(this).val();
      userInfo.pass = localStorage.password;
    } else {
      $signupBoxSend.prop('disabled', true);
    };
  }

  // Evento para que guarde toda la info al dar click en registrarse
  // ME QUEDÉ AQUÍ INTENTANDO JALAR LA INFO COMO DATOS Y DEMAS DE FIREBASE
  $signupBoxSend.on('click', function(){
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('newDB' + userId).on('child_added', function(s) {
      var user = s.val();   
      console.log(user)
      
    })

  });
  console.log(userInfo); // Objeto con el correo, foto, nombre 
  // END FIREBASE



});