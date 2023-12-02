import Link from 'next/link'
import styles from './buttons.module.css'
import TextAnimation from '../../textAnimation/TextAnimation'
export default function EntryBtn({ gradiant, text, btnHref }: { gradiant: string, text: string, btnHref: string }) {
    return (
        <Link href={btnHref} className={`${gradiant} ${styles.SignUpContainer}`}>
            <div className={styles.btn}>
                <TextAnimation title={text} staggerTime={0.2} />
            </div>
        </Link>
    )
}
