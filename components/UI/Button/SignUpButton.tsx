import Link from 'next/link'
import styles from './buttons.module.css'
export default function SignUpButton() {
    return (
        <Link href={'/SignUp'} className={styles.SignUpContainer}>
            <button className={styles.btn}> SignUp</button>
        </Link>
    )
}
