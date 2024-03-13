import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function MilostiyBoje({title, getNameSong}:ISong) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {minor[11+start]}         {major[6+start]}                                   {minor[11+start]}       <br/></p>
                  Милостью, Боже, Твоею живу,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {minor[4+start]}             {minor[11+start]}     {major[6+start]}       {minor[11+start]}<br/></p>
                  Только Твоей, Только Твоей, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >               {minor[11+start]}       {major[6+start]}         {major[7+start]}  <br/></p>               
                  И от Тебя никуда не уйду. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {minor[4+start]}             {major[6+start]}             {minor[11+start]}  <br/></p>
                  Будь же опорой моей! <br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {minor[11+start]}                                 {minor[4+start]}<br/></p>
                  Милость Твоя надо мной велика,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {major[6+start]}                                  {minor[11+start]}          {major[6+start]}<br/></p>
                  Ночью и днем окружает меня.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {minor[11+start]}                        {minor[4+start]}      <br/></p>
                  Если исчезнет все на земле,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {major[6+start]}                              {minor[4+start]}   {major[6+start]}                {minor[11+start]}<br/></p>
                  Милость Твоя будет вечной ко мне.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Миловать любишь и любишь прощать - <br/>
                  Если споткнусь и упаду, <br/>
                  Руку с участьем спешишь мне подать,<br/>
                  Чтобы продолжил я путь. <br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Господи, милость Твоя велика,<br/>
                  И глубока и широка, <br/>
                  Выше, чем дальних небес облака,<br/>
                  Непостижима она!<br/><br/>
        </main> 
     </div>
   );
     
 }
