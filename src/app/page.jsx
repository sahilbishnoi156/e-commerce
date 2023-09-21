"use client"
import {useRouter} from 'next/navigation'
import Home from "../components/Home"

export default function page() {
  const router = useRouter();
  const isUserLogin = true
  return (
    <>
    {isUserLogin ? <Home/> : router.push('/login')}
    </>
  )
}
