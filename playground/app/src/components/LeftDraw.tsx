import { data } from "autoprefixer";
import Link from 'next/link';


export const LeftDrawer = ({data}: any) => {
  console.log('**** data', data)
  return (
    //create a drawer that is always open
    <div className="w-96 bg-green-900 rounded-md fixed top-0 left-0 h-screen">
     {data.methodRoutes.map((route: any) => <Link href={route.path}> {route.name}</Link>)}
     
    </div>
  );
}
