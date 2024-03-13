import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function ZaLoveZaMilost( {title, getNameSong}:ISong) {

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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}                   {minor[6+start]}<br/></p>
                  За любовь, за милость, за спасение,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[8+start]}7                                                {minor[1+start]}   {major[8+start]}7<br/></p>
                  Благодарность Ты прими от нас.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}                {minor[6+start]}<br/></p>               
                  Пусть несётся песнь благодарения <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[8+start]}7                                               {minor[1+start]}<br/></p>
                  Господу - Он кровию нас спас.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}          {minor[6+start]} <br/></p>
                  Благодарим, благодарим, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}7            {major[4+start]}/{major[8+start]}<br/></p>
                  За Твою любовь благодарим!<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}         {minor[6+start]}<br/></p>
                  Достоин Ты вечной хвалы,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[8+start]}7            {minor[1+start]}<br/></p>
                  За Твою любовь благодарим!<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  За Твои Голгофские страдания,<br/>
                  За спасенье, данное Тобой,<br/>
                  И за все Твои благодеяния<br/>
                  Сердце для Тебя звучит хвалой!<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  За прекрасный дом в лазурным небе,<br/>
                  За святую вечность без конца<br/>
                  Пусть звучит сегодня гимн хваления,<br/>
                  Эту песнь поют наши сердца.<br/><br/>

</main> 

 
     </div>
   );
     
 }
