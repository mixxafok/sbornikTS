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

export default function HristianinNesiOgon({title, getNameSong}:ISong  ) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}                                                 {minor[6+start]}<br/></p>
                  Христианин, неси огонь чудесный свой,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                 {major[8+start]}7                          {minor[1+start]}<br/></p>
                  Который дал тебе Христос.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                                                        {minor[6+start]} <br/></p>               
                  Он умер на кресте, пожертвовав Собой.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >           {major[8+start]}7                                 {minor[1+start]}<br/></p>
                  Огонь любви Он всем принес.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >            {major[8+start]}7                      {minor[1+start]}<br/></p>
                  Гори огонь, всегда гори!<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                                                        {minor[6+start]}<br/></p>
                  Воспламеняй собой холодные сердца<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                {major[11+start]}                                 {major[4+start]}<br/></p>
                  И новый мир прекрасный озари,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >   {minor[1+start]}                      {major[8+start]}               {minor[1+start]}<br/></p>
                  В котором радость без конца.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Вот - путник, он устал, он изнемог в пути,<br/>
                  Согрей его и ободри,<br/>
                  Скажи, что не покинет его вечный Бог,<br/>
                  Засветит солнце впереди.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  А если путник вдруг свернет с того пути,<br/>
                  Который к радости ведет.<br/>
                  То ты в его груди огонь любви зажги,<br/>
                  Чтобы он смог тот путь найти.<br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  И если станет очень тяжело тебе,<br/>
                  Суровый мир гасит огонь,<br/>
                  Не унывай, ведь любящий Господь с тобой,<br/>
                  Он сохранит светильник твой.<br/><br/>
        </main> 
     </div>
   );
     
 }
