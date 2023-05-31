import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen flex min-h-screen flex-col items-center justify-center p-24">
      <Link
        href={'/login'}
        className="p-6 font-bold cursor-pointer tracking-tight text-3xl border rounded scale duration-100 hover:scale-110"
      >
        Ir al login
      </Link>
    </main>
  )
}
