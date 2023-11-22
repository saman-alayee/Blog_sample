import Link from 'next/link'
import styles from './buttons.module.css'
export default function EntryBtn({gradiant,text,btnHref}:{gradiant:string,text:string,btnHref:string}) {
    return (
        <Link href={btnHref} className={`${gradiant} ${styles.SignUpContainer}`}>
            <button className={styles.btn}> {text}</button>
        </Link>
    )
}
