import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function VstaetZarya({title, getNameSong}:ISong) {
  
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
                  <p className='main_song-couplet'  >Куплет 1: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}        {major[6+start]}     <br/></p>
                  Встает заря, и солнца луч на небо всходит<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}           {major[3+start]}7         {minor[8+start]}<br/></p>
                  Засияв в бескрайней синеве.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}       {major[6+start]}       <br/></p>               
                  За новый день хвалу Творцу поет природа,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}      {major[3+start]}7           {minor[8+start]}<br/></p>
                  Мы воспрянем в радостной хвале.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}          {major[11+start]}<br/></p>
                  Слава Богу, слава Богу<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}             {major[6+start]}        {major[11+start]}  {major[3+start]}7<br/></p>
                  За милость, за прощение грехов!<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}          {major[11+start]}<br/></p>
                  Слава Богу, слава Богу<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}      {major[3+start]}7   {minor[8+start]}<br/></p>
                  За дивную Его любовь!<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Как чудно все, что сотворил наш Бог великий.<br/>
                  Да звучит и слава, и хвала.<br/>
                  Прекрасно все, что создано Христом-Владыкой,<br/>
                  Славьте Бога за дивные дела.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Великий Бог в любви Своей к нам, людям грешным,<br/>
                  Отдал в жертву Сына Своего,<br/>
                  И нас омыл Он Кровию Своей Пречистой,<br/>
                  Будем вечно славить мы Его.<br/><br/>
</main> 

           
 
     </div>
   );
     
 }
