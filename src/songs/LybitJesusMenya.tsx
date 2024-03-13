import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function LybitJesusMenya({title, getNameSong}:ISong ) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}               {minor[8+start]}<br/></p>
                  Любит Иисус меня, любит меня,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[1+start]}               {major[6+start]}<br/></p>
                  Песня об этом пусть будет моя.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}                  {minor[8+start]}<br/></p>               
                  И не скрываю я, пусть знают все: <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[1+start]}           {major[6+start]}       {major[6+start]}7<br/></p>
                  Любит Иисус меня, Его люблю я!<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}              {major[1+start]}<br/></p>
                  Он любит меня, Его люблю я,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}              {minor[3+start]}<br/></p>
                  Чудесная дружба с Ним у меня.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}                {major[1+start]}<br/></p>
                  Всегда и везде мне с Ним хорошо,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}        {major[1+start]}        {major[6+start]}<br/></p>
                  Он близок в беде, Он рядом со мной.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Мир предлагает мне дружбу свою, <br/>
                  Но говорю я: нет! И песню пою. <br/>
                  Сила моя лишь в Нем, в Боге святом,<br/>
                  Давайте же вместе петь дружно о том.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Друг, подойди к Христу, сердце открой, <br/>
                  Руку подай свою в руку Его, <br/>
                  Вечную радость в Нем ты обретешь <br/>
                  И песню новую тогда запоешь. <br/><br/>
        </main> 
     </div>
   );
     
 }
