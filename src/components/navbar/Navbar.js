import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {DarkModeContext} from '../../context/DarkModeContext.js'
import {AuthContext} from '../../context/AuthContext.js'
import {useContext} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  const {currentUser}= useContext(AuthContext);
  const {toggle, darkMode} = useContext(DarkModeContext)

  return (
    <div className="Navbar">
      <div className="left">
        <Link to ="/"><h4>MyMedia</h4></Link>
        <HomeIcon/>
        {darkMode ? <DarkModeIcon onClick = {toggle}/> : <LightModeIcon onClick = {toggle}/>}
        <AppsIcon/>
        <input type="text" placeholder="search"></input>
      </div>
      <div className="right">
        <PersonIcon/>
        <NotificationsNoneIcon/>
        <MailOutlineIcon/>
        <img src={currentUser.pic} alt=""></img>
        <Link to ="/profile/:id"><span>{currentUser.name}</span></Link>
      </div>
    </div>
  );
}

export default Navbar;
