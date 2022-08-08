import tw from "tailwind-styled-components";

interface ButtonProps {
    $fullWidth: boolean
    $roundedMedium?: boolean
}

export const PrimaryButton = tw.button<ButtonProps>`
${(p:ButtonProps)=> (p.$fullWidth ? "flex-1": "")}
${(p:ButtonProps)=> (p.$roundedMedium? "rounded-lg": "rounded-full")}
 capitalize text-whiteColor 
flex justify-center items-center
 bg-primaryColor
 hover:bg-primaryColorLight 
transition duration-50 
ease-out hover:ease-in
py-2
`;
