import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Posts from '../../components/posts/Posts'


function Profile() {
  return (
    <div className="Profile">
      <img className="cover" src="https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?cs=srgb&dl=pexels-pixabay-268941.jpg&fm=jpg" alt="" />      
      <div className="image">
        <img className="pic" src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />        
      </div>
      <div className="profile-details">
        <div className="social-media">
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
        </div>
        <div className="info">
            <h4>Jane Doe</h4>
            <div className="location">
                <LocationOnIcon fontSize='small'/><span>USA</span>
            </div>
        </div>
        <div className="follow-button">
            <button>follow</button>
        </div>
      </div>
        <Posts/>
    </div>
  );
}

export default Profile;
