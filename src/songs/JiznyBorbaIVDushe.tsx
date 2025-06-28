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

export default function JiznyBorbaIVDushe({title, getNameSong}:ISong) {
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
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[6+start]} &emsp; &emsp; &emsp; &emsp; {minor[11+start]} &emsp; &ensp; &ensp; &emsp; &emsp;{major[1+start]}7 <br/></p>
        Жизнь борьба и в душе и в духе<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[6+start]} &ensp; &emsp; &emsp; &emsp; {minor[11+start]} &emsp; &emsp; &ensp; &ensp; {major[4+start]} <br/></p>
        Всюду тьма, истина в Иисусе.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[9+start]} &emsp; &emsp; &emsp; &emsp; &ensp; {minor[11+start]} &emsp; &emsp; &emsp; {major[1+start]} <br/></p>               
        Не страшит нас дорога жизни...<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[2+start]} &emsp; &emsp; &emsp; {major[1+start]}<br/></p>
        Мы идем за Христом!<br/><br/>

        <p className='main_song-couplet' >Припев: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[11+start]} &emsp; &emsp; &emsp; &emsp; &emsp; {major[4+start]} &emsp; &emsp; &ensp; {major[9+start]}<br/></p>
        Легкий путь Господь не обещал,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[11+start]} &emsp; &emsp; &emsp; &emsp; &emsp; &ensp; {major[1+start]} &emsp; &emsp; &emsp;{minor[6+start]}<br/></p>
        Путь святой, тернистый, узкий.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[11+start]} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {major[4+start]} &emsp; &emsp; {major[9+start]} &emsp; &emsp; {minor[11+start]}<br/></p>
        Жить без компромиссов силу дал <br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; &emsp; &emsp; &ensp; {major[1+start]} &emsp; &emsp; &ensp; {minor[6+start]}  <br/></p>
        При любой нагрузке.<br/><br/>

        <p className='main_song-couplet' >Куплет 2: </p>
        Нелегко плыть против теченья,<br/>
        Для других быть благословеньем.<br/>
        Этот путь Небо открывает!<br/>
        Мы идем за Христом!<br/><br/>

        <p className='main_song-couplet' >Куплет 3: </p>
        Каждый день новые задачи,<br/>
        Свет и тень, мы во свете значит.<br/>
        Не страшит нас дорога жизни...<br/>
        Мы идем за Христом!<br/><br/>
      </main> 
    </div>
  );
}
