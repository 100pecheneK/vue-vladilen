const intervals = []
let defaultColor = 'black'

function mouseover(event) {
	event.target.style.color = 'red'
}
function mouseout(event) {
	event.target.style.color = defaultColor
}
export default {
	mounted(element, binding) {
		element.style[binding.arg] = binding.value
		defaultColor = binding.value

		if (binding.modifiers.blink) {
			let isWhite = false
			const blinkInterval = setInterval(() => {
				element.style.color = isWhite ? defaultColor : '#fff'
				isWhite = !isWhite
			}, 5000)
			intervals.push(blinkInterval)
		}

		if (binding.modifiers.hover) {
			element.addEventListener('mouseover', mouseover)
			element.addEventListener('mouseout', mouseout)
		}
	},
	updated(element, binding) {
		element.style[binding.arg] = binding.value
	},
	unmounted(element) {
		intervals.forEach(clearInterval)
		element.removeEventListener('mouseover', mouseover)
		element.removeEventListener('mouseout', mouseout)
	},
}
