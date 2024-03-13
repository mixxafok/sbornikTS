import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function BlagoEsti({title, getNameSong}:ISong) {

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
            <span onClick={()=>getTon(-1,{setStart})}> -&nbsp; </span> {start} <span onClick={()=>getTon(1,{setStart})}>&nbsp;+ </span>
          </div>
        </div>

        <main className={isStyle === 'true' ? 'main_song songDark' : 'main_song'} style={{fontSize: `${JSON.parse(slide) }px`}}>
          <p className='main_song-couplet'  >Куплет 1: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >
            {minor[8+start]}       {minor[1+start]} <br/>
          </p>
          Благо есть славить Господа,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {major[3+start]}7      {minor[8+start]}       {major[3+start]}7 <br/>
          </p>
          И петь имени Твоему, Всевышний<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {minor[8+start]}       {minor[1+start]} <br/>
          </p>               
          Возвещать утром милость Твою <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {major[3+start]}7        {minor[8+start]} <br/>
          </p>
          И истину Твою вночи<br/><br/>

          <p className='main_song-couplet' >Припев: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {major[8+start]}      {minor[1+start]}       {major[6+start]} <br/>
          </p>
          Ты возвеселил душу мою,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {major[11+start]}      {major[3+start]}7       {minor[8+start]} <br/>
          </p>
          Я Тебе, Господь, хвалу пою!<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {minor[1+start]}       {major[3+start]}7 <br/>
          </p>
          Дела Твои велики, мой Отец,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {minor[8+start]}       {major[8+start]}<br/>
          </p>
          Ты мой Господь Ты мой Творец<br/><br/>

          <p className='main_song-couplet' >Куплет 2: </p>
          Возвожу мои очи к горам,<br/>
          Возношу мои руки к небу.<br/>
          Я познал, что Господь Велик,<br/>
          И на земле превише всех<br/><br/>

          <p className='main_song-couplet' >Куплет 3: </p>
          Господи - Ты защита моя, <br/>
          Ты мой Бог, Ты Твердыня жизни.<br/>
          Над землёй, небеса высоко,<br/>
          Слава Твоя во век веков.<br/><br/>
        </main> 
     </div>
   );
     
 }
