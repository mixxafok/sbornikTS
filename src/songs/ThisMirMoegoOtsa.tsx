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

export default function ThisMirMoegoOtsa({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}  &emsp;&emsp;&emsp;&emsp;  {major[11+start]}  &emsp;&emsp;   {major[4+start]} <br/></p>
                  Это мир моего Отца<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}   &emsp;&emsp;&emsp;    {major[4+start]}   &emsp;&emsp;&emsp;    {major[11+start]} <br/></p>
                  И слышу сердцем я  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}  &emsp;&emsp;&emsp;     {minor[1+start]}   &emsp;&emsp;   {major[9+start]}       {major[11+start]}  &emsp;     {major[4+start]}   <br/></p>               
                  Как вся вселенная поёт <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >&emsp;{major[9+start]}    &emsp;&emsp;&emsp;   {major[11+start]}   &emsp;&emsp;    {major[4+start]}   <br/></p>
                  И славит своего Творца. <br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}    &emsp;&emsp;&emsp;&emsp;   {major[9+start]}    {major[11+start]} &emsp;  {major[4+start]}<br/></p>
                  Это мир моего Отца<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >&emsp;{major[9+start]}    &emsp;&emsp;&emsp;   {major[11+start]}     &emsp;&emsp;  {major[4+start]}<br/></p>
                  И всё, что вижу я<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}    &emsp;&emsp;   {minor[1+start]}    &emsp;&emsp;&emsp;   {major[9+start]}    {major[11+start]}   {major[4+start]}<br/></p>
                  Холмы, долины и леса<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}     &emsp;&emsp;&emsp;  {major[11+start]}   &emsp;    {major[4+start]}<br/></p>
                  Его рук чудеса.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Это мир моего Отца <br/>
                  И всё, что видит глаз.<br/>
                  Цветы полей и дня рассвет<br/>
                  О нём ведут рассказ. <br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Это мир моего Отца,<br/>
                  Он свет даёт звезде <br/>
                  Я Им живу и чувствую<br/>
                  Как Он со мной везде.<br/><br/>
        </main> 

           
 
     </div>
   );
     
 }
