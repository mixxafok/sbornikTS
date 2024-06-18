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

export default function VChristeOdnom({title, getNameSong}:ISong ) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}                {major[6+start]}         {major[11+start]}               {major[1+start]}          <br/></p>
                  В Христе одном надежда есть,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}           {major[11+start]}            {major[1+start]}           {major[6+start]}<br/></p>
                  Вся моя жизнь и сила в Нём.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}                      {major[6+start]}              {major[11+start]}      {major[1+start]}       <br/></p>               
                  Он - Камень мой, скала и песнь – <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}                   {major[11+start]}                     {major[1+start]}             {major[6+start]}<br/></p>
                  надежный  спутник в страшный шторм<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}   {minor[3+start]}       {major[1+start]} <br/></p>
                  Как высока любовь Его. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}                {major[11+start]}      {minor[3+start]}     {major[1+start]}<br/></p>
                  Как мир глубок, как с Ним легко. <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}                 {major[6+start]}                {major[11+start]}          {major[1+start]}  <br/></p>
                  Мой Утешитель – Всё во всём,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[6+start]}           {major[11+start]}      {major[1+start]}               {major[6+start]}<br/></p>
                  Моя опора только в Нём.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  В Христе одном, принявшем плоть, <br/>
                  Открылся всемогущий Бог.<br/>
                  Но дар любви что дал Господь,<br/>
                  Отверг народ, избрав порок.<br/>
                  Он на кресте Себя отдал,  <br/>
                  В смиреньи гнев Отца принял<br/>
                  Мой грех на плечи возложил <br/>
                  Чтобы Его я смертью жил<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  В земле, как все, Он мёртвым был <br/>
                  Объят был тьмою свет небес.<br/>
                  Но в третий день Он победил, <br/>
                  Из гроба мрачного воскрес<br/>
                  Он Бог и победитель всех <br/>
                  Уже не правит больше грех.<br/>
                  Навеки Он хозяин мой<br/>
                  Я куплен кровию святой<br/><br/>

                  <p className='main_song-couplet' >Куплет 4: </p>
                  Нет страха смерти, нет вины, <br/>
                  Всё только силою Христа.<br/>
                  От первых дней, до седины <br/>
                  До смерти, в Нём моя судьба.<br/>
                  Нет никого и ничего <br/>
                  Что вырвет из руки Его<br/>
                  Он приведёт меня в Свой дом <br/>
                  Моя опора только в Нём<br/><br/>
</main> 

           
 
     </div>
   );
     
 }

 
