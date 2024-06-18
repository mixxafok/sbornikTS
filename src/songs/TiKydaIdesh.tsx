import React, { useState } from 'react';
import { major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'
import { useNavigate } from 'react-router-dom';

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function TiKydaIdesh({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[4+start]}<br/></p>
                  "Ты куда идешь, скажи мне,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}         {major[11+start]}<br/></p>
                  Странник с посохом в руке?" -<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}         {major[11+start]}<br/></p>
                  "Дивной милостью Господней<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}         {major[11+start]}         {major[4+start]}<br/></p>
                  К лучшей я иду стране.<br/>
                  
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}         {major[11+start]}<br/></p>
                  // Через горы и долины,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}         {major[1+start]}<br/></p>
                  Через степи и поля,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}         {major[11+start]}<br/></p>
                  Чрез леса и чрез равнины<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}         {major[11+start]}         {major[4+start]}<br/></p>
                  Я иду домой, друзья". // 2р.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  "Странник, в чем твоя надежда<br/>
                  В той стране твоей родной?" -<br/>
                  "Белоснежная одежда<br/>
                  И венец весь золотой.<br/>
                  // Там источники живые<br/>
                  И небесные цветы,<br/>
                  Я иду за Иисусом<br/>
                  Через жгучие пески". // 2р.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  "Страх и ужас не знакомы<br/>
                  Разве на пути тебе?" - <br/>
                  "Да, но Божьи легионы<br/>
                  Охранят меня везде! <br/>
                   // Иисус Христос со мною,<br/>
                  Он направит Сам меня <br/>
                  Неуклонною тропою<br/>
                  Прямо, прямо в небеса". // 2р.<br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  "Так возьми ж меня с собою,<br/>
                  Где чудесная страна". -<br/>
                  "Да, мой друг, пойдем со мною,<br/>
                  Вот тебе моя рука!<br/>
                  // Недалеко уж родная<br/>
                  И желанная страна.<br/>
                  Вера чистая, живая<br/>
                  Нас введет с тобой туда. // 2р.<br/><br/>

</main> 

 
     </div>
   );
     
 }
