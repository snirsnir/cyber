const txtEmail = document.getElementById("username_field");
const txtPassword = document.getElementById("password_field");
const txtCourse = document.getElementById("course_number");
const txtStudent = document.getElementById("name_student");
signup.addEventListener('click', e => {
	
const email =  txtEmail.value;
const pass = txtPassword.value;
const auth = firebase.auth();
	const promise = auth.createUserWithEmailAndPassword(email,pass);
	promise
	.catch(e => console.log(e.message));
txtEmail.value = "";
txtPassword.value = "";
txtCourse.value = "";
txtStudent.value = "";
	alert("נרשם בהצלחה");
});