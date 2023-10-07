const navBtn = document.querySelector(".hamburger")
const navSection = document.querySelector(".nav-mobile")
const links = navSection.querySelectorAll("a")
const link1 = document.querySelector(".link1")
const link2 = document.querySelector(".link2")
const link3 = document.querySelector(".link3")

const burgerBtnActive = () => {
	navBtn.classList.toggle("is-active")

	if (!navSection.classList.contains("active")) {
		navSection.classList.add("active")
		document.getElementsByTagName("body")[0].style.overflow = "visible"
	} else {
		navSection.classList.remove("active")
		document.getElementsByTagName("body")[0].style.overflow = "hidden"
	}

	links.forEach(link =>
		link.addEventListener("click", () => {
			navSection.classList.add("active")
			navBtn.classList.remove("is-active")

			document.getElementsByTagName("body")[0].style.overflow = "visible"
		})
	)
}

const addBoldLinks = () => {
	if (scrollY <= 750) {
		link1.classList.add("linkChanges")
		link2.classList.remove("linkChanges")
		link3.classList.remove("linkChanges")
	} else if (scrollY <= 1277) {
		link2.classList.add("linkChanges")
		link1.classList.remove("linkChanges")
		link3.classList.remove("linkChanges")
	} else if (scrollY >= 1278) {
		link3.classList.add("linkChanges")
		link2.classList.remove("linkChanges")
		link1.classList.remove("linkChanges")
	}
}

navBtn.addEventListener("click", burgerBtnActive)
window.addEventListener("scroll", addBoldLinks)
