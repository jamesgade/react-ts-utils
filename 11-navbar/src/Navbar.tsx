import { useState, useRef, useEffect } from 'react'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.png'

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef: { current: any } = useRef(null)
  const linksRef: { current: any } = useRef(null)

  useEffect(() => {

    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = 0
    }

  }, [showLinks])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className='logo' />
          <h2>devjamesgade</h2>
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
            {showLinks ? <FaWindowClose /> : <FaBars />}
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>

        <ul className='social-icons'>
          {social.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
