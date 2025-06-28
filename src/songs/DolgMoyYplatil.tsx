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

export default function DolgMoyYplatil({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}       {major[6+start]}       {major[11+start]}<br/></p>
                  Спаситель говорит: "Ты слаб в земной борьбе, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}       {major[4+start]}    {major[11+start]}       {major[6+start]}       {major[11+start]}<br/></p>
                  Но мужайся и молись, Всё что нужно дам тебе".<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}       {major[4+start]}    {major[11+start]}       {major[6+start]}<br/></p>
                  Долг мой уплатил, любящий Иисус. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}       {major[4+start]}    {major[11+start]}       {major[6+start]}       {major[11+start]}<br/></p>
                  Грех мой кровью искупил, лишь Им всегда хвалюсь.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Господь, Tвоя рука, всё может совершить.<br/>
                  Сокрушить ярмо греха, и все раны исцелить.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Негоден я, чтоб жить с Тобой на высоте,<br/>
                  Но мой грех с меня oмыт, кровью Aгнца нa Кресте.<br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  Когда жe в оный день я перед Ним явлюсь,<br/>
                  Буду повторять везде: "Умер за меня Иисус!<br/><br/>
        </main> 
     </div>
   );
     
 }

 
