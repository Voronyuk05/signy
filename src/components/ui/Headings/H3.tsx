import { ReactElement } from 'react'
import styles from './Headings.module.scss'

export const H3 = ({children, color, size, weight}: {children: number | string | ReactElement, color: string, size?: string, weight?: string}) => {
    const textSize = size === 'huge' ? styles.h3_huge : styles.h3
    const textWeight = weight ? `weight-${weight}` : ''
    
    return (
        <h3 className={`${styles.h3} ${textSize} ${color} ${textWeight}`}>
            {children}
        </h3>
    )
}