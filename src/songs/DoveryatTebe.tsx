import React, { useState } from 'react';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'
import Arrow from '../assets/icons8.png'
import '../styles/songs.css'

interface ISong{
  title: string,
  getNameSong: React.Dispatch<React.SetStateAction<string>>
}


export default function DoveryatTebe({title, getNameSong}:ISong ) {
  
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[12+start]}<br/></p>
                  Отпускаю все мечты мои,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[9+start]}<br/></p>
                  Я полагаю их у ног Твоих <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[2+start]}<br/></p>               
                  Если в жизни ошибаюсь я, <br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[5+start]} <br/></p>
                  Твоя любовь не изменяется <br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Хотел сразиться я за жизнь мою...<br/>
                  Ослабли руки, устал я в бою<br/>
                  Ты сильный Воин, Ты Царь всех побед!<br/>
                  Я побеждаю, когда я в Тебе<br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[12+start]}                            {major[7+start]} <br/></p>
                  И даже если горы не двигаясь стоят<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[9+start]}                           {major[5+start]}<br/></p>
                  И если воды моря не разделяются...<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{major[12+start]}                              {major[7+start]} <br/></p>
                  И если на молитвы, не вижу я ответ<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[9+start]}                         {major[5+start]}<br/></p>
                  Доверять, доверять буду я Тебе!<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  Что завтра мне принесёт опять?<br/>
                  Ты знаешь, всё известно для Тебя!<br/>
                  Живи во мне, будь дыханием моим<br/>
                  Дай каждый день ходить путём Твоим!<br/><br/>

                  <p className='main_song-couplet' >Мост: <br/></p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >Db                                  Eb<br/></p>
                  Ты мой покой и сила, опора Ты моя!<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >Fm<br/></p>
                  Моё Ты основание, Ты крепкая скала!<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >Db                                 Eb <br/></p>               
                  Твои пути прекрасны, они превыше всех!<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >Fm                                Eb/G <br/></p>
                  Ты держишь эту Землю и всё в Твоей руке!<br/><br/>
        </main> 
     </div>
   );
     
 }
