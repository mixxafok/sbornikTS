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

export default function NebesaTvouPrestol ({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {major[1+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[3+start]}<br/></p>
                  Небеса - это Твой престол,  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {minor[3+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {major[1+start]} <br/></p>
                  А земля - подножие ног Твоих.  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {major[1+start]}7 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]} <br/></p>
                  Где же можно построить дом <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {minor[3+start]} &emsp;&emsp;&emsp;&emsp; {major[1+start]} &emsp;&emsp;&emsp; {major[8+start]} <br/></p>
                  для Тебя, где бы Ты в покое жил?  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {minor[10+start]} &emsp;&emsp;&emsp; {major[8+start]} <br/></p>
                  О, Господь, я Тебе отдаю <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {minor[3+start]} &emsp;&emsp; {major[1+start]}   <br/></p>               
                  Сокрушённое сердце моё.  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[10+start]} &emsp; {major[8+start]} &emsp;&emsp;&emsp; {major[6+start]}    <br/></p>               
                  В сердце Слово Твоё я храню, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {minor[3+start]} &emsp;&emsp;&emsp;&emsp;&emsp;  {major[8+start]}   <br/></p>
                  И да святится имя Твоё!<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {major[1+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[6+start]}  <br/></p>
                  Так да святится имя Твоё  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {major[8+start]} &emsp;&emsp;&emsp; {minor[5+start]}<br/></p>
                  На земле и на небесах.  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp; {minor[10+start]} &emsp; {major[8+start]} &emsp;&emsp; {major[6+start]}-{major[1+start]}  <br/></p>
                  Так да святится имя Твоё <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; {minor[3+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[8+start]}   <br/></p>
                  В нашей жизни и в наших сердцах! <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {major[1+start]}  <br/></p>
                  О, Господь.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Верю я, мой сердечный дом  <br/>
                  Стал обителью Духа Святого,  <br/>
                  И любовь поселилась в нём -   <br/>
                  Это выше богатства земного. <br/>
                  Мой Господь, я Тебе отдаю  <br/>
                  Жертву уст, приношенье моё. <br/>
                  О, Иисус, для Тебя я пою: <br/>
                  И да святится имя Твоё.<br/><br/>

        </main> 

           
 
     </div>
   );
     
 }
