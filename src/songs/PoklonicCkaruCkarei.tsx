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

export default function PoklonicCkaruCkarei({title, getNameSong}:ISong) {
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
                  Динь, динь динь, динь, дон<br/><br/>
                  <p className='main_song-couplet'  >Куплет 1: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >   {major[1+start]}    <br/></p>
                  Слушайте звуки и песни чудесные, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[10+start]}             <br/></p>
                  Слушайте ангелов хоры  небесные,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >   {major[6+start]}       <br/></p>
                  Слушайте сердцем  и пойте устами<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >       {major[8+start]}    <br/></p>
                  Тому, Кто на землю пришел.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >   {major[1+start]}          <br/></p>
                  Слушайте в каждом селе, в каждом городе,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[10+start]}           <br/></p>
                  Бог дал подарок, дороже чем золото.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[6+start]}       <br/></p>               
                  Этот подарок - сошедшая людям <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >       {major[8+start]}      <br/></p>
                  От Бога святая любовь.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >            {major[1+start]}                                         {minor[10+start]}<br/></p>
                  Поклонись Царю Царей, принеси дары Ему скорей<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                    {major[6+start]}                    {minor[3+start]}                 {major[8+start]}<br/></p>
                  Принеси любовь, терпение и прощение и доброту.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >            {major[1+start]}                                          {minor[10+start]}<br/></p>
                  Поклонись Царю Царей и воспой хвалу Ему скорей,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >                            {major[6+start]}                      {major[8+start]}           {major[1+start]}          {major[8+start]}<br/></p>
                  Прославляй Рожденного в день Его рождения.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Слушайте дети и слушайте взрослые,<br/>
                  Слушайте песни что с неба доносятся<br/>
                  Это торжественно ангелы славят<br/>
                  Того, Кто на землю пришёл.<br/>
                  Слушайте и повторяйте все радостно,<br/>
                  Бог нам родился, явилось спасение.<br/>
                  Этот подарок - сошедшая людям <br/>
                  От Бога  святая любовь.<br/><br/>
</main> 

           
 
     </div>
   );
     
 }
