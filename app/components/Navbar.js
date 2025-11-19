import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header>
            <nav className='navbar'>
                <h2> <Link href={"/"}>Kaifi Azam</Link></h2>
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"#contact"}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
