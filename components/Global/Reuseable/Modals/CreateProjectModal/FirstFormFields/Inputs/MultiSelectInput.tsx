import React, { Component, KeyboardEventHandler, useEffect, useState } from "react";

import CreatableSelect from "react-select/creatable";
import { ActionMeta, OnChangeValue } from "react-select";
import { useAtom } from "jotai";
import { createProjectDataAtom } from "../../store/atomStores";

const components = {
  DropdownIndicator: null,
};

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label,
});

interface State {
  readonly inputValue: string;
  readonly value: readonly Option[];
}

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    color: "#484646",
    backgroundColor: "#edeff2",
    padding: 7,
    fontSize: 14,
    border: "none",
    borderRadius: "12px",
  }),
  multiValue: (provided: any, state: any) => ({
    ...provided,
    color: "#484646",
    backgroundColor: "#edeff2",
    padding: "0px 1px",
    fontSize: 15,
    border: "1px solid #9D9D9D",
    borderRadius: "20px",
  }),
  multiValueRemove: (provided: any, state: any) => ({
    ...provided,
    padding: "0px",
    border: "1px solid #9D9D9D",
    borderRadius: "20px",
    width: "15px",
    height: "15px",
    margin: "5px 4px 0px 2px",
  }),
};

// export default class MultiSelectInput extends Component<{}, State> {
//   state: State = {
//     inputValue: '',
//     value: [],
//   };

//   handleChange = (
//     value: OnChangeValue<Option, true>,
//     actionMeta: ActionMeta<Option>
//   ) => {
//     // console.group('Value Changed');
//     // console.log(value);
//     console.log(`action: ${actionMeta.action}`);
//     // console.groupEnd();
//     this.setState({ value });
//     setTimeout(() => {
//     console.log(this.state)
//     }, 500);
//   };

//   handleInputChange = (inputValue: string) => {
//     this.setState({ inputValue });
//   };

//   handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
//     const { inputValue, value } = this.state;
//     if (!inputValue) return;
//     switch (event.key) {
//       case 'Enter':
//       case 'Tab':
//         // console.group('Value Added');
//         // console.groupEnd();
//         this.setState({
//           inputValue: '',
//           value: [...value, createOption(inputValue)],
//         });

//         setTimeout(() => {
//           console.log(this.state);
//         }, 500);
//         event.preventDefault();
//     }
//   };

//   render() {
//     const { inputValue, value } = this.state;
//     return (
//       <CreatableSelect
//         components={components}
//         inputValue={inputValue}
//         isClearable
//         isMulti
//         menuIsOpen={false}
//         onChange={this.handleChange}
//         onInputChange={this.handleInputChange}
//         onKeyDown={this.handleKeyDown}
//         placeholder="Type a label and press enter..."
//         value={value}
//         styles={customStyles}
//       />
//     );
//   }
// }

const MultiSelectInput = () => {
  const [state, setState] = useState<any>({
    inputValue: "",
    value: [],
  });
  const [labels, setLabels] = useAtom(createProjectDataAtom)

  const handleChange = (
    value: OnChangeValue<Option, true>,
    actionMeta: ActionMeta<Option>
  ) => {
    console.log(`action: ${actionMeta.action}`);
    setState({ value });
  };

  const handleInputChange = (inputValue: string) => {
    setState((old:any) => ({ ...old, inputValue }));
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const { inputValue, value } = state;
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setState({
          inputValue: "",
          value: [...value, createOption(inputValue)],
        });
        
        event.preventDefault();
    }
  };


  useEffect(()=>{
    const {value} = state
    setLabels((oldData)=> {
        const projectData = {...oldData}
        projectData.labels = value
        return projectData
      })
  },[state])


  const { inputValue, value } = state;

  return (
    <>
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={handleChange}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a label and press enter..."
        value={value}
        styles={customStyles}
      />
    </>
  );
};

export default MultiSelectInput;
