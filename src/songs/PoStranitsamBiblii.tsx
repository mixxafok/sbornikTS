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


export default function BibliaMnogoSveta({title, getNameSong}:ISong) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[9+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  {major[2+start]} &emsp;&emsp;&emsp;{minor[1+start]} &emsp; {major[9+start]} <br/></p>
                  Библия много света нам открыла<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[2+start]}  &emsp;&emsp;&emsp;&emsp;&emsp; {major[9+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[4+start]}    <br/></p>
                  И научила всех людей любить,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[9+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  {major[2+start]} &emsp;&emsp; {major[4+start]} &emsp;&emsp;&emsp; {major[9+start]} <br/></p>               
                  Несколько тысяч лет она служила<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[2+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {major[9+start]} &emsp;&emsp; {major[4+start]}  &emsp; {major[9+start]}  <br/></p>
                  И до конца нам будет говорить.<br/><br/>

                  <p className='main_song-couplet'  >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > &emsp; {major[9+start]}  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  {major[2+start]}   <br/></p>               
                  Боже, даруй нам вникнуть в это Слово<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[9+start]}  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  {minor[6+start]} &emsp; {major[11+start]}&emsp;&emsp; {major[4+start]} <br/></p>               
                  И возвестить во все края земли:<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {major[9+start]}  &emsp;&emsp;&emsp;&emsp;&emsp;  {major[2+start]} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {minor[4+start]} {major[9+start]} <br/></p>               
                  Вот уж грядет пришествие Христово,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[2+start]}  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;   {minor[9+start]} &emsp;  {major[4+start]} &emsp;&emsp; {major[9+start]}  <br/></p>
                  Той Божьей вести весь народ внемли!<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>
                  Библия взоры к небу направляет<br/>
                  И научает, как туда войти.<br/>
                  Кто же ее надолго оставляет,<br/>
                  Тот ослабеет на земном пути.<br/><br/>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  О христиане, Библию читайте,<br/>
                  Грех побеждайте, двигайтесь вперед!<br/>
                  И своих близких к небу направляйте,<br/>
                  Бог за труды награду вам пошлет.<br/><br/>

        </main> 
     </div>
   );
     
 }
