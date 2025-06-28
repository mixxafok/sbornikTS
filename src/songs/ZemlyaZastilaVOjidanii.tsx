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

export default function ZemlyaZastilaVOjidanii({title, getNameSong}:ISong) {
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
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}       <br/></p>
          Земля застыла в ожиданьи,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[2+start]}      {major[4+start]}       <br/></p>
          На днях ведь распяли Христа,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     <br/></p>
          Сын Божий в муках и страданьях<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[2+start]}          {major[7+start]}<br/></p>
          Кровь проливал за нас, любя<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[6+start]}       <br/></p>
          Не удержали силы ада<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}      {major[2+start]}    {major[7+start]}   <br/></p>
          Воскресшего Царя Христа<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}    {major[2+start]}    {major[7+start]}   {major[4+start]} <br/></p>
          Христос Воскрес, какая радость<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}     {major[2+start]}     {major[4+start]}<br/></p>
          Его пусть славят все сердца<br/><br/>
          

          <p className='main_song-couplet' >Припев: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[5+start]}     {major[4+start]}     {major[9+start]}<br/></p>
          Христос Воскрес и в жизни нашей<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}     {major[2+start]}     {major[7+start]}<br/></p>
          Пусть не смолкает никогда<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}     {major[2+start]}     {major[11+start]}  {major[4+start]}<br/></p>
          Хвала Тому, Кто жизнь отдавши,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}     {major[2+start]}     {major[7+start]}<br/></p>          
          Нас искупил от власти зла<br/><br/>


          <p className='main_song-couplet' >Куплет 2: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     <br/></p>
          Земля воскресный день встречает,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[2+start]}      {major[4+start]}   <br/></p>
          Не предвещая перемен<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}    <br/></p>
          Но солнце всходит возвещая,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[2+start]}          {major[7+start]}    <br/></p>
          Что Иисуса в гробе нет<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[6+start]}   <br/></p>
          Воскрес Христос, всех извещая<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}      {major[2+start]}    {major[7+start]}    <br/></p>
          Что Он живой Он жизни Царь<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}    {major[2+start]}    {major[7+start]}   {major[4+start]}   <br/></p>
          Он нам дарует всё прощая<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}     {major[2+start]}     {major[4+start]}  <br/></p>
          Прекрасный жизни вечной дар.<br/><br/>


          <p className='main_song-couplet' >Припев: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[5+start]}     {major[4+start]}     {major[9+start]}<br/></p>
          Христос Воскрес и в жизни нашей<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}     {major[2+start]}     {major[7+start]}<br/></p>
          Пусть не смолкает никогда<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}     {major[2+start]}     {major[11+start]}  {major[4+start]}<br/></p>
          Хвала Тому, Кто жизнь отдавши,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}     {major[2+start]}     {major[7+start]}<br/></p>          
          Нас искупил от власти зла<br/><br/>


          <p className='main_song-couplet' >Куплет 3: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     <br/></p>
          Христос воскрес, чтоб жизнью новой<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[2+start]}      {major[4+start]}   <br/></p>
          Мы стали жить здесь на земле<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}    <br/></p>
          Вещать всем о любви Христовой,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[2+start]}          {major[7+start]}    <br/></p>
          Чтоб все воспрянули в хвале<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[6+start]}   <br/></p>
          Христос воскрес! Для всех надежда<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}      {major[2+start]}    {major[7+start]}    <br/></p>
          Даётся радостью в сердцах<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}    {major[2+start]}    {major[7+start]}   {major[4+start]}   <br/></p>
          А после чудная одежда<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}     {major[2+start]}     {major[4+start]}  <br/></p>
          Нам будет дана в небесах.<br/><br/>


          <p className='main_song-couplet' >Припев: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[5+start]}     {major[4+start]}     {major[9+start]}<br/></p>
          Христос Воскрес чтоб мы воскресли<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}     {major[2+start]}     {major[7+start]}<br/></p>
          И вознеслись с Ним в Вечный Дом<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}     {major[2+start]}     {major[11+start]}  {major[4+start]}<br/></p>
          Чтоб вечно жили с Богом вместе,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}     {major[2+start]}     {major[7+start]}<br/></p>          
          Душой ликуя пред Христом.<br/><br/>
        </main> 
     </div>
   );
     
 }
