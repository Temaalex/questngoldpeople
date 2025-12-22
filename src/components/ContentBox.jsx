import Person from '../pictures/Person.png';
import Box from '../pictures/Box.png';
import { useNavigate } from "react-router-dom"
import useSound from 'use-sound'; 
import win from '../sound/win.mp3'

const ContentBox = () => {
  const [playSound] = useSound(win);
  let navigate = useNavigate();
  const arr = ['4', '8', '9', 'ф', 'д',
              '7', '68', '99', 'р', 'х',
              '4', '57', 'ы', 'ф', 'д',
              'ж', 'ы', '9', 'ч', '4']
               
  const click = () => {
    const arr1 = [];
    for (let index = 0; index < arr.length; index++) {
      arr1.push(document.getElementById(index+1)?.value.replace(/\s/g, "").toLowerCase())
    }
    if(JSON.stringify(arr) === JSON.stringify(arr1)){
      playSound()
      navigate('/41')
      } else {
        for (let index = 0; index < arr.length; index++) {
          if (arr[index] !== arr1[index]){
          const elements = document.querySelectorAll('.boxForNumber')
          elements[index].style.background = 'red'
          }
          if (arr[index] === arr1[index]){
          const elements = document.querySelectorAll('.boxForNumber')
          elements[index].style.background = '#00fa2e'
          }
        }
      }
  }

   return (
  <main>
  <div className="header">
    <div className="TextOfDoctor">
      <p className="ConnentOfDoctor">Вау, вы решили все задачи, настало время открыть сундук и узнать как получить приз!</p>
    </div>
    <img className="Person" src={Person} alt="Person"/>
  </div>
  <div className="imgBox">
    <p className='textBox'>Заполните ячейки и нажмите на меня!</p>
    <img onClick={click} className="box" src={Box} alt="Box"/>
  </div>
  
<div className='wrapBox'>
    <div>
      <p className='textForNumber'>1</p>
      <input id='1' className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>2</p>
      <input id='2' className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>3</p>
      <input id='3'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>4</p>
      <input id='4' className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>5</p>
      <input id='5'className='boxForNumber'></input>
    </div>
  </div>
<div className='wrapBox'>
    <div>
      <p className='textForNumber'>6</p>
      <input id='6'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>7</p>
      <input id='7'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>8</p>
      <input id='8'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>9</p>
      <input id='9'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>10</p>
      <input id='10'className='boxForNumber'></input>
    </div>
</div>
<div className='wrapBox'> 
    <div>
      <p className='textForNumber'>11</p>
      <input id='11'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>12</p>
      <input id='12'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>13</p>
      <input id='13'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>14</p>
      <input id='14'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>15</p>
      <input id='15'className='boxForNumber'></input>
    </div>
  </div>
  <div className='wrapBox'> 
    <div>
      <p className='textForNumber'>16</p>
      <input id='16'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>17</p>
      <input id='17'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>18</p>
      <input id='18'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>19</p>
      <input id='19'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>20</p>
      <input id='20'className='boxForNumber'></input>
    </div>
  </div>
  </main>
  )
  
}

export default ContentBox