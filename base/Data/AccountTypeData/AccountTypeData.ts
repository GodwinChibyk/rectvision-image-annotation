

export interface IAccountTypeData {
    id: number
    planName: string;
    amount?: number
    amountPerMonth?: number
    savePercent?: number
    isFree: boolean
  }
  


 export const accountTypeData:IAccountTypeData[] = [
    {
        id: 1,
        planName: "Basic",
        isFree: true 
    },
    {
        id: 2,
        planName: "Brass",
        isFree: false,
        amount: 285,
        savePercent: 5,
        amountPerMonth: 25 
    },
    {
        id: 3,
        planName: "Bronze",
        isFree: false,
        amount: 627,
        savePercent: 5,
        amountPerMonth: 55
    },
    {
        id: 4,
        planName: "Silver(Hybrid)",
        isFree: false,
        amount: 1710,
        savePercent: 5,
        amountPerMonth: 150
    },
]