import Head from "next/head";
import Navbar from "./navbar";

export default function MainLayout({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="CRUD App with Next JS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_1.png" />
      </Head>
      <Navbar />
      <main className={`max-w-fit m-auto`}>{children}</main>
    </>
  );
}
