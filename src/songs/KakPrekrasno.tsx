import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}

export default function KakPrekrasno({title, getNameSong}:ISong ) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}<br/></p>
                  Как прекрасно все то, что Твое,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}<br/></p>
                  Мне повсюду Твой слышится голос.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}7 <br/></p>
                  Ветром в листьях звенит и поет,  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]} <br/></p>
                  В сердце шепчет, как зреющий колос.  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}<br/></p>
                  Эти горы, покрытые мхом, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}<br/></p>
                  Эти волны, покрытые пеной,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[9+start]}<br/></p>
                  Этот берег с горячим песком,  <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[8+start]}<br/></p>
                  Это солнце в бескрайней Вселенной.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}<br/></p>
                  Боже мой, это - Ты, это - Ты, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[6+start]}<br/></p>
                  Я с Тобою повсюду встречаюсь: <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >G<br/></p>
                  Когда рву мимоходом цветы <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}({major[9+start]})        ({major[8+start]})         {major[8+start]} ({minor[1+start]})<br/></p>
                  И на чей-то поклон отвечаю.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Мне повсюду видна Твоя кисть. <br/>
                  Твой резец и Твой почерк с размахом: <br/>
                  В детском взоре, что светел и чист, <br/>
                  И в цветущих на поле ромашках. <br/>
                  Это Ты нам даруешь друзей, <br/>
                  Это Ты научил нас трудиться. <br/>
                  Потому я хочу все сильней <br/>
                  И все чаще, усердней молиться.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Это Ты меня петь научил, <br/>
                  Потому моя песнь не смолкает. <br/>
                  Это Ты в меня свет Твой пролил. <br/>
                  Он и в вечности не угасает. <br/>
                  Как прекрасно все то, что Твое, <br/>
                  Пред величьем Твоим я немею. <br/>
                  Это Ты мне. Спаситель, даешь <br/>
                  Все то доброе, что я имею.<br/><br/>
        </main> 
     </div>
   );
     
 }
