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

export default function SkolkoEstiZamanchivih({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >             {minor[9+start]}                   {minor[2+start]}<br/></p>
                  Сколько есть заманчивых дорог,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >             {major[4+start]}                {minor[9+start]}<br/></p>
                  Ты от них храни нас, вечный Бог,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >      {minor[9+start]}             {minor[2+start]}<br/></p>
                  И веди нас жизненной тропой<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >         {minor[6+start]}7                {major[4+start]}<br/></p>
                  По стезям колючим за Собой.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >    {minor[9+start]}                {minor[2+start]}<br/></p>
                  За Тобой пойду я сквозь туман.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >   {major[7+start]}                   {major[12+start]}<br/></p>
                  Не беда, что кровь течет из ран,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {major[5+start]}             {minor[2+start]}<br/></p>
                  Впереди меня Ты Сам идешь<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >   {major[4+start]}<br/></p>
                  И меня в обители ведешь.<br/>
                  Сквозь туман, сквозь жизни ураган,<br/>
                  За Тобой иду я в Ханаан,<br/>
                  В жизни Ты меня, мой Бог, храни,<br/>
                  Силу дай вперед всегда идти.<br/><br/>


                  <p className='main_song-couplet' >Куплет 2: </p>
                  Если Божий Дух в твоей груди, -<br/>
                  Встретишь ты преграды на пути.<br/>
                  Но как счастлив тот, кто пронесет<br/>
                  Верность Богу сквозь кольцо невзгод.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Так веди ж меня Своей тропой,<br/>
                  Напояй живительной водой.<br/>
                  Дай мне силы лишь Тобою жить,<br/>
                  Жаждущих водой Твоей поить.<br/><br/>
</main> 

           
 
     </div>
   );
     
 }
