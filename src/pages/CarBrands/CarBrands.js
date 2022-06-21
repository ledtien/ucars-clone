import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

export default function CarBrands() {
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
      <div></div>
    </div>
  );
}
