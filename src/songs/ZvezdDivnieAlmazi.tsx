import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function ZvezdDivnieAlmazi({title, getNameSong}:ISong ) {
  
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
            <span onClick={()=>getTon(-1,{setStart})}>- </span> {start} <span onClick={()=>getTon(1,{setStart})}> +</span>
          </div>
        </div>

 <main className={isStyle === 'true' ? 'main_song songDark' : 'main_song'} style={{fontSize: `${JSON.parse(slide) }px`}}>
                  <p className='main_song-couplet'>Куплет 1: <br/></p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {minor[3+start]}  <br/></p>
                  Что этот свет? Он - созданье Всевышнего, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {major[11+start]}      <br/></p>
                  Воля и Разум Творца. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {major[6+start]}                        {major[1+start]} <br/></p>               
                  Это ль не есть выражение Божьей любви?  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >   {major[3+start]} <br/></p>
                  Горы, равнины и дали лесистые, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {major[11+start]}<br/></p>
                  Скалы, овраги и травы душистые, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {minor[8+start]}     <br/></p>               
                  Утра румянец и ночи мерцание - <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {major[1+start]}                 {major[10+start]}   <br/></p>
                  Бога создание, Бога дыхание. <br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {minor[3+start]}        {major[11+start]}        {major[6+start]}           {major[10+start]}   <br/></p>
                  Звёзд дивные алмазы на чёрный бархат неба <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {minor[3+start]}        {major[11+start]}        {major[6+start]}           {major[10+start]}<br/></p>
                  Ты поместил Своей рукой, поместил Своей рукой.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {minor[3+start]}        {major[11+start]}        {major[6+start]}           {major[10+start]}<br/></p>
                  Нет, я ещё ни разу столь к Тебе близок не был.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {minor[3+start]}        {major[11+start]}        {major[6+start]}           {major[10+start]}          {minor[3+start]}<br/></p>
                  Ты подарил душе покой, подарил душе покой.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Что этот мрак, силы тёмной сгущение, <br/>
                  Вечно скрывает свой лик?           <br/>                                                           
                  Слава, Отец, что не ею дано нам спастись!    <br/>                                     
                  Солнце взойдёт , тучи черные скроются, <br/>
                  Земли водой дождевою омоются, <br/>
                  Птицы небесные песню Тебе поют, <br/>
                  Имя Твое облекая в гармонию! <br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Что эта жизнь - Божий дар и служение,  <br/>
                  Радость и мука души.              <br/>                                                           
                  Где ты найдёшь совокупность столь разных в одном?   <br/>    
                  Пусть из страданий и счастье строится, <br/>
                  Лишь после смерти награда откроется.       <br/>                             
                  Чаша скорбей производит терпение, <br/>
                  Вся наша жизнь на земле - лишь мгновение!<br/><br/>

</main> 

 
     </div>
   );
     
 }
