import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function ManitSerdceMechtou({title, getNameSong}:ISong) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}       <br/></p>
                  Манит сердце мечтою<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                             {minor[1+start]}       <br/></p>
                  Высь небес голубая, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                                    {major[3+start]}7       <br/></p>
                  Нашей общей судьбою<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                             {minor[8+start]}       <br/></p>
                  Стала вера живая. <br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {major[8+start]}7                             {minor[1+start]}<br/></p>
                  Он нас сделал родными,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >              {major[6+start]}                   {major[11+start]}<br/></p>
                  Он нас сделал друзьями,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                 {minor[8+start]}     {minor[1+start]}<br/></p>
                  Дал нам новое имя,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >             {major[3+start]}7           {minor[8+start]}<br/></p>
                  Нас зовут христиане.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Иисус стал нам другом,<br/>
                  Мы на деле узнали,<br/>
                  Он врачует недуги,<br/>
                  Удаляет печали. <br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Он дарует прощенье,<br/>
                  Жизнь и радость без меры<br/>
                  И второе рожденье,<br/>
                  Только искренно веруй. <br/><br/>
        </main> 
     </div>
   );
     
 }
