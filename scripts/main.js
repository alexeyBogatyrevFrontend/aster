// burger menu
const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	menu.classList.toggle('active')
})

// accordion
const accordions = document.querySelectorAll('.faq__accordion')

accordions.forEach(accordion => {
	const top = accordion.querySelector('.faq__accordion-top')
	const content = accordion.querySelector('.faq__accordion-content')

	top.addEventListener('click', () => {
		accordion.classList.toggle('open')

		if (accordion.classList.contains('open')) {
			content.style.maxHeight = content.scrollHeight + 'px'
		} else {
			content.style.maxHeight = null
		}
	})
})
