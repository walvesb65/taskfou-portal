// Opportunities.js
import { useState, useEffect } from "react";
import Filter from "../../components/filter";
import OpportunityList from "../../components/list/OpportunityList";
import OpportunityDetail from "../../components/preview/OpportunityDetail";
import Logoask from "../../assets/TaskFouLogo.svg";
import "./style.css";

export default function Opportunities() {
  const [opportunities, setOpportunities] = useState([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  useEffect(() => {
    // Dados falsos
    const data = [
      {
        Vaga_Id: 3038,
        Vaga_Titulo: "Analista de Sistemas",
        Vaga_Responsabilidade: "Desenvolver e manter sistemas",
        Vaga_Diferencial: "Experiência com React",
        Vaga_Remuneracao: 4500.50,
        Vaga_Justificativa: null,
        Vaga_EmailVisualizadores: null,
        Vaga_Datacriacao: "2024-07-19T00:05:23.220Z",
        Vaga_Quantidade: null,
        Vaga_Status_Descricao: "Ativa",
        talentosAtivos: 3,
        Empresa_RazaoSocial: "Tech Solutions",
        Departamento_Descricao: "TI",
        Vaga_Cargo: null,
        Vaga_LocalTrabalho: "São Paulo",
        Vaga_Tipo_Contrato: 1,
        Vaga_Usuario: 18,
        Vaga_Periodo_Vaga: 1,
        Vaga_Requisitos: "Conhecimentos avançados em JavaScript"
      },
      {
        Vaga_Id: 3039,
        Vaga_Titulo: "Desenvolvedor Front-end",
        Vaga_Responsabilidade: "Implementar interfaces de usuário",
        Vaga_Diferencial: "Experiência com Angular",
        Vaga_Remuneracao: 4000.00,
        Vaga_Justificativa: null,
        Vaga_EmailVisualizadores: null,
        Vaga_Datacriacao: "2024-07-20T00:00:00.000Z",
        Vaga_Quantidade: null,
        Vaga_Status_Descricao: "Ativa",
        talentosAtivos: 2,
        Empresa_RazaoSocial: "Web Solutions",
        Departamento_Descricao: "Desenvolvimento",
        Vaga_Cargo: null,
        Vaga_LocalTrabalho: "Rio de Janeiro",
        Vaga_Tipo_Contrato: 1,
        Vaga_Usuario: 18,
        Vaga_Periodo_Vaga: 1,
        Vaga_Requisitos: "Experiência em desenvolvimento web"
      },
      {
        Vaga_Id: 3040,
        Vaga_Titulo: "Gerente de Projetos",
        Vaga_Responsabilidade: "Gerenciar projetos de software",
        Vaga_Diferencial: "Certificação PMP",
        Vaga_Remuneracao: 7000.00,
        Vaga_Justificativa: null,
        Vaga_EmailVisualizadores: null,
        Vaga_Datacriacao: "2024-07-21T00:00:00.000Z",
        Vaga_Quantidade: null,
        Vaga_Status_Descricao: "Ativa",
        talentosAtivos: 1,
        Empresa_RazaoSocial: "PMO Experts",
        Departamento_Descricao: "Gerenciamento",
        Vaga_Cargo: null,
        Vaga_LocalTrabalho: "Curitiba",
        Vaga_Tipo_Contrato: 2,
        Vaga_Usuario: 18,
        Vaga_Periodo_Vaga: 1,
        Vaga_Requisitos: "Experiência em gerenciamento de projetos"
      },
      {
        Vaga_Id: 3041,
        Vaga_Titulo: "Especialista em Marketing Digital",
        Vaga_Responsabilidade: "Desenvolver campanhas de marketing online",
        Vaga_Diferencial: "Experiência com SEO",
        Vaga_Remuneracao: 5000.00,
        Vaga_Justificativa: null,
        Vaga_EmailVisualizadores: null,
        Vaga_Datacriacao: "2024-07-22T00:00:00.000Z",
        Vaga_Quantidade: null,
        Vaga_Status_Descricao: "Ativa",
        talentosAtivos: 4,
        Empresa_RazaoSocial: "Marketing Pro",
        Departamento_Descricao: "Marketing",
        Vaga_Cargo: null,
        Vaga_LocalTrabalho: "Porto Alegre",
        Vaga_Tipo_Contrato: 1,
        Vaga_Usuario: 18,
        Vaga_Periodo_Vaga: 1,
        Vaga_Requisitos: "Conhecimentos em marketing digital"
      },
      {
        Vaga_Id: 3042,
        Vaga_Titulo: "Analista de Suporte Técnico",
        Vaga_Responsabilidade: "Prestar suporte técnico a clientes",
        Vaga_Diferencial: "Conhecimentos em redes",
        Vaga_Remuneracao: 3500.00,
        Vaga_Justificativa: null,
        Vaga_EmailVisualizadores: null,
        Vaga_Datacriacao: "2024-07-23T00:00:00.000Z",
        Vaga_Quantidade: null,
        Vaga_Status_Descricao: "Ativa",
        talentosAtivos: 2,
        Empresa_RazaoSocial: "Support Solutions",
        Departamento_Descricao: "Suporte",
        Vaga_Cargo: null,
        Vaga_LocalTrabalho: "Recife",
        Vaga_Tipo_Contrato: 1,
        Vaga_Usuario: 18,
        Vaga_Periodo_Vaga: 1,
        Vaga_Requisitos: "Conhecimentos em suporte técnico"
      },
      {
        Vaga_Id: 3043,
        Vaga_Titulo: "Engenheiro de Software",
        Vaga_Responsabilidade: "Desenvolver soluções de software",
        Vaga_Diferencial: "Experiência com arquitetura de software",
        Vaga_Remuneracao: 6000.00,
        Vaga_Justificativa: null,
        Vaga_EmailVisualizadores: null,
        Vaga_Datacriacao: "2024-07-24T00:00:00.000Z",
        Vaga_Quantidade: null,
        Vaga_Status_Descricao: "Ativa",
        talentosAtivos: 3,
        Empresa_RazaoSocial: "Innovative Solutions",
        Departamento_Descricao: "Engenharia",
        Vaga_Cargo: null,
        Vaga_LocalTrabalho: "Belo Horizonte",
        Vaga_Tipo_Contrato: 1,
        Vaga_Usuario: 18,
        Vaga_Periodo_Vaga: 1,
        Vaga_Requisitos: "Experiência em desenvolvimento de software"
      },
      {
        Vaga_Id: 3044,
        Vaga_Titulo: "Consultor de Vendas",
        Vaga_Responsabilidade: "Realizar vendas de produtos",
        Vaga_Diferencial: "Experiência com CRM",
        Vaga_Remuneracao: 3000.00,
        Vaga_Justificativa: null,
        Vaga_EmailVisualizadores: null,
        Vaga_Datacriacao: "2024-07-25T00:00:00.000Z",
        Vaga_Quantidade: null,
        Vaga_Status_Descricao: "Ativa",
        talentosAtivos: 5,
        Empresa_RazaoSocial: "Sales Experts",
        Departamento_Descricao: "Vendas",
        Vaga_Cargo: null,
        Vaga_LocalTrabalho: "Fortaleza",
        Vaga_Tipo_Contrato: 1,
        Vaga_Usuario: 18,
        Vaga_Periodo_Vaga: 1,
        Vaga_Requisitos: "Habilidade em vendas"
      },
    ];
    setOpportunities(data);
    setFilteredOpportunities(data);
  }, []);

  const handleFilter = (type, value) => {
    const filtered = opportunities.filter((opportunity) =>
      opportunity[type].toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOpportunities(filtered);
  };

  return (
    <div className="opportunities-container">
      <div className="header-opportunities">
        <img src={Logoask} alt="Company Logo" />
      </div>
      <div className="body-opportunities">
        <div className="filter-box">
          <span>Vagas na {"TaskFou"}</span>
          <Filter onFilter={handleFilter} />
        </div>

        <div className="opportunityList-box">
          <OpportunityList 
            opportunities={filteredOpportunities} 
            onClick={setSelectedOpportunity}
            selectedOpportunityId={selectedOpportunity ? selectedOpportunity.Vaga_Id : null}
          />
          <OpportunityDetail opportunity={selectedOpportunity} />
        </div>
      </div>
      <div className="footer-opportunities"></div>
    </div>
  );
}
