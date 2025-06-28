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

export default function TiPrisheKakDojd({title, getNameSong}:ISong ) {
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
          Ты пришёл, как дождь на скошенный луг,<br/>
          Озарился мир весь радугой.<br/>
          Небеса да славят Господа<br/>
          // И все миры // (2р)<br/><br/>

          <p className='main_song-couplet' >Припев: </p>
          Радуйтесь! Пропело небо нам.<br/>
          Радуйтесь! Пропели горы нам.<br/>
          Радуйтесь! Пропели Ангелы.<br/>
          // Радуйтесь! // (2р)<br/><br/>

          <p className='main_song-couplet' >Куплет 2: </p>
          Радость всем в ясный день весны,<br/>
          Радость всем в чудный миг любви.<br/>
          Радость всем, кто возлюбил Творца,<br/>
          // Радость всем // (2р)<br/><br/>

          <p className='main_song-couplet' >Куплет 3: </p>
          Приходи, как дождь на скошенный луг,<br/>
          Озари, как солнце ночи тьму.<br/>
          Небеса поют Тебе хвалу.<br/>
          Тебе хвалу, Тебе хвалу.<br/><br/>
        </main> 

    </div>
   );
     
 }
