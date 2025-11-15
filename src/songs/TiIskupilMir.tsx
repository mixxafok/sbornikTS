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

export default function TiIskupilMir({title, getNameSong}:ISong ) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}      {major[6+start]}      {minor[8+start]}<br/></p>
                  Ты искупил мир от греха,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}     {major[4+start]}<br/></p>
                  Ты дал ему любовь и свет,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}      {minor[1+start]}<br/></p>
                  Зажёг потухшие сердца<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}     {major[6+start]}<br/></p>
                  и дал надежду.<br/>
                  Мы пред Тобою предстоим <br/>
                  и каждый дорог для Тебя,<br/>
                  За всё, Отец, благодарим <br/>
                  и превозносим.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}     {major[6+start]}<br/></p>
                  Слава Тебе и величье, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}     {major[6+start]}<br/></p>
                  Слава в веках и народах,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}     {major[11+start]}<br/></p>
                  Сила Твоя безгранична,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}     {major[6+start]}  ({major[11+start]})<br/></p>
                  Милость Твоя во все роды.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Ты открываешь новый мир <br/>
                  Любви, надежды, чистоты.<br/>
                  С Тобой не трудно мне идти, <br/>
                  Ведь Ты со мною.<br/>
                  Твоя любовь меня хранит,<br/>
                  Дает мне силу и покой,<br/>
                  И потому сердца людей<br/>
                  Полны хвалой!<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Христа увидеть цель моя,<br/>
                  Об этом лишь мечтаю я. <br/>
                  И через бури и дожди,<br/>
                  Иду навстречу. <br/>
                  Ты Бог Царей и Бог рабов,<br/>
                  Ты бедных и богатых Бог, <br/>
                  Ты Бог неведомых миров,<br/>
                  Тебя я славлю!<br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  Я больше не во власти зла<br/>
                  И не служу чужим богам. <br/>
                  Твой Свет дорогу указал<br/>
                  И я свободен. <br/>
                  К престолу славы прихожу<br/>
                  И не стыжусь поднять глаза, <br/>
                  Иисус меня от смерти спас<br/>
                  И дал свободу<br/><br/>

                  <p className='main_song-couplet' >Куплет 5*: </p>
                  Своею смертью смерть попрал,<br/>
                  И ад Тебя не удержал: <br/>
                  Ты силой Божией воскрес,<br/>
                  Воскрес в день третий. <br/>
                  Превознесённый Царь царей,<br/>
                  Ты стал Спасителем людей. <br/>
                  Тебя мы славим в этот день<br/>
                  За воскресенье<br/><br/>

</main> 

 
     </div>
   );
     
 }
