import Link from 'next/link'
import styles from './buttons.module.css'
export default function LoginButton({rounded}:{rounded:string}) {
    return (
        <Link href={'/login'} className={`${styles.loginContainer} ${rounded}`}>
            <button className={styles.btn}> LogIn</button>
        </Link>
    )
}


