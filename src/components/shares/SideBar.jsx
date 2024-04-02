"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ children }) => {
  const adminItems = [
    { key: "1", label: "Dashboard", href: "/admin/dashboard" },
    { key: "2", label: "Product List", href: "/admin/product-list" },
    { key: "3", label: "Add Product", href: "/admin/add-product" },
    { key: "4", label: "Order List", href: "/admin/order-list" },
    { key: "5", label: "Back Home", href: "/" },
  ];

  const pathname = usePathname();
  const getSelectedKey = () => {
    return adminItems.find((item) => item.href === pathname)?.key || "";
  };

  const navigationBtn = (
    <>
      {adminItems?.map((item) => (
        <li className="text-white text-lg" key={item.href}>
          <Link
            className="text-amber-400 no-underline hover:bg-blue-950"
            href={item.href}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {children}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {navigationBtn}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
