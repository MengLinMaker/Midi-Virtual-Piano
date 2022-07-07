import './Navbar.scss'
import { sourceIcon, editIcon, exportIcon } from '../../assets/icons/nav-icons'



export default function Navbar() {
  return (
    <section className='nav'>
      <div className="nav--menu">
        <img src={sourceIcon} alt="Add source icon" className="menu--icon" />
        <p className="menu--description">Source</p>
        <div className='menu--select'/>
      </div>
      <div className="nav--menu">
        <img src={editIcon} alt="Edit video icon" className="menu--icon" />
        <p className="menu--description">Edit</p>
      </div>
      <div className="nav--menu">
        <img src={exportIcon} alt="Export icon" className="menu--icon" />
        <p className="menu--description">Export</p>
      </div>
    </section>
  )
}
