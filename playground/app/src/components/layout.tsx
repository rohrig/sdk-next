import { LeftDrawer } from '@/components/LeftDraw'

export default function Layout({ data, children }: any) {
  return (
    <>
      <LeftDrawer data={data}  />
      <main>{children}</main>
    </>
  )
}
