import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function UnostSvetlya({title, getNameSong}:ISong ) {
  
  const isStyle = localStorage.getItem('SwitchValue')
  const slide:any = localStorage.getItem('SliderValues');
  const [viewAccordes, setViewAccordes] = useState(true);
  window.scrollTo(0,0)
  const [start, setStart]= useState(0)
  const [ modalOpen , setModalOpen ] = useState (false);

   return (
<div>
 
             <header className='header_song' >
        <div className='header_song-arrow' onClick={()=>getNameSong('NameSongs')}>
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[3+start]}      {major[6+start]}<br/></p>
                 Юность светлая, весна ранняя –<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}      {major[1+start]}      {major[6+start]}<br/></p>
                  Мы ее Творцу принесем,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}      {minor[8+start]}<br/></p>
                  Молодые мы в золотые дни<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[3+start]}      {major[10+start]}      {minor[3+start]}<br/></p>
                  Лишь для Господа живем.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Тьма неверия окружает нас,<br/>
                  Туча черная впереди,<br/>
                  Мы Христа огни в эти злые дни<br/>
                  Расставляем на пути.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Хоть и труден путь и тернистый он,<br/>
                  Со Христом его мы пройдем.<br/>
                  Молодые мы в золотые дни<br/>
                  Лишь для Господа живем.<br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  О не бойся, друг, не смущайся, брат,<br/>
                  Проходя свой жизненный путь!<br/>
                  Впереди тебя твой Христос прошел<br/>
                  И тебя идти зовет.<br/><br/>

                  <p className='main_song-couplet' >Куплет 5: </p>
                  Так спеши же, друг, посвятить Христу<br/>
                  Утро юности, жизни дни,<br/>
                  И Он даст тебе золотой венец,<br/>
                  Будешь царствовать ты с Ним.<br/><br/>

</main> 

 
     </div>
   );
     
 }
