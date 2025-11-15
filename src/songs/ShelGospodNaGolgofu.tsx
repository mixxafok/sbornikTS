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

export default function ShelGospodNaGolgofu({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[11+start]} <br/></p>
                  Шел Господь на Голгофу, толпой окружен,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[11+start]}  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]}7/{major[3+start]}  &emsp;&emsp;&emsp; {minor[4+start]} <br/></p>
                  По широкой и пыльной дороге, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;{major[6+start]}  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  {minor[11+start]} &emsp;&emsp;&emsp; {major[7+start]} <br/></p> 
                  И под ношей креста был уже утомлен <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;{minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]} <br/></p>
                  И подкашивались Его ноги.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;{minor[9+start]} &emsp;&emsp; {major[11+start]}7 &emsp;&emsp; {minor[4+start]} <br/></p>
                  И стекала, и капала алая кровь,  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;{major[9+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[2+start]} &emsp;&emsp; {major[6+start]} <br/></p>
                  По щеке вниз слезою катилась. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp; {minor[4+start]} &emsp;&emsp; {minor[4+start]}/{major[1+start]} &emsp;&emsp;&emsp; {minor[11+start]} <br/></p>
                  И когда эти знаки мы видим здесь вновь,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {major[7+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]}  <br/></p>
                  Вспоминаем, как это случилось. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp; {minor[4+start]} &emsp;&emsp; {minor[4+start]}/{major[1+start]} &emsp;&emsp;&emsp; {minor[11+start]} <br/></p>
                  И когда эти знаки мы видим здесь вновь,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {minor[4+start]}7 &emsp;&emsp;&emsp;&emsp; {major[6+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[11+start]} <br/></p>
                  Вспоминаем, как это случилось.  <br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Наши немощи взял и болезни понес, <br/>
                  А Его оплевали и били. <br/>
                  Надругались над Ним, был истерзан до слез. <br/>
                  Сына Божия здесь не взлюбили. <br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Шел Господь на Голгофу, толпой окружен, <br/>
                  Чтоб открыть в небеса нам дорогу.  <br/>
                  Чтобы там, где и Он, мы могли вечно жить  <br/>
                  И служили там вечному Богу.  <br/><br/>
        </main> 

     </div>
   );
     
 }
