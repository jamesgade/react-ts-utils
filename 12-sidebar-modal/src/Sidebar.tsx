import logo from './logo.png'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {

  const { showSidebar, closeSidebar } = useGlobalContext()

  return (
    <aside className={`sidebar ${showSidebar && "show-sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className='logo' />
        <h4>devjamesgade</h4>
        <button className='close-btn' onClick={closeSidebar}><FaTimes /></button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link

          return (
            <li key={id}>
              <a href={url}>{icon}{text}</a>
            </li>
          )
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
