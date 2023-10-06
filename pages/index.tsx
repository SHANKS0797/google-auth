import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex flex-col gap-1">
        <span>Welcome, {session.user?.email}</span>
        <button className="bg-black text-white px-2 py-2 w-fit" onClick={() => signOut()}>Logout</button>
      </div>
    )
  } else {
    return (
      <span className="flex flex-col gap-1 justify-start">
        <span>To continue to the application hit below button</span>
        <button className="bg-black text-white px-2 py-2 w-fit" onClick={() => signIn('google')}>Google login</button>
      </span>
    )
  }
}