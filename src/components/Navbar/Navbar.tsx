import './Navbar.scss'
import { sourceIcon, editIcon, exportIcon } from '../../assets/icons/nav-icons'



const menuData = [{
  name: 'Source',
  alt: 'Add source icon',
  icon: sourceIcon,
},{
  name: 'Edit',
  alt: 'Edit video icon',
  icon: editIcon,
},{
  name: 'Export',
  alt: 'Export icon',
  icon: exportIcon,
}]



export default function Navbar() {
  return (
    <section className='nav'>

      {menuData.map( (menu,key) => 
      <div className="nav--menu" key={key}>
        <img src={menu.icon} alt={menu.alt} className="menu--icon" />
        <p className="menu--description">{menu.name}</p>
        <div className='menu--select'/>
      </div>
      )}
      
    </section>
  )
}