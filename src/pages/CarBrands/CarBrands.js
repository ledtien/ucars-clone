import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DownOutlined } from "@ant-design/icons";
import {
  faCircleInfo,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown, Menu, Space } from "antd";
import { useState } from "react";
import BrandList from "../../components/BrandList/BrandList";
import { BrandData } from "../../components/BrandList/BrandData";
import CreateBrand from "../../components/Modals/CreateBrand";

export default function CarBrands() {
  const [filterStatus, setFilterStatus] = useState("View All");
  const [brandData, setBrandData] = useState(BrandData);

  const sorting = (key) => {
    if (key === "All") {
      setBrandData(BrandData);
    }
    if (key === "Last Updated") {
      const sort = [...brandData].sort((a, b) => {
        if (
          a.date
            .split("/")
            .reverse()
            .join()
            .localeCompare(b.date.split("/").reverse().join())
        ) {
          return 1;
        } else {
          return -1;
        }
      });
      setBrandData(sort);
    }
    if (key === "Brand Name") {
      const sort = [...brandData].sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
      setBrandData(sort);
    }
    if (key === "Number of Models") {
      const sort = [...brandData].sort((a, b) => {
        if (a.models > b.models) {
          return 1;
        } else {
          return -1;
        }
      });
      setBrandData(sort);
    }
  };

  const onClick = ({ key }) => {
    setFilterStatus(key);
    sorting(key);
  };

  const handleChange = (e) => {
    if (e.target.value !== "") {
      const newData = [...brandData].filter((item) =>
        item.name.toLowerCase().trim().includes(e.target.value)
      );
      setBrandData(newData);
    } else {
      setBrandData(BrandData);
    }
  };

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: "All",
          key: "All",
        },
        {
          label: "Last Updated",
          key: "Last Updated",
        },
        {
          label: "Brand Name",
          key: "Brand Name",
        },
        {
          label: "Number of Models",
          key: "Number of Models",
        },
      ]}
    />
  );

  return (
    <div>
      <SideBar />
      <div className="h-16 border-b">
        <div className="flex justify-end items-center h-full mr-10">
          <div className="flex items-center justify-around ">
            <FontAwesomeIcon icon={faCircleInfo} className="text-lg mr-4" />{" "}
            <FontAwesomeIcon icon={faBell} className="text-lg mr-4" />{" "}
            <div className="w-8 h-8  rounded-full bg-gray-300 mr-4"></div> Admin{" "}
            <FontAwesomeIcon icon={faCaretDown} className="ml-3" />
          </div>
        </div>
      </div>
      <div className="container mx-auto ml-44 py-10">
        <div className="flex justify-between items-center">
          <div className="flex justify-between w-1/2 items-center">
            <h1 className="font-semibold text-2xl" style={{ color: "#2F465F" }}>
              CAR BRAND LIST
            </h1>
            <div className="mb-1">
              <Dropdown overlay={menu} trigger={["click"]}>
                <div
                  onClick={(e) => e.preventDefault()}
                  className="text-black cursor-pointer"
                >
                  <Space>
                    <span className="flex justify-center items-center">
                      <DownOutlined />
                    </span>
                    <span className="ml-2 w-32 inline-block">
                      {filterStatus}
                    </span>
                  </Space>
                </div>
              </Dropdown>
            </div>
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search Car Brand
              </label>
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 outline-none"
                  placeholder="Search car brand"
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          <div>
            <CreateBrand />
          </div>
        </div>
        <BrandList data={brandData} />
      </div>
    </div>
  );
}
