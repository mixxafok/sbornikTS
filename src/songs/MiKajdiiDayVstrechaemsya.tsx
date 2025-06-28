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


export default function MiKajdiiDayVstrechaemsya({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {minor[8+start]}  <br/></p>
                  Мы каждый день встречаемся вновь<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;&emsp;{major[1+start]}7   <br/></p>
                  С прекрасным словом, словом "любовь",<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;{major[3+start]}7 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;   {minor[6+start]}  {major[3+start]}7 <br/></p>               
                  Мы каждый день за ней летим в мечтах своих, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;{minor[8+start]} &emsp;&emsp;&emsp;&emsp;&emsp;   {minor[1+start]}   <br/></p>               
                  Но настоящей любви, увы, мы в этом мире не нашли,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;{major[3+start]} &emsp;&emsp;&emsp;&emsp;&emsp; {minor[8+start]}       <br/></p>
                  На наш вопрос один ответ: любви без Бога нет.<br/><br/>

                  <p className='main_song-couplet'  >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp;&emsp;{minor[8+start]}  &emsp;&emsp;&emsp;&emsp; {minor[1+start]} <br/></p>
                  Любовь Христа верна и чиста, она и ласкова, и нежна,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp; {major[6+start]} &emsp;&emsp;&emsp;&emsp;    {major[4+start]}    <br/></p>
                  Она объемлет всех людей и покорит силой своей.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp;&emsp; {minor[8+start]}  &emsp;&emsp;&emsp;&emsp;      {minor[1+start]}    <br/></p>               
                  Держитесь этой вы любви, она вас к небу приведет,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp;&emsp; {major[3+start]}7  &emsp;&emsp;&emsp;&emsp;        {minor[8+start]}      <br/></p>
                  Где Иисус спасенных ждет.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Но настоящая любовь приходит с синих облаков.<br/>
                  Её дарует вечный Бог, Творец миров.<br/>
                  Она несется и парит, и каждый может получить<br/>
                  Без денег, злата, серебра любовь Христа.<br/><br/>

        </main> 
     </div>
   );
     
 }
