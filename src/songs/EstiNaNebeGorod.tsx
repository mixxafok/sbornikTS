import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function EstiNaNebeGorod({title, getNameSong}:ISong ) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}       {minor[6+start]}    {major[8+start]}       {minor[1+start]} <br/></p>
                  Есть на небе город, чудный город света,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[9+start]}    {minor[11+start]}       {minor[4+start]} <br/></p>
                  Там нужды болезни и печали нету.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}       {minor[6+start]}   {minor[11+start]}       {minor[4+start]} <br/></p>
                  Там Живут святые, там играют гусли, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}        {minor[8+start]} <br/></p>
                  Воспевая славу Господу Иисусу.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}       {minor[6+start]} <br/></p>
                  Болезни там нет, не гаснет там свет, Иерусалим.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[11+start]}       {minor[4+start]}       {minor[6+start]}<br/></p>
                  Там вечно живут, там песни поют, Иерусалим.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}       {minor[6+start]} <br/></p>
                  Ты город живых, ты город святых, Иерусалим.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}       {minor[6+start]}       {minor[1+start]}    {minor[6+start]} <br/></p>
                  К тебе я стремлюсь, с тобой я сольюсь, Иерусалим.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Золотом обложен город тот прекрасный,<br/>
                  Лишь в тебе, Иерусалим, вечно буду счастлив.<br/>
                  Жизнь мою преобрази здесь, в земной долине,<br/>
                  Чтоб покой душе найти в Иерусалиме.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Братья мои, сёстры, там мы будем вместе<br/>
                  Воспевать Иисусу радостные песни.<br/>
                  Так давайте ж на земле вместе славить Бога,<br/>
                  Чтобы стала нам светлей в небеса дорога.<br/><br/>
        </main> 
     </div>
   );
     
 }
