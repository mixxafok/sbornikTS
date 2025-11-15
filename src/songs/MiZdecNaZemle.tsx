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

export default function MiZdecNaZemle({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[8+start]}  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  {major[10+start]} &emsp; {major[3+start]} &emsp;&emsp;&emsp; {minor[8+start]} <br/></p>
                  Мы здесь на земле живём, не думаем,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{minor[1+start]}  &emsp;&emsp; {major[3+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {minor[8+start]} <br/></p>
                  Что ждёт нас за порогом дома нашего,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;{minor[1+start]}  &emsp;  {major[3+start]}  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{minor[8+start]} &emsp; {major[4+start]}  <br/></p>               
                  И сеем худо, либо добрым семенем,   <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{minor[1+start]}    &emsp;&emsp;   {major[3+start]} &emsp;{minor[8+start]} <br/></p>
                  За всё Бог спросит каждого!<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp; {minor[1+start]} &emsp;&emsp;&emsp;&emsp; {major[6+start]}<br/></p>
                  А в небесах, так далека,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;{major[11+start]} &emsp;&emsp; {major[4+start]} <br/></p>
                  Где синевой полна,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {minor[1+start]}   &emsp;&emsp;&emsp;&emsp;&emsp;  {major[3+start]}    &emsp;&emsp; {minor[8+start]}<br/></p>
                  Родина там обещана нам сполна!<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Строим своё счастье на горе ближнего,<br/>
                  И руку протянувшего не видим мы,<br/>
                  Затмила всё слепая гордость мнимого,<br/>
                  Остановись! И скажем мы:<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Взор свой обратим лишь на Спасителя,<br/>
                  Придём к Нему, у ног Его преклонимся, <br/>
                  Чтоб обрести покой в желанной Родине<br/>
                  И думать лишь о светлом дне.<br/><br/>
        </main> 

           
 
     </div>
   );
     
 }
