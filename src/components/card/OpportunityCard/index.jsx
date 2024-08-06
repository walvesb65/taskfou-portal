/* eslint-disable react/prop-types */
import './style.css';
import iconLocation from "../../../assets/location.svg";
import casework from "../../../assets/case.svg";

export default function OpportunityCard({ opportunity, onClick, isSelected }) {
  return (
    <div
      className={`opportunity-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(opportunity)}
    >
      <h3>{opportunity.Vaga_Titulo}</h3>
      <div>
        <div className='box-icon'>
          <img src={iconLocation} alt="" />
          <p>{opportunity.Vaga_LocalTrabalho}</p>
        </div>

        <div className="box-icon">
          <img src={casework} alt="" />
          <p>{opportunity.Departamento_Descricao}</p>
        </div>
      </div>

    </div>
  );
}