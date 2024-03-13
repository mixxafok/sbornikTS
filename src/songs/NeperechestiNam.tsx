import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function NeperechestiNam({title, getNameSong}:ISong) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                  {major[9+start]}                                           {minor[6+start]}<br/></p>
                  Не перечесть нам милостей Господних-    <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >           {major[2+start]}                                               {major[4+start]}<br/></p>
                  Им счёта нет и нет у них конца.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                     {major[9+start]}                                     {minor[6+start]}<br/></p>
                  И мы приходим в этот день сегодня,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >          {major[2+start]}                      {major[4+start]}                     {major[9+start]}<br/></p>
                  Чтобы прославить нашего Отца.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                     {major[2+start]}                                 {major[4+start]}<br/></p>
                  Он любит нас в любое время года,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                          {major[2+start]}                             {minor[1+start]}<br/></p>
                  На всяком месте и во всякий час.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                 {major[2+start]}        {major[6+start]}                    {minor[11+start]}<br/></p>
                  И если славит Господа природа,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >        {major[2+start]}                     {major[4+start]}                        {major[9+start]}<br/></p>
                  То дети Божьи могут ли молчать?<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  В благоговеньи мы Отцу приносим<br/>
                  Слова молитвы - жертву наших уст.<br/>
                  Как Бог благословил и эту осень!<br/>
                  Пусть каждый дом не будет ныне пуст.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  За то, что в каждом доме много хлеба,<br/>
                  За то, что нас простил и спас Христос,<br/>
                  Пусть хор людей спасённых славит небо,<br/>
                  И пенье вознесется выше звёзд.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}              {major[6+start]}<br/></p>
                  Сердца у всех стучат одним биением,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}                   {minor[8+start]}<br/></p>
                  Христу достойно Славу воздают<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}           {major[3+start]}7<br/></p>
                  И голоса, сливаясь строенным пеньем,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}               {major[6+start]}  {major[11+start]}  {major[8+start]}<br/></p>
                  Пусть "Аллилуйя" Господу поют...<br/><br/>

</main> 

 
     </div>
   );
     
 }
