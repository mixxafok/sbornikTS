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

export default function KtoJeYa({title, getNameSong}:ISong ) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[3+start]}           {major[3+start]}/{major[2+start]}           {minor[12+start]} <br/></p>
                  Кто же я, что Царя Вселенной всей <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[10+start]}          {major[8+start]}     {major[10+start]}          {major[8+start]}     {major[10+start]}<br/></p>
                  Волнует боль моя и мир в душе моей? <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[3+start]}           {major[3+start]}/{major[2+start]}           {minor[12+start]} <br/></p>
                  Кто же я, что чудесный Божий свет <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[10+start]}          {major[8+start]}     {major[10+start]}          {major[8+start]}     {major[10+start]}<br/></p>
                  Ведет меня всегда, когда мира в сердце нет? <br/><br/>

                  <p className='main_song-couplet' >Мост: <br/></p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[8+start]}           {major[10+start]}          {minor[12+start]}            {major[10+start]}/{major[2+start]} <br/></p>
                  Не за то, что сделал я, но по милости Твоей. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[12+start]}            {major[10+start]}/{major[2+start]}          {major[8+start]}           {major[10+start]} <br/></p>
                  Не за все мои дела Ты любовь даруешь мне. <br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[3+start]}           {major[3+start]}/{major[2+start]}           {minor[12+start]} <br/></p>
                  Я - лишь цветок, что расцветает <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[10+start]}          {major[8+start]} <br/></p>
                  И мгновенно увядает. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[10+start]}          {major[8+start]}           {major[10+start]} <br/></p>
                  Пришел в мир и исчезну, как утренний туман. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[3+start]}           {major[3+start]}/{major[2+start]}           {minor[12+start]} <br/></p>
                  Но Ты мольбам моим внимаешь. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[10+start]}          {major[8+start]} <br/></p>
                  Если упаду, прощаешь.  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[10+start]}          {major[8+start]}           {major[3+start]}     {major[8+start]}    {minor[12+start]}    {major[10+start]}<br/></p>
                  Ты сказал мне, что я  Твой, навсегда, навсегда. <br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Кто же я, что Всевидящий Господь,  <br/>
                  Простив мои грехи, дарует мне любовь? <br/>
                  Кто же я, чтобы Бог, смиривший шторм, <br/>
                  Дарил мне Свой покой, когда вокруг лишь зло?<br/><br/>
        </main> 
     </div>
   );
     
 }
