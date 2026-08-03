import { createFileRoute, Outlet } from '@tanstack/react-router'
import { DefaultLayout } from '@/components/layout/default'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <DefaultLayout>
        <Outlet />
    </DefaultLayout>
  )
}
