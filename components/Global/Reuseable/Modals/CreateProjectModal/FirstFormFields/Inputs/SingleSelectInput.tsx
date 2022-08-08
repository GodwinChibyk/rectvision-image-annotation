import React from 'react'

import Select, { SingleValue } from 'react-select'

const customStyles = {
    option: (provided:any, state:any) => ({
      ...provided,
      borderBottom: '1px solid #dfe3e8',
      color: state.isSelected ? '#276FBF' : '#484646',
      backgroundColor: state.isSelected ? '#edeff2' : '',
      padding: 10,
      fontSize: 15,
    }),
    control: (provided:any, state:any) => ({
      ...provided,
      color:  '#484646',
      backgroundColor: '#edeff2',
      padding: 5,
      fontSize: 14,
      border: 'none',
      borderRadius: '12px',
    }),
    dropdownIndicator: (provided:any, state:any) => ({
      ...provided,
      color:  '#9D9D9D',
    }),
    
    singleValue: (provided:any, state:any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }
  
  interface ISingleSelectProps {
    options: {value: string, label:string}[]
    onchange: (newValue: any)=> void
  }

const SingleSelectInput:React.FC<ISingleSelectProps> = ({options, onchange}) => {
  return (
    <>
    <Select 
    options={options} 
    styles={customStyles}
    onChange={onchange}
    />
    </>
  )
}

export default SingleSelectInput