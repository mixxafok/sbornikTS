import React, { useState } from 'react';
import { major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function LybitEtoZnachit({title, getNameSong}:ISong ) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}           {major[8+start]}           {major[11+start]}           {major[6+start]}<br/></p>
                  Любить - это значит жить радостью друга,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[8+start]}           {major[1+start]}7           {major[6+start]}<br/></p>
                  Страдать его горем, себя забывать,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}           {major[11+start]}           {major[4+start]}           {major[9+start]}<br/></p>               
                  В тяжелую пору скорбей и недуга <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}           {major[11+start]}           {major[1+start]}7<br/></p>
                  Ему бескорыстно свой труд отдавать.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Любить - это значит прощать со смиреньем  <br/>
                  И горя, обиды в себе не таить.  <br/>
                  Любить - это значит с великим терпеньем  <br/>
                  С дороги неправды к добру приводить. <br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Любить - это значит в минуту тревоги,  <br/>
                  Спасая людей, свою жизнь не жалеть. <br/>
                  Кто любит - тот дышит надеждою Бога. <br/>
                  Он жив! И не может вовек умереть. <br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  Любовь есть чудесный подарок от Бога!  <br/>
                  Ценней всех сокровищ, ценней всех даров.  <br/>
                  Где весть о любви достигает до слуха,  <br/>
                  Пустыня становится краем цветов. <br/><br/>
        </main> 
     </div>
   );
     
 }
