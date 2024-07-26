'use client'

import { PopularQuestions } from './popularQuestions/popularQuestions';



export default function Questions({children}: {children: React.ReactNode}) {
    return (
        <>
            <PopularQuestions/>
            {children}
        </>
    )
}