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

export default function SkoroDayTotPridet({title, getNameSong}:ISong ) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}          {major[3+start]}<br/></p>
                  Скоро день тот придет, где не будет всех забот,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}         {major[6+start]}         {major[11+start]}         {major[11+start]}7<br/></p>
                  Ни печали, ни невзгод, ни нужды и ни тревог. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}         {minor[4+start]}         {major[11+start]}         {minor[8+start]}<br/></p>
                  Мир царит в стране святой, тьмы не будет никакой. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}         {major[6+start]}         {major[11+start]}         {major[11+start]}7<br/></p>
                  Что за день, радостный день будет там!<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}         {minor[4+start]}         {major[11+start]}         {major[8+start]}<br/></p>
                  Что за день будет там, когда встречу я Христа! <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[1+start]}         {major[6+start]}         {major[11+start]}         {major[11+start]}7<br/></p>
                  Он возьмет меня с Собой в край небесный, неземной. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}         {minor[4+start]}         {major[11+start]}         {minor[8+start]}<br/></p>
                  Руку даст Он мне Свою, и я с Ним туда пойду. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}         {major[6+start]}         {major[11+start]}<br/></p>
                  Что за день, радостный день будет там! <br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Там не будет забот, мир и радость не пройдет. <br/>
                  Нет болезни там следа, радость будет без конца. <br/>
                  Буду вечно я тогда прославлять Царя Христа. <br/>
                  Что за день, радостный день будет там!<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Скоро день тот придет, где не будет всех забот, <br/>
                  Ни печали, ни невзгод, ни нужды и ни тревог. <br/>
                  Мир царит в стране святой, тьмы не будет никакой. <br/>
                  Что за день, радостный день будет там!<br/><br/>

</main> 

 
     </div>
   );
     
 }
