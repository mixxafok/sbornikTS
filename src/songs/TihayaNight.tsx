import React, { useState } from 'react';
import { major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'
import { useNavigate } from 'react-router-dom';

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function TihayaNight({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {major[3+start]}      <br/></p>
                  Тихая ночь, дивная ночь!<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >     {major[9+start]}                    {major[3+start]}       <br/></p>
                  Дремлет все, лишь не спит:<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >       {major[7+start]}                         {major[3+start]}  <br/></p>               
                  В благоговении Святая Чета,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {major[7+start]}                                        {major[3+start]}       <br/></p>
                  Чудным Младенцем полны их сердца, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {major[9+start]}                                    {major[3+start]} <br/></p>               
                  Радость в душе их горит,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {major[3+start]}                     {major[9+start]}            {major[3+start]} <br/></p>
                  Радость в душе их горит. <br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Тихая ночь, дивная ночь!<br/>
                  Глас с небес возвестил:<br/>
                  «Радуйтесь! Ныне родился Христос,<br/>
                  Мир и спасение всем Он принёс,<br/>
                  Свыше вас Свет посетил».<br/>
                  Свыше вас Свет посетил.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Тихая ночь, дивная ночь!<br/>
                  К небу нас Бог призвал.<br/>
                  О, да откроются наши сердца<br/>
                  И да прославят Его все уста –<br/>
                  Он нам Спасителя дал,<br/>
                  Он нам Спасителя дал. <br/><br/>
</main> 

           
 
     </div>
   );
     
 }
