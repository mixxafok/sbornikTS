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

export default function VdoliPoViaDolorossa({title, getNameSong}:ISong ) {
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
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >              {minor[8+start]}       {major[6+start]}                {major[4+start]}                {major[3+start]}<br/></p>
                  Вдоль по Виа Долороса, на Голгофу по пути<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >         {minor[8+start]}                         {major[6+start]}                  {major[4+start]}<br/></p>
                  К месту казни толпы жаждали пройти<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >     {minor[1+start]}              {minor[8+start]}           {major[10+start]}<br/></p>               
                  И солдаты расчищали дорогу<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >             {major[3+start]}              {minor[8+start]}<br/></p>
                  Скорби, грусти и тоски.<br/>
                  Кровь текла струёю алой <br/>
                  Осуждённого на смерть,<br/>
                  Разрывал венец терновый кости твердь<br/>
                  И презренье нёс Он тех,<br/>
                  Кто кричал, что совершил Он тяжкий грех. <br/><br/>

                  <p className='main_song-couplet' >Припев: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[8+start]}          {minor[1+start]}        {major[3+start]}    <br/></p>
                  Вдоль по Виа Долороса<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}            {major[8+start]}7<br/></p>
                  По старадания пути,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >         {minor[1+start]}               {major[3+start]}                      {major[8+start]}7<br/></p>
                  Шёл Мессия, словно Агнец нас спасти.<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >       {minor[1+start]}                {major[3+start]}                   {minor[8+start]}           {major[6+start]}     {major[4+start]}<br/></p>
                  Но Он выбрал ту дорогу, чтоб открыть нам небеса,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >      {minor[8+start]}                    {major[6+start]}           {major[4+start]}      {major[3+start]}  {minor[8+start]}<br/></p>
                  Шёл Христос по Долороса за тебя и за меня.<br/><br/>

                  <p className='main_song-couplet' >Куплет 2: </p>                                                          
                  Он молчал, Он был спокоен,<br/>                                     
                  Хоть устал и изнемог,<br/>
                  Так молчать в смиреньи полном мог лишь Бог.<br/>
                  Не клемил Он палачей,<br/>
                  Но с любовью смотрел Он на людей. <br/><br/>

                  <p className='main_song-couplet' >Припев <br/><br/></p>

                  <p className='main_song-couplet' >Куплет 3: </p>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >  {major[3+start]}                      {major[4+start]}<br/></p>
                  А солнце палит и небо молчит,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >     {major[6+start]}               {major[3+start]}            {minor[8+start]}  {major[6+start]}    {major[11+start]}   {major[8+start]}<br/></p>
                  Оставлен Сын Божий Самим Отцом,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} > {major[8+start]}          {minor[1+start]}           {major[3+start]}             {minor[8+start]}                 {major[8+start]}7<br/></p>               
                  Вдоль по Виа Долороса до холма на всём пути<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >          {minor[1+start]}               {major[3+start]}                {major[8+start]}7 <br/></p>
                  Капли крови будто маки расцвели,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >      {minor[1+start]}                  {major[3+start]}                   {minor[8+start]}          {major[3+start]}   {minor[8+start]}<br/></p>
                  Но Он выбрал ту дорогу, чтоб открыть нам небеса,<br/>
                  <p id={viewAccordes ? '' : 'none'} className={isStyle === 'true' ? 'main-song-accord accDark' : 'main-song-accord '} >{minor[8+start]}                           {major[6+start]}           {major[4+start]}     {major[3+start]}   {minor[8+start]}<br/></p>               
                  Шёл Христос по Долороса за меня и за тебя.<br/><br/>
</main> 

 
     </div>
   );
     
 }
