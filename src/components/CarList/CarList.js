import React from "react";
import { Tag } from "antd";
import { useState } from "react";

export default function CarList(props) {
  const cars = props.cars;
  const [carList, setCarList] = useState({
    cars,
    itemToShow: 7,
    expended: false,
  });
  const showMore = () => {
    carList.itemToShow === 7
      ? setCarList({ cars, itemToShow: carList.cars?.length, expended: true })
      : setCarList({ cars, itemToShow: 7, expended: false });
  };
  return (
    <div className="container mx-auto px-4">
      <div className="pt-40 pb-20">
        <div className="grid grid-cols-4 gap-5">
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/9b4f/4e9b/8ccb5c62806483fd25a57ae989c26ed0?Expires=1656892800&Signature=hShkmpfQF1YjBEVJEolprk~A~A7KhmlRScMJBXjE~ezTDJL1yEg61u6AlVudMSKQ5XjKwOihgsiDIy9vaSIMvW1VMHfLQJIiwxFPC~IV9GBy97G3yvi-LTizHz2X4VJIB1N~KOt1lygnb7qq2zAUtk2nEbhI871z0DIj2~bdxXaeLFrVCuMBB3~pVMER3XSYhsmNWppdZSj2M2kCZFOKVM8TOgwv1AF4hBaSLFuAdPpGpZg6rdmsU517bKwg~Snws3kmUtSwfvc~FzO7TewFKca1CgPdVMh6U0y1VS98Qpf8tN18fiDh489Rd0Kw6EUXz4RkhZR-yN9UzXi-3LqRVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
            />
          </div>
          {carList.cars?.slice(0, carList.itemToShow).map((car, index) => {
            return (
              <div
                className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-sm border p-0"
                key={index}
              >
                <div className="border-b p-8">
                  <img
                    src={car.carImage}
                    alt={car.carImage}
                    className="object-cover w-full mb-2 h-44"
                  />
                </div>
                <div className="flex flex-col justify-between px-5 py-6">
                  <h2 className=" text-xl font-semibold ">{car.name}</h2>
                  <p className="text-base ">
                    {car.POA ? (
                      <span className="mr-2">POA</span>
                    ) : (
                      <span>
                        From
                        <span className="text-blue-600 font-bold mx-2">
                          ${car.price.toLocaleString()}
                        </span>
                      </span>
                    )}
                    <Tag
                      color="blue"
                      style={{
                        borderColor: "#e6f7ff",
                        fontSize: "12px",
                        padding: "6px",
                      }}
                    >
                      $2,302/mo
                    </Tag>
                  </p>
                  <p className="text-gray-500">
                    4 variants {car.COE ? `| with COE` : ""}
                  </p>
                  <div className="flex items-center">
                    <img src={car.logo} alt="" className="w-8 h-8 mr-3" />
                    <div>{car.seller}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="self-center px-3 py-2 border border-red-600 text-red-600 rounded"
            onClick={showMore}
          >
            {carList.expended ? (
              <span>View Less</span>
            ) : (
              <span>View more new cars</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
