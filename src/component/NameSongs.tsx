import React, {useState,useEffect} from 'react';
import { ListSongs } from './ListSongs';
import menu from '../assets/menu.png'
import '../styles/nameSongs.css'


interface IStorage{
  sliderValue: any,
  switchValue: any
}

interface INameSong{
  getNameSong:React.Dispatch<React.SetStateAction<string>> ,
  getTitleSong:React.Dispatch<React.SetStateAction<string>>
}

export default function NameSongs({getNameSong,getTitleSong}:INameSong) {

  const [ modalOpen , setModalOpen ] = useState (false);

  const [storage, setStorage] = useState<IStorage>({
    sliderValue: localStorage.getItem('SliderValues'),
    switchValue: localStorage.getItem('SwitchValue') 
  })

  // const toggleSwitch = () =>{
  //   setStorage({...storage, switchValue: !storage.switchValue});
  //   SaveSwitch(!storage.switchValue);
  // } 

  // const toggleSlider = (value: any)=>{
  //   setStorage({...storage, sliderValue: value});
  //   SaveSlider(value);
  // }

  const GetSwitch = async () => {
   try{
     let EnabledSwitch:any = await localStorage.getItem('SwitchValue');
     if (JSON.parse(EnabledSwitch) === true){
      setStorage({...storage, switchValue: true});
      SaveSwitch(true); 
      // console.log('storage')
     }
     if (JSON.parse(EnabledSwitch) === false){
      setStorage({...storage, switchValue: false});
      SaveSwitch(false);
     // console.log('storage2')
    }
   }catch (e){
      console.log("Error get SWITCH");
   }
 }
 
 const SaveSwitch =  (a:string|boolean) => {
  try{
      localStorage.setItem('SwitchValue', JSON.stringify(a));
     console.log(JSON.stringify(storage))
  }catch (e){
     console.log("Error save SWITCH");
  }
}

  const GetSlider =  () => {
    try{
      let ValueSlider:any =  localStorage.getItem('SliderValues');
      if (JSON.parse(ValueSlider) === 0){
        //console.log('ValueLides = false')
      }
      if (ValueSlider > 0){
        setStorage({...storage, sliderValue: ValueSlider});
        //console.log('ValueSlider')
    }
    }catch (e){
      console.log("Error get SLIDER");
    }
  }

  const SaveSlider = (b:number) => {
    setStorage({...storage, sliderValue: b});
   try{
       localStorage.setItem('SliderValues', JSON.stringify(b));
      //console.log(JSON.stringify(storage))
   }catch (e){
      //console.log("Error save SLIDER ");
   }
  }

  useEffect( ()=>{
    GetSlider();
    GetSwitch();
  },[])

const songss = ListSongs.sort((a,b)=>{return a.title.localeCompare(b.title)}).map((item, index) =>{
  return (
    <div className={storage.switchValue ? 'nameSongsDark' : 'nameSongsLight'} key={item.id} onClick={()=>SongLoad1(item.name,item.title, index)} >
      {index + 1 + '.'} {item.title}
    </div>
  )
})

  const SongLoad1 = (name: string,tit: string, ind: number) => {
    getTitleSong(ind + 1 + "." + " " + tit)
    getNameSong(name)
  }

  return (
    <div className={storage.switchValue ? 'containerDark' : 'containerLight'}>

      <header className='header_namesong'>
        <p className='header_p_sbornik' >Молодежный сборник</p>
        <div className='menu'  onClick={() => setModalOpen(!modalOpen)}>
          <img  src={menu} alt='menu' width='100%' />     
        </div>
      </header>

      {modalOpen ?
        <div className='namesong_modal' onClick={() => { setModalOpen(!modalOpen)}}>
          <div className='namesong_modal--div' onClick={e=>e.stopPropagation()}>
            <div className='namesong_modal--div__theme'>
              <p className="modal_text"> Темная тема </p>
              <label className="toggleDarkBtn">
                <input type="checkbox"
                  checked={storage.switchValue}
                  value={storage.switchValue}
                  onChange={()=>{ setStorage({...storage, switchValue: !storage.switchValue});
                                  SaveSwitch(!storage.switchValue);}}  />
                <span className="slideBtnTg round"></span>
              </label>
            </div>

            <div className='namesong_modal--div__fonts'>
              <p className="modal_text"> Размер шрифта: { JSON.parse(storage.sliderValue) } </p>
              <input
                type="range"
                className="modal_range"
                step={1}
                min={12}
                max={26}
                value={JSON.parse(storage.sliderValue)}
                onChange={(e)=>{  setStorage({...storage, sliderValue: e.target.value});
                                  SaveSlider( JSON.parse( e.target.value));}} />
            </div>
          </div>
        </div>
       : null}

      <main>
        {songss}
      </main>

    </div>
  );
    
};


