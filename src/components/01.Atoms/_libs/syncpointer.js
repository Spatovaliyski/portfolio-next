'use client';

export default function SyncPointer() {
	const pointer = ({x, y}) => {
		document.documentElement.style.setProperty('--x', x.toFixed(2))
		document.documentElement.style.setProperty(
			'--xp',
			(x / window.innerWidth).toFixed(2)
		)
		document.documentElement.style.setProperty('--y', y.toFixed(2))
		document.documentElement.style.setProperty(
			'--yp',
			(y / window.innerHeight).toFixed(2)
		)
	}

	if (typeof window !== 'undefined') {
		document.body.addEventListener('pointermove', pointer);
	}
}
