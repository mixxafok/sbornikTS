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

export default function OYnostSvetlaia({title, getNameSong}:ISong) {
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
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[8+start]} &emsp;&emsp;&emsp;&ensp;&emsp; {minor[1+start]} / {major[4+start]}<br/></p>
        О, юность светлая - мечта заветная,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {major[4+start]} &emsp;&emsp;&emsp; {minor[1+start]} &emsp; {major[3+start]} <br/></p>
        Я посвятил тебя Христу.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[1+start]} / {major[4+start]} <br/></p>
        С друзьями верными тружусь усердно я,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp; {minor[8+start]} &emsp;&emsp; {major[3+start]} &emsp; {minor[8+start]} <br/></p>
        И в край заоблачный иду.<br/><br/>

        <p className='main_song-couplet' >Припев: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp; {minor[1+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]} <br/></p>
        О, юность чистая - душа лучистая,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&ensp; {major[11+start]} &emsp;&emsp;&emsp;&ensp; {major[3+start]} &emsp;&emsp; {minor[8+start]}<br/></p>
        Ты ненавидишь грех и зло.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {minor[1+start]} <br/></p>
        Улыбки радости,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[6+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[11+start]} &emsp;&emsp;&emsp; {major[8+start]}<br/></p>
        Нет в сердце праздности,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[1+start]} &emsp; {major[3+start]} &emsp;&emsp;&emsp; {minor[8+start]}<br/></p>
        От Божьих милостей светло.<br/><br/>

        <p className='main_song-couplet' >Куплет 2: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[8+start]} &emsp;&emsp;&emsp;&ensp;&emsp; {minor[1+start]} / {major[4+start]}<br/></p>
        О, юность нежная - полна надеждами,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp; {major[4+start]} &emsp;&emsp;&emsp;&emsp; {minor[1+start]} &emsp; {major[3+start]} <br/></p>
        И верой пламенной, живой<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[1+start]} / {major[4+start]} <br/></p>
        В борьбе с неверием, со всяким рвением<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp; {minor[8+start]} &emsp;&emsp; {major[3+start]} &emsp; {minor[8+start]} <br/></p>
        Спеши на беспощадный бой.<br/><br/>

        <p className='main_song-couplet' >Куплет 3: </p>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[8+start]} &emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp; {minor[1+start]} / {major[4+start]}<br/></p>
        О, юность в Господе - смиренной поступью<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp; {major[4+start]} &emsp;&emsp;&emsp; {minor[1+start]} &emsp; {major[3+start]} <br/></p>
        К Голгофе чаще приходи.<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{minor[1+start]} / {major[4+start]} <br/></p>
        Христу послушной будь, и хоть нелёгок путь,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp; {minor[8+start]} &emsp;&emsp; {major[3+start]} &emsp; {minor[8+start]} <br/></p>
        Но несомненно он один.<br/><br/>

      </main> 

    </div>
   );
     
 }
