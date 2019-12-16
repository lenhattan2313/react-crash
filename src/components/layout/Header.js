import React from 'react'
import {Link} from 'react-router-dom';
function Header() {
    return (
        <header style={headerStyle}>
            <h2>Todo List</h2>{/* rfc */}
            <Link to="/">Home</Link>|
            <Link to="/about">About</Link>
        </header>
    )
}
const headerStyle = {
    background: '#ccc',
    padding: '10px'
}
export default Header;