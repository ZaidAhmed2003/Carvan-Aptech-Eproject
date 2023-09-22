// Contact page form send to mail
const sendBtn = document.querySelector(".contact__btn");

sendBtn.addEventListener("click", (e) => {
  const contactName = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const message = document.querySelector("#textarea").value;
  const privacyCheck = document.querySelector("#privacy");

  e.preventDefault();

  const missingFields = [];

  if (!contactName) missingFields.push("Name");
  if (!email) missingFields.push("Email");
  if (!phone) missingFields.push("Phone");

  if (missingFields.length > 0) {
    alert(`Please enter: ${missingFields.join(", ")}`);
  } else if (!privacyCheck.checked) {
    // Check if the checkbox is not checked
    alert("Please accept the privacy policy before submitting.");
  } else {
    const mailtoLink = `mailto:contact@carvan.com?subject=Contact%20Form&body=Name:%20${contactName}%0AEmail:%20${email}%0APhone:%20${phone}%0AMessage:%20${message}`;
    window.location.href = mailtoLink;
  }
});
