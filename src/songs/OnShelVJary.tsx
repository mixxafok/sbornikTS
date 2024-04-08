import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function OnShelVJary({title, getNameSong}:ISong  ) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}         {minor[11+start]}<br/></p>
                  Он шел в жару и в зной, В пыли больших дорог,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                 {major[1+start]}     {minor[6+start]}<br/></p>
                  Учил любить, прощать обиды, боли.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                 {minor[6+start]}   {minor[11+start]} <br/></p>               
                  Он с мытарями жил, Не знал ни в ком врага,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >           {major[1+start]}             {minor[6+start]}<br/></p>
                  Склонялся к тем, кто был в слезах и горе.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >            {minor[6+start]}         {minor[11+start]}<br/></p>
                  Учитель, свой путь пройти я должен так, как сделал это Ты.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >          {major[1+start]}               {minor[6+start]}<br/></p>
                  Учитель! Вокруг есть люди, и я должен их любить, как Ты,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >     {minor[6+start]}             {minor[11+start]}<br/></p>
                  Учитель, ведь не легко нести чужое бремя так, как Ты,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >   {major[1+start]}                      {minor[6+start]}               {minor[1+start]}<br/></p>
                  Учитель я все смогу, но только будь всегда со мною Ты.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Он принял грош вдовы И Магдалины плач.<br/>
                  Он знал, что надо их любить, прощать.<br/>
                  И Никодиму путь во тьме Он указал,<br/>
                  И в Иордане принял Сам крещенье.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  И мы пойдем в жару, В пыли больших дорог,<br/>
                  А Он научит нас любви, прощенью,<br/>
                  И мытаря принять, и зло врагов забыть,<br/>
                  И людям дать добро и утешенье.<br/><br/>
        </main> 
     </div>
   );
     
 }
