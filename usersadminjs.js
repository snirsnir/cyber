const txtEmail = document.getElementById("email_field");
const txtUser = document.getElementById("username_field");
const txtPassword = document.getElementById("password_field");
const txtCourse = document.getElementById("course_number");
const txtStudent = document.getElementById("name_student");
signup.addEventListener('click', e => {
const email =  txtEmail.value;
const user =  txtUser.value;
const pass = txtPassword.value;
	const auth = firebase.auth();
const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
  auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
   firebaseUser.updateProfile({ displayName: user }).then(function() { txtUser.innerHTML = firebase.auth().currentUser.displayName; });
      console.log("display name: " + firebaseUser.displayName);
    } else { }
  });


txtEmail.value = "";
txtUser.value = "";
txtPassword.value = "";
txtCourse.value = "";
txtStudent.value = "";
	alert("נרשם בהצלחה");
	setTimeout(function(){
   window.location.reload(1);
}, 3000);
	
});


