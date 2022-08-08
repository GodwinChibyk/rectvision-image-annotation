import React from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

interface IRedProgressBarProps {
    percent: number
    status: string
}

const RedProgressBar:React.FC<IRedProgressBarProps> = ({percent, status}) => {
  return (
    <>
        <Progress percent={percent} status={status} 
        className= {``}
            theme={{
                success: {
                  symbol: ' ',
                  color: '#F03A47',
                  trailColor: "#FCD8DA"
                },
                active: {
                  symbol: ' ',
                  color: '#F03A47',
                  trailColor: "#FCD8DA"
                },
                default: {
                  symbol: ' ',
                  color: '#F03A47',
                  trailColor: "#FCD8DA"
                },
              }}
             />
    </>
  )
}

export default RedProgressBar