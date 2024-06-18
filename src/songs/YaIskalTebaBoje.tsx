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

export default function YaIskalTebaBoje({title, getNameSong}:ISong) {
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
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; {major[11+start]} &emsp; &emsp; &emsp; {major[6+start]} &emsp; &emsp; &emsp;{minor[8+start]} <br/></p>
        Я искал Тебя Боже в сиянии звёзд,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; &emsp; &ensp; {major[4+start]} &ensp; &ensp; {major[6+start]} &emsp; &emsp; &ensp; {minor[8+start]} <br/></p>
        В полыхании ранней зари. <br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; &emsp; &ensp;{major[11+start]} &emsp; &ensp; {major[6+start]} &emsp; &emsp; &emsp; {minor[8+start]} <br/></p>               
        В щебетании птиц, в белизне облаков, <br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; &ensp; &ensp;{major[4+start]} &emsp; &emsp; &emsp; {major[6+start]} &emsp; &ensp;{minor[8+start]} &ensp; {major[8+start]}<br/></p>
        В виноградной лозе у реки. <br/><br/>

        <p className='main_song-couplet' >Припев: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; &emsp; {minor[1+start]} &emsp; &emsp; &emsp; {minor[8+start]} &emsp; {major[4+start]}<br/></p>
        О мой Бог, как найти Тебя,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; &emsp; {minor[1+start]} &emsp; &emsp; &emsp; &emsp; {major[6+start]} &emsp; &emsp; &emsp;{minor[8+start]} {major[8+start]}<br/></p>
        Как испить мне всю благость Твою?<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; &emsp; &emsp; {minor[1+start]} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;{minor[8+start]} &emsp; {major[6+start]} &emsp; {major[4+start]}<br/></p>
        Дай мне крылья любви, чтоб пронзать облака, <br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; &emsp;{minor[1+start]} &emsp; &emsp; {major[6+start]}  ({minor[3+start]}) &emsp; &emsp; {minor[8+start]}  {major[8+start]}  ({minor[8+start]})<br/></p>
        И с Тобою быть вечно в раю.<br/><br/>

        <p className='main_song-couplet' >Куплет 2: </p>
        А когда я устал и возлёг у ручья,<br/>
        Тихо имя Твоё я призвал.<br/>
        Легкий ветер коснулся лица моего,<br/>
        О Господь, это Ты, я узнал! <br/><br/>

        <p className='main_song-couplet' >Припев: </p>
        О мой Бог, Ты нашёл меня,<br/>
        Среди тысяч и тысяч людей.<br/>
        Ты дал крылья любви, чтоб пронзать облака,<br/>
        И я вечно в ладони Твоей.<br/><br/>
      </main> 
    </div>
  );
}
