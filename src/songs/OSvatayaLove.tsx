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

export default function OSvatayaLove({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >&emsp;&emsp;&emsp;{major[11+start]}  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  {major[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]} <br/></p>
                  О, святая любовь, совокупность всего совершенного,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >&emsp;&emsp;{minor[8+start]}  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]}<br/></p>
                  Глубина христианства и вести евангельской суть.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >&emsp;&emsp;&emsp;&emsp;&emsp;{major[4+start]}  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]}-{minor[8+start]}    <br/></p>               
                  Всё пройдёт, но любовь пребывает во веки нетленною.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >&emsp;&emsp;&emsp;&emsp;&emsp;{major[4+start]}  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;   {major[6+start]}   <br/></p>
                  Счастлив тот, кто находит любви превосходнейший путь.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{major[4+start]}-{major[6+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;   {major[11+start]} &emsp;&emsp;  {minor[8+start]}  <br/></p>
                  Достигайте любви, в ней источники благословения.  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{major[4+start]}-{major[6+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[8+start]}<br/></p>
                  Пребывайте в любви, она всё превышающий дар. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{major[4+start]}-{major[6+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]} &emsp;&emsp;&emsp;&emsp;  {minor[8+start]}  <br/></p>
                  Возрастайте в любви, полной кротости, долготерпения.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{major[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  {major[6+start]}   &emsp;&emsp; {major[11+start]}<br/></p>
                  Покажите любовью Иисуса Христа благодать!<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Не гордится любовь, не завидует, не превозносится, <br/>
                  Зла не мыслит в себе и с врагами мягка и добра.<br/>
                  Что бы ей не пришлось пережить на земле — переносит всё, <br/>
                  И стремится сегодня сильнее любить, чем вчера.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Бескорыстно и нежно любить, безраздельно и искренне, <br/>
                  До последних минут всей душой своим ближним служить. <br/>
                  В полноте познавая Христа и великую Истину.  <br/>
                  Хорошо быть любимым, отраднее — любящим быть.<br/><br/>
        </main> 

           
 
     </div>
   );
     
 }
