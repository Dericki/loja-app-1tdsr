import Link from "next/link";

export default function Home(){

  return(
    <>
      <h1>Home</h1>
      <ul>
        <li><Link href="/post">POST</Link></li>
        <li><Link href="/post/post1">POST1</Link></li>
        <li><Link href="/post/post2">POST2</Link></li>
      </ul>
    </>
  )
}