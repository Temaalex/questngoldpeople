import data from '../bd.json';
import Person from '../pictures/Person.png';
import useSound from 'use-sound'; 
import ErrorSound from '../sound/gameOver.mp3'

const Error = () => {
  let text = data.contents[0].error_text_Doctor;
  const [play] = useSound(ErrorSound);
  play()
    function changeHashOnLoad() {
        window.location.href += "#";
        setTimeout("changeHashAgain()", "50");
    }

    function changeHashAgain() 
    {          
        window.location.href += "1";
    }

    var storedHash = window.location.hash;
    window.setInterval(function () {
        if (window.location.hash != storedHash) {
            window.location.hash = storedHash;
        }
    }, 50);
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