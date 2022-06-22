import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import { SideBarData } from "./SideBarData";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [sideBar, setSideBar] = useState(true);
  const [activeLink, setActiveLink] = useState(0);
  const [subnav, setSubnav] = useState(false);
  const [activeSub, setActiveSub] = useState(0);

  const showSideBar = () => {
    setSideBar(!sideBar);
  };

  const ShowActiveLink = (index) => {
    setActiveLink(index);
  };

  const showActiveSub = (index) => {
    setActiveSub(index);
  };

  const showSubnav = () => {
    setSubnav(!subnav);
  };
  return (
    <div
      className={
        sideBar
          ? "h-screen p-3 space-y-2 w-60 fixed transition-all duration-300 left-0 "
          : "h-screen p-3 space-y-2 w-60 fixed transition-all duration-300 -left-48 "
      }
      style={{ backgroundColor: "#323435", color: "#8C8C8C" }}
    >
      <div className="flex items-center justify-between p-2 space-x-4">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="102"
            height="28"
            viewBox="0 0 148 40"
            fill="none"
          >
            <path
              d="M30.0145 39.6389H20.0609V35.9228C18.4274 38.1421 15.4669 39.8453 11.4854 39.8453C4.90069 39.897 0.817139 35.6131 0.817139 28.7486V13.626H10.6687V27.6131C10.6687 30.6066 12.5573 32.4131 15.3648 32.4131C18.2233 32.4131 20.0609 30.6582 20.0609 27.6131V13.626H30.0145V39.6389Z"
              fill="#0FC97B"
            />
            <path
              d="M48.391 13.3162C55.5372 13.3162 60.7947 17.0839 62.224 23.6387H51.7088C51.1474 22.0387 50.0244 21.1097 48.1868 21.1097C45.7877 21.1097 44.1543 22.9678 44.1543 26.6839C44.1543 30.4517 45.7877 32.3097 48.1868 32.3097C50.0754 32.3097 51.1474 31.3807 51.7088 29.7807H62.224C60.7947 36.2323 55.5372 40.1033 48.391 40.1033C39.9686 40.1033 34.0475 35.0452 34.0475 26.7355C34.0475 18.3742 39.9176 13.3162 48.391 13.3162Z"
              fill="#0FC97B"
            />
            <path
              d="M76.7721 13.3162C80.8046 13.3162 83.6631 14.9162 85.0923 17.2387V13.6258H94.9949V39.6387H85.0923V36.0258C83.612 38.3484 80.7535 39.9484 76.7721 39.9484C70.0342 39.9484 64.7256 34.8903 64.7256 26.5807C64.7256 18.271 70.0342 13.3162 76.7721 13.3162ZM79.9368 21.2129C77.1294 21.2129 74.7813 23.071 74.7813 26.5807C74.7813 30.0387 77.1294 32 79.9368 32C82.6932 32 85.0923 30.0903 85.0923 26.5807C85.0923 23.1226 82.6932 21.2129 79.9368 21.2129Z"
              fill="#0FC97B"
            />
            <path
              d="M110.511 39.6389H100.609V13.626H110.511V18.2195C112.655 15.3808 115.871 13.3679 119.648 13.3679V23.0711H116.892C112.808 23.0711 110.511 24.2582 110.511 28.284V39.6389Z"
              fill="#0FC97B"
            />
            <path
              d="M135.268 40C127.407 40 122.149 36.0774 121.741 30.9162H131.337C131.592 32.6194 133.175 33.5484 135.217 33.5484C136.901 33.5484 137.82 32.8258 137.82 31.8968C137.82 28.0774 122.762 31.2258 122.762 21.6258C122.762 17.0839 126.845 13.3162 134.502 13.3162C142.21 13.3162 146.242 17.2387 146.906 22.4H137.973C137.667 20.8 136.391 19.8194 134.298 19.8194C132.664 19.8194 131.848 20.4387 131.848 21.4194C131.848 25.1355 146.957 22.142 147.008 32.0516C147.059 36.542 142.567 40 135.268 40Z"
              fill="#0FC97B"
            />
            <path
              d="M5.81906 9.59994C2.297 9.59994 0 7.53543 0 4.90317C0 2.27091 2.297 0.154785 5.81906 0.154785C9.29008 0.154785 11.5871 2.2193 11.5871 4.90317C11.5871 7.53543 9.29008 9.59994 5.81906 9.59994Z"
              fill="#0FC97B"
            />
            <path
              d="M22.2544 0H31.7997L27.3078 9.39355H17.7625L22.2544 0Z"
              fill="#0FC97B"
            />
          </svg>
        </a>
        <div onClick={showSideBar} className="cursor-pointer">
          {sideBar ? (
            <span className="flex items-center space-x-1 text-white text-xl">
              <MenuFoldOutlined />
            </span>
          ) : (
            <span className="flex items-center space-x-1 text-white text-xl">
              <MenuUnfoldOutlined />
            </span>
          )}
        </div>
      </div>
      <div className="divide-y divide-gray-700 px-2">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          {SideBarData.map((item, index) => {
            console.log(item);
            return (
              <li
                key={index}
                className={
                  index === activeLink && !item.subNav
                    ? "text-base p-3 bg-blue-500 rounded text-white cursor-pointer"
                    : "text-base p-3 cursor-pointer"
                }
                onClick={() => ShowActiveLink(index)}
              >
                <Link
                  to={item.path}
                  className={
                    index === activeLink ? "text-white" : "text-gray-500"
                  }
                  onClick={() => {
                    if (item.subNav) {
                      showSubnav();
                    }
                  }}
                >
                  <span className="mr-2">{item.icon}</span> {item.title}{" "}
                  <span className="ml-2">
                    {item?.subNav && subnav
                      ? item.iconOpen
                      : item.subNav
                      ? item.iconClosed
                      : null}
                  </span>
                </Link>

                <div>
                  {subnav &&
                    item.subNav &&
                    item.subNav.map((item, index) => {
                      console.log(item);
                      return (
                        <div
                          key={index}
                          className={
                            index === activeSub
                              ? "text-base p-1 bg-blue-500 rounded text-white cursor-pointer pl-8 leading-10 mt-2 mb-2"
                              : "text-base p-1 cursor-pointer pl-8 leading-10 mt-2 mb-2"
                          }
                          onClick={() => showActiveSub(index)}
                        >
                          <Link
                            to={item.path}
                            className={
                              index === activeSub
                                ? "text-white"
                                : "text-gray-500"
                            }
                          >
                            {item.title}
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </li>
            );
          })}
        </ul>
        <ul className="pt-4 pb-2 space-y-1 text-sm">
          <li>
            <a
              href="/setting"
              className="flex items-center p-2 space-x-3 rounded-md text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-gray-400"
              >
                <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
              </svg>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a
              href="/logout"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-gray-400"
              >
                <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                <rect width="32" height="64" x="256" y="232"></rect>
              </svg>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
