import { AiOutlineLogout } from "react-icons/ai";
import {
  MdDashboard,
  MdCategory,
  MdAssignmentReturn,
  MdPrivacyTip,
} from "react-icons/md";
import { FaBell, FaShoppingCart, FaKey, FaUser } from "react-icons/fa";
import { IoBagCheck, IoCloudUpload } from "react-icons/io5";
import { BsBagXFill } from "react-icons/bs";
import { IoMdHelpCircle } from "react-icons/io";
import { CiWallet } from "react-icons/ci";
import { RiUserSearchLine } from "react-icons/ri";
export const sidebarData = [
  {
    title: "Dashboard",
    icon: MdDashboard,
    path: "/",
  },
  {
    title: "User List",
    icon: FaUser,
    path: "/userlist",
  },
  {
    title: "Category",
    icon: MdCategory,
    path: "/category",
  },
  {
    title: "Sub-category",
    path: "/subcategory",
  },
  {
    title: "Product",
    path: "/products",
    icon: FaShoppingCart,
  },
  {
    title: "One-Time Order",
  },
  {
    title: "Subscribed Order",
    icon: IoBagCheck,
  },
  {
    title: "Unconfirmed Order",
    icon: BsBagXFill,
  },
  {
    title: "Help",
    icon: IoMdHelpCircle,
  },
  {
    title: "Banner",
  },
  {
    title: "Terms",
  },
  {
    title: "Privacy Policy",
    icon: MdPrivacyTip,
  },
  {
    title: "Coupon",
  },
  {
    title: "About Us",
  },
  {
    title: "Contact",
  },
  {
    title: "FAQ",
  },
  {
    title: "Notifications",
    icon: FaBell,
  },
  {
    title: "Wallet",
    icon: CiWallet,
  },
  {
    title: "Delivery Boy",
    icon: RiUserSearchLine,
  },
  {
    title: "Collection Boy",
    icon: RiUserSearchLine,
  },
  {
    title: "Return",
    icon: MdAssignmentReturn,
  },
  {
    title: "Order Sheets",
  },
  {
    title: "Permissions",
    icon: FaKey,
  },
  {
    title: "Logs",
    icon: IoCloudUpload,
  },
  {
    title: "Logout",

    icon: AiOutlineLogout,
  },
];
