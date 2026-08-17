import { createFileRoute, Link } from "@tanstack/react-router"
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
  CardHeader,
} from "@/components/ui/card"
import { Search, PackagePlusIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/_app/ingrediant/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className="flex justify-between pt-3 pb-5">
        <h1 className="font-heading text-3xl">วัตถุดิบ</h1>
        <div className="flex gap-2">
          <div className="relative flex max-w-sm pb-5">
            <Search className="pointer-events-none absolute top-2 left-2.5 size-4 text-muted-foreground" />
            <Input placeholder="ค้นหาวัตถุดิบ..." className="pl-8" />
          </div>
          <Button render={<Link to="/ingrediant/create" />}>
            <PackagePlusIcon />
            เพิ่มวัตถุดิบ
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:gap-6">
        <Card className="cursor-pointer">
          <img
            src="https://avatar.vercel.sh/shadcn1"
            alt="cover"
            className="aspect-square w-full rounded-lg object-cover"
          />
          <CardHeader>
            <CardTitle>[Material Name]</CardTitle>
            <CardDescription>[Material Category]</CardDescription>
          </CardHeader>
          <CardFooter>[Price] บาท ต่อ [Unit]</CardFooter>
        </Card>
      </div>
    </>
  )
}
