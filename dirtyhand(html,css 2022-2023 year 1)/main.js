function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("show") == -1) {
      x.className += " show";
    } else { 
      x.className = x.className.replace(" how", "");
    }
  }

  document.querySelector('#submit-button').addEventListener('click', function(event) {

		var name = document.querySelector('#name').value;
		var email = document.querySelector('#email').value;
		var confirmationEmail = document.querySelector('#confirmation-email').value;
		var startDate = new Date(document.querySelector('#start-date').value);
		var duration = parseInt(document.querySelector('#duration').value);
		var contactMethod = document.querySelector('#contact-method').value;

		var currentDate = new Date();
		var oneDay = 24 * 60 * 60 * 1000;
		if (startDate.getTime() - currentDate.getTime() < oneDay) {
			alert('Start date must be at least 1 day in the future');
			event.preventDefault();
			return;
		}
if (email !== confirmationEmail) {
  alert('Email and confirmation email must match');
  event.preventDefault();
  return;
}

var popUp = document.querySelector('#pop-up');
var popUpName = document.querySelector('#pop-up-name');
var popUpEmail = document.querySelector('#pop-up-email');
var popUpStartDate = document.querySelector('#pop-up-start-date');
var popUpDuration = document.querySelector('#pop-up-duration');
var popUpContactMethod = document.querySelector('#pop-up-contact-method');

popUpName.textContent = name;
popUpEmail.textContent = email;
popUpStartDate.textContent = startDate.toDateString();
popUpDuration.textContent = duration;
popUpContactMethod.textContent = contactMethod;

popUp.classList.remove('hidden');
});