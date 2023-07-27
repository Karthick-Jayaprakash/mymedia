import Friends from '../../assets/1.png'
import Groups from '../../assets/2.png'
import MarketPlace from '../../assets/3.png'
import Watch from '../../assets/4.png'
import Memories from '../../assets/5.png'
import Events from '../../assets/6.png'
import Gaming from '../../assets/7.png'
import Gallery from '../../assets/8.png'
import Videos from '../../assets/9.png'
import Messages from '../../assets/10.png'
import Tutorials from '../../assets/11.png'
import FundRaiser from '../../assets/13.png'
import Courses from '../../assets/12.png'
import {AuthContext} from '../../context/AuthContext.js'
import {useContext} from 'react'


function LeftBar() {

  const {currentUser}= useContext(AuthContext);

  return (
    <div className="LeftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.pic}></img>
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="image" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="image" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={MarketPlace} alt="image" />
            <span>Market Place</span>
          </div>
          <div className="item">
            <img src={Watch} alt="image" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="image" />
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className = "menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Events} alt="image" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="image" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="image" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="image" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="image" />
            <span>Messages</span>
          </div>
        </div>
        <hr/>
        <div className = "menu">
          <span>Others</span>
          <div className="item">
            <img src={FundRaiser} alt="image" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="image" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="image" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
