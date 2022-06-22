import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faBell,
  faCaretDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { message, Upload, Dropdown, Menu } from "antd";
import { PlusOutlined, LoadingOutlined, DownOutlined } from "@ant-design/icons";
import { history } from "../../App";
import { BrandData } from "../../components/BrandList/BrandData";
import { useParams } from "react-router-dom";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
};

export default function BrandDetail() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [brandStatus, setBrandStatus] = useState("Active");
  const [editInfo, setEditInfo] = useState(false);
  const { id } = useParams();

  const brandDetail = BrandData.filter((item) => item.name === id);
  console.log(brandDetail);
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const menu = (
    <Menu onClick={({ key }) => setBrandStatus(key)}>
      <Menu.Item key="Active">
        <div className="flex items-center w-28 px-3 py-1 hover:bg-green-200 rounded-full">
          <span className="mr-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                fill="#0F5EDD"
              />
            </svg>
          </span>
          Active
        </div>
      </Menu.Item>
      <Menu.Item key="Inactive">
        <div className="flex  items-center w-28 px-3 py-1 hover:bg-gray-200 rounded-full">
          <span className="mr-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                fill="#B4B4B4"
              />
            </svg>
          </span>
          Inactive
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <SideBar />
      <div className="h-16 border-b">
        <div className="flex justify-end items-center h-full mr-10">
          <div className="flex items-center justify-around ">
            <FontAwesomeIcon icon={faCircleInfo} className="text-lg mr-4" />
            <FontAwesomeIcon icon={faBell} className="text-lg mr-4" />
            <div className="w-8 h-8  rounded-full bg-gray-300 mr-4"></div> Admin
            <FontAwesomeIcon icon={faCaretDown} className="ml-3" />
          </div>
        </div>
      </div>
      <div className="container mx-auto ml-52 py-10">
        <div className="flex items-center">
          <button onClick={() => history.push(`/brand`)}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-lg mr-6 mb-1"
            />
          </button>
          <h1 className="text-2xl font-semibold" style={{ color: "#2F465F" }}>
            Brand Details
          </h1>
        </div>
        <div>
          <div className="border-b mt-8">
            <p className="text-black text-base font-semibold">Brand Logo</p>
          </div>
          <div className="mt-4">
            {editInfo ? (
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                      width: "100%",
                    }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
            ) : (
              <img src={brandDetail[0].image} alt="" />
            )}
          </div>
          <div className="mt-8 border-b">
            <h3 className="text-base font-semibold text-black">
              Brand Details
            </h3>
          </div>
          <form>
            <fieldset className="mt-3">
              <div className="flex ">
                <div className="w-64">
                  <label
                    htmlFor="brandname"
                    className="text-sm text-gray-500 mb-2 block"
                  >
                    Brand name
                  </label>
                  {editInfo ? (
                    <input
                      id="username"
                      type="text"
                      placeholder="Input Content"
                      className=" rounded outline-none px-3 py-2 border "
                    />
                  ) : (
                    <h3 className="text-base font-semibold">
                      {brandDetail[0].name}
                    </h3>
                  )}
                </div>
                <div className="ml-8">
                  <p className="text-sm text-gray-500">Brand Status</p>
                  <div>
                    {editInfo ? (
                      <Dropdown overlay={menu} trigger={["click"]}>
                        <div
                          onClick={(e) => e.preventDefault()}
                          className="cursor-pointer"
                        >
                          <div
                            className={
                              brandStatus === "Active"
                                ? "flex justify-center items-center px-3 py-1 bg-green-200 rounded-full"
                                : "flex justify-center items-center px-3 py-1 bg-gray-200 rounded-full"
                            }
                          >
                            <div className="w-20 flex items-center ">
                              <span className="mr-2">
                                {brandStatus === "Active" ? (
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                                      fill="#0F5EDD"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                                      fill="#B4B4B4"
                                    />
                                  </svg>
                                )}
                              </span>

                              {brandStatus}
                            </div>
                            <DownOutlined />
                          </div>
                        </div>
                      </Dropdown>
                    ) : (
                      <div
                        className={
                          brandDetail[0].status === "active"
                            ? "flex justify-center items-center px-3 py-1 bg-green-200 rounded-full"
                            : "flex justify-center items-center px-3 py-1 bg-gray-200 rounded-full"
                        }
                      >
                        <div className="w-20 flex items-center ">
                          <span className="mr-2">
                            {brandDetail[0].status === "active" ? (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                                  fill="#0F5EDD"
                                />
                              </svg>
                            ) : (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                                  fill="#B4B4B4"
                                />
                              </svg>
                            )}
                          </span>

                          {brandDetail[0].status.charAt(0).toUpperCase() +
                            brandDetail[0].status.slice(1)}
                        </div>
                        <DownOutlined />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <label
                  htmlFor="description"
                  className="text-sm text-gray-500 mb-2"
                >
                  Description
                </label>
                {editInfo ? (
                  <textarea
                    id="bio"
                    placeholder="Input Content"
                    className="w-full rounded outline-none border px-3 py-2"
                  ></textarea>
                ) : (
                  <p className="text-base font-semibold text-black">
                    {brandDetail[0].desc}
                  </p>
                )}
              </div>
            </fieldset>
          </form>
          <div className="mt-2">
            <button
              className="self-center px-4 py-2 rounded bg-blue-700 text-white font-semibold text-base"
              onClick={() => setEditInfo(!editInfo)}
            >
              Edit information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
