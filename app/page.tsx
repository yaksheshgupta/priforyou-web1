import Image from "next/image";

export default function Home() {
  return (
    <main style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Image src="/photo.jpg" alt="Photo" fill style={{ objectFit: "cover" }} />
    </main>
  );
}
