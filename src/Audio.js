import React, { Component } from 'react'
 
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
 
export default class App extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
      recordState: null
    }
    this.setRecordingCicle = this.setRecordingCicle.bind(this)
  }

  componentDidMount() {
      console.log('did')
      setInterval(this.setRecordingCicle, 2000)
  }

  setRecordingCicle() {
      console.log('setRecordingCicle')
      this.setState({
        recordState: RecordState.STOP
      })
      this.setState({
        recordState: RecordState.START
      })
  }
 
  start = () => {
    this.setState({
      recordState: RecordState.START
    })
  }
 
  stop = () => {
    this.setState({
      recordState: RecordState.STOP
    })
  }
 
  //audioData contains blob and blobUrl
  onStop = (audioData) => {
    console.log('audioData', audioData)

    const xml = new XMLHttpRequest()
    xml.open('POST','http://127.0.0.1:8000/api/')
    xml.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xml.send(audioData.blob)
  }
 
  render() {
    const { recordState } = this.state
 
    return (
      <div>
        <AudioReactRecorder state={recordState} onStop={this.onStop} />
 
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    )
  }
}