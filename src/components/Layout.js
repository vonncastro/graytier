import React from 'react'
import '../utils/typography'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import Header from './Header'
import Footer from './Footer'
import './styles.css'

class Layout extends React.Component {
	render() {
		const { children } = this.props
		return (
			<div>
				<Header />
				<div>{children}</div>
				<Footer />
			</div>
		)
	}
}

export default Layout
