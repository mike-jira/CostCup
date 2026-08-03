import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenuButton,
  SidebarFooter,
  SidebarMenuItem,
  SidebarMenu,
} from "@/components/ui/sidebar"
import { BoxesIcon, CookingPotIcon, LayoutDashboardIcon } from "lucide-react"
import { Link, useMatchRoute } from "@tanstack/react-router"
import { NavUser } from "@/components/ui/nav-user"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = {
    user: {
      name: "test",
      email: "me@example.com",
      avatar: "",
    },
    main: [
      {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboardIcon,
      },
      {
        title: "สูตรอาหาร/เครื่องดื่ม",
        url: "#",
        icon: CookingPotIcon,
      },
      {
        title: "วัตถุดิบ",
        url: "#",
        icon: BoxesIcon,
      },
    ],
  }

  const matchRoute = useMatchRoute()

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={
                <Link to="/">
                  <span className="text-base font-semibold">Matcha.io</span>
                </Link>
              }
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {data.main.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              isActive={!!matchRoute({ to: item.url, fuzzy: true })}
              render={
                <Link to={item.url}>
                  {<item.icon />}
                  {item.title}
                </Link>
              }
            ></SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
