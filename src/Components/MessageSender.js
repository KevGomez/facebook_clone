import { Avatar, Input } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'
import VideoCamIcon from '@material-ui/icons/VideoCall'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { VideoLibrary } from '@material-ui/icons'


const MessageSender = () => {
    const [input, setInput] = useState('')
    const [image, setImage] = useState('')

    const handleChange = (e) => 
    {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }    

    const handleSubmit = () => {
        console.log("Just Submitting")

    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9F6AMohqths3xKN03jjk4qAkvbelaPeHbKJBc6Hg=s192-c-mo" />
                <form>
                    <input type = "text" 
                    className="messageSender__input" 
                    placeholder="What's on your mind?"
                    value={input}
                    />
                    {/* <Input 
                    type="file"
                    className="messageSender__fileSelector"
                    /> */}
                    <button type="submit"> Post </button>
                </form>
            </div>
        
        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <VideoCamIcon style={{ color: 'red' }} />
                <h3>Live video</h3>
            </div>
            <div className="messageSender__option">
                <PhotoLibraryIcon style={{ color: 'green' }} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender__option">
                <InsertEmoticonIcon style={{ color: 'orange' }} />
                <h3>Feeling/Activity</h3>
            </div>

        </div>

        </div>
    )
}

export default MessageSender
