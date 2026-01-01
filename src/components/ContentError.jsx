import data from '../bd.json';
import Person from '../pictures/Person.png';
import useSound from 'use-sound'; 
import ErrorSound from '../sound/gameOver.mp3'

const Error = () => {
  let text = data.contents[0].error_text_Doctor;
  const [play] = useSound(ErrorSound);
  play()
  return (
    <main>
      <div className="header">
      <div className="TextOfDoctor">
        <p className="ConnentOfDoctor" key='1'>{text}</p>
      </div>
      <img className="Person" src={Person} alt="Person"/>
    </div>
      <div className='words'></div>
    </main>
  )
  
}

export default Error