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

export default function ZKojnimDnemDarajei({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}                          {minor[1+start]}       <br/></p>
                  З кожным днём даражэй неба зорнае,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[3+start]}                                   {minor[8+start]}       <br/></p>
                  Я жадаю i мару там быць. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                           {minor[1+start]}       <br/></p>               
                  Дзе пануе любоў непрытворная,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}                                      {major[11+start]} <br/></p>
                  Там хачу апынуцца i жыць. <br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >             {minor[1+start]}                             {minor[8+start]}<br/></p>
                  Там, дзе сонца начуе i дзе зорачка днюе,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >          {minor[3+start]}                                {minor[8+start]}<br/></p>
                  Ёсць краіна цудоўных сяброў.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >         {minor[1+start]}                          {minor[8+start]}<br/></p>
                  Там Ісуса ўбачу i ад шчасця заплачу,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                        {major[3+start]}                                {minor[8+start]}<br/></p>
                  Што нарэшце прыйшоў ужо дамоў.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  На зямлі я чужы, на зямлі я не свой.<br/>
                  Дружа мой, я i ты тут у гасцях.<br/>
                  Цi ўлетку, ці ўвосень, а можа зімой,<br/>
                  Я закончу жыццёвы свой шлях. <br/><br/>
</main> 

           
 
     </div>
   );
     
 }
