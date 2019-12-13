import React from 'react'
function Header() {
    return (
        <header style={headerStyle}>
            <h2>Todo List</h2>{/* rfc */}
        </header>
    )
}
const headerStyle = {
    background: '#ccc',
    padding: '10px'
}
export default Header;