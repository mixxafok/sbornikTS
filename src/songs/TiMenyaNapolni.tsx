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

export default function TiMenyaNapolni({title, getNameSong}:ISong ) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[8+start]}    {major[3+start]}    {major[1+start]}    {major[3+start]}<br/></p>
                  Ты меня наполни святостью Твоей,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[8+start]}    {major[3+start]}    {major[1+start]}<br/></p>
                  Пусть меня исполнит Дух Твой как елей.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[3+start]}    {minor[5+start]}    {major[1+start]}    {major[8+start]}<br/></p>
                  Я всего лишь человек, словно пыль перед Тобой,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[1+start]}    {major[3+start]}    {major[8+start]}<br/></p>
                  Но в Твоих руках я нахожу покой.<br/>
                  Ты всегда был рядом, когда я страдал,<br/>
                  Посылал надежду, веру укреплял.<br/>
                  И нет слов, чтоб описать полноту любви Твоей,<br/>
                  Как прекрасен Ты Господь души моей.<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[8+start]}    {major[1+start]}<br/></p>
                  Ты скажи мне Боже кто я есть<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[3+start]}    {major[8+start]}<br/></p>
                  По сравнению с Тобой,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[8+start]}    {major[1+start]}<br/></p>
                  Ты светящий, яркий солнца свет<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[3+start]}    {major[8+start]}<br/></p>
                  Можешь скрыть Своей рукой,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[5+start]}    {major[1+start]}<br/></p>
                  И сиянье неба и дождя <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[3+start]}    {major[8+start]}<br/></p>
                  И росток в сухой земле<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[5+start]}   {major[1+start]}<br/></p>
                  Мне ответят снова, что нигде<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[3+start]}    {major[8+start]}<br/></p>
                  Нет подобного Тебе!<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Я нашёл свободу, став Твоим рабом,<br/>
                  Я обрёл спасенье, став Твоим дитём.<br/>
                  Мои сердце и любовь я кладу к ногам Твоим,<br/>
                  Только Ты достоин славы и хвалы!<br/>
                  Твоё Имя велико по всей земле,<br/>
                  Твоя слава не смолкает в вышине.<br/>
                  Пусть ещё одна душа вдруг увидит и поймёт,<br/>
                  Что её Создатель в небесах живёт.<br/><br/>

</main> 

 
     </div>
   );
     
 }
