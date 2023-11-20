import React from 'react'
import { useHomeStore } from '@/store/useHomeStore'

interface Props {}
export const HomePage: React.FC<Props> = () => {
  const { count, setCount } = useHomeStore()
  return <div onClick={() => { setCount() }} className=" text-rose-400">{count}</div>
}
