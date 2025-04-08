export interface TransactionType{
    transactions: Transaction[]
    monthlyPayment:MonthlyPayment[]
}
export interface Transaction{
id: number;
    transaction_id: string;
    email: string;
            amount: number
            currency: string
            status: string
            reference: string
            created_at: string,
            paid_at: string
}
export interface MonthlyPayment{
    month: string;
    amount: number;
}
   