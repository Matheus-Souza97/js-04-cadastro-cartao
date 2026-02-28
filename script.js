const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const dateInput = document.getElementById("date");
const cvcInput = document.getElementById("cvc");

const cardName = document.getElementById("card-name");
const cardNumber = document.getElementById("card-number");
const cardDate = document.getElementById("card-date");
const cardCvc = document.getElementById("card-cvc");

const card = document.getElementById("card");
const cardLogo = document.getElementById("card-logo");


nameInput.addEventListener("input", () => {
    nameInput.value = nameInput.value.toUpperCase();
    cardName.textContent = nameInput.value || "SEU NOME";
});



numberInput.addEventListener("input", () => {
    let rawValue = numberInput.value.replace(/\D/g, "");

    rawValue = rawValue.substring(0, 16);

    let formatedValue = rawValue.replace(/(\d{4})(?=\d)/g, "$1 ");

    numberInput.value = formatedValue;

    cardNumber.textContent = formatedValue || "0000 0000 0000 0000";

    if (/^4/.test(rawValue)) {
         cardLogo.src = "img/visa.png";
         cardLogo.style.display = "block";
    } else if (/^(5[1-5])/.test(rawValue)||/^(22[2-9]|2[3-6]|27[0-1]|2720)/.test(rawValue)) {
    cardLogo.src = "img/master.png";
    cardLogo.style.display = "block";
    } else {
        cardLogo.style.display = "none";
    }
});



dateInput.addEventListener("input", () => {
    let value = dateInput.value.replace(/\D/g, "");

    value = value.substring(0, 4);

    value = value.replace(/(\d{2})(?=\d)/g, "$1/");

    dateInput.value = value;

    cardDate.textContent = dateInput.value || "00/00";
});



cvcInput.addEventListener("input", () => {
    let value = cvcInput.value.replace(/\D/g, "");

    value = value.substring(0,3);

    cvcInput.value = value;

    cardCvc.textContent = cvcInput.value || "000";
});



cvcInput.addEventListener("focus", () => {
    card.classList.add("flip");
});



cvcInput.addEventListener("blur", () => {
    card.classList.remove("flip");
});

