import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelopeOpen,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Input, Radio, Space } from "antd";

export default function HomePage() {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const carTypeMenu = (
    <Menu>
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
        </Space>
      </Radio.Group>
    </Menu>
  );
  return (
    <div>
      <div className="container mx-auto px-4">
        <div
          className="flex justify-between items-center"
          style={{ height: "72px" }}
        >
          <div className="flex divide-x">
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              <span className="ml-2">
                71 Ayer Rajah Crescent, #06-14,{" "}
                <span className="block ml-5"> Singapore 139951</span>
              </span>
            </div>
            <div className="ml-5 px-5">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
              <span className="ml-2">Email us at: hello@carbuyer.com.sg</span>
            </div>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> +65 8808 7905
            </span>
            <span className="ml-7 block">+7 (700) 51 51 518</span>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#232323" }}>
        <div
          className="container mx-auto px-4 flex justify-between items-center"
          style={{ height: "77px" }}
        >
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="148"
              height="40"
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
          <ul className="items-stretch hidden space-x-3 lg:flex text-base m-0">
            <li className="flex">
              <a href="/" className="flex items-center px-4 -mb-1 text-white ">
                New Cars
              </a>
            </li>
            <li className="flex">
              <a href="/" className="flex items-center px-4 -mb-1 text-white ">
                Used Cars
              </a>
            </li>
            <li className="flex">
              <a href="/" className="flex items-center px-4 -mb-1 text-white ">
                Reviews
              </a>
            </li>
            <li className="flex">
              <a href="/" className="flex items-center px-4 -mb-1 text-white ">
                News
              </a>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-16 py-2 font-semibold rounded text-white bg-red-600">
              Login
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex items-center"
        style={{
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/0e2f/551a/f807aa336b6f72afe54bd6973c050a7e?Expires=1656892800&Signature=QazqkvRnM2-jq8qUC9tnzDVok~skYjl-jcQWGv7YE-hQFBU7E5hzGkjNMd7y1o1nWEV7g-KoHSTHNXFeWiS5LqAJOTSASX-e2XG0T79grsY8jzP7FjaJoIo4oYH~cvG1NMTHnwmVWTdC7FdbEpYhN~cdFR6~6zvrR2WEFYm~e1t2YuQHbYOnosCDbR66GHLzIm0BqNvAWLSRD8AjHgvr2tfG6O2EQctIpwz9K-jFup6zLyMbqknA71zR~0qyGrQ2KXKcl9moWbh7brjb5boJcfB~XUCJQxYGw04wsA5Jxit6BuBfwh~A7sqRSUTZPpYVyi7BNm8rzjmBfT15C-Aegw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "529px",
          position: "relative",
        }}
      >
        <div className="container mx-auto">
          <div className="text-white" style={{ width: "540px" }}>
            <h3 className="font-bold text-6xl mb-5 text-white">
              Car Marketplace
            </h3>
            <p style={{ color: "#e3e3e3" }} className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              quibusdam vero aperiam laboriosam ut fugiat nostrum illum
              laudantium perferendis minus?
            </p>
            <button className="self-center px-14 py-3 font-semibold rounded-lg text-white bg-red-600">
              Get Started
            </button>
          </div>
        </div>
        <div
          className="container mx-auto px-4 rounded-lg flex justify-between items-center bg-white absolute -bottom-20 left-48 drop-shadow-md"
          style={{ height: "139px" }}
        >
          <div className="w-40">
            <p>New/Used</p>
            <Dropdown overlay={carTypeMenu} trigger={["click"]}>
              <div onClick={(e) => e.preventDefault()}>
                <div className="flex justify-between">
                  {value}
                  <DownOutlined />
                </div>
              </div>
            </Dropdown>
          </div>

          <div>
            <p>Price Range</p>
            <Dropdown overlay={carTypeMenu} trigger={["click"]}>
              <div onClick={(e) => e.preventDefault()}>
                <div className="flex justify-between">
                  {value}
                  <DownOutlined />
                </div>
              </div>
            </Dropdown>
          </div>
          <div>
            <p>Vehicle Type</p>
            <Dropdown overlay={carTypeMenu} trigger={["click"]}>
              <div onClick={(e) => e.preventDefault()}>
                <div className="flex justify-between">
                  {value}
                  <DownOutlined />
                </div>
              </div>
            </Dropdown>
          </div>
          <div>
            <button className="self-center px-14 py-3 font-semibold rounded-lg text-white bg-red-600">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
