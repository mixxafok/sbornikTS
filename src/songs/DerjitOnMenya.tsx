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

export default function DerjitOnMenya({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}       {major[4+start]}       {major[6+start]}       {major[11+start]}<br/></p>
                  Если грех меня страшит, Держит Он меня!<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}       {major[4+start]}       {major[6+start]}       {major[11+start]}<br/></p>
                  Вера в Бога победит: Держит Он меня. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}       {major[6+start]}       {major[11+start]}       {major[4+start]}       {major[6+start]}       {minor[8+start]} <br/></p>               
                  Чтобы мне не потерять вечного огня, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}       {major[6+start]}       {major[11+start]}         {major[4+start]}        {major[6+start]}       {major[11+start]} <br/></p>
                  Должен Он меня держать. Держит Он меня. <br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}       {major[6+start]}       {minor[8+start]}<br/></p>
                  Держит Он меня,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}       {major[6+start]}       {major[11+start]}<br/></p>
                  Держит Он меня.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}       {major[1+start]}       {major[11+start]}       {major[4+start]}<br/></p>
                  Охраняя и любя,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}       {major[6+start]}       {major[11+start]}<br/></p>
                  Держит Он меня.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  В крепких, любящих руках держит Он меня, <br/>
                  Дорог я в Его глазах: держит Он меня. <br/>
                  Он не даст погибнуть мне, сохранит вполне.<br/>
                  Обещания храня, держит Он меня. <br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  За меня страдал Христос, держит Он меня.<br/>
                  Наказание понес, держит Он меня. <br/>
                  Я воскресну к жизни с Ним — держит Он меня.<br/>
                  Знаю, буду Им храним до благого дня.<br/><br/>
        </main> 

           
 
     </div>
   );
     
 }
