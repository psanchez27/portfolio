// Check me out button arrow animation
//get btn and arrow
const checkBtn = document.getElementById('check')
const arrow = checkBtn.childNodes[0].childNodes[1]

//check if btn has mouse over it
checkBtn.addEventListener('mouseover', () => {
  arrow.classList.add('fa-rotate-90');
})
checkBtn.addEventListener('mouseout', () => {
  arrow.classList.remove('fa-rotate-90')
})












/*     Works section    ********************************************/

// budgget planner modal
const bpModalBtn = document.getElementById('bp-modal-btn')
const bpModal = document.getElementById('bp-modal')
const bpCloseBtn = document.getElementById('bp-modal-close')

//show modal
bpModalBtn.addEventListener('click', () => bpModal.classList.add('show-modal'))
//hide modal
bpCloseBtn.addEventListener('click', () => bpModal.classList.remove('show-modal'))
// Hide modal on outside click
window.addEventListener("click", e =>
  e.target == bpModal ? bpModal.classList.remove("show-modal") : false);



// Car vin decoder modal
const vdModalBtn = document.getElementById('vd-modal-btn')
const vdModal = document.getElementById('vd-modal')
const vdCloseBtn = document.getElementById('vd-modal-close')

//show modal
vdModalBtn.addEventListener('click', () => vdModal.classList.add("show-modal"))
//hide modal
vdCloseBtn.addEventListener('click', () => vdModal.classList.remove('show-modal'))
// Hide modal on outside click
window.addEventListener("click", e => e.target == vdModal ? vdModal.classList.remove("show-modal") : false);


// form validation modal
const fvModalBtn = document.getElementById('fv-modal-btn')
const fvModal = document.getElementById('fv-modal')
const fvCloseBtn = document.getElementById('fv-modal-close')

//show modal
fvModalBtn.addEventListener('click', () => fvModal.classList.add("show-modal"))
//hide modal
fvCloseBtn.addEventListener('click', () => fvModal.classList.remove('show-modal'))
// Hide modal on outside click
window.addEventListener("click", e => e.target == fvModal ? fvModal.classList.remove("show-modal") : false);



// peter smith's modal
const psgcModalBtn = document.getElementById('psgc-modal-btn')
const psgcModal = document.getElementById('psgc-modal')
const psgcCloseBtn = document.getElementById('psgc-modal-close')

//show modal
psgcModalBtn.addEventListener('click', () => psgcModal.classList.add("show-modal"))
//hide modal
psgcCloseBtn.addEventListener('click', () => psgcModal.classList.remove('show-modal'))
// Hide modal on outside click
window.addEventListener("click", e => e.target == psgcModal ? psgcModal.classList.remove("show-modal") : false);



// jsk modal
const jskModalBtn = document.getElementById('jsk-modal-btn')
const jskModal = document.getElementById('jsk-modal')
const jskCloseBtn = document.getElementById('jsk-modal-close')

//show modal
jskModalBtn.addEventListener('click', () => jskModal.classList.add("show-modal"))
//hide modal
jskCloseBtn.addEventListener('click', () => jskModal.classList.remove('show-modal'))
// Hide modal on outside click
window.addEventListener("click", e => e.target == jskModal ? jskModal.classList.remove("show-modal") : false);



// jmm modal
const jmmModalBtn = document.getElementById('jmm-modal-btn')
const jmmModal = document.getElementById('jmm-modal')
const jmmCloseBtn = document.getElementById('jmm-modal-close')

//show modal
jmmModalBtn.addEventListener('click', () => jmmModal.classList.add("show-modal"))
//hide modal
jmmCloseBtn.addEventListener('click', () => jmmModal.classList.remove('show-modal'))
// Hide modal on outside click
window.addEventListener("click", e => e.target == jmmModal ? jmmModal.classList.remove("show-modal") : false);












//contact form elements and functions
const contactForm = document.getElementById('contact-form')
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

//cfs modal
const cfsModal = document.getElementById("cfs-modal");
const cfsClose = document.getElementById("cfs-close");
let formCompleted = false;

const showError = (input, message) => {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  formControl.querySelector("small").innerText = message;
};

const showSuccess = input => {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
};

//Check required fields
const checkRequired = inputArray => {
  inputArray.map(input => {
    if (input.value.trim() === "")
      showError(
        input,
        `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required`
      );
    else showSuccess(input);
  });
};

//Validate email
const isValidEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  if (re.test(String(email.value.trim()).toLowerCase())) showSuccess(email);
  else showError(email, "Not a valid Email address");
};

//hasSuccess
const hasSuccess = e => {
  return e.parentElement.classList.contains("success");
};

//check the form for valid inputs
const checkFormSuccess = inputArray => {
  formCompleted = inputArray.every(hasSuccess);
};

contactForm.addEventListener("submit", e => {
  // e.preventDefault();
  checkRequired([name, email, message]);
  isValidEmail(email);
  checkFormSuccess([name, email, message]);
  if (formCompleted == false) {
    e.preventDefault();
  } else{
      // Show modal
      cfsModal.classList.add("show-modal");
      name.value = ''
      email.value = ''
      message.value = ''
      // setTimeout(function() { contactForm.submit() }, 3000)
  }
});




// Hide modal
cfsClose.addEventListener("click", () => cfsModal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", e =>
  e.target == bhModal ? cfsModal.classList.remove("show-modal") : false
);