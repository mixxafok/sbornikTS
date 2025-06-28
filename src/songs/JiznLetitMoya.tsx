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

export default function JiznLetitMoya({title, getNameSong}:ISong) {
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
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[11+start]} &emsp;&emsp;&emsp;&ensp; {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]}<br/></p>
        Жизнь летит моя (и несёт меня),<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[7+start]} <br/></p>
        Как быстрая стрела (туда, где облака),<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {major[6+start]} <br/></p>
        И всегда держу, (даже чрез пургу)<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[11+start]} &emsp;&emsp;&emsp;&emsp; {major[11+start]} <br/></p>
        Я курс свой в небеса, (глядя на Христа).<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} &emsp;&emsp;&emsp;&emsp; {major[6+start]} <br/></p>
        Камни и шипы (делают рубцы),<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {major[7+start]} <br/></p>
        Шутки, колкости (ранят изнутри).<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;{minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]} <br/></p>
        И порою мне (на земном пути)<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;{minor[11+start]} <br/></p>
        Тяжко идти.<br/><br/>

        <p className='main_song-couplet' >Припев: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; {minor[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]}<br/></p>
        Но с Тобою, Иисус, я иду вперёд,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {minor[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[7+start]}<br/></p>
        Мне не страшны ни бури, ни шквал ветров.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]}<br/></p>
        А если ослабею я на пути -<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{minor[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]}<br/></p>
        Ты поддержишь и дашь силы, чтобы мне дойти.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; {minor[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]}<br/></p>
        Но с Тобою, Иисус, я иду вперёд,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[7+start]}<br/></p>
        Мне не страшны ни бури, ни шквал ветров.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]}<br/></p>
        А если ослабею я на пути -<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp; {minor[11+start]}<br/></p>
        Не оставишь Ты!<br/><br/>

        <p className='main_song-couplet' >Куплет 2: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {minor[11+start]} &emsp;&emsp;&emsp;&ensp; {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]}<br/></p>
        Хоть и молод я - (пусть бегут года)<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[7+start]} <br/></p>
        Знаю, для меня, (твердит моя душа)<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {major[6+start]} <br/></p>
        Нет лучшего, чем быть (и вечно в славе жить)<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]} <br/></p>
        С Тобою, Господь, всегда, (остаться навсегда).<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]} <br/></p>
        Каждый день черпать (вновь и вновь искать)<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[11+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; {major[7+start]} <br/></p>
        Божью благодать, (в Боге пребывать)<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]} <br/></p>
        И держать огонь, (что Дух Святой даёт)<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp; {minor[11+start]} <br/></p>
        В наших сердцах.<br/><br/>

      </main> 

    </div>
   );
     
 }
