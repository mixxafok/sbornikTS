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

export default function VremyaDanoNaVremya({title, getNameSong}:ISong) {
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
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp; {minor[9+start]} &emsp;&emsp;&emsp;&ensp;&emsp; {minor[2+start]}<br/></p>
        День за днём незаметно для нас,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {major[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[9+start]} <br/></p>
        Мы всё ближе к назначенной цели.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&ensp; {minor[9+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {minor[2+start]} <br/></p>
        Увлекаясь мечтою подчас,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&ensp; {major[11+start]}7 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[4+start]}7 <br/></p>
        Мы не ценим того, что имеем.<br/><br/>

        <p className='main_song-couplet' >Припев: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&ensp; {minor[2+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[7+start]} <br/></p>
        Научи дорожить, Господь,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {major[12+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[5+start]} <br/></p>
        Тем богатстсвом что здесь владеем,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp; {minor[2+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[4+start]} <br/></p>
        Дорожить каждым новым днём,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[9+start]} <br/></p>
        И не тратить впустую время.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {minor[2+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {major[7+start]} <br/></p>
        Может годы, а может час,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {major[12+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[5+start]} <br/></p>
        Может только одно мгновенье,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {major[10+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[9+start]} <br/></p>
        "Нам вечность дана навсегда,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {minor[2+start]} &emsp;&emsp;&emsp; {major[4+start]} &emsp;&emsp;&emsp;&emsp; {minor[9+start]}<br/></p>
        Наше время - дано нам на время"<br/><br/>

        <p className='main_song-couplet' >Куплет 2: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp; {minor[9+start]} &emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp; {minor[2+start]}<br/></p>
        На развилках житейских дорог,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {major[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[9+start]} <br/></p>
        Мы порой своих близких теряем.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&ensp; {minor[9+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {minor[2+start]} <br/></p>
        Даже самый красивый цветок,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&ensp; {major[11+start]}7 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[4+start]}7 <br/></p>
        Наклоняясь к земле, увядает.<br/><br/>

        <p className='main_song-couplet' >Куплет 3: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {minor[9+start]} &emsp;&emsp;&emsp;&ensp;&emsp;&emsp; {minor[2+start]}<br/></p>
        Не влекут нас земные огни,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {major[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[9+start]} <br/></p>
        Покорились иному мы царству.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&ensp; {minor[9+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {minor[2+start]} <br/></p>
        Наша лучшая жизнь - впереди,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&ensp; {major[11+start]}7 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[4+start]}7 <br/></p>
        И надежда на вечность прекрасна!<br/><br/>

      </main> 

    </div>
   );
     
 }
