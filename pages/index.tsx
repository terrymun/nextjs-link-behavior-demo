import styles from '@/pages/index.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="https://example.com" data-testid="link">
        Link element with new behavior
      </Link>
      <br />
      <br />
      <Link href="https://example.com" data-testid="link">
        <strong data-testid="content">Link element with new behavior</strong>
      </Link>
    </div>
  )
}
