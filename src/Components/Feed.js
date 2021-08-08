import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
            profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu9F6AMohqths3xKN03jjk4qAkvbelaPeHbKJBc6Hg=s192-c-mo"
            message="Yoo, this is a message"
            timestamp = "time"
            imgName="imgName"
            username="Kevin Gomez"
            />

            {/* {
                postData.map(entry => {
                    <Post 
                        profilePic = {entry.avatar}
                        message = {entry.text}
                        timestamp = {entry.timestamp}
                        imgName = {entry.imgName}
                        username = {entry.user}
                    />
                })
            } */}
            
        </div>
    )
}

export default Feed
