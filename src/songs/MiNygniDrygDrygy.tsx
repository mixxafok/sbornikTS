import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function MiNygniDrygDrygy({title, getNameSong}:ISong ) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}   {major[4+start]}   {minor[6+start]}<br/></p>
                  Мы нужны друг другу, Бог нас спас не зря,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[2+start]}   {major[4+start]}   {major[9+start]}   {major[4+start]}<br/></p>
                  В Иисусе стали мы друзья.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}   {major[4+start]}   {minor[6+start]}<br/></p>               
                  С радостью святою, с песней на устах<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[2+start]}   {major[4+start]}   {major[9+start]}<br/></p>
                  Прославим вместе Господа Христа.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[2+start]}   {major[4+start]}   {minor[1+start]}   {minor[6+start]}<br/></p>
                  Мы – одна семья, мы – одна семья,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[2+start]}   {major[4+start]}   {major[9+start]}<br/></p>
                  Пролилась за нас Иисуса кровь.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[2+start]}   {major[4+start]}   {minor[1+start]}   {minor[6+start]}<br/></p>
                  Мы теперь друзья, мы теперь друзья,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[2+start]}   {major[4+start]}   {major[9+start]}<br/></p>
                  И в сердцах у нас Его любовь.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Пусть дружнее станет наш семейный круг,<br/>
                  С нами рядом самый лучший Друг!<br/>
                  И о Нём всем людям поспешим мы рассказать,<br/>
                  Чтоб каждый смог Иисусу другом стать!<br/><br/>
      </main> 
     </div>
   );
     
 }
