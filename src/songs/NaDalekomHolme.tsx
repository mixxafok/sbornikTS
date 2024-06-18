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

export default function NaDalekomHolme({title, getNameSong}:ISong ) {
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
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}          {minor[6+start]}    {major[8+start]}           {minor[1+start]}<br/></p>
          На далёком холме средь деревьев и скал,  <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}    {major[11+start]}           {major[4+start]}     {minor[1+start]}<br/></p>
          Сквозь седые века, старый крест простоял.<br/>{minor[1+start]}
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}    {major[8+start]}           {minor[1+start]}<br/></p>
          Миллионы людей у подножья креста  <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}           {major[8+start]}<br/></p>
          Свое счастье нашли. Там однажды был я.<br/><br/>
          <p className='main_song-couplet' >Припев: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}          {major[8+start]}           {minor[1+start]} <br/></p>
          Старый крест, старый крест, не броский, но лишь в нём<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}          {major[11+start]}           {major[4+start]}           {major[1+start]}7<br/></p>
          Сила есть, сила есть. Сегодня может он<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}          {minor[1+start]}          {major[9+start]}<br/></p>
          Исцелять разбитые, больные сердца,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}          {major[9+start]}           {major[8+start]}           {minor[1+start]}<br/></p>
          Каждому пришедшему открыть небеса.<br/><br/>
          <p className='main_song-couplet' >Куплет 2: </p>
          Между небом святым и греховной землёй <br/>
          Пропасть злая лежит, разделяя собой. <br/>
          Хочешь - верь, хочешь - нет, слушай слово <br/>
          Творца: Крест - единственный мост от земли в небеса.<br/><br/>
          <p className='main_song-couplet' >Куплет 3: </p>
          О, Иисус дорогой, у подножья креста <br/>
          Сквозь седые века я увидел Тебя: <br/>
          На пронзённых руках незастывшая кровь, <br/>
          А в прекрасных глазах Божья к людям любовь.<br/><br/>
        </main> 
     </div>
   );
     
 }
