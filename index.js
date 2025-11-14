// Elementlarni olish
const fullName = document.getElementById("fullName");
const birthYear = document.getElementById("birthYear");
const ageInput = document.getElementById("ageInput");
const email = document.getElementById("email");
const hobby = document.getElementById("hobby");

const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");

const resultBox = document.querySelector(".result");
const resultTitle = document.querySelector(".result__title");
const resultContent = document.querySelector(".muted");

// Footer yil
document.getElementById("footerYear").textContent = new Date().getFullYear();

// Yoshni avtomatik hisoblash
birthYear.addEventListener("input", function () {
  let year = Number(birthYear.value);
  let now = new Date().getFullYear();

  if (year > 1900 && year <= now) {
    ageInput.value = now - year;
  }
});

// Save tugmasi
saveBtn.addEventListener("click", function () {
  if (fullName.value === "" || birthYear.value === "" || email.value === "") {
    alert("Iltimos, asosiy maydonlarni to‘ldiring!");
    return;
  }

  resultContent.innerHTML = `
    <p><strong>Ism:</strong> ${fullName.value}</p>
    <p><strong>Tug'ilgan yil:</strong> ${birthYear.value}</p>
    <p><strong>Yosh:</strong> ${ageInput.value}</p>
    <p><strong>Email:</strong> ${email.value}</p>
    <p><strong>Hobby:</strong> ${hobby.value || "Ko'rsatilmagan"}</p>
  `;
});

// Clear tugmasi
clearBtn.addEventListener("click", function () {
  fullName.value = "";
  birthYear.value = "";
  ageInput.value = "";
  email.value = "";
  hobby.value = "";

  resultContent.innerHTML = `Formni to'ldirib "Save Profile" tugmasini bosing.`;
});
