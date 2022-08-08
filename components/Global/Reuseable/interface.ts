import { ReactNode } from "react"

export interface IInputProps {
    children?: ReactNode
    placeholder: string
    type: string
    icon1?: ReactNode
    icon2?: ReactNode
}