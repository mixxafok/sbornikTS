import { useState } from 'react'
import './App.css'
import { Toolbox } from './component/ToolBox'
import NameSongs from './component/NameSongs'

function App() {
  const [nameSong, getNameSong] = useState('NameSongs')
  const [titleSong, getTitleSong] = useState('')
  const isStyle = localStorage.getItem('SwitchValue')
  return (
    <div className={isStyle === 'true' ? document.body.style.backgroundColor = '#121212' : document.body.style.backgroundColor = '#eee'}>
    {nameSong==='NameSongs' ?
      <NameSongs getNameSong={getNameSong} getTitleSong={getTitleSong} />
       : 
      <Toolbox name={nameSong} getNameSong={getNameSong} titleSong={titleSong}/>
    }
    </div>
  )
}

export default App
