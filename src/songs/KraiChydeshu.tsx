import React, { useState } from 'react';
import { major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'
import { useNavigate } from 'react-router-dom';

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function KraiChydeshu({title, getNameSong}:ISong ) {
  const navigateTo = useNavigate()
  const isStyle = localStorage.getItem('SwitchValue')
  const slide:any = localStorage.getItem('SliderValues');
  const [viewAccordes, setViewAccordes] = useState(true);
  window.scrollTo(0,0)
  const [start, setStart]= useState(0)
  const [ modalOpen , setModalOpen ] = useState (false);
   return (
<div>
 
             <header className='header_song' >
        <div className='header_song-arrow' onClick={()=>{getNameSong('NameSongs'); navigateTo('/')}}>
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}                                                    {major[9+start]}<br/></p>
                  Край чудесный нас ждёт там на небе,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                          {major[11+start]}              {major[4+start]}<br/></p>
                  Где окончится труд и печаль!<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}                                                     {major[9+start]}<br/></p>
                  От скорбей я стремлюсь к той Отчизне,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}                              {major[11+start]}             {major[4+start]} <br/></p>
                  Где есть вечная радость и мир.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}<br/></p>
                  Край чудесный!<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >             {major[4+start]}<br/></p>
                  Край чудесный!<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >             {major[11+start]}                              {major[4+start]}<br/></p>
                  Сердце радостно рвётся к тебе.<br/>
                  Край чудесный! <br/>
                  Край чудесный!<br/>
                  Там ведь ждет нас Спаситель к Себе.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Край чудесный, где Ангелов пенье<br/>
                  Раздаётся, как шум многих вод,<br/>
                  Славу Агнцу возносят святые,<br/>
                  "Аллилуйя!" - они все поют.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Край чудесный, где в свете небесном<br/>
                  Будем видеть мы славу Творца;<br/>
                  В тени пальм и в долинах чудесных<br/>
                  Там я буду счастлив без конца.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  В край чудесный мы скоро прибудем<br/>
                  И увидим Того, Кто нам мил;<br/>
                  Там утихнет скорбящее сердце:<br/>
                  Ведь там вечная радость и мир.<br/><br/>
        </main> 
     </div>
   );
     
 }
