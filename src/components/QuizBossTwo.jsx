import Caries from '../pictures/zloyBoss.png';
import Person from '../pictures/PersonRev.png';
import data from '../bd.json';
import { useState, useEffect} from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import useSound from 'use-sound'; 
import soundOne from '../sound/kick.mp3'
import soundTwo from '../sound/kick.mp3'
import gameOver from '../sound/gameOver.mp3'
import win from '../sound/win.mp3'

const QuizBossTwo = () => {
  let navigate = useNavigate();
  const location = useLocation()

      const [playSoundhitHeroes] = useSound(soundOne);
      const [playSoundhitBoss] = useSound(soundTwo);
      const [playSoundgameOver] = useSound(gameOver);
      const [playSoundwin] = useSound(win);

   const [count, setCount] = useState(10);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []); 
    
  const [bossFrog, setShake] = useState(false)
  function move(){
    playSoundhitHeroes()
    setShake(true)
    setTimeout(()=>setShake(false),1000)
  }

  const [heroes, setShakeHeroes] = useState(false)
  function moveHer(){
    playSoundhitBoss()
    setShakeHeroes(true)
    setTimeout(()=>setShakeHeroes(false),200)
  }

  let [key, setKey] = useState(53);
  const [HPboss, setHPBoss] = useState(5000)
  const HPheroes = 500

  
  if(count === 0){
        moveHer()
        setCount(1) 
          playSoundgameOver()
          navigate('/0')
          setKey(53)

    }

function update_1(){
      moveHer()
      playSoundgameOver()
      navigate('/0')
      setKey(53)
  }
  function update_2(){
       moveHer()
      playSoundgameOver()
      navigate('/0')
      setKey(53)
  }
  function update_3(){
      moveHer()
      playSoundgameOver()
      navigate('/0')
      setKey(53)
  }
  function update_4(){
      moveHer()
      playSoundgameOver()
      navigate('/0')
      setKey(53)
  }

  const click = () => {
    move()
    setHPBoss(HPboss-100)
  }
  if(HPboss === 0){
    playSoundwin()
    navigate('/1002')
  }

  return (
  <main>
   <div className="header">
    <div className="wrapHeroes">
      <div className='contentHeroes'>
          <img className={heroes ? "heroes":"heroes2"} src={Person} alt="Person"/>
          <p className='HP'>Дед мороз: {HPheroes}HP</p>
      </div>
      <div>
        <img onClick={click} className={bossFrog ? "bossFrog" : "bossFrog2"} src={Caries} alt="bossCaries"/>
        <p className='HP'>Страж: {HPboss}HP</p>
      </div>
    </div>
  </div>
    <div>
      <div className='timer' >Время на ответ:{count}</div>
      <div className='words'>{data.contents[key].textDoctorTwo}</div>
       <div className='buttons__content'>
            <button onClick={update_1} className="button">{data.contents[key].answer.answer_1[0]}</button>
            <button onClick={update_2} className="button">{data.contents[key].answer.answer_2[0]}</button>
            <button onClick={update_3} className="button">{data.contents[key].answer.answer_3[0]}</button>
            <button onClick={update_4} className="button">{data.contents[key].answer.answer_4[0]}</button>
        </div>
    </div>  
  </main>
  )
}

export default QuizBossTwo