var firebaseConfig = {
  apiKey: "AIzaSyAqo3WdF_RkKrfhRi_5GcfdIpehsTRcxrk",
  authDomain: "project3-9a5b0.firebaseapp.com",
  databaseURL: "https://project3-9a5b0.firebaseio.com",
  projectId: "project3-9a5b0",
  storageBucket: "project3-9a5b0.appspot.com",
  messagingSenderId: "828265317184",
  appId: "1:828265317184:web:623c24ba65f1528d6db0a5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//make and store firestore references
const auth = firebase.auth();
const db = firebase.firestore();

function newAcct(type) {
  event.preventDefault();
  event.stopPropagation();
  const email = $("#email").val().trim();
  const password = $("#signup-password").val();
  const confirm = $("#confirm").val();
  console.log(type);
  if (password === confirm) {
    //pass info to firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === "auth/email-already-in-use") {
          alert("email already in use");
        }
      })
      .then(function (cred) {
        console.log(cred);

        if (!cred) {
          return;
        }

        //  $.ajax({
        //      url: "/api/org",
        //      method: "POST",
        //       data :
        //  }).then(function(data){
        //      console.log(data)
        //})
        alert("Account Creation Successful!");
        if (type === "full") {
          window.location.href = "/checkout";
        }
      });
  } else {
    alert("Passwords do not match");
  }
}

//create new account click funciton to grab email and pw
$(document).ready(function () {
  $("#changePasswordBtn").on("click", () => {
    $(".changeMsg").text("");
    $(".changePassModal").modal("show");
  });
  $("#add-btn-free").on("click", function (event) {
    newAcct("free");
  });
  $("#add-btn-full").on("click", function (event) {
    newAcct("full");
  });

  $("#logoutBtn").on("click", function (event) {
    event.preventDefault();

    auth.signOut().then(function () {
      console.log("user signed out");
      window.location.href = "/";
    });
  });

  $("#login").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("clicked");

    const email = $("#loginEmail").val();
    const password = $("#loginPassword").val();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode + " " + errorMessage);
        if (errorCode === "auth/user-not-found") {
          alert(
            "There is no account linked to that email. Please go to the Create a Login page to sign up."
          );
        } else if (errorCode === "auth/wrong-password") {
          alert(
            "Your password is incorrect. Click forgot password for assistance."
          );
        }
      })
      .then(function (cred) {
        if (!cred) {
          return;
        }

        console.log(cred);

        window.location.href = "/checkout";
      });
  });

  // $("#forgotPW").on("click", function (event) {
  //   event.preventDefault();

  //   var emailAddress = $("#loginEmail").val().trim();
  //   resetPassword(emailAddress);
  // });

  $(".submitChangePassBtn").on("click", function (event) {
    event.preventDefault();
    $(".changeMsg").text("");
    var emailAddress = $("#emailAddress").val().trim();
    resetPassword(emailAddress);
  });

  $("#changeBtn").on("click", function (event) {
    event.preventDefault();

    var emailAddress = $("#loginEmail").val().trim();
    resetPassword(emailAddress);
  });

  resetPassword = (emailAddress) => {
    if (!emailAddress) {
      alert("Please enter an email address");
    } else {
      auth
        .sendPasswordResetEmail(emailAddress)
        .then(function () {
          // Email sent.
          console.log("email sent");
          $(".changeMsg").text("Reset link has been sent!");
        })
        .catch(function (error) {
          $(".changeMsg").text("Error, Try Again");
        });
    }
  };

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log("user is signed in");
      console.log(user);
    } else {
      // User is signed out.
      // ...

      console.log("user is signed out");
    }
  });
});
