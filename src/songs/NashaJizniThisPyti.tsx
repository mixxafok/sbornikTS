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

export default function NashaJizniThisPyti({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >    {minor[6+start]}                  {major[4+start]}              {minor[6+start]}       <br/></p>
                  Наша жизнь – это путь на небеса.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >           {major[2+start]}              {major[4+start]}              {minor[6+start]}<br/></p>
                  День за днем устремляясь вдаль,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >    {minor[6+start]}                   {major[4+start]}                 {minor[6+start]}  <br/></p>               
                  Вспомни жизнь и Господни чудеса,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >           {major[2+start]}            {major[4+start]}          {minor[6+start]}  <br/></p>
                  Пусть уйдет роковая печаль.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >   {minor[11+start]}                            {minor[6+start]}       <br/></p>
                  Пой бодрей, сердцу станет веселей,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >             {minor[11+start]}                     {minor[6+start]}                    {major[1+start]}7 <br/></p>
                  Со Христом пройдем сквозь огонь, смело.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >      {minor[6+start]}                  {major[4+start]}              {minor[6+start]}  <br/></p>               
                  Наша жизнь – это путь на небеса<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >             {major[2+start]}                     {major[4+start]}             {minor[6+start]}  <br/></p>
                  Всех искупленных кровью Христа.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Наша жизнь – это путь на небеса,<br/>
                  Где гора средь огнистых камней.<br/>
                  Там поют неземные голоса<br/>
                  Песни славы Царю Царей.<br/>
                  Там вовек солнце правды не зайдет,<br/>
                  Не увидим больше мы там ночи.<br/>
                  Наша жизнь – это путь на небеса<br/>
                  Всех искупленных кровью Христа.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Наша жизнь – это путь на небеса<br/>
                  По долам каменистых дорог.<br/>
                  Он ведет нас в обители Христа,<br/>
                  Где покой для израненных ног.<br/>
                  Там наш город из золотых камней,<br/>
                  Где течет река посреди рая.<br/>
                  Наша жизнь – это путь на небеса<br/>
                  Всех искупленных кровью Христа.<br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  Наша жизнь – это путь на небеса<br/>
                  Сквозь борьбу забывая покой.<br/>
                  День придет и усталые глаза<br/>
                  Засверкают победной слезой.<br/>
                  Все не зря, и победа как венец<br/>
                  Увенчает нас, только верь свято.<br/>
                  Наша жизнь – это путь на небеса<br/>
                  Всех искупленных кровью Христа.<br/><br/>
</main> 

           
 
     </div>
   );
     
 }
