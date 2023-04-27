import { useState, useEffect } from 'react';
import Link from 'next/link';
import { sdk } from './_app';
import { SfButton } from '@storefront-ui/react';
import { LeftDrawer } from '@/components/LeftDraw';

export default function Home({data}: any) {

  return (
    <>
      <main className="flex flex-col items-center py-24 gap-12  text-white">
        <h1 className="typography-headline-2 font-semibold">Welcome!</h1>
        <p className="typography-headline-3">
          Start building Vue Storefront SDK Integration Boilerplate
        </p>
        <LeftDrawer data={data} />
      </main>
    </>
  );
}


export async function getServerSideProps(context: any) {
  console.log('*******you are here *********')
  const res = await fetch(`http://localhost:3000/api/getMethodList`)
  const data = await res.json()
  
  console.log('data', data)

  return {
    props: {data}, // will be passed to the page component as props
  }
}
