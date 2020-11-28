// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOjFgqXXb8g14KfbrjLrUIgYZIiledG6w",
    authDomain: "email-form-c3e62.firebaseapp.com",
    databaseURL: "https://email-form-c3e62.firebaseio.com",
    projectId: "email-form-c3e62",
    storageBucket: "email-form-c3e62.appspot.com",
    messagingSenderId: "248857763173",
    appId: "1:248857763173:web:71935e504776018a3b558c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('email-form');

$('#email-form').submit(function (e) {
    e.preventDefault();

    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email: $('.email').val()
    });

    $('.success-message').show();

    $('#donateForm')[0].reset();
});