import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function TiNePechalsya({title, getNameSong}:ISong) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}     {major[4+start]}     {major[6+start]}     {major[11+start]}<br/></p>
                  Я постигаю сквозь слезы и боль<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}     {minor[1+start]}     {major[3+start]}7     {minor[8+start]}<br/></p>
                  Радость встречи и горечь разлуки.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}     {major[4+start]}     {major[6+start]}     {major[11+start]}<br/></p>
                  Пью эту чашу, где сладость и соль,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}     {minor[1+start]}     {major[3+start]}7     {minor[8+start]}<br/></p>
                  Перемешались надежда и муки.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}     {minor[1+start]}     {major[6+start]}     {major[11+start]}<br/></p>
                  Ты не печалься, не беспокойся,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}     {minor[1+start]}     {major[3+start]}7     {minor[8+start]}<br/></p>
                  Если Бог с нами - чего бояться?<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}     {minor[1+start]}     {major[6+start]}     {major[11+start]}<br/></p>
                  Ты не печалься, не беспокойся,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}     {minor[1+start]}     {major[3+start]}7     {minor[8+start]}<br/></p>
                  Если Бог с нами.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Свободу ищу из железных оков, <br/>
                  Тех, что зовутся житейское счастье. <br/>
                  Вся моя жизнь - это несколько слов<br/>
                  В тихой молитве перед причастьем.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  И не жалея о прошлом ничуть,<br/>
                  Вижу как катится мир к катастрофе.<br/>
                  Верую в крестный мной избранный путь,<br/>
                  В тайну распятой любви на Голгофе.<br/><br/>

</main> 

 
     </div>
   );
     
 }
