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

export default function PokaOgoniLybviChydesnoi({title, getNameSong}:ISong) {
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
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; &emsp; &emsp; {major[6+start]}  <br/></p>
        Пока огонь любви чудесной<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[6+start]} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &ensp; {minor[8+start]} <br/></p>
        Горит в груди волной живой,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; &emsp; &emsp; &emsp;{major[1+start]} <br/></p>               
        Мы силы юные совместно<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; &emsp; &emsp; &ensp;{major[1+start]} &emsp; &emsp; &emsp; &emsp; &emsp; &ensp; {major[6+start]} {major[1+start]}<br/></p>
        Употребим на труд святой.<br/><br/>

        <p className='main_song-couplet' >Припев: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[6+start]} &emsp; &emsp; &emsp; &emsp; &ensp; {major[11+start]} <br/></p>
        Юность прекрасная,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &ensp; {major[1+start]}  &emsp; &emsp; &emsp; &ensp; {major[6+start]} <br/></p>
        Молодость ясная!<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &ensp; {major[6+start]} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {major[11+start]} &emsp; &emsp; &emsp; &emsp; {minor[8+start]}<br/></p>
        Сил, здоровья не жалей (для людей),<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &ensp; &ensp; {major[1+start]} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &ensp; {major[6+start]}  <br/></p>
        К Богу духом пламеней (всё сильней).<br/><br/>

        <p className='main_song-couplet' >Куплет 2: </p>
        Пока сильны стремленья к небу<br/>
        И много сил, здоровья в нас,<br/>
        Друзья, распределим умело<br/>
        Для славы Божьей всякий час!<br/><br/>

        <p className='main_song-couplet' >Куплет 3: </p>
        Ведь даже старцы вспоминают<br/>
        С улыбкой светлой на устах<br/>
        Порывы юности святые,<br/>
        О всех друзьях и о трудах.<br/><br/>

        <p className='main_song-couplet' >Куплет 4: </p>
        Своих забот у нас немного,<br/>
        Не будем предаваться им,<br/>
        Не для себя, а для другого<br/>
        Мы свои силы отдадим.<br/><br/>
      </main> 
    </div>
  );
}
