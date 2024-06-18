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

export default function KtoMoraVse({title, getNameSong}:ISong ) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}                    {minor[8+start]}<br/></p>
                  Кто моря все горстью исчерпал?  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}                    {minor[8+start]}<br/></p>
                  Кто песок земли пересчитал? <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}                    {minor[8+start]}<br/></p>
                  Кто Один над всем имеет власть?  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}                    {minor[8+start]}                    {major[11+start]}<br/></p>
                  Кто творенью радость может дать? <br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}     {major[11+start]}/{major[3+start]}    {minor[1+start]}            {major[9+start]}<br/></p>
                  Вот наш Бог, Трон Его высок, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}      {major[11+start]}<br/></p>
                  Будем поклоняться!<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}     {major[11+start]}/{major[3+start]}    {minor[1+start]}            {major[9+start]}<br/></p>
                  Вот наш Царь, несравним ни с чем, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}      {major[11+start]}<br/></p>
                  Будем поклоняться! <br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Кто дает народам Свой устав? <br/>
                  Кто Единый прав во всех делах? <br/>
                  Кто решает что произойдет? <br/>
                  Кто Один все знает наперед? <br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Кто был свят, но взял вину людей? <br/>
                  Кто подставил руки для гвоздей? <br/>
                  Кто в смиреньи умер на кресте? <br/>
                  Кто воскрес, чтоб грешников спасти? <br/><br/>
        </main> 
     </div>
   );
     
 }
