/* eslint-disable react/prop-types */
// import iconLocation from '../../assets/location.svg'
import './style.css'
export default function Filter({ onFilter }) {
  return (
    <div className="filter-opportunities">
      <input 
        type="text" 
        placeholder="Filtrar por nome" 
        onChange={(e) => onFilter("Vaga_Titulo", e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Filtrar por localidade"
        onChange={(e) => onFilter("Vaga_LocalTrabalho", e.target.value)} 
      />
    </div>
  );
}
