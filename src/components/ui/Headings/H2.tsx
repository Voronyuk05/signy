import { ReactElement } from 'react'
import styles from './Headings.module.scss'

export const H2 = ({children, color, size, weight}: {children: number | string | ReactElement, color: string, size?: string, weight?: string}) => {
    const textSize = size === 'huge' ? styles.h3_huge : styles.h3
    const textWeight = weight ? `weight-${weight}` : ''

    return (
        <h2 className={`${styles.h2} ${color} ${textWeight}`}>
            {children}
        </h2>
    )
}