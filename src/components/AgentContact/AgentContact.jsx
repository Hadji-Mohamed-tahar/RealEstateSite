import React from "react";
import "./AgentContact.css";

const AgentContact = ({ agentName, agentImage, agentEmail, agentPhone }) => {
  return (
    <div className="agent-contact">
      <h3>تواصل مع وكيل العقار</h3>
      <div className="agent-details">
        <img
          src={agentImage}
          alt="Agent"
          className="agent-image"
        />
        <div className="agent-info">
          <p className="agent-name">{agentName}</p>
          <p className="agent-email">📧 {agentEmail}</p>
          <p className="agent-phone">📞 {agentPhone}</p>
        </div>
      </div>
    </div>
  );
};

export default AgentContact;
