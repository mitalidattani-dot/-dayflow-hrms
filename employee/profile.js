// Load saved data
window.onload = function () {
    document.getElementById("name").value = localStorage.getItem("name") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("phone").value = localStorage.getItem("phone") || "";
    document.getElementById("address").value = localStorage.getItem("address") || "";
    document.getElementById("documents").value = localStorage.getItem("documents") || "";

    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
        document.getElementById("profileImage").src = savedImage;
    }
};

// Save profile
function saveProfile() {
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("phone", document.getElementById("phone").value);
    localStorage.setItem("address", document.getElementById("address").value);
    localStorage.setItem("documents", document.getElementById("documents").value);

    alert("Profile saved successfully!");
}

// Change profile picture
function changePhoto() {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        document.getElementById("profileImage").src = reader.result;
        localStorage.setItem("profileImage", reader.result);
    };

    if (file) reader.readAsDataURL(file);
}
