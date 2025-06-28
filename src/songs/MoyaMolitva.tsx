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

export default function MoyaMolitva({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}          {major[6+start]}    {major[4+start]} <br/></p>
                  Моя молитва да струится<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}          {minor[3+start]}    {minor[8+start]} <br/></p>
                  К Тебе, Господь, как фимиам.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}          {major[6+start]}    {major[4+start]} <br/></p>               
                  Как сердце жаждет, как стремится<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[1+start]}          {minor[3+start]}          {minor[8+start]} <br/></p>
                  В чудесный Твой небесный храм<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}             {major[6+start]} <br/></p>
                     Боже, я молюсь за Беларусь, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}          {minor[3+start]} <br/></p>
                      Боже, молю Тебя за людей,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}             {major[6+start]}<br/></p>
                      Ты их прости, Ты их спаси,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[3+start]}          {minor[8+start]} <br/></p>
                      Милость Свою нам яви.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[11+start]}             {major[6+start]}  <br/></p>
                      Боже, я знаю, Ты будешь с нами,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}          {minor[3+start]}  <br/></p>
                      В храме Своем под небесами,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}             {major[6+start]} <br/></p>
                      Радость и мир Ты даровал,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[3+start]}          {minor[8+start]} <br/></p>
                      Жизнь за людей отдал,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[4+start]}     {minor[1+start]}          {major[3+start]}7    {minor[8+start]}<br/></p>
                      В Книгу Свою нас записал.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Ты в Своем Слове обещаешь<br/>
                  Всем, кто Тебя ни призовет,<br/>
                  Что Ты услышишь в день печали,<br/>
                  С души греховной снимешь гнет.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Пошли, Господь, нам силу свыше,<br/>
                  Людей любить и звать к Тебе.<br/>
                  Когда мы молимся, услышь нас,<br/>
                  И помощь дай Свою с небес.<br/><br/>
        </main> 
     </div>
   );
     
 }
