import { getPost, posts } from "@/lib/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <p style={styles.label}>priforu · resources</p>
        <h1 style={styles.title}>{post.title}</h1>
        <div style={styles.divider} />
        <ol style={styles.list}>
          {post.links.map((link, i) => (
            <li key={i} style={styles.item}>
              <span style={styles.number}>{i + 1}</span>
              <a href={link.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                {link.title}
              </a>
            </li>
          ))}
        </ol>
        <p style={styles.footer}>
          Follow{" "}
          <a href="https://www.instagram.com/priforyou._/" target="_blank" rel="noopener noreferrer" style={styles.ig}>
            @priforyou._
          </a>{" "}
          for more
        </p>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "48px 20px 80px",
    backgroundColor: "#1a1a1a",
  },
  card: {
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "#242424",
    borderRadius: "16px",
    padding: "40px",
    border: "1px solid #333",
  },
  label: {
    fontSize: "12px",
    fontFamily: "system-ui, sans-serif",
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: "1.2px",
    marginBottom: "12px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#f0f0f0",
    fontFamily: "system-ui, sans-serif",
    marginBottom: "24px",
  },
  divider: {
    height: "1px",
    backgroundColor: "#333",
    marginBottom: "28px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  item: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
  },
  number: {
    minWidth: "26px",
    height: "26px",
    borderRadius: "50%",
    backgroundColor: "#333",
    color: "#aaa",
    fontSize: "12px",
    fontWeight: "700",
    fontFamily: "system-ui, sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1px",
    flexShrink: 0,
  },
  link: {
    color: "#c8d8ff",
    textDecoration: "none",
    fontSize: "15px",
    fontFamily: "system-ui, sans-serif",
    lineHeight: "1.5",
    fontWeight: "500",
  },
  footer: {
    marginTop: "36px",
    paddingTop: "20px",
    borderTop: "1px solid #333",
    fontSize: "13px",
    color: "#666",
    fontFamily: "system-ui, sans-serif",
  },
  ig: {
    color: "#c8d8ff",
    textDecoration: "none",
  },
};
