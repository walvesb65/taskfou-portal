/* eslint-disable react/prop-types */
import OpportunityCard from "../../card/OpportunityCard";
import './style.css';

export default function OpportunityList({ opportunities, onClick, selectedOpportunityId }) {
  return (
    <div className="list-opportunities">
      {opportunities.map((opportunity) => (
        <OpportunityCard 
          key={opportunity.Vaga_Id} 
          opportunity={opportunity} 
          onClick={onClick} 
          isSelected={opportunity.Vaga_Id === selectedOpportunityId}
        />
      ))}
    </div>
  );
}