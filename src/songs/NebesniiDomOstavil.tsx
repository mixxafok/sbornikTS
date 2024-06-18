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

export default function NebesniiDomOstavil({title, getNameSong}:ISong) {
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
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}   {major[3+start]}   {major[8+start]}    {major[4+start]}   {major[6+start]}     {major[11+start]}   <br/></p>
          Небесный дом оставил, пришёл на землю Он,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}      {major[3+start]}       {major[2+start]}     {major[6+start]}<br/></p>
          В смиреньи был прославлен, Иисус – наш Царь и Бог.<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}   {major[3+start]}   {major[8+start]}    {major[4+start]}   {major[6+start]}     {major[11+start]}   <br/></p>
          Он излечил больного, слепому зренье дал,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}      {major[3+start]}   ({major[5 + start]})       {major[2+start]}     {major[6+start]}<br/></p>
          Как луч всего творенья, светит ярко нам.<br/><br/>

          <p className='main_song-couplet' >Припев: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}   {major[10+start]}        {major[3+start]}<br/></p>
          Пришёл Он для меня, Ему хвала, <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[8+start]}     {major[6+start]}       {major[4+start]}<br/></p>
          Что на кресте Он кровь Свою пролил.<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}      {major[11+start]}   {major[10+start]}    {major[3+start]} <br/></p>
          Пришёл Он для тебя, позор терпя, <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[8+start]}     {major[1+start]}      {major[6+start]}    {major[11+start]}<br/></p>
          Всё для тебя, хвалите все Христа.<br/><br/>
          
          <p className='main_song-couplet' >Куплет 2: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}   {major[3+start]}   {major[8+start]}    {major[4+start]}   {major[6+start]}     {major[11+start]}   <br/></p>
          Зачем в саду остался, в молитве ночь провёл,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}      {major[3+start]}       {major[2+start]}     {major[6+start]}<br/></p>
          Греху Он не предался, терпел позор и боль.<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}   {major[3+start]}   {major[8+start]}    {major[4+start]}   {major[6+start]}     {major[11+start]}   <br/></p>
          На смерть Он осуждён был, Варавва был прощён,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}      {major[3+start]}   ({major[5 + start]})       {major[2+start]}     {major[6+start]}<br/></p>
          И кровью Агнец Божий мой грех омыл и стёр.<br/><br/>

          <p className='main_song-couplet' >Бридж: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}     {major[11+start]}   {major[4+start]}<br/></p>
          Неся крест, шёл Он в гору, в огонии страдал,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}     {major[11+start]}     {major[11+start]}<br/></p>
          Пролил кровь, но позору помешать Себе не дал.<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[3+start]}7     {major[3+start]}7     {major[8+start]}<br/></p>
          На Голгофу Он поднялся, добровольно жизнь отдал,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[1+start]}     {major[6+start]}<br/></p>
          За меня и за весь мир Он пострадал.<br/><br/>


          <p className='main_song-couplet' >Припев: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[6+start]}     {major[11+start]}     {major[10+start]}    {major[3+start]}<br/></p>
          Он умер за меня, Ему хвала, <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[8+start]}     {major[6+start]}     {major[4+start]}<br/></p>
          Что на кресте Он кровь Свою пролил.<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[6+start]}     {major[11+start]}     {major[10+start]}   {major[3+start]}<br/></p>
          Пришёл Он для тебя, позор терпя, <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[8+start]}     {major[1+start]}     {major[6+start]}   {major[11+start]}<br/></p>          
          Всё для тебя, хвалите все Христа.<br/><br/>

          <p className='main_song-couplet' >Куплет 3: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     {major[3+start]}     {major[8+start]}     {major[4+start]}   {major[6+start]}   {major[11+start]}<br/></p>
          Наш Царь пришёл к нам с неба, Но земля не для Него,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     {major[3+start]}     {major[2+start]}     {major[6+start]}<br/></p>
          Даже каменной могиле не удержать Его.<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     {major[3+start]}     {major[8+start]}    {major[4+start]}   {major[6+start]}   {major[11+start]}<br/></p>
          Воскрес, восстал из мёртвых, Смерть была побеждена,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[4+start]}     {major[3+start]}     {major[2+start]} ({major[5+start]})    {major[6+start]}   {major[8+start]} <br/></p>
          Наш славный Бог Спаситель Открыл нам небеса! Небеса!<br/><br/>

          <p className='main_song-couplet' >Припев: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[1+start]}     {major[12+start]}     {major[5+start]}<br/></p>
          Он умер за меня, Ему хвала, <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[10+start]}     {major[8+start]}     {major[6+start]}<br/></p>
          Что на кресте Он кровь Свою пролил.<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[8+start]}     {major[1+start]}     {major[12+start]}   {major[5+start]}<br/></p>
          Пришёл Он для тебя, позор терпя, <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>{major[10+start]}     {major[3+start]}     {major[8+start]}    {major[1+start]}    ({major[8+start]})<br/></p>
          Всё для тебя, хвалите все Христа.<br/><br/>
        </main> 
     </div>
   );
     
 }
