import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function PustYgasloNebo({title, getNameSong}:ISong ) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}     {major[9+start]}     {minor[1+start]}     {major[9+start]} <br/></p>
                  Пусть угасло небо, пусть померк рассвет,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}     {major[9+start]}      {minor[1+start]}     {major[9+start]} <br/></p>
                  Пусть умолкли люди, пусть молчат в ответ<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}     {major[11+start]} <br/></p>
                  На любовь Твою.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}     {major[9+start]}      {minor[1+start]}   {major[9+start]}      {major[4+start]} <br/></p>
                  Но шелестом дождя, песнею ручья<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}      {minor[1+start]}<br/></p>
                  Для Тебя, Господь,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}      {minor[1+start]}   {major[9+start]}      {major[4+start]} <br/></p>
                  Из сердца в небеса льется песнь моя,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}      {minor[1+start]}<br/></p>
                  Песня без конца.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Да, кругом раздоры, Да и Ты забыт,<br/>
                  Люди прочь уходят в путь, что тьмой покрыт,<br/>
                  Где Ты забыт.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Ты придёшь и навсегда yмолкнет грех. <br/>
                  Там, где темнота была,Сияет свет,<br/>
                  Bечный свет<br/><br/>

</main> 

 
     </div>
   );
     
 }
