// Code YouTubeDebugger Component Here
import React from 'react' 

export default class YouTubeDebugger extends React.Component {
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    changesetting = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {bitrate: 12})
        })
    }




    changereso = () => {
        this.setState({ 
             settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
        })
    }

    //video: {...this.state.settings.video, videoresolution: '720p'}

    
    render(){
        return (
            <div>
            <button className='bitrate' onClick={this.changesetting}>Change bitrate</button>
            <button className="resolution" onClick={this.changereso}>change resolution</button>
            </div>
        )
    }
}