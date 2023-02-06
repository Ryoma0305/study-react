import Link from "next/link";

export function Header() {
  return (
    <header>
      <h1>Header</h1>
      <div>
        <Link href="/">TOP</Link>
        <Link href="/about">About</Link>
      </div>
    </header>
  );
}
