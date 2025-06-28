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

export default function PodnimauGlaza({title, getNameSong}:ISong) {
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
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&ensp; {minor[9+start]} {major[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {minor[4+start]}<br/></p>
        Поднимаю глаза и смотрю в небеса,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {minor[9+start]} {major[2+start]} &emsp;&emsp;&emsp;&emsp;&emsp;{major[7+start]} <br/></p>
        Там я вижу Христа одесную Отца.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {minor[9+start]} {major[2+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[7+start]} <br/></p>
        Небо, небо-небес приготовил Он мне.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {minor[9+start]} {major[11+start]}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} <br/></p>
        Цель моя и мечта - неба вся красота.<br/><br/>

        <p className='main_song-couplet' >Припев: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[9+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[2+start]} <br/></p>
        Небо, небо-небес - город вечных чудес,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp; {major[7+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} <br/></p>
        Я мечтаю о нём, там мечаю и здесь.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[9+start]} {major[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]}<br/></p>
        Небо, небо-небес, путь туда через крест.<br/><br/>

        <p className='main_song-couplet' >Куплет 2: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&ensp; {minor[9+start]} {major[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {minor[4+start]}<br/></p>
        Не слыхал человек, не видал того глаз,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {minor[9+start]} {major[2+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[7+start]} <br/></p>
        Как там в небе небес, что там будет для нас.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {minor[9+start]} {major[2+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[7+start]} <br/></p>
        Но я знаю одно - красотой тех небес<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {minor[9+start]} {major[11+start]}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} <br/></p>
        Будет Тот, Кто понес на Голгофу наш крест.<br/><br/>

        <p className='main_song-couplet' >Куплет 3: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {minor[9+start]} {major[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {minor[4+start]}<br/></p>
        Чтобы в небо попасть, нужно жизнь так прожить,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[9+start]} {major[2+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{major[7+start]} <br/></p>
        Чтобы Бог мог сказать "Ты достоин в нём жить".<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {minor[9+start]} {major[2+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {major[7+start]} <br/></p>
        Ты достоин смотреть Иисусу в глаза,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {minor[9+start]} {major[11+start]}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} <br/></p>
        Если только войдёшь ты к Нему в небеса.<br/><br/>

      </main> 

    </div>
   );
     
 }
