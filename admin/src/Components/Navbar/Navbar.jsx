import './Navbar.scss'
import navlogo from '../../assets/nav-logo.png'
import navProfile from '../../assets/nav-profile.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-left'>
            <img src={navlogo} alt="" className="nav-logo" />
            <div className="nav-text">
                <h2>DOGFD</h2>
                <p>Admin Panel</p>
            </div>
        </div>
        <img src={navProfile} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar
