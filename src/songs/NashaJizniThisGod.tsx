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


export default function NashaJizniThisGod({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[4+start]}                                       {major[11+start]}             {minor[4+start]} <br/></p>
                  Наша жизнь – это Бог, наша радость в Иисусе,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[4+start]}                                                 {major[11+start]}  <br/></p>
                  Наше счастье лишь в Нём, только в Нём,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >           {major[12+start]}               {major[7+start]}        {minor[9+start]}           {minor[4+start]}  <br/></p>               
                  ||:В неразрывном, едином, семейном союзе <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                            {major[12+start]}         {major[11+start]}           {minor[4+start]} <br/></p>
                  За Христом мы пойдём, пойдём, пойдём.:||<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Он - наш Царь, наш Отец, наш Хранитель Он, верный,<br/>
                  Лучший Друг в пору горя и слёз.<br/>
                  ||:В Нём любовь неизменна, ей нет окончанья,<br/>
                  Глубже моря она, ярче солнца и звёзд.:||<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Иисус – вот наш Вождь, чрез рассвет и закаты,<br/>
                  Чрез всю жизнь Имя то пронесём,.<br/>
                  ||:Иисуса Того, Кто за нас был распятым, <br/>
                  По следам мы Его пойдём, пойдём.:||<br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  И ни жизнь, и ни смерть, ни земные волненья,<br/>
                  И ничто Имя то не сотрёт,<br/>
                  ||:Оно Кровью святою записано в сердце,<br/>
                  И оно там живёт, растёт, цветёт.:||<br/><br/>
</main> 
 
     </div>
   );
     
 }
