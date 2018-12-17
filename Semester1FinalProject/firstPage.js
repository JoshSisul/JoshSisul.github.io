
function process1() {
		this.textContent = "Email: bmueller@sluh.org, School Phone: (314) 269-2193 ";
}

var element1 = document.getElementById("contactInfo");
element1.addEventListener('click', process1, false);
