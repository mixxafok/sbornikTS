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

export default function PutiIstinaJizni({title, getNameSong}:ISong) {
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
            <span onClick={()=>getTon(-1,{setStart})}> -&nbsp; </span> {start} <span onClick={()=>getTon(1,{setStart})}>&nbsp;+ </span>
          </div>
        </div>

        <main className={isStyle === 'true' ? 'main_song songDark' : 'main_song'} style={{fontSize: `${JSON.parse(slide) }px`}}>
          <p className='main_song-couplet' >Припев 1-4: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {minor[1+start]}     {major[1+start]}7   <br/>
          </p>
          Путь, Истина, Жизнь -  <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {minor[6+start]}    <br/>
          </p>
          Это слово святое Твоё, <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {minor[1+start]}      {minor[6+start]} <br/>
          </p>
          Это Имя святое Твоё,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {major[8+start]}7       {minor[1+start]}<br/>
          </p>
          Путь, Истина, Жизнь. <br/><br/>
          
          <p className='main_song-couplet'  >Куплет 1: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >
            {minor[6+start]}       {major[11+start]} <br/>
          </p>
          Только Он нам такие слова говорил, <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {major[4+start]}      {minor[1+start]} <br/>
          </p>
          Только Он чудеса перед нами творил, <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {minor[6+start]}       {major[8+start]} <br/>
          </p>               
          Только Иисус. <br/><br/>

          <p className='main_song-couplet'  >Куплет 2: </p>
          Тот, кто верит в Меня, Жизнь и свет обретёт, <br/>
          Тот, кто следует Мне, Не в потёмках живёт, <br/>              
          Но в свете дня. <br/><br/>

          <p className='main_song-couplet'  >Куплет 3: </p>
          Вы научитесь правде, Мне верность храня, <br/>
          Вас свободными сделает Правда Моя, <br/>            
          Правда Моя. <br/><br/>

          <p className='main_song-couplet'  >Куплет 4: </p>
          Кто креста не берёт, тот Меня не познал, <br/>
          Кто себя бережёт, тот себе потерял, <br/>              
          Следуйте Мне. <br/><br/>

          <p className='main_song-couplet' >Припев 5: </p>
          В путь, истину, жизнь, <br/>
          Так, как слово Твоё говорит <br/>
          Так, как Имя Твоё говорит,<br/>
          В путь, истину, жизнь. <br/><br/>

          <p className='main_song-couplet' >Куплет 5: </p>
          В путь, истину, жизнь, Оно не от мира сего, <br/>
          Лишь от Духа и истины Царство Моё, <br/>              
          Царство Моё. <br/><br/>

          <p className='main_song-couplet' >Припев 6: </p>
          Путь, Истина, Жизнь <br/>
          Всё вмещается в Имя Твоё<br/>
          Всё вмещается в Слово Твоё,<br/>
          Путь, Истина, Жизнь. <br/><br/>

          <p className='main_song-couplet' >Куплет 6: </p>
          Я приду к вам опять И возьму вас с Собой <br/>
          И к Отцу поведу вас дорогой прямой, <br/>              
          Вместе пойдём. <br/><br/>

          <p className='main_song-couplet' >Припев: </p>
          В путь, истину, жизнь,<br/>
          Так, как слово Твоё говорит<br/>
          Так, как Имя Твоё говорит,<br/>
          В путь, истину, жизнь.<br/><br/>
        </main> 
     </div>
   );
     
 }
