/* eslint-disable react/prop-types */
import Lupa from '../../../assets/lupa.svg';
import { Link } from 'react-router-dom';
import './style.css'
export default function OpportunityDetail({ opportunity }) {
  if (!opportunity) {
    return (
    <div className="detail-opportunities">
      <img className='lupa-icon' src={Lupa} alt="" />
      <span>Selecione uma vaga para ver os detalhes</span>
    </div>);
  }

  return (
    <div className="detail-opportunities">
      <div className="header-detail-opportunities">
        <div>
          <h2>{opportunity.Vaga_Titulo}</h2>
          <p>{opportunity.Vaga_LocalTrabalho}</p>
        </div>
        <div className='box-btn-redirect-candidacy'>
          <Link to={`/opportunity/${opportunity.Vaga_Id}`} className='btn-redirect-candidacy'>
              <span>Candidatar-se agora</span>
          </Link>
          <span>ID:{opportunity.Vaga_Id}</span>
        </div>
      </div>
      {/* <p>{opportunity.Departamento_Descricao}</p>
      <p>{opportunity.Vaga_Responsabilidade}</p>
      <p>{opportunity.Vaga_Requisitos}</p>
      <p>{opportunity.Vaga_Diferencial}</p>
      <p>{opportunity.Vaga_Remuneracao}</p> */}
    </div>
  );
}
