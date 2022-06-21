import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faFolder,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

export const SideBarData = [
  {
    title: "Car Brand",
    path: "/brand",
    icon: <FontAwesomeIcon icon={faCar} />,
  },
  {
    title: "Folder",
    path: "/folder",
    icon: <FontAwesomeIcon icon={faFolder} />,
    iconClosed: <FontAwesomeIcon icon={faCaretDown} />,
    iconOpen: <FontAwesomeIcon icon={faCaretUp} />,
    subNav: [
      {
        title: "Menu Item",
        path: "/folder/item1",
        icon: <FontAwesomeIcon icon={faFolder} />,
      },
      {
        title: "Menu Item",
        path: "/folder/item2",
        icon: <FontAwesomeIcon icon={faFolder} />,
      },
      {
        title: "Menu Item",
        path: "/folder/item3",
        icon: <FontAwesomeIcon icon={faFolder} />,
      },
      {
        title: "Menu Item",
        path: "/folder/item4",
        icon: <FontAwesomeIcon icon={faFolder} />,
      },
    ],
  },
  {
    title: "Tasks",
    path: "/task",
    icon: <FontAwesomeIcon icon={faFolder} />,
  },
  {
    title: "Modules",
    path: "/module",
    icon: <FontAwesomeIcon icon={faFolder} />,
  },
  {
    title: "Notification",
    path: "/notification",
    icon: <FontAwesomeIcon icon={faFolder} />,
  },
];
