import Logoask from "../../assets/TaskFouLogo.svg";
import './style.css'

export default function Candidacy() {
  return (
    <div className='candidacy-container'>
      
      <div className="header-opportunities">
        <img src={Logoask} alt="Company Logo" />
      </div>

      <div className="body-opportunities">
        <div className="filter-box">
          <span>Envie sua candidatura</span>
        </div>
      </div>
    </div>
  )
}
