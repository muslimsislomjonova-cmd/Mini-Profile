function calculateAge(birthYear) {
  const year = Number(birthYear); 
  const currentYear = new Date().getFullYear();
  return currentYear - year;
}


function normalizeName(name) {
  const trimmed = name.trim(); 
  const lower = trimmed.toLowerCase(); 

  return lower.charAt(0).toUpperCase() + lower.slice(1); 
}


function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}


const fullNameInput = document.querySelector("#fullName");
const birthYearInput = document.querySelector("#birthYear");
const ageInput = document.querySelector("#ageInput");
const emailInput = document.querySelector("#email");
const hobbyInput = document.querySelector("#hobby");
const resultBox = document.querySelector(".result");
const resultTitle = document.querySelector(".result__title");
const clearBtn = document.querySelector(".btn--ghost");
const saveBtn = document.querySelector(".btn--primary");


document.querySelector("#footerYear").textContent = new Date().getFullYear();




saveBtn.addEventListener("click", function () {
  let name = fullNameInput.value;
  let birthYear = birthYearInput.value;
  let email = emailInput.value;
  let hobby = hobbyInput.value;


  name = name.trimEnd().trimStart();
  hobby = hobby.trim();


  if (!validateEmail(email)) {
    resultBox.innerHTML = `<p style="color:red;"> Email notogri! @ belgisi kiritilganligini tekshiring.</p>`;
    return;
  }


  const age = calculateAge(birthYear);
  ageInput.value = age;


  const finalName = normalizeName(name);


  const hobbyFormatted = hobby.replaceAll(",", ", "); 

 
  resultBox.style.borderColor = "#6366f1";
  resultTitle.textContent = "✔ Profil yaratildi";


  resultBox.innerHTML = `
    <h3 class="result__title">Profile Result</h3>
    <p><strong>Ism:</strong> ${finalName}</p>
    <p><strong>Yosh:</strong> ${age}</p>
    <p><strong>Email:</strong> ${email.toLowerCase()}</p>
    <p><strong>Hobby:</strong> ${hobbyFormatted}</p>
  `;


  const profile = {
    name: finalName,
    birthYear: Number(birthYear),
    age: age,
    email: email,
    hobby: hobby
  };

  localStorage.setItem("profile", JSON.stringify(profile));
});



clearBtn.addEventListener("click", function () {
  fullNameInput.value = "";
  birthYearInput.value = "";
  ageInput.value = "";
  emailInput.value = "";
  hobbyInput.value = "";

  resultBox.innerHTML = `
    <h3 class="result__title">Profile Result</h3>
    <p class="muted">Formni to'ldirib "Save Profile" tugmasini bosing.</p>
  `;


  resultBox.classList.remove("error");
});


window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("profile");

  if (saved) {
    const p = JSON.parse(saved);

    fullNameInput.value = p.name;
    birthYearInput.value = p.birthYear;
    ageInput.value = p.age;
    emailInput.value = p.email;
    hobbyInput.value = p.hobby;

    resultBox.innerHTML = `
      <h3 class="result__title">Saqlangan profil</h3>
      <p><strong>Ism:</strong> ${p.name}</p>
      <p><strong>Yosh:</strong> ${p.age}</p>
      <p><strong>Email:</strong> ${p.email}</p>
      <p><strong>Hobby:</strong> ${p.hobby}</p>
    `;
  }
});
