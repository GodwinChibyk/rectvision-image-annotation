import tw from "tailwind-styled-components";

interface ButtonProps {
    $fullWidth: boolean
}

export const PrimaryButtonOutline = tw.button<ButtonProps>`
${(p:ButtonProps)=> (p.$fullWidth ? "flex-1": "")}
 capitalize text-textColorLight 
flex justify-center items-center
rounded-full bg-transparent
 hover:bg-primaryColorLight/10
transition duration-50 
ease-out hover:ease-in
border border-grayColorDark
py-2
`;
