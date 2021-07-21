function Nav(props) {
	const data = props.nav
	const listItem = data.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>)
	return (
		<>
			<nav>
				<ul className="main-navigation">
					{listItem}
				</ul>
			</nav>
		</>
	);
}

export default Nav;