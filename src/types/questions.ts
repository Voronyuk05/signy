export interface IQuestion {
    id: string
    question: string
    answer: string
}

export interface IQuestionsCategories {
    category: string
    items: IQuestion[]
}

