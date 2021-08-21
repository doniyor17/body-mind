const elButton = document.getElementById("toggler1");
const elmenu = document.querySelector(".site-nav__mobile");
const el = document.getElementById("button");
const elNav = document.getElementById("nav");

elButton.addEventListener("click", function run() {
	elmenu.classList.remove("show");
	elmenu.classList.add("hide");
});
el.addEventListener("click", function remove() {
	elmenu.classList.remove("hide");
	elmenu.classList.add("show");
});
window.addEventListener("scroll", function add() {
	if (window.scrollY >= 100) {
		elNav.classList.add("sticky-navbar");
		elmenu.classList.remove("show");
		elmenu.classList.add("hide");
	} else if(window.scrollY < 100 ) {
		elNav.classList.remove("sticky-navbar");
	}
});
elmenu.addEventListener('click', function hidden(e){
	if(e.target.parentElement === elmenu) {
		elmenu.classList.remove("show");
		elmenu.classList.add("hide");
	}
})