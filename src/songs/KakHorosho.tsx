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

export default function KakHorosho({title, getNameSong}:ISong ) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}          {major[4+start]}<br/></p>
                  Как хорошо, что со мною Спаситель,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[11+start]}          {minor[6+start]}          {minor[1+start]}/{major[8+start]}<br/></p>
                  Вечный Творец, Он так любит меня! <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}          {minor[6+start]}<br/></p>
                  В жизни моей Он - мой Друг и Хранитель, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}          {major[8+start]}           {minor[1+start]}/E<br/></p>
                  Всюду со мной, среди ночи и дня.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Где бы ни шла моей жизни дорога.  <br/>
                  Буду я жить для Иисуса Христа,  <br/>
                  Мне не страшна никакая тревога. <br/>
                  Верю Ему, в Нем любви полнота.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Путь наш суров, устаем временами. <br/>
                  Движемся мы по житейским волнам. <br/>
                  Скоро придет наш Спаситель за нами,  <br/>
                  Будет конец нашим бедам, скорбям.<br/><br/>

        </main> 
     </div>
   );
     
 }
