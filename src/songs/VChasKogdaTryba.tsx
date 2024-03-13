import React, { useState } from 'react';
import { major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function VChasKogdaTryba({title, getNameSong}:ISong ) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}              {major[4+start]}              {major[11+start]}<br/></p>
                  В час, когда труба Господня над землёю прозвучит<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}<br/></p>
                  И настанет вечно светлая заря,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}             {major[4+start]}             {major[11+start]}<br/></p>               
                  Имена Он всех спасённых в перекличке повторит <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[6+start]}                  {major[11+start]}         ({major[4+start]}  {major[11+start]})<br/></p>
                  Там, по милости Господней, буду я.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}                <br/></p>
                  На небесной перекличке, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}<br/></p>
                  На небесной перекличке,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}                         {major[4+start]}<br/></p>
                  На небесной перекличке там, по <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}                 {major[6+start]}                   {major[11+start]}<br/></p>
                  Милости Господней, буду я.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  В день блаженный воскресенья всех умерших во Христе,<br/>
                  Водворенья их в обители Царя,<br/>
                  Всех святых, омытых Кровию, пролитой на кресте,<br/>
                  Созовёт Он, и на зов отвечу я.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Дай трудиться для Тебя, Господь, любовью всем служить,<br/>
                  С утра раннего и до заката дня.<br/>
                  А когда велишь работу мне земную Ты сложить,<br/>
                  На небесный клич тогда предстану я.<br/><br/>
</main> 

 
     </div>
   );
     
 }
