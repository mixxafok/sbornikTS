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

export default function VelikiIChudni({title, getNameSong}:ISong) {
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
            <span onClick={()=>getTon(-1,{setStart})}> -&nbsp; </span> {start} <span onClick={()=>getTon(1,{setStart})}>&nbsp;+ </span>
          </div>
        </div>

        <main className={isStyle === 'true' ? 'main_song songDark' : 'main_song'} style={{fontSize: `${JSON.parse(slide) }px`}}>
          <p className='main_song-couplet' >Куплет 1: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{minor[8+start]}     {minor[1+start]}      {minor[3+start]}     {minor[8+start]}   <br/></p>
          Велики и чудны дела Твои,  <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}      {major[11+start]}       {major[6+start]}<br/></p>
          Господи Боже, Вседержитель. <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{minor[8+start]}     {minor[1+start]}      {minor[3+start]}     {minor[8+start]} <br/></p>
          Праведны и истинны пути Твои,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     {major[6+start]}     {minor[8+start]}<br/></p>
          Царь Святый. <br/><br/>
          
          <p className='main_song-couplet' >Бридж: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}     {minor[11+start]}<br/></p>
          Кто не убоится не прославит Тебя, <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}     {major[6+start]}     {major[11+start]}<br/></p>
          Ибо Ты Един Свят.<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}     {major[3+start]}7     {minor[11+start]}<br/></p>
          Все народы поклонятся<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}     {minor[3+start]}  {minor[8+start]}<br/></p>
          Пред Тобой, ибо Ты Един Свят.<br/><br/>

          <p className='main_song-couplet' >Припев: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]} - {major[6+start]}        {minor[1+start]} - {minor[8+start]}     {major[4+start]}   {major[6+start]}         {major[11+start]}    {major[3+start]}7<br/></p>
          Свят,  Свят,  Ты Един Свят. <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}     {major[6+start]}       {minor[1+start]} - {minor[8+start]}     {major[4+start]}     {minor[3+start]}       {minor[8+start]}<br/></p>
          Свят,  Свят,  Ты Един Свят.<br/><br/>

          <p className='main_song-couplet' >Куплет 2: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{minor[8+start]}     {minor[1+start]}      {minor[3+start]}     {minor[8+start]}   <br/></p>
          Ты один достоин принять славу и честь,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}      {major[11+start]}       {major[6+start]}<br/></p>
          Силу и вечное хваленье! <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{minor[8+start]}     {minor[1+start]}      {minor[3+start]}     {minor[8+start]} <br/></p>
          Да будет слава превыше небес,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     {major[6+start]}     {minor[8+start]}<br/></p>
          Ибо путь Твой свят!<br/><br/>
          
          <p className='main_song-couplet' >Бридж: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}     {minor[11+start]}<br/></p>
          И нет другого такого как Ты, <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}     {major[6+start]}     {major[11+start]}<br/></p>
          Ибо Ты един свят,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}     {major[3+start]}7     {minor[11+start]}<br/></p>
          Милость Твоя велика, о мой Бог!<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}     {minor[3+start]}  {minor[8+start]}<br/></p>
          Ибо Ты един свят!<br/><br/>

          <p className='main_song-couplet' >Припев: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]} - {major[6+start]}        {minor[1+start]} - {minor[8+start]}     {major[4+start]}   {major[6+start]}         {major[11+start]}    {major[3+start]}7<br/></p>
          Свят,  Свят,  Ты Един Свят. <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}     {major[6+start]}       {minor[1+start]} - {minor[8+start]}     {major[4+start]}     {minor[3+start]}       {minor[8+start]}<br/></p>
          Свят,  Свят,  Ты Един Свят.<br/><br/>

          <p className='main_song-couplet' >Конец: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{minor[8+start]}     {minor[1+start]}      {minor[3+start]}     {minor[8+start]}   <br/></p>
          Велики и чудны дела Твои,  <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}      {major[11+start]}       {major[6+start]}<br/></p>
          Господи Боже Вседержитель. <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{minor[8+start]}     {minor[1+start]}      {minor[3+start]}     {minor[8+start]} <br/></p>
          Праведны и истинны пути Твои<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     {major[6+start]}     {minor[8+start]}<br/></p>
          Царь Святый. <br/><br/>
        </main> 
     </div>
   );
     
 }
