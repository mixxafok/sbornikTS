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

export default function VelikNashTvorets({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > <br/></p>
                  Велик наш Творец и наш Бог,  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} ><br/></p>
                  И разве другой кто так мог  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > <br/></p>
                  Сказать, чтобы вдруг из земли  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > <br/></p>
                  Плоды вырастать  бы могли. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > <br/></p>
                  И запах плодов, и их лист, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > <br/></p>
                  И вкус их - все это твердит.  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > <br/></p>
                  Что Бог к человечеству благ  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > <br/></p>
                  И дивен в Своих Он делах.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} ><br/></p>
                  "Велик", - говорили цветы. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} ><br/></p>
                  "Велик", - повторяли плоды.  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} ><br/></p>
                  "Велик", - доносилось с садов  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} ><br/></p>
                  В душистом дыханьи ветров.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Я шепот колосьев слыхал,   <br/>
                  И каждый из них повторял: <br/>
                  "По воле Творца я возник   <br/>
                  - Воистину Бог наш велик".<br/>
                  И всюду природы язык  <br/>
                  Твердил, что Господь наш велик. <br/>
                  Но только, как жаль, от людей <br/>
                  Не слышал я этих речей.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Я слышал другое от них   <br/>
                  - Что очень старались они <br/>
                  Величье Творца умалить <br/>
                  И песню хвалы заглушить.<br/>
                  Она же и ныне живет  <br/>
                  И вместе с природой поёт  <br/>
                  Той песни, понятен язык:  <br/>
                  "Воистину Бог наш велик".<br/><br/>

        </main> 

           
 
     </div>
   );
     
 }
