import Person from '../pictures/Person.png';
import winimg from '../pictures/winimg.png'

const TheEndTwo = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfDoctor">
        <p className="ConnentOfDoctor">Код от сундука: 2367132</p>
      </div>
      <img className="Person"src={Person}alt="Person"/>
    </div>
    <div className='wrapBox'>
      <img className="winimg" src={winimg}alt="winimg"/>
    </div>
  </main>
  )
  
}

export default TheEndTwo