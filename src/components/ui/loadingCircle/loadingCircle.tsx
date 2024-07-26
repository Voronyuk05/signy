import { Oval } from 'react-loader-spinner'
import styles from './loadingCircle.module.scss'

export const LoadingCircle = () => {
    return <div className={styles.backdrop}>
        <Oval
        visible={true}
        height="160"
        width="160"
        color="#1064E5"
        secondaryColor="#FFFFFF"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
}