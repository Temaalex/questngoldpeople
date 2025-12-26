import Person from '../pictures/Person.png';
import data from '../bd.json';
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import useSound from 'use-sound'; 
import win from '../sound/win.mp3'

const QuizText = () => {
const location = useLocation()  
let [key, setKey] = useState(Number(location.pathname.slice(1)));
let navigate = useNavigate();
const [play] = useSound(win);

const checked = () => {
  let answer = data.contents[key].answer;
  let check = document.querySelector('.inputAppWords')?.value.replace(/\s/g, "");
  if(check.toLowerCase() === answer) {
    setKey(key + 1)
    document.querySelector('.inputAppWords').value = ''
   }else{
     navigate('/0')
   }
}
const contentOne = [
    <div key={1} className='wrap'>
      <input 
        id="masswge" 
        placeholder='введите слово' 
        className='inputAppWords'
        ></input>
      <button onClick={checked} className='buttonOK'>ОК</button>
    </div>]
const contentTwo = []
function getContent (){
    if("answer" in data.contents[key] === false){
      play()
        return contentTwo
    } else {
        return contentOne
    }
   }


  return (
  <div className="App">
  <main>
  <div className="header">
    <div className="TextOfDoctor">
      <p className="ConnentOfDoctor">{data.contents[key].textDoctor}</p>
    </div>
    <img className="Person" src={Person} alt="Person"/>
  </div>
      {getContent()}
  </main>
  </div>
  )
}
export default QuizText