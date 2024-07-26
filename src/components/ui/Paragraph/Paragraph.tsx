import { ReactElement } from "react"
import styles from './Paragraph.module.scss'

export const Paragraph = ({children, color, weight}: {children: string | string[] | ReactElement, color: string, weight?: string}) => {
    const textWeight = weight ? `weight-${weight}` : ''

    return (
        <p className={`${styles.paragraph} ${color} ${textWeight}`}>
            {children}
        </p>
    )
}