import { Dispatch, SetStateAction } from "react";
type MyObject = {
  [key: string|number]: string;
};

 export const minor:MyObject = {
  '-5': 'D#m',
  '-4': 'Em',
  '-3': 'Fm',
  '-2': 'F#m',
  '-1': 'Gm',
  0: 'G#m',
  1: 'Am',
  2: 'A#m',
  3: 'Hm',
  4: 'Cm',
  5: 'C#m',
  6: 'Dm',
  7: 'D#m',
  8: 'Em',
  9: 'Fm',
  10: 'F#m',
  11: 'Gm',
  12: 'G#m',
  13: 'Am',
  14: 'A#m',
  15: 'Bm',
  16: 'Cm',
  17: 'C#m',
  18: 'Dm',

}

export const major:MyObject = {
  '-5': 'D#',
  '-4': 'E',
  '-3': 'F',
  '-2': 'F#',
  '-1': 'G',
  0: 'G#',
  1: 'A',
  2: 'A#',
  3: 'H',
  4: 'C',
  5: 'C#',
  6: 'D',
  7: 'D#',
  8: 'E',
  9: 'F',
  10: 'F#',
  11: 'G',
  12: 'G#',
  13: 'A',
  14: 'A#',
  15: 'B',
  16: 'C',
  17: 'C#',
  18: 'D',
}

let con = 0;
export const getTon = (n: number, {setStart}: { setStart: Dispatch<SetStateAction<number>>; }) =>{

  if(n===1){
    if(con < 6 ){
      con = con + n;
      setStart(con)
    }
  }
  else {
    if(con > -6){
      con = con + n;
      setStart(con)
    }
  }

}

//Am A#m Bm Cm C#m Dm D#m Em Fm F#m Gm G#m

//A A# B C C# D D# E F F# G G# 
