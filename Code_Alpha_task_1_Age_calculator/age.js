function calculateAge() {
    const birthDate = new Date(document.getElementById("birthDate").value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let message;

    if (birthDate > today) {
        message = "Congratulations! You are a Time Traveller.";
    } else if (age === 0) {
        message = "You are a newborn!";
    } else if (age === 1) {
        message = "You are 1 year old!";
    } else {
        message = "You are " + age + " years old!";
    }

    document.getElementById("age").innerText = message;
}