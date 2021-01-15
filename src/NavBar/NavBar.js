import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return(
    <section className='nav'>
      <Link to='/'>
        <p className='nav-title'>Home</p>
      </Link>
      <Link to='/random-activity'>
        <p className='nav-title'>Random Activity</p>
      </Link>
      <Link to='/saved-activities'>
        <p className='nav-title'>Saved Activities</p>
      </Link>
    </section>
  )
}

export default NavBar;