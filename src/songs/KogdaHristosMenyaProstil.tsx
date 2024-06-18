import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'
import { useNavigate } from 'react-router-dom';

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function KogdaHristosMenyaProstil({title, getNameSong}:ISong) {
  const navigateTo = useNavigate()
  const isStyle = localStorage.getItem('SwitchValue')
  const slide:any = localStorage.getItem('SliderValues');
  const [viewAccordes, setViewAccordes] = useState(true);
  window.scrollTo(0,0)
  const [start, setStart]= useState(0)
  const [ modalOpen , setModalOpen ] = useState (false);

  return (
    <div>
      <header className='header_song' >
        <div className='header_song-arrow' onClick={()=>{getNameSong('NameSongs'); navigateTo('/')}}>
          <img  src={Arrow} width='100%' />
        </div>
        <p className='header_song-title' >{title}</p>
        <div className='header_song-music' onClick={() => { setModalOpen(!modalOpen)}}>
          <img  src={Music} width='100%' />
        </div>
        <p className={viewAccordes ? 'header_song-accordes' : 'header_song-accordes hideAccordes'}  onClick={() => setViewAccordes(!viewAccordes)} >A</p>
      </header>
 
      <div className={modalOpen ? 'modal_accord' : 'none'}>
        <div>
          <span onClick={()=>getTon(-1,{setStart})}>- </span> {start} <span onClick={()=>getTon(1,{setStart})}> +</span>
        </div>
      </div>

      <main className={isStyle === 'true' ? 'main_song songDark' : 'main_song'} style={{fontSize: `${JSON.parse(slide) }px`}}>
        <p className='main_song-couplet'  >Куплет 1: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; {major[7+start]} <br/></p>
        Когда Христос меня простил<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &ensp; {minor[4+start]} <br/></p>
        И землю в небо превратил, <br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; {minor[9+start]} <br/></p>
        Среди скорбей, борьбы земной -<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &ensp; {major[2+start]} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {major[11+start]} <br/></p>
        Там небо, где Христос со мной! <br/><br/>

        <p className='main_song-couplet' >Припев: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[4+start]} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;{minor[9+start]} <br/></p>
        Хвала Христу, Он спас меня,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; &emsp; &ensp; {major[2+start]} &emsp; &emsp; &emsp; &emsp; &ensp; {major[7+start]} &emsp; {major[11+start]}7 <br/></p>
        Простил грехи, открыл Себя,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; {minor[4+start]} &emsp; &emsp; &emsp; &emsp; {minor[9+start]} <br/></p>
        На суше, в море, над землёй -  <br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &ensp; {major[12+start]} &emsp; &emsp; &emsp; &emsp; &emsp;  {major[11+start]}7 &emsp; &emsp; &emsp; {minor[4+start]} <br/></p>
        Там небо, где Христос со мной!<br/><br/>

        <p className='main_song-couplet' >Куплет 2: </p>
        Небесный мир мне был далек,<br/>
        Меня Христос к Себе привлек,<br/>
        Когда вошёл Он в жизнь мою,<br/>
        С тех пор о Нём всегда пою.<br/><br/>

        <p className='main_song-couplet' >Куплет 3: </p>
        Неважно, где теперь живу:<br/>
        На высоте, внизу во рву,<br/>
        В стране родной, в стране чужой -<br/>
        Там небо, где Христос со мной!<br/><br/>
      </main> 
    </div>
  );
}
