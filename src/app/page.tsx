import Link from 'next/link'

import styles from './page.module.css'

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div>{"I'm in"}</div>

                <div className={styles.ctas}>
                    <Link href="/event">Events</Link>
                    <Link href="/join">Join</Link>
                </div>
            </main>
            <footer className={styles.footer}></footer>
        </div>
    )
}
