// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC4HHLr_qfEZs23Ys43PiaW1SnEPZOQjDw",
    authDomain: "simple-form-8497b.firebaseapp.com",
    databaseURL: "https://simple-form-8497b.firebaseio.com",
    projectId: "simple-form-8497b",
    storageBucket: "simple-form-8497b.appspot.com",
    messagingSenderId: "300117423101",
    appId: "1:300117423101:web:27df56618f9f13e8d19f94"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Reference messages collection
var messagesRef = firebase.database().ref('contactformmessages');

$('#donateForm').submit(function (e) {
    e.preventDefault();

    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        email: $('.email').val(),
        phone: $('.phone').val(),
        amount: $('.amount').val(),
        message: $('.message').val()
    });

    $('.success-message').show();

    $('#donateForm')[0].reset();
});