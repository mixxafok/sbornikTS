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

export default function ChtoTakoeChristiansctvo({title, getNameSong}:ISong ) {
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
          Что такое христианство?<br/>
          Лишь красивые слова?<br/>
          Или это - постоянство,  <br/>
          Образ жизни и дела?<br/><br/>

          <p className='main_song-couplet' >Припев: </p>
          Нужно быть, а не казаться<br/>
          Христианства в этом суть!<br/>
          За Христа всегда держаться<br/>
          И как Он пройти свой путь.<br/><br/>

          <p className='main_song-couplet' >Куплет 2: </p>
          Иисус оставил небо,<br/>
          Жизнь свою за нас отдал.<br/>
          Чтобы ты погибшим не был,<br/>
          Он так сильно пострадал.<br/><br/>

          <p className='main_song-couplet' >Куплет 3: </p>
          Посвяти все жизни цели<br/>
          Иисусу одному,<br/>
          Прояви любовь на деле<br/>
          И послушен будь Ему.<br/><br/>
        </main> 

    </div>
   );
     
 }
