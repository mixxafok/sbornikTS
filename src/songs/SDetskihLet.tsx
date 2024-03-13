import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function SDetskihLet({title, getNameSong}:ISong) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >      {minor[6+start]}                                        {major[2+start]}       <br/></p>
                  С детских лет стремились к небесам твои мечты,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >      {major[4+start]}                                          {major[9+start]}              {major[1+start]}   <br/></p>
                  Про любовь Иисуса с колыбели знаешь ты <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >      {minor[6+start]}                                     {major[2+start]}       <br/></p>               
                  Но совсем недавно стал ты чаще замечать,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >      {major[4+start]}                                   {major[9+start]}                     {major[1+start]} <br/></p>
                  Как тебе не просто против мира устоять<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >      {minor[6+start]}                                                {minor[11+start]}<br/></p>
                  Соблазнам так легко поддатся и свернуть с пути<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >         {major[4+start]}                                                {major[9+start]}<br/></p>
                  Но без Бога невозможно жизнь найти<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >      {major[2+start]}                                {minor[11+start]}<br/></p>
                  Мир влечет людей красотой огней<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                                     {major[1+start]}                               {minor[6+start]}<br/></p>
                  Только с каждым днем он ранит все больней<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Перед тем как выбрать путь которым ты пойдешь <br/>
                  Хорошо подумай: что без Бога ты найдешь?<br/>
                  Вспомни сколько раз тебе Он руку подавал<br/>
                  Как Ему быть верным ты всем сердцем обещал... <br/><br/>
</main> 

           
 
     </div>
   );
     
 }
