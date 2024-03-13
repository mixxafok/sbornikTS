import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function BydyJitiPodZaschitou({title, getNameSong}:ISong) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}                             {major[4+start]}       <br/></p>
                  Буду жить под защитой Твоих крыл,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}                               {major[3+start]}7       <br/></p>
                  Буду я в мире Божией любви, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}                       {minor[1+start]}       <br/></p>               
                  Ночь настанет, и я не убоюсь,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[3+start]}7                                               {minor[8+start]} <br/></p>
                  Когда я под защитой Твоих крыл <br/><br/>

                  <p className='main_song-couplet' >Припев: <br/></p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}             {major[6+start]}       {major[11+start]}        {major[4+start]}<br/></p>
                  Под защитой, под защитой,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}       {major[3+start]}7       {minor[8+start]}<br/></p>
                  Под защитой Твоих крыл.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: <br/></p>
                  Я спасен под защитой Твоих крыл, <br/>
                  Мой покой под охраною Твоей<br/>
                  Пусть летят стрелы, я не устрашусь,<br/>
                  Когда я под защитой Твоих крыл <br/><br/>

                  <p className='main_song-couplet' >Куплет 3: <br/></p>
                  Хочешь жить под защитой Его крыл<br/>
                  Хочешь жить под охраною Его<br/>
                  Встань скорее и к Господи иди<br/>
                  Будешь Ты под защитой Его крыл<br/><br/>
</main> 
     </div>
   );
     
 }
