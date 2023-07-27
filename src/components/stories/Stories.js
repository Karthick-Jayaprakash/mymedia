import {AuthContext} from '../../context/AuthContext.js'
import {useContext} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
function Stories() {
  
  const {currentUser}= useContext(AuthContext);

  const stories = [
      {
        id:1,
        name:"Phoebe",
        img:"https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      },{
        id:2,
        name:"Monica",
        img:"https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      },{
        id:3,
        name:"Rachel",
        img:"https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      },{
        id:4,
        name:"Chandler",
        img:"https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      }
    ]
  return (
    <div className="Stories">
        <div className="my-profile story">
          <div className='image'>
            <img src={currentUser.pic}></img>
            <div className= "overlay">
              <AddCircleIcon style={{display:"block", color:"blue", backgroundColor:"white", borderRadius:'50%',cursor:"pointer"}}/>
              <span>{currentUser.name}</span>
            </div>
          </div>
        </div>
      {stories.map(story =>
        <div className="story" key={story.id}>
          <div className='image'>
            <img src={story.img} alt="" />
            <div className= "overlay">
              <span>{story.name}</span>
            </div>
          </div>
        </div>
        )}
    </div>
  );
}

export default Stories;
