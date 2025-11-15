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

export default function IZaDayIZaNight({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  {major[2+start]}  <br/></p>
                  И зa дeнь и зa нoчь,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[2+start]}  <br/></p>
                  и зa крoв и зa xлeб,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}  &emsp;     {major[1+start]}7   &emsp;&emsp;&emsp;   {minor[6+start]}   <br/></p>               
                  И зa cнeг и зa дoждь, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;{major[11+start]}7    &emsp;&emsp;&emsp;   {major[4+start]}7   <br/></p>
                  Боже благодарим. <br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >&emsp;&emsp;&emsp;&emsp;{major[9+start]}    &emsp;&emsp;&emsp;&emsp;   {major[11+start]}   &emsp;&emsp;&emsp; {major[2+start]}  {major[4+start]}<br/></p>
                  Спacибo Гocпoди, Oтeц cпacибo,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >&emsp;{major[1+start]}    &emsp;&emsp;&emsp;   {minor[6+start]}   {major[1+start]}7 &emsp;&emsp; {minor[6+start]}  {major[11+start]}<br/></p>
                  Зa мир в душe и зa нaдeжду,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >&emsp;&emsp;&emsp;&emsp;{major[4+start]} &emsp;  {minor[11+start]}    &emsp;&emsp;&emsp;&emsp;   {major[4+start]}    {major[2+start]} <br/></p>
                  Чтo нe умрeм, нo будeм живы,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}     &emsp;&emsp;  {major[2+start]}   &emsp;&emsp;    {major[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[9+start]}<br/></p>
                  Вeчнo живы в Цaрcтвии Tвoeм.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Зa cвятую любoвь,<br/>
                  и зa рaны Tвoи,<br/>
                  И зa вce мы Teбя,<br/>
                  Бoжe блaгoдaрим.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Дa нacтaнeт тoт чac,<br/>
                  чтo oбeщaн Toбoй, <br/>
                  Дa рaздacтcя Tвoй глac,<br/>
                  нaш Oтeц нeзeмнoй.<br/><br/>
        </main> 

           
 
     </div>
   );
     
 }
