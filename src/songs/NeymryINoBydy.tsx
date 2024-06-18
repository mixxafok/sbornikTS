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

export default function NeymryINoBydy({title, getNameSong}:ISong ) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}    {major[4+start]}     {major[11+start]}     {major[6+start]} <br/></p>
                  Не умру я, но буду жить истиной Твоей! <br/>
                  В тесноте я воззвал, Он услышал меня.<br/>
                  Окружили и сильно толкнули меня,<br/>
                  Но Господь поддержал, Он защита моя!<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  Вот, Кому принадлежит вся жизнь моя, <br/>
                  Агнец Божий взял мой грех, дал распять Себя!<br/>
                  Вот, кому принадлежит вся жизнь моя,<br/>
                  С каждой раны Твоей крик - "Люблю тебя!"<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Ты мой Бог, и я буду вечно славить Тебя! <br/>
                  Ты - Тот Камень, который отвергли зря. <br/>
                  На Тебя уповать, лучше, чем на людей.<br/>
                  Благ и милостив Ты во всей жизни моей!<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Сколько в жизни дорог я прошел не туда,<br/>
                  Сколько жизненных сил отняла суета.<br/>
                  Сколько раз - я не мог убежать от греха.<br/>
                  Но Господь меня спас - Он спасения скала!<br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  Мой Господь - моя сила, спасение моё,<br/>
                  Отвори врата правды - и к Тебе я войду.<br/>
                  Гласом радости буду славить имя Твоё,<br/>
                  Поспеши же ко мне - и Тебя я найду!<br/><br/>

</main> 

 
     </div>
   );
     
 }
