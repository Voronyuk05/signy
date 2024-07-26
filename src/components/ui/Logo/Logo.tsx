import { useRouter } from 'next/navigation'
import styles from './Logo.module.scss'

export function Logo({white}: {white?: boolean}) {
    const {push} = useRouter()

    return (
        <img onClick={() => push('/')} className={styles.logo} src={`${white? '/logo_white.svg' : '/logo.svg'}`} alt="" />
    )
}