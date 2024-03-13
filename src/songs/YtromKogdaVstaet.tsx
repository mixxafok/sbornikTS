import React, { useState } from 'react';
import { major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function YtromKogdaVstaet({title, getNameSong}:ISong) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[2+start]}                           {major[9+start]}7       <br/></p>
                  Утром, когда встает рассвет,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                       {major[2+start]}             <br/></p>
                  Боже, Тебе пою <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                          {major[9+start]}7       <br/></p>               
                  За благодать Твою ко мне<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                           {major[2+start]}      <br/></p>
                  И за любовь Твою.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >    {major[2+start]}         {major[9+start]}7<br/></p>
                  Славу Тебе пою<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >              {major[2+start]}                       <br/></p>
                  За благодать (и любовь) Твою,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >          {major[7+start]}      {major[9+start]}7         {major[2+start]}<br/></p>
                  Силы дай мне всегда<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                       {major[9+start]} - {major[2+start]}<br/></p>
                  Прославлять Тебя.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  В радости дай воспеть Тебе,<br/>
                  В скорби - не унывать<br/>
                  И о Твоей святой любви<br/>
                  Людям всем рассказать. <br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  В жизни моей Тебя хвалить –<br/>
                  Цель будет пусть моя,<br/>
                  Чтоб чудеса Ты мог творить<br/>
                  В сердце моем всегда. <br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  Когда приходит день к концу,<br/>
                  Звезды с небес блестят,<br/>
                  К Богу с молитвой прихожу,<br/>
                  Чтобы опять сказать: <br/><br/>

                  <p className='main_song-couplet' >Припев 2: <br/></p>
                  Милости полон Ты,<br/>
                  Милости (милости) и любви!<br/>
                  И хочу я всегда<br/>
                  Прославлять Тебя! <br/><br/>
</main> 

           
 
     </div>
   );
     
 }
