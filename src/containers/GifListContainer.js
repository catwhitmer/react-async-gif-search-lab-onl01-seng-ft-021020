import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
 


class GifListContainer extends Component {
 
  state = { 
    gifs: [] 
  }

  handleSubmit = () => {
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=7zDlRMpz0xJmX8lqp3vBw4aRV0fWyJG8')
      .then(response => response.json())
      .then(json => {
        this.setState({gifs: json.data.slice(0, 3) })
      })
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default GifListContainer;