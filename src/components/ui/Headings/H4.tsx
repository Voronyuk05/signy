import { ReactElement } from 'react'
import styles from './Headings.module.scss'

export const H4 = ({children, color, size, weight}: {children: number | string | ReactElement, color: string, size?: string, weight?: string}) => {
    const textSize = size === 'small' ? styles.h4_small : styles.h4
    const textWeight = weight ? `weight-${weight}` : ''

    return (
        <h4 className={`${textSize} ${color} ${textWeight}`}>
            {children}
        </h4>
    )
}