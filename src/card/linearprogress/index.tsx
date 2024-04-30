import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { colors } from '@mui/material';

// Define the allowed color values for the LinearProgress component
type LinearProgressBarColor = "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning";

interface LinearProgressBarProps {
  color: LinearProgressBarColor;
  progressValue: number;
  title: string;
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = ({ color, progressValue,title }) => {
  return (
    <div style={{ position: 'relative', width: '100%' ,marginTop:'1vw',color:'#535353'}}>
    <small style={{fontSize:'17px', fontWeight:'bold'}}>{title}</small>
      <LinearProgress variant="determinate" value={progressValue} color={color} style={{ borderRadius: '10px',marginTop:'0.5vw',height:'0.5vw' }} />
      <h4 style={{margin:'0', textAlign:'end',marginTop:'0.2vw'}}>{progressValue}%</h4>
    </div>
  );
}

export default LinearProgressBar;
