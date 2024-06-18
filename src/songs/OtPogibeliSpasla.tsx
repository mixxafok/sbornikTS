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

export default function OtPogibeliSpasla({title, getNameSong}:ISong ) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}                           {minor[11+start]}<br/></p>
                  От погибели спасла меня Милость Божия,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}  {major[1+start]}                         {minor[6+start]}<br/></p>
                  В дне отчаянья нашла меня Милость Божия.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[4+start]}                                        {major[6+start]}<br/></p>
                  То, что я ещё живу, то, что Господу служу,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[11+start]}     {major[1+start]}                              {minor[6+start]}<br/></p>
                  Это милость Божия, это милость Божия.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Что грехи мои Он смыл, это милость Божия,<br/>
                  И Свой Дух Святой излил - это милость Божия.<br/>
                  То, что вера мне дана и ведёт меня она,<br/>
                  Это милость Божия, это милость Божия.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Вновь и вновь благодарю эту милость Божию<br/>
                  И желанием горю славить милость Божию,<br/>
                  Эту бездну доброты, эту силу чистоты,<br/>
                  Эту милость Божию, эту милость Божию.<br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  Всё однажды здесь пройдёт, даже милость Божия,<br/>
                  От земли Бог заберёт  Свою милость Божию.<br/>
                  Там где место для святых будет вечно им светить<br/>
                  Это милость Божия, это милость Божия.<br/><br/>

                  <p className='main_song-couplet' >Куплет 5: </p>
                  От погибели спасла меня Милость Божия,<br/>
                  В день отчаянья нашла меня Милость Божия.<br/>
                  То, что я ещё живу, то, что Господу служу,<br/>
                  Это милость Божия, Это милость Божия.<br/><br/>

</main> 

 
     </div>
   );
     
 }
