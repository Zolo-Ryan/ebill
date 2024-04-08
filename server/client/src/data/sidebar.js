import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
    role: ["ADMIN"],
  },
  {
    title: "Products",
    icon: <FaTh />,
    path: "/buyerProduct",
    role: ["USER"]
  },
  {
    title: "Generate Bill",
    icon: <FaTh />,
    path: "/generatebill",
    role: ["ADMIN"]
  },
  {
    title: "Cart",
    icon: <FaTh />,
    path: "/cart",
    role: ["USER,ADMIN"],
  },
  {
    title: "Add Product",
    icon: <BiImageAdd />,
    path: "/add-product",
    role: ["ADMIN"],
  },
  {
    title: "Account",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
    role: ["USER","ADMIN"]
  },
  {
    title: "Report Bug",
    icon: <FaCommentAlt />,
    path: "/contact-us",
    role: ["USER","ADMIN"],
  },
];

export default menu;
