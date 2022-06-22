import React from "react";
import { Tag } from "antd";
import { history } from "../../App";

export default function BrandList({ data }) {
  return (
    <div className="my-10 divide-y">
      {data.map((item, index) => {
        return (
          <div
            className="grid grid-cols-6 gap-2 justify-center items-center py-5 "
            key={index}
          >
            <div
              className={
                index % 2 === 0
                  ? `border-r-2 border-green-500 h-full flex justify-center`
                  : `border-r-2 border-gray-500 h-full flex justify-center`
              }
            >
              <img src={item.image} alt={item.image} height={64} width={64} />
            </div>

            <div className="col-span-2 ml-10">
              <h3 className="text-xl" style={{ color: "#2f465f" }}>
                {item.name}
              </h3>
              <div className="flex">
                <p className="border-r border-gray-400 text-sm text-gray-400 pr-4">
                  {item.desc}
                </p>
                <div className="ml-4 text-blue-500 inline font-semibold">
                  {item.models} Models
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ color: "#2f465f" }}>Last Updated</h3>
              <p className="text-gray-400">{item.date}</p>
            </div>
            <div>
              <Tag
                style={{
                  borderColor: "#fafafa",
                  fontSize: "12px",
                  padding: "6px",
                }}
              >
                <div className="flex items-center justify-center font-semibold text-base">
                  <span
                    className={
                      item.status === "active"
                        ? "w-3 h-3 mr-2 rounded-full bg-green-800 inline-block"
                        : "w-3 h-3 mr-2 rounded-full bg-gray-600 inline-block"
                    }
                  ></span>
                  <span
                    className={
                      item.status === "active"
                        ? "text-green-800"
                        : "text-gray-600"
                    }
                  >
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </div>
              </Tag>
            </div>
            <div>
              <button
                className="self-center px-3 py-1 border-2 rounded border-gray-400"
                onClick={() => history.push(`/brand/${item.name}`)}
              >
                View Detail
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
