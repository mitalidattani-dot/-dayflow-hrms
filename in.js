const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function login() {
  const selectedRole = document.querySelector('input[name="role"]:checked');

  if (!selectedRole) {
    alert("Please select a role");
    return;
  }

  if (selectedRole.value === "employee") {
    window.location.href = "employee/dashboard.html";
  } else if (selectedRole.value === "admin") {
    window.location.href = "admin/dashboard.html";
  }
}
