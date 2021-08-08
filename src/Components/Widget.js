import React from 'react'

const Widget = () => {
    return (
        <div className="widgets">
            {/* <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&show_text=false&width=734&height=411&appId" 
            width="534" 
            height="411" 
            style={{border:"none",overflow:"hidden"}}
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media" 
            allowFullScreen="true">
            </iframe> */}
            
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmeutex%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
            width="540" 
            height="700" 
            style={{border:"none",overflow:"hidden"}} 
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media">
            </iframe>
        </div>
    )
}

export default Widget
