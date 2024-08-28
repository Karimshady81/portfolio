function validateForm() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10,15}$/;
    
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!emailPattern.test(email)){
        return false;
    }

    if (!phonePattern.test(phone)){
        return false;
    }

    if (message.length < 10){
        return false;
    }

    return true; // If all validations pass, return true to allow form submission
}
