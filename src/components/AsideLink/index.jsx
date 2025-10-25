import { Link } from 'react-router-dom'
import styles from './asidelink.module.css'

const AsideLink = ({ href, children }) => {
    return (<Link to={href} className={styles.asidelink}>
        {children}
    </Link>)
}

export default AsideLink