import React, { useState } from 'react';
import './ProgressTracker.css';

const ProgressTracker = () => {
  const [stageExpanded, setStageExpanded] = useState({
    stage1: false,
    stage2: false,
    stage3: true,
    stage4: true,
    stage5: false,
    stage6: false
  });

  // Define all progress data for calculation
  const progressData = {
    stage1: [100, 70, 70, 100, 75, 100],
    stage2: [70, 100, 100, 60, 70, 90],
    stage3: [80, 50, 60, 40, 40, 60, 40],
    stage4: [40, 80, 60, 70],
    stage5: [60, 60, 40, 40],
    stage6: [20, 20, 20]
  };

  const calculateOverallProgress = () => {
    const allProgress = Object.values(progressData).flat();
    const total = allProgress.reduce((sum, progress) => sum + progress, 0);
    return Math.round(total / allProgress.length);
  };

  const overallProgress = calculateOverallProgress();

  const toggleStage = (stage) => {
    setStageExpanded({
      ...stageExpanded,
      [stage]: !stageExpanded[stage]
    });
  };

  const getProgressBarClass = (percentage) => {
    if (percentage < 25) return "progress-bar progress-0-25";
    if (percentage < 50) return "progress-bar progress-25-50";
    if (percentage < 75) return "progress-bar progress-50-75";
    return "progress-bar progress-75-100";
  };

  const renderProgressBar = (percentage) => (
    <div className="progress-bar-container">
      <div 
        className={getProgressBarClass(percentage)} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );

  const renderOutputRow = (output, percentage = 0) => (
    <div className="output-row">
      <div>{output}</div>
      <div>{renderProgressBar(percentage)}</div>
      <div className="percentage">{percentage}%</div>
    </div>
  );

  const renderStageHeader = (stage, title, duration, toggleState) => (
    <div 
      className="stage-header"
      onClick={() => toggleStage(toggleState)}
    >
      <div>
        <span>{stageExpanded[toggleState] ? '▼' : '►'}</span>
        {' '}{stage}: {title}
      </div>
      <div>{duration}</div>
    </div>
  );

  return (
    <div className="progress-tracker">
      <div className="header-section">
        <div className="logos-container">
          <img src={`${process.env.PUBLIC_URL}/bcu-logo.jpeg`} alt="BCU Logo" className="logo" />
          <img src={`${process.env.PUBLIC_URL}/ktp-logo.png`} alt="KTP Logo" className="logo" />
          <img src={`${process.env.PUBLIC_URL}/hockley-logo.png`} alt="Hockley Mint Logo" className="logo" />
        </div>
        
        <h1>Hockley Mint KTP Project Progress Tracker</h1>
        
        <div className="overall-progress-section">
          <h2>Overall Project Progress</h2>
          <div className="overall-progress-container">
            <div className="overall-progress-bar-container">
              <div 
                className={`overall-progress-bar ${getProgressBarClass(overallProgress)}`}
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
            <div className="overall-progress-percentage">{overallProgress}%</div>
          </div>
        </div>
        
        <div className="personnel-info">
          <div className="personnel-info-grid">
            <div>
              <h2>KTP Associate</h2>
              <p>Ribesh Maharjan</p>
            </div>
            <div>
              <h2>Knowledge Advisors</h2>
              <p>Dr. Adel Aneiba</p>
              <p>Dr. Gerald Feldman</p>
            </div>
            <div>
              <h2>Business Supervisors</h2>
              <p>Gary Wroe</p>
              <p>Kevan Jenkinson</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="stage-container">
        {renderStageHeader("Stage 1", "Project Initiation", "3.00 months", "stage1")}
        
        {stageExpanded.stage1 && (
          <div className="stage-content">
            <div className="output-header">
              <div>Expected Output</div>
              <div>Progress</div>
              <div>Complete</div>
            </div>
            {renderOutputRow("Company introduction and Functional specification of business systems requirements", 100)}
            {renderOutputRow("Clarity architecture, functional specification and code document.", 40)}
            {renderOutputRow("Knowledge repository accessible to all staff.", 40)}
            {renderOutputRow("Power BI dashboard as Mini Project.", 100)}
            {renderOutputRow("Clarity architecture & code document", 45)}
            {renderOutputRow("Approved functional specification & KPIs", 100)}
          </div>
        )}
      </div>
      
      <div className="stage-container">
        {renderStageHeader("Stage 2", "Hockley Smart Factory Architecture", "4.50 months", "stage2")}
        
        {stageExpanded.stage2 && (
          <div className="stage-content">
            <div className="output-header">
              <div>Expected Output</div>
              <div>Progress</div>
              <div>Complete</div>
            </div>
            {renderOutputRow("Business requirements documentation", 70)}
            {renderOutputRow("Smart Factory multi-layered architecture", 100)}
            {renderOutputRow("Smart Factory Workflows documentation", 100)}
            {renderOutputRow("Smart Factory Data Model", 40)}
            {renderOutputRow("Integration schema", 60)}
            {renderOutputRow("Real-time order tracking, dashboard  and analytical platform ", 90)}
          </div>
        )}
      </div>
      
      <div className="stage-container">
        {renderStageHeader("Stage 3", "Develop the Smart Factory Platform", "7.00 months", "stage3")}
        
        {stageExpanded.stage3 && (
          <div className="stage-content">
            <div className="output-header">
              <div>Expected Output</div>
              <div>Progress</div>
              <div>Complete</div>
            </div>
            {renderOutputRow("Technology frameworks selection for interconnected CNC machines and systems", 30)}
            {renderOutputRow("API-end points integration algorithms", 50)}
            {renderOutputRow("Newtorking and integration of M2M", 60)}
            {renderOutputRow("Data exchange pipeline and infrastructure development", 40)}
            {renderOutputRow("Clarity extension with M2M Communication and Production Tracking", 40)}
            {renderOutputRow("Training materials and documentation", 60)}
            {renderOutputRow("Scheduling & stock control algorithm", 30)}
          </div>
        )}
      </div>
      
      <div className="stage-container">
        {renderStageHeader("Stage 4", "System Testing", "2.25 months", "stage4")}
        
        {stageExpanded.stage4 && (
          <div className="stage-content">
            <div className="output-header">
              <div>Expected Output</div>
              <div>Progress</div>
              <div>Complete</div>
            </div>
            {renderOutputRow("Implementation of test plan", 50)}
            {renderOutputRow("Conducting user acceptance tests", 80)}
            {renderOutputRow("List of known bugs and workarounds", 50)}
            {renderOutputRow("Validation of system functionality and integration", 70)}
          </div>
        )}
      </div>
      
      <div className="stage-container">
        {renderStageHeader("Stage 5", "Deployment, Training & Evaluation", "1.25 months", "stage5")}
        
        {stageExpanded.stage5 && (
          <div className="stage-content">
            <div className="output-header">
              <div>Expected Output</div>
              <div>Progress</div>
              <div>Complete</div>
            </div>
            {renderOutputRow("Training materials and user manuals", 60)}
            {renderOutputRow("Operational manual in knowledge repository", 60)}
            {renderOutputRow("Evaluation report on KTP", 0)}
            {renderOutputRow("Draft of final report and case study", 0)}
          </div>
        )}
      </div>
      
      <div className="stage-container">
        {renderStageHeader("Stage 6", "Dissemination", "0.75 months", "stage6")}
        
        {stageExpanded.stage6 && (
          <div className="stage-content">
            <div className="output-header">
              <div>Expected Output</div>
              <div>Progress</div>
              <div>Complete</div>
            </div>
            {renderOutputRow("Completed impact case study", 0)}
            {renderOutputRow("Final KTP report submitted to UK R&I", 0)}
            {renderOutputRow("Journal papers completed and submitted", 0)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressTracker;