const fullName = document.getElementById("fullName");
const birthYear = document.getElementById("birthYear");
const ageInput = document.getElementById("ageInput");
const email = document.getElementById("email");
const hobby = document.getElementById("hobby");

const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");

const resultContent = document.querySelector(".muted");

document.getElementById("footerYear").textContent = new Date().getFullYear();



birthYear.addEventListener("input", function () {
  let year = Number(birthYear.value);
  let now = new Date().getFullYear();

  if (year > 1900 && year <= now) {
    ageInput.value = now - year;
  } else {
    ageInput.value = "";
  }
});



saveBtn.addEventListener("click", function () {
  if (fullName.value === "" || birthYear.value === "" || email.value === "") {
    alert("Iltimos, asosiy maydonlarni toldiring!");
    return;
  }

  resultContent.innerHTML = `
    <p><strong>Ism:</strong> ${fullName.value}</p>
    <p><strong>Tug‘ilgan yil:</strong> ${birthYear.value}</p>
    <p><strong>Yosh:</strong> ${ageInput.value}</p>
    <p><strong>Email:</strong> ${email.value}</p>
    <p><strong>Hobby:</strong> ${hobby.value || "Korsatilmagan"}</p>
  `;

  console.log("=== Profile Ma'lumotlari ===");
  console.log("Ism:", fullName.value);
  console.log("Tug'ilgan yil:", birthYear.value);
  console.log("Yosh:", ageInput.value);
  console.log("Email:", email.value);
  console.log("Hobby:", hobby.value || "Korsatilmagan");
});



clearBtn.addEventListener("click", function () {
  fullName.value = "";
  birthYear.value = "";
  ageInput.value = "";
  email.value = "";
  hobby.value = "";

  resultContent.innerHTML = `Formni toldirib "Save Profile" tugmasini bosing.`;

  console.log("Form tozalandi!");
});
