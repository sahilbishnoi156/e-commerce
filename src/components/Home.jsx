import React from 'react'
import Link from 'next/link'
import Carousel from './Carousel'
import CardItem from './CardItem'

export default function Home() {
  return (
    <>
    <div id='section-1' className='flex flex-col gap-4'>
        <div className='w-full h-20 flex justify-evenly items-center border-b-2 font-bold'>
            <Link href={"#"}>Electronics</Link>
            <Link href={"#"}>Kitchen</Link>
            <Link href={"#"}>Fashion</Link>
            <Link href={"#"}>Gadgets</Link>
        </div>
        <div>
          <Carousel/>
        </div>
    </div>
    <div className='h-full w-full mt-8'>
        <div className='flex w-full h-10 justify-center items-center'>
          <strong className='text-6xl'>Trending Products</strong>
        </div>
        <div className='grid grid-flow-col gap-8 p-8 overflow-auto'>
          {["01","02","03",'04','05','06',"07",'08','09',10,11,12,13,14,15,16].map((key)=>{
            return (<CardItem key={key} num={key}/>)
          })}
        </div>
    </div>
    </>
  )
}
