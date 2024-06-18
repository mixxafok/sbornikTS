import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'
import { useNavigate } from 'react-router-dom';

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function OdnaListva({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}         {minor[6+start]}          {minor[1+start]}<br/></p>
                  Одна листва, одна листва<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}       {major[8+start]}          {minor[1+start]}<br/></p>
                  От всех твоих трудов.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}                 {major[11+start]}<br/></p>
                  Где плод посева твоего?<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}                {minor[1+start]}<br/></p>
                  Спаситель ждет его давно.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}<br/></p>
                  Ты не принес плода,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[8+start]}                {minor[6+start]}<br/></p>
                  Одна листва…<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Одна листва, одна листва.<br/>
                  Как любишь ты Христа?<br/>
                  Тебя до смерти возлюбил,<br/>
                  Чем ты Иисусу заплатил?<br/>
                  Ты не принес плода,<br/>
                  Одна листва…<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Одна листва, одна листва,<br/>
                  Ты не принес плода.<br/>
                  Каким предстанешь пред судом<br/>
                  И что ответишь пред Христом?<br/>
                  Погибнешь навсегда,<br/>
                  Одна листва.<br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  Одна листва, одна листва,<br/>
                  И лишь одни слова.<br/>
                  Господь грядет, а ты все спишь,<br/>
                  “Еще успею”, – говоришь.<br/>
                  Господь зовет:<br/>
                  “Вставай! Я жду плода”.<br/><br/>

                  <p className='main_song-couplet' >Куплет 5: </p>
                  Одна листва, одна листва,<br/>
                  Но можно жить с плодом.<br/>
                  Я буду жить лишь для Христа,<br/>
                  Я буду радостным всегда.<br/>
                  Тогда на небеса приду с плодом.<br/><br/>

</main> 

 
     </div>
   );
     
 }
