import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
function Feed() {
    return (
        <div className='feed'>
            {/*stroyreel messagesender*/}
            <StoryReel />
            <MessageSender />

            <Post
            profilePic ='https://pmcvariety.files.wordpress.com/2020/07/idris-elba-1.jpg?w=600'
            message=' this works?'
            timestamp='this is a timestamp'
            username='kamp'
            image='https://www.tutorialrepublic.com/lib/images/javascript-illustration.png'
             />
             <Post
            profilePic ='https://pmcvariety.files.wordpress.com/2020/07/idris-elba-1.jpg?w=600'
            message=' this works?'
            timestamp='this is a timestamp'
            username='kamp'
            image='https://www.tutorialrepublic.com/lib/images/javascript-illustration.png'
             />
            <Post
            profilePic ='https://pmcvariety.files.wordpress.com/2020/07/idris-elba-1.jpg?w=600'
            message=' this works?'
            timestamp='this is a timestamp'
            username='kamp'
            image='https://www.tutorialrepublic.com/lib/images/javascript-illustration.png'
             />
            
          
        </div>
    )
}

export default Feed

