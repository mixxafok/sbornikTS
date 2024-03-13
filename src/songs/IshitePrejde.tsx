import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}


export default function IshitePrejde({title, getNameSong}:ISong) {

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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}               {major[11+start]}         {minor[1+start]}               {minor[8+start]} <br/></p>
                  Ищите прежде Царства Божия,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}            {major[4+start]}     {major[11+start]} <br/></p>
                  И правды Его.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}                   {major[11+start]}          {minor[1+start]}         {minor[8+start]} <br/></p>               
                  Всё остальное приложится вам. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}          {major[4+start]}                {major[11+start]}  {major[4+start]} <br/></p>
                  Аллилуйя, аллилуйя.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Царствие Божье – не пища и питьё,<br/>
                  А праведность и мир,<br/>
                  И радость во Святом Духе.<br/>
                  Аллилуйя, аллилуйя.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Просите – и дано будет вам<br/>
                  Ищите и найдёте.<br/>
                  Стучите, и откроют вам.<br/>
                  Аллилуйя, аллилуйя.<br/><br/>
        </main> 
     </div>
   );
     
 }
