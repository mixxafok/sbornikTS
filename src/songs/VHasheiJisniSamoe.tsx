import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function VHasheiJisniSamoe({title, getNameSong}:ISong) {

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
            <span onClick={()=>getTon(-1,{setStart})}> -&nbsp; </span> {start} <span onClick={()=>getTon(1,{setStart})}>&nbsp;+ </span>
          </div>
        </div>

        <main className={isStyle === 'true' ? 'main_song songDark' : 'main_song'} style={{fontSize: `${JSON.parse(slide) }px`}}>
          <p className='main_song-couplet'  >Куплет 1: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >
            {minor[8+start]}       {minor[1+start]} <br/>
          </p>
          В нашей жизни самое прекрасное <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {major[6+start]}7      {major[11+start]} <br/>
          </p>
          Не ценою денег покупается. <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {minor[8+start]}       {minor[1+start]} <br/>
          </p>               
          Даром с неба светит солнце ясное <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {major[3+start]}7       <br/>
          </p>
          И луна нам даром улыбается. <br/><br/>

          <p className='main_song-couplet' >Припев: </p>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {major[8+start]}      {minor[1+start]}    <br/>
          </p>
          Даром на распаханные полосы <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {major[6+start]}7     {major[11+start]} <br/>
          </p>
          Льётся дождь со щедростью обильною. <br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {major[8+start]}      {minor[1+start]} <br/>
          </p>
          Даром ветер гладит мои волосы,<br/>
          <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '}>
            {major[3+start]}7       {minor[8+start]}<br/>
          </p>
          С дуба листья рвёт рукою сильною. <br/><br/>

          <p className='main_song-couplet' >Куплет 2: </p>
          Даром пеньем птичек наслаждаемся, ,<br/>
          Зорями, восходами, закатами;<br/>
          С близкими, любимыми встречаемся<br/>
          И вдыхаем воздух не за плату мы. <br/><br/>

          <p className='main_song-couplet' >Куплет 3: </p>
          Никакой монетой не заплатите  <br/>
          За ребенка ласку необычную,<br/>
          За супругов нежные объятия.<br/>
          За любовь. За дружбу бескорыстную.<br/><br/>

          <p className='main_song-couplet' >Куплет 4: </p>
          Но всего дороже, драгоценнее, <br/>
          Нам в подарок Богом преподнесено - <br/>
          В Иисусе вечное спасение,<br/>
          Принимай и улыбайся весело. <br/><br/>

          <p className='main_song-couplet' >Куплет 5: </p>
          Посмотри, как Он к Тебе склоняется, <br/>
          И пойми, что, как свет солнца ясного, <br/>
          Не ценою денег покупается <br/>
          В нашей жизни самое прекрасное.<br/><br/>
        </main> 
     </div>
   );
     
 }
