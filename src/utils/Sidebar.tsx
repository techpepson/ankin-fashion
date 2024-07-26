import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../assets/icons";
import { styleSideBar } from "../styles/sidebar.style";
import { Separator } from "@radix-ui/themes";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className={`${styleSideBar.sideBarDisplay} `}>
        {/*sidebar to display acrions and links to other pages*/}
        <div className={` flex flex-col gap-3`}>
          {/*dashboard link with icon*/}
          <span
            className={`uppercase ${styleSideBar.boldFont}, ${styleSideBar.iconColor}`}
          >
            Main
          </span>
          <div className={`${styleSideBar.imageTextGap} items-center`}>
            <button className={`${styleSideBar.iconColor}`}>
              {icons.dashboardIcon}
            </button>
            <Link
              to="/dashboard"
              className={`hover:text-[#8b5cf6] transition-colors duration-75`}
            >
              Dashboard
            </Link>
          </div>
        </div>
        <Separator orientation="horizontal" size="4" />
        <div className={`flex flex-col gap-2 align-middle text-justify`}>
          <span
            className={`uppercase ${styleSideBar.boldFont}, ${styleSideBar.iconColor}`}
          >
            Lists
          </span>
          {/*div container for users and user icon button*/}
          <div className={`${styleSideBar.imageTextGap}`}>
            <button className="flex gap-3">
              <span className={`${styleSideBar.iconColor}`}>{icons.users}</span>
              <Link
                to="/users"
                className={`hover:text-[#8b5cf6] transition-colors duration-75`}
              >
                <span>Users</span>
              </Link>
            </button>
          </div>
          {/*div container for products icon and texts*/}
          <div className={`${styleSideBar.imageTextGap}`}>
            <button className="flex gap-3">
              <span className={`${styleSideBar.iconColor}`}>
                {icons.products}
              </span>
              <Link
                to="/products"
                className={`hover:text-[#8b5cf6] transition-colors duration-75`}
              >
                <span>Products</span>
              </Link>
            </button>
          </div>
          {/*div container for orders icon and text*/}
          <div className={`${styleSideBar.imageTextGap}`}>
            <button className="flex gap-3">
              <span className={`${styleSideBar.iconColor}`}>
                {icons.orders}
              </span>
              <Link
                to="/orders"
                className={`hover:text-[#8b5cf6] transition-colors duration-75`}
              >
                <span>Orders</span>
              </Link>
            </button>
          </div>
          {/*container for button icon and text*/}
          <div className={`${styleSideBar.imageTextGap}`}>
            <button className="flex gap-3">
              <span className={`${styleSideBar.iconColor}`}>
                {icons.delivery}
              </span>
              <Link
                to="/delivery"
                className={`hover:text-[#8b5cf6] transition-colors duration-75`}
              >
                <span>Delivery</span>
              </Link>
            </button>
          </div>
          {/*button to add to collection*/}
          <div className={`${styleSideBar.imageTextGap}`}>
            <button className="flex gap-3">
              <span className={`${styleSideBar.iconColor}`}>
                {icons.addProduct}
              </span>
              <Link
                to="/add-product"
                className={`hover:text-[#8b5cf6] transition-colors duration-75`}
              >
                <span>Add to Collection</span>
              </Link>
            </button>
          </div>
        </div>
        <Separator orientation="horizontal" size="4" />
        {/*div container for useful sections like settings*/}
        <div className="flex flex-col gap-3">
          <span
            className={`uppercase ${styleSideBar.boldFont}, ${styleSideBar.iconColor}`}
          >
            Useful
          </span>
          {/*div container for users and stats icon button*/}
          <div className={`${styleSideBar.imageTextGap}`}>
            <button className="flex gap-3">
              <span className={`${styleSideBar.iconColor}`}>{icons.stats}</span>
              <Link
                to="/stats"
                className={`hover:text-[#8b5cf6] transition-colors duration-75`}
              >
                <span>Stats</span>
              </Link>
            </button>
          </div>
          {/*div container for notifications icon and texts*/}
          <div>
            <button className="flex gap-3 items-center">
              <span className={`${styleSideBar.iconColor}`}>
                {icons.notifications}
              </span>
              <Link
                to="/notifications"
                className={`hover:text-[#8b5cf6] transition-colors duration-75`}
              >
                <span>Notifications</span>
              </Link>
            </button>
          </div>
        </div>
        <Separator orientation="horizontal" size="4" />
        {/*sidebar buttons for service actions like settings*/}
        <div className="flex flex-col gap-3 text-justify">
          <span
            className={`uppercase ${styleSideBar.boldFont}, ${styleSideBar.iconColor}`}
          >
            Service
          </span>
          <div>
            <button
              className={`${styleSideBar.imageTextGap} text-justify items-center`}
            >
              <span className={`${styleSideBar.iconColor}`}>
                {icons.settings}
              </span>
              <Link to="/settings">
                <span
                  className={`hover:text-[#8b5cf6] transition-colors duration-75`}
                >
                  Settings
                </span>
              </Link>
            </button>
          </div>
        </div>
        <Separator orientation="horizontal" size="4" />
        {/*dropdown menu list container*/}
        <div className="flex text-justify flex-col gap-3">
          <span
            className={`uppercase ${styleSideBar.boldFont}, ${styleSideBar.iconColor}`}
          >
            User
          </span>
          {/*div container for users and user icon button*/}
          <div className={`${styleSideBar.imageTextGap}`}>
            <button className="flex gap-3">
              <span className={`${styleSideBar.iconColor}`}>
                {icons.profile}
              </span>
              <Link to="/profile">
                <span
                  className={`hover:text-[#8b5cf6] transition-colors duration-75`}
                >
                  Profile
                </span>
              </Link>
            </button>
          </div>
          {/*div container for products icon and texts*/}
          <div className="flex flex-col">
            <button className={`${styleSideBar.imageTextGap}`}>
              <span className={`${styleSideBar.iconColor}`}>
                {icons.logout}
              </span>
              <button
                className={`hover:text-[#8b5cf6] transition-colors duration-75`}
              >
                Logout
              </button>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Sidebar;
