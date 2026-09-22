import Link from "next/link";
import { posts } from "@/lib/posts";
import styles from "./page.module.css";

export default function InstaIndex() {
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <Link href="/" className={styles.back}>
          ← priforyou
        </Link>
        <div className={styles.header}>
          <p className={styles.label}>Resources</p>
          <h1 className={styles.title}>Instagram Posts</h1>
          <p className={styles.subtitle}>
            All curated resource lists — pick what you want to learn.
          </p>
        </div>
        <div className={styles.grid}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/post/insta/${post.slug}`} className={styles.card}>
              <div className={styles.cardLeft}>
                <span className={styles.cardTitle}>{post.title}</span>
                <span className={styles.cardMeta}>{post.links.length} links</span>
              </div>
              <span className={styles.arrow}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
