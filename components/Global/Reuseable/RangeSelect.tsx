import { relative } from 'path';
import Slider from 'rc-slider';
import React, { useState } from 'react'



interface IRangeSelectProps {
    min: number
    max: number
    defaultValue: number
    step: number
    value: number
    onChange: (nextValues:any)=>void
}

const RangeSelect:React.FC<IRangeSelectProps> = ({min,max,defaultValue,step,onChange,value}) => {

  const [range, setRange] = useState(false);
  // const [value, setValue] = useState(30)

  return (
    <div
      // style={{
      //   transform: 'scale(1.5)',
      //   transformOrigin: 'top left',
      // }}
      className="w-full"
    >
     

      <div className='w-full'>
        <Slider
          // count={2}
          // disabled={disabled}
          // reverse={reverse}
          // vertical={vertical}
          // range={range}
          // defaultValue={[30, 50]}
          // dots
          // step={5}
          // draggableTrack
          // pushable={5}
          // allowCross={false}
          onChange={onChange}
          value={value}
          min={min}
          max={max}
          defaultValue={defaultValue}
          step={step}
        />
      </div>
    </div>
  )
}

export default RangeSelect