import { ReactElement } from 'react'
import styles from './Headings.module.scss'


export const H5 = ({children, color, size, weight}: {children: number | string | ReactElement, color: string, size?: string, weight?: string}) => {
    const textWeight = weight ? `weight-${weight}` : ''

    return (
        <h5 className={`${styles.h5} ${color} ${textWeight}`}>
            {children}
        </h5>
    )
}