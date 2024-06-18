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

export default function VmesteMiSVamiVerili({title, getNameSong}:ISong) {
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
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &ensp; {minor[1+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[8+start]} <br/></p>
        Вместе мы с вами верили,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; {major[8+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[1+start]}<br/></p>
        Вместе любили и пели. <br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &ensp; {minor[6+start]} &emsp;&emsp;&emsp;&emsp; {minor[1+start]}<br/></p>
        Вместе дороги мерили,<br/>
        <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &ensp; {major[8+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[1+start]}  ({major[8+start]} {minor[1+start]})<br/></p>
        Часто под вой метели. <br/><br/>

        <p className='main_song-couplet' >Куплет 2: </p>
        Труд небольшой, но делали, <br/>
        Вместе огнем горели.<br/>
        Вместе ночами белыми,<br/>
        В синюю даль смотрели.<br/><br/>

        <p className='main_song-couplet' >Куплет 3: </p>
        Вместе стояли прямо мы, <br/>
        Слыша угрозы злые.<br/>
        Были пред Богом правыми,<br/>
        Чисты пред миром были.<br/><br/>

        <p className='main_song-couplet' >Куплет 4: </p>
        В край дорогой и солнечный  <br/>
        С светлой придем мы песней. <br/>
        Там, где нет слез и горечи, <br/>
        Вечно мы будем вместе.<br/><br/>
      </main> 
    </div>
  );
}
