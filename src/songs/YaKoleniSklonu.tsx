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

export default function YaKoleniSklonu({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >         {minor[6+start]}           {minor[11+start]}            {major[1+start]}         {minor[6+start]}   <br/></p>
                  Я колени склоню и услышит Всевышний<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >         {minor[6+start]}           {minor[11+start]}            {major[2+start]}         {major[1+start]} <br/></p>
                  Благодарность мою и печали мои… <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >         {minor[11+start]}                {major[4+start]}             {major[9+start]}    {major[1+start]}     {minor[6+start]} <br/></p>               
                  Тихий голос Христа над собою услышу<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >         {minor[6+start]}                {major[1+start]}            {minor[6+start]}      {major[1+start]}       {minor[6+start]}<br/></p>
                  Тихий голос Христа, голос вечной любви… <br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Я колени склоню и раскроется небо,<br/>
                  Дивный Господа край, где не гаснет заря;<br/>
                  И согреется сердце живительным светом<br/>
                  И исполнится сил, новой верой горя… <br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Я колени склоню и увижу так ясно<br/>
                  Заблужденья свои и ошибки в пути,<br/>
                  И пойму, что Христос был мне светом в ненастье,<br/>
                  Нес меня на руках и без гнева простил. <br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  Я колени склоню перед Богом Всевышним…<br/>
                  Свое сердце, как дар, принесу к алтарю…<br/>
                  Тихий голос Христа над собою услышу…<br/>
                  Я колени склоню, я колени склоню…<br/><br/>
</main> 

           
 
     </div>
   );
     
 }
