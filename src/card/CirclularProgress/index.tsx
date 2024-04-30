import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { colors } from '@mui/material';

// Define the allowed color values for the CircularProgress component
type CircularProgressColor = "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning";

interface CircularProgressBarProps {
  color: CircularProgressColor;
  progressValue: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ color, progressValue }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <CircularProgress variant="determinate" value={200-progressValue} color={color}  size={90} thickness={2} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '20px' }}>
        {progressValue}%
      </div>
    </div>
  );
}

export default CircularProgressBar;
