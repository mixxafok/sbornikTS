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

export default function LoveChtoNePomnit({title, getNameSong}:ISong ) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}                   {major[9+start]}                 {major[4+start]} <br/></p>
                  Любовь, что не помнит неправды людской,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}                   {major[4+start]}                 {major[9+start]}               {major[11+start]} <br/></p>
                  Всё зная, не полнит наш список долгов,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}                                   {major[11+start]}                        {major[9+start]} <br/></p>
                   Бросает их в море без дна, берегов, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}                                   {major[11+start]}                        {major[4+start]} <br/></p>
                  Ведь милость Господня превыше грехов!<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  О, как долготерпит заблудших и ждёт,<br/>
                  Отец, что так нежно домой нас зовёт. <br/>
                  Злых, немощных, бедных, принять Он готов, <br/>
                  Ведь милость Господня превыше грехов.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}     {major[4+start]}     {major[11+start]}         {major[9+start]}           {major[4+start]}           {major[11+start]}<br/></p>
                  Славен Бог, ведь милость Его,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}                   {major[4+start]}                 {major[11+start]}            {major[4+start]} <br/></p>
                   Каждое утро тьму гонит прочь,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}                   {major[4+start]}                 {major[11+start]}            {major[4+start]} <br/></p>
                   Ведь милость Господня, превыше грехов.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Как щедро на нас расточил Он добро,<br/>
                  Ценой стала Жизнь, а оплатою - Кровь. <br/>
                  Печальная участь ждала должников –<br/>
                  Но милость Господня превыше грехов!<br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  Любовь, что не помнит неправды людской, <br/>
                  Всё зная, не полнит наш список долгов,<br/>
                  Бросает их в море без дна, берегов,<br/>
                  Ведь милость Господня превыше грехов!<br/><br/>
        </main> 
     </div>
   );
     
 }
