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

export default function ChakaemCyabeNashIsus({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >     {minor[6+start]}                          {minor[11+start]}       <br/></p>
                  Чакаем Цябе, наш Ісус,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >     {major[1+start]}                                 {minor[6+start]}       <br/></p>
                  I молім: прыйдзі Ты да нас. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >          {major[9+start]}                        {major[4+start]}     <br/></p>               
                  Мы любім сваю Беларусь,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >      {minor[11+start]}                     {major[1+start]} <br/></p>
                  I хочам, каб Ты яе спас. <br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >      {minor[11+start]}         {major[1+start]}                {minor[6+start]}<br/></p>
                  Прыйдзі ў яе Ты двары,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >      {major[9+start]}                                {major[4+start]}<br/></p>
                  У вёскі прыйдзі, у гарады,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >      {minor[11+start]}                    {minor[6+start]}<br/></p>
                  Жыві ў яе сэрцы, Ісус,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >      {minor[11+start]}        {major[1+start]}           {minor[6+start]}<br/></p>
                  Чакае Цябе Беларусь!<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Засмучана моцна яна,<br/>
                  Нялёгкі дастаўся ёй лёс.<br/>
                  I колькі ўжо слёз праліла,<br/>
                  Суцеш яе, любы Хрыстос! <br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  У грахах яе гіне народ,<br/>
                  Няпраўда, як цемень, лягла.<br/>
                  Здымі ж, Ісус, гэты гнёт,<br/>
                  I вызваль ад лютага зла. <br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  Як добра з Табою, Ісус,<br/>
                  Як хораша там, дзе Ты ёсьць,<br/>
                  Няхай Табе ўся Беларусь<br/>
                  Аддасьць сваё сэрца i лёс!<br/><br/>
</main> 

           
 
     </div>
   );
     
 }
