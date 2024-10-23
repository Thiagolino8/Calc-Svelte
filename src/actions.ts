import { store } from './store.svelte'

const addDigit = (digit: string) => {
	if (store.overwrite) {
		store.current = digit
		store.overwrite = false
		return
	}
	if (store.current.length > 8) return

	if (store.current === '0') {
		if (digit === '.') {
			store.current = '0.'
			return
		}
		store.current = digit
		return
	}
	if (digit === '.' && store.current.includes('.')) return
	store.current = `${store.current || ''}${digit}`
}

const chooseOperation = (op: string) => {
	if (store.previous === '' && store.current === '') return
	if (store.current === '') {
		store.operation = op
		return
	}
	if (store.previous === '') {
		store.previous = store.current
		store.current = ''
		store.operation = op
		return
	}
	store.previous = evaluated()
	store.operation = op
	store.current = ''
}

const clear = () => {
	store.overwrite = false
	store.previous = ''
	store.current = ''
	store.operation = ''
}

const deleteDigit = () => {
	if (store.overwrite) {
		store.current = ''
		store.overwrite = false
		return
	}
	if (store.current === '') {
		store.current = store.previous
		store.previous = ''
		store.operation = ''
		return
	}
	if (store.current.length === 1) {
		store.current = ''
		return
	}
	store.current = store.current.slice(0, -1)
}

const evaluate = () => {
	if (store.operation === '' || store.current === '' || store.previous === '') return
	store.current = evaluated()
	store.overwrite = true
	store.previous = ''
	store.operation = ''
}

const evaluated = () => {
	const prev = Number(store.previous)
	const curr = Number(store.current)

	if (Number.isNaN(prev) || Number.isNaN(curr)) return ''

	switch (store.operation) {
		case '+':
			store.overwrite = true
			return (prev + curr).toString()
		case '-':
			store.overwrite = true
			return (prev - curr).toString()
		case '*':
			store.overwrite = true
			return (prev * curr).toString()
		case '÷':
			if (curr === 0) {
				alert('Cannot divide by zero')
				return ''
			}
			return (prev / curr).toString()
		default:
			return ''
	}
}

export const actions = {
	addDigit,
	chooseOperation,
	clear,
	deleteDigit,
	evaluate,
}
