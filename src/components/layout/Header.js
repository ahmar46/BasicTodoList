import React from 'react';

export default function Header() {
	return (
		<header style={headerStyle}>
			<h1>TodoList</h1>
		</header>
	);
}

const headerStyle = {
	backgroundColor: '#000',
	color: '#fff',
	textAlign: 'center',
	padding: '10px',
};
