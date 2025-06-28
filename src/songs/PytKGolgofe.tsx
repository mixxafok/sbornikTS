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

export default function PytKGolgofe({title, getNameSong}:ISong ) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}                                {major[4+start]}<br/></p>
                  Путь к Голгофе далёк, кровь стекала из ран,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}       {major[8+start]}         {minor[1+start]}<br/></p>
                  Сколько мук и страданий во взоре…<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}                   {major[4+start]}<br/></p>
                  Иисус дорогой умирал на кресте;<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}         {major[8+start]}            {minor[1+start]}<br/></p>
                  Принял всё - и страданье, и горе.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}       {major[11+start]}     {minor[8+start]}            {minor[1+start]}<br/></p>
                  Никогда не смогу я забыть этот крест,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}       {major[8+start]}           {minor[1+start]}<br/></p>
                  Он стоит между небом, землёю.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}             {major[11+start]}         {minor[8+start]}           {minor[1+start]}<br/></p>
                  Своей смертью Христос примирил нас с Творцом,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}        {major[8+start]}       {minor[1+start]}<br/></p>
                  Искупил драгоценною кровью.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  О, внемли, человек, гласу песни моей,<br/>
                  Что ты медлишь, мой друг, что ты ждешь?<br/>
                  Чем ты платишь Ему за божественный дар,<br/>
                  За пролитую кровь что даешь?<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Даль земли, свет зари, благо дней впереди –<br/>
                  Для тебя это создал Господь.<br/>
                  Он зовет: «О, приди!» — мимо, друг, не пройди,<br/>
                  В Нем ты счастье, покой обретешь.<br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  Дай, Господь, мне понять тайну вечной любви,<br/>
                  Той, что Ты нам на землю принес.<br/>
                  И тогда я спокойно и твердо пойду<br/>
                  По земле среди бурь, среди гроз.<br/><br/>

</main> 

 
     </div>
   );
     
 }
