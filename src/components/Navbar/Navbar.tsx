import './Navbar.scss'
import sourceIcon from '../../assets/nav-icons/icons8-add-image-96.png'
import editIcon from '../../assets/nav-icons/icons8-video-trimming-96.png'
import downloadIcon from '../../assets/nav-icons/icons8-download-96.png'


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
        <img src={downloadIcon} alt="Download icon" className="menu--icon" />
        <p className="menu--description">Download</p>
      </div>
    </section>
  )
}
