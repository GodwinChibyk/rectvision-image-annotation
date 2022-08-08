import tw from "tailwind-styled-components"

interface ButtonProps {
    $active: boolean,
    className?: string,
 }
 
 export const AlternateButton = tw.button<ButtonProps>`
 ${(p:ButtonProps) => (p.$active ? "bg-grayColorLight/50" : "")}
     flex flex-col justify-center items-center rounded-lg group px-0.5
 `