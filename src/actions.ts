import { get } from 'svelte/store'
import { useStore } from './store'
const { current, operation, previous, overwrite } = useStore()

const addDigit = (digit: string) => {
	if (get(overwrite)) {
		current.set(digit)
		overwrite.set(false)
		return
	}
	if (get(current).length > 8) return

	if (get(current) == '0') {
		if (digit == '.') {
			current.set('0.')
			return
		}
		current.set(digit)
		return
	}
	if (digit === '.' && get(current).includes('.')) return
	current.set(`${get(current) || ''}${digit}`)
}

const chooseOperation = (op: string) => {
	if (get(previous) === '' && get(current) === '') return
	else if (get(current) === '') {
		operation.set(op)
		return
	}
	if (get(previous) === '') {
		previous.set(get(current))
		current.set('')
		operation.set(op)
		return
	}
	previous.set(evaluated())
	operation.set(op)
	current.set('')
}

const clear = () => {
	overwrite.set(false)
	previous.set('')
	current.set('')
	operation.set('')
}

const deleteDigit = () => {
	if (get(overwrite)) {
		current.set('')
		overwrite.set(false)
		return
	}
	if (get(current) == '') {
		current.set(get(previous))
		previous.set('')
		operation.set('')
		return
	}
	if (get(current).length === 1) {
		current.set('')
		return
	}
	current.set(get(current).slice(0, -1))
}

const evaluate = () => {
	if (get(operation) === '' || get(current) === '' || get(previous) === '') return
	current.set(evaluated())
	overwrite.set(true)
	previous.set('')
	operation.set('')
}

const evaluated = () => {
	const prev = Number(get(previous))
	const curr = Number(get(current))

	if (isNaN(prev) || isNaN(curr)) return ''

	switch (get(operation)) {
		case '+':
			overwrite.set(true)
			return (prev + curr).toString()
		case '-':
			overwrite.set(true)
			return (prev - curr).toString()
		case '*':
			overwrite.set(true)
			return (prev * curr).toString()
		case '÷':
			if (curr == 0) {
				alert('Cannot divide by zero')
				return ''
			}
			return (prev / curr).toString()
		default:
			return ''
	}
}

export const useActions = {
	addDigit,
	chooseOperation,
	clear,
	deleteDigit,
	evaluate,
}
