import Link from 'next/link'
import styles from './buttons.module.css'
export default function EntryBtn({gradiant,text}:{gradiant:string,text:string}) {
    return (
        <Link href={'/SignUp'} className={`${gradiant} ${styles.SignUpContainer}`}>
            <button className={styles.btn}> {text}</button>
        </Link>
    )
}
