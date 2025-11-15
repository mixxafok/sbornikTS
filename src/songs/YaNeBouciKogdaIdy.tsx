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

export default function YaNeBouciKogdaIdy({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[4+start]}  &emsp;&emsp;&emsp; {major[11+start]} &emsp; &emsp; &emsp; &emsp;  {minor[1+start]}  <br/></p>
                  Я не боюсь, когда иду,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[4+start]} &emsp;&emsp;&emsp; {major[11+start]} &emsp; &emsp; &emsp;  {minor[1+start]} <br/></p>
                  Уверен я в руке Отца.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {minor[6+start]}  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  {major[11+start]}   <br/></p> 
                  Он направит на путь, согласный <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {minor[6+start]}  &emsp;&emsp;&emsp;&emsp; {major[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[4+start]}  <br/></p>
                  С Его волей и безопасный для меня.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[9+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]} <br/></p>
                  На нужную дорогу  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {major[4+start]} &emsp;&emsp;&emsp;&emsp; {major[9+start]} &emsp;&emsp;&emsp;&emsp; {major[11+start]} <br/></p>
                  Выйду я с Тобой, поверив Богу.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp; {minor[6+start]}  <br/></p>
                  Как верит ребёнок,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp; {major[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[1+start]} <br/></p>
                  Берущий за руку отца,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp; {minor[6+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {major[4+start]} <br/></p>
                  Не зная, но доверяя силе Творца. <br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Не сомневаюсь, не страшусь,<br/>
                  За руку Господа держусь.<br/>
                  На защиту Его уповая,<br/>
                  До конца, Иисус, пойду я за тобой.<br/><br/>

                  <p className='main_song-couplet' >Припев 2: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[4+start]}-{major[9+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]} <br/></p>
                  Бог Живой, на нужную дорогу<br/> 
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[9+start]} {major[11+start]} <br/></p>
                  Выйду я с Тобой, поверив Богу.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[6+start]}  <br/></p>
                  До Небесного дома<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[1+start]} <br/></p>
                  Пойду я, Иисус, за Тобой.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[6+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]} <br/></p>
                  Чтоб там навсегда <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[11+start]} &emsp;&emsp;&emsp;&emsp; {major[4+start]}  <br/></p>
                  Обрести мир и вечный покой. <br/><br/>
        </main> 

     </div>
   );
     
 }
