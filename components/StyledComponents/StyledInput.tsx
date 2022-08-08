import tw from "tailwind-styled-components";

interface IInputProps {
    $isNoIcon: boolean
}

export const StyledInput = tw.input<IInputProps>`
${(p:IInputProps)=> (p.$isNoIcon ? "px-4": "px-10 ")}
placeholder:font-light placeholder:tracking-wider placeholder:text-textColorLight block bg-whiteColor
w-full border border-grayColorDark
rounded-full py-3 
shadow-sm focus:outline-none 
focus:border-primaryColorLight 
focus:ring-primaryColorLight 
focus:ring-1 text-sm
mb-7
`