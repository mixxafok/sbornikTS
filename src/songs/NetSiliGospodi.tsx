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


export default function NetSiliGospodi({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;{major[4+start]} &emsp;&emsp;  {major[6+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{major[11+start]} &emsp;&emsp;&emsp; {minor[8+start]} <br/></p>
                  Нет силы, Господи, не могу я так больше жить<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[4+start]} &emsp;&emsp;&emsp; {major[6+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]}   <br/></p>
                  Когда враг на пути моём всё время стоит.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;{major[4+start]} &emsp;&emsp;  {major[6+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{major[11+start]} &emsp;&emsp;&emsp; {minor[8+start]} <br/></p>
                  Я взываю к Тебе: помоги мне в земной борьбе<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[4+start]} &emsp;&emsp;&emsp; {major[6+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]} <br/></p>
                  Устоять на пути Твоём и служить Тебе.<br/><br/>

                  <p className='main_song-couplet'  >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;  {minor[1+start]} &emsp;&emsp;&emsp;&emsp; {major[6+start]} &emsp;&emsp;&emsp;&emsp; {major[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[8+start]} <br/></p>               
                  Я верю: Ты - моя скала, Ты сохранишь меня от зла<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {minor[1+start]} &emsp;&emsp;&emsp;&emsp; {major[6+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]} <br/></p>               
                  И когда будет тяжело поможешь Ты.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;  {minor[1+start]} &emsp;&emsp;&emsp;&emsp; {major[6+start]} &emsp;&emsp;&emsp;&emsp; {major[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[8+start]} <br/></p>               
                  С Тобой не страшно мне в пути, с Тобой пойду на край Земли<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {minor[1+start]} &emsp;&emsp;&emsp;&emsp; {major[6+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]} <br/></p>               
                  С Тобою обрету покой в земном пути.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Я счастлива, что со мной и в жизни Ты, Господи,<br/>
                  Мне так легко с Тобой и хорошо.<br/>
                  Я так хочу, чтобы в жизни Тебе служить<br/>
                  И врага победить с Тобой, Спаситель мой.<br/><br/>

        </main> 
     </div>
   );
     
 }
