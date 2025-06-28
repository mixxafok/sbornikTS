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

export default function DayZaDay({title, getNameSong}:ISong ) {
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
          День за днём и каждое мгновенье<br/>
          Бог даёт мне силу для борьбы;<br/>
          Доверяя Божьим откровеньям,<br/>
          Не страшусь изменчивой судьбы.<br/>
          Бог-Отец нас любит беспредельно,<br/>
          Всё для счастья каждый день даёт,<br/>
          Скорбь и радость отмеряет верно,<br/>
          Мир святой - среди забот.<br/><br/>

          <p className='main_song-couplet' >Куплет 2: </p>
          Каждый день ко мне Спаситель близок<br/>
          С дивной милостью на каждый миг;<br/>
          Все заботы прогоняет сразу,<br/>
          Он - Советник дивный для Своих.<br/>
          Нас рука Всевышенго укрыла,<br/>
          Он - кормилец и покров Своим;<br/>
          Утомленным Он дарует силу,<br/>
          Посылает блага им.<br/><br/>

          <p className='main_song-couplet' >Куплет 3: </p>
          Помоги во всяком испытанье<br/>
          Доверять Тебе, Господь, во всём,<br/>
          Помнить твёрдо все обетованья,<br/>
          Что находим в Слове мы Твоём.<br/>
          Помоги, встречая труд и горе,<br/>
          Принимать их из руки Твоей,<br/>
          День за днём идти, поднявши взоры,<br/>
          К той стране, где нет скорбей.<br/><br/>
        </main> 

    </div>
   );
     
 }
