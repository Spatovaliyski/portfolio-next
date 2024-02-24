import React from 'react'
import BackArrow from '../BackArrow/back-arrow.component'

const Error = ({ statusCode }) => {
	if (statusCode === 404) {
		return (
			<div>
				<BackArrow href={'/'} />
				<h1>404 - Page Not Found</h1>
				<p>The page you are looking does not exist.</p>
			</div>
		)
	}

	if (statusCode === 500) {
		return (
			<div>
				<BackArrow href={'/'} />
				<h1>500 - Internal Server Error</h1>
				<p>Sorry, something went wrong.</p>
			</div>
		)
	}

	if (statusCode === 403) {
		return (
			<div>
				<BackArrow href={'/'} />
				<h1>403 - Forbidden</h1>
				<p>Sorry, you don't have permission to access this page.</p>
			</div>
		)
	}

	return (
		<>
			<BackArrow href={'/'} />
			<h1>Something went wrong</h1>
		</>
	)
}

export default Error;