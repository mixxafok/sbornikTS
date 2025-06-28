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

export default function DayYgas({title, getNameSong}:ISong) {
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
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[6+start]}    <br/></p>
          День угас, нежно светит луна,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[1+start]}    <br/></p>
          У околицы дом невысокий.<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[11+start]}    {major[1+start]}<br/></p>
          В тёмной горнице возле огня<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[6+start]}      {major[6+start]}7    <br/></p>
          Круг друзей Иисуса в тревоге.<br/><br/>

          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[11+start]}    {major[4+start]} <br/></p>
          Может снова вернётся Он к нам,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}   {major[1+start]}<br/></p>
          Свою силу и власть подтверждая,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[11+start]}    {major[12+start]}<br/></p>
          Как в ту ночь по высоким волнам<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[1+start]}  <br/></p>
          Он пришёл к нам, <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[11+start]}   <br/></p>
          Он пришёл к нам,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[1+start]}   {major[6+start]}<br/></p>
          Он пришёл, нас от смерти спасая.<br/><br/>
          

          <p className='main_song-couplet' >Куплет 2: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[6+start]}   {major[1+start]} <br/></p>
          Плачет Пётр - давит душу вина,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[1+start]}    <br/></p>
          Взгляд последний Христа вспоминает,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[11+start]}    {major[1+start]}<br/></p>
          Утопает в сомненьях Фома,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[6+start]}      {major[6+start]}7    <br/></p>
          И надежда в сердцах угасает.<br/><br/>

          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[11+start]}    {major[4+start]} <br/></p>
          Неужель не вернётся Он к нам,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[9+start]}   {major[1+start]}<br/></p>
          Свою силу и власть подтверждая?<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[11+start]}    {major[12+start]}<br/></p>
          Как в ту ночь по высоким волнам<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[1+start]}  <br/></p>
          Он пришёл к нам,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[11+start]}   <br/></p>
          Он пришёл к нам,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[1+start]}   {major[6+start]}<br/></p>
          Он пришёл, нас от смерти спасая.<br/><br/>


          <p className='main_song-couplet' >Бридж: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}     {major[4+start]} <br/></p>
          Вдруг раздвинулись стены, и вмиг<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[7+start]}     {major[2+start]} <br/></p>
          Всё живительным светом залилось.<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[7+start]}     {major[2+start]} <br/></p>
          Как прекрасен Спасителя лик,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}     {major[9+start]} <br/></p>
          И надежда в сердцах воцарилась!<br/><br/>


          <p className='main_song-couplet' >Припев: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[2+start]}     {major[9+start]} <br/></p>
          Он воскрес!<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[11+start]}     {major[7+start]} <br/></p>
          Иисус пришёл к нам!<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[2+start]}     {major[7+start]}  {major[9+start]} <br/></p>
          Вмиг рассеялась печаль.<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[2+start]}     {major[9+start]} <br/></p>
          Он воскрес!<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[11+start]}     {major[7+start]} <br/></p>
          Правда утвердилась.<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[2+start]}     {major[7+start]}  {major[1+start]} <br/></p>          
          Песнь летит и в ширь, и в даль.<br/><br/>


          <p className='main_song-couplet' >Куплет 3: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     {major[6+start]}     {minor[8+start]}<br/></p>
          День угас, нежно светит луна,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     {major[6+start]}     {minor[8+start]}<br/></p>
          У околицы дом невысокий.<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     {major[6+start]}     {minor[8+start]}<br/></p>
          В тёмной горнице возле огня<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     {major[6+start]}     {minor[8+start]}<br/></p>
          Круг друзей Иисуса не многих.<br/><br/>

          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{minor[8+start]}     {minor[1+start]}      {minor[3+start]}     {minor[8+start]}   <br/></p>
          Хоть и разные судьбы у них,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}      {major[11+start]}       {major[6+start]}<br/></p>
          Но сроднились в едином стремленьи.<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{minor[8+start]}     {minor[1+start]}      {minor[3+start]}     {minor[8+start]} <br/></p>
          Донести весть до края земли,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{minor[8+start]}     {minor[1+start]}      {minor[3+start]}     {minor[8+start]} <br/></p>
          Чтоб не смолкла,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{minor[8+start]}     {minor[1+start]}      {minor[3+start]}     {minor[8+start]} <br/></p>
          Чтоб не смолкла<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     {major[6+start]}     {minor[8+start]}<br/></p>
          Весть о чудном Христа воскресеньи.<br/><br/>

          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{minor[8+start]}     {minor[1+start]}      {minor[3+start]}     {minor[8+start]}   <br/></p>
          Будет Пётр через время казнён<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}      {major[11+start]}       {major[6+start]}<br/></p>
          И Фома позабыл о сомненьях<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{minor[8+start]}     {minor[1+start]}      {minor[3+start]}     {minor[8+start]} <br/></p>
          Беспощадной стрелою пронзён<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{minor[8+start]}     {minor[1+start]}      {minor[3+start]}     {minor[8+start]} <br/></p>
          Но не смолкнет, <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{minor[8+start]}     {minor[1+start]}      {minor[3+start]}     {minor[8+start]} <br/></p>
          Но не смолкнет<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     {major[6+start]}     {minor[8+start]}<br/></p>
          Весть о чудном Христа воскресеньи.<br/><br/>
        </main> 
     </div>
   );
     
 }
