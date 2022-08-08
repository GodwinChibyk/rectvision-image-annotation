import tw from "tailwind-styled-components";

interface ButtonProps {
    $fullWidth: boolean
}

export const ButtonOutline = tw.button<ButtonProps>`
${(p:ButtonProps)=> (p.$fullWidth ? "flex-1": "")}
px-3 py-2 text-center text-primaryColor 
text-textSmall tracking-wide capitalize border
 border-grayColorLight rounded-lg hover:text-primaryColorLight
`;
