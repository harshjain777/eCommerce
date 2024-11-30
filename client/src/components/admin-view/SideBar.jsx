import {
  BadgeCheck,
  ChartNoAxesCombined,
  LayoutDashboard,
  ShoppingBasket,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <ShoppingBasket />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: <BadgeCheck />,
  },
];

function MenuItem({setOpen}) {
  const navigate = useNavigate();
  return (
    <nav className="mt-6 flex flex-col gap-4">
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path)
            setOpen ? setOpen(false) : null
          }}
          className="flex items-center font-light gap-3 px-4 py-3 text-white hover:bg-gray-800 hover:rounded-lg transition cursor-pointer"
        >
          {menuItem.icon}
          <span className="text-sm font-medium">{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}

function SideBar({open,setOpen}) {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-black text-white hidden lg:flex flex-col border-r border-white">

      <Sheet open={open} onOpenChange={setOpen} className='bg-black text-white'>
        <SheetContent side="left" className='w-64 bg-black text-white'>
          <div className="flex bg-black text-white flex-col h-full">
            <SheetHeader className='border-b'>
              <SheetTitle className='bg-black flex justify-center text-[1.3rem] font-light items-center gap-3 mb-2 text-white'><ChartNoAxesCombined size={30} /> Admin Panel</SheetTitle>
            </SheetHeader>
            <MenuItem setOpen={setOpen}/>
          </div>

        </SheetContent>

      </Sheet>

      <aside className="p-6 flex flex-col h-full">
        {/* Admin Panel Heading */}
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center gap-3 mb-6 cursor-pointer"
        >
          <ChartNoAxesCombined size={30} />
          <h1 className="text-2xl font-light">Admin Panel</h1>
        </div>

        {/* Menu Items */}
        <MenuItem />
      </aside>
    </div>
  );
}

export default SideBar;
