export interface Registery {
    id: number,
    date: Date,
    categoryId: number,
    company: string,
    value: number,
    description: string,
    repetitionId: number | undefined,
    isIncome: boolean,
    isTemplate: boolean
}