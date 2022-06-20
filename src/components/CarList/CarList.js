import React from "react";
import { Card, Tag } from "antd";

export default function CarList() {
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
          <div className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-sm border p-0">
            <div className="border-b">
              <img
                src="https://s3-alpha-sig.figma.com/img/60cd/8b44/e9a6d1d162e4f8ae2875144e0528ad68?Expires=1656892800&Signature=b-~np3gCe4l~IqLqUnthwYAj8GDFWhAA88nKRadXafUoQgRfVPjul4xy5nnaYF~cT8hN0VFyEThH6FPKWsjSGVMOLLoQYaoHlCgmCjwhZKFrrI9PSeePPg9wrMaQ60i8qdhv4QIW2aZQrO~w7Ro8gyONOVzyQ6tU8Ye2pKhJ4d2yn~oVF8DpI9-9cx0kxY8rg~pQh~a23UHnrr19dAn~JP1w0~HCnrqJdg3F30ZTDq9L8R4qCx77pb9BxuXD08DKManPFT7YPG7JINA3Uw8sU45xV6spTHqm3EuB8mGimGAmrDlO3FaQ9L1duKgnG4vRYI9~jxTfaGOBhfQ~ZErhig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
                className="object-cover w-full mb-2"
              />
            </div>
            <div className="flex flex-col justify-between px-5 py-6">
              <h2 className=" text-xl font-semibold ">BMW X3</h2>
              <p className="text-base ">
                From <span className="text-blue-600 font-bold">$248,000</span>{" "}
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
              <p className="text-gray-500">4 variants | with COE</p>
              <div className="flex items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0545/a13b/408a6d725653dce9217488f65bad49c1?Expires=1656892800&Signature=cajfHoBFkg0bWFfVyFMmOwxGJjRrZmbO7-KpBMXI4OgNP~4e1VRhyrLVLQtZZ7J-JjWHBzWu-ivaHQCyos0ztAd5TKPYwjstWHK~QZ3cZyrRI0EtxM5Ihl-ZMdnFBqwR645G4J3EMAxDUZUND697hxaOAwDaBHx8GQb-nAbOG9r3Md5jsPLlecU7zKcIkNei~KGZQNrNv~OFOAvWp3-junNkNIXDxawy-PGlZ~OdYxZglb5-HC-0P6YcQo9pavd4Sdsn~LbnvYOc0g8Htzm1rpRBpFjcCnvt~RlCFyCxJvkmBqn1UXu3PNK5Nsp30lo2D1OqQWdI5GPY3YcTTL1DfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                  className="w-8 h-8 mr-3"
                />
                <div>Performance Motors</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-sm border p-0">
            <div className="border-b">
              <img
                src="https://s3-alpha-sig.figma.com/img/60cd/8b44/e9a6d1d162e4f8ae2875144e0528ad68?Expires=1656892800&Signature=b-~np3gCe4l~IqLqUnthwYAj8GDFWhAA88nKRadXafUoQgRfVPjul4xy5nnaYF~cT8hN0VFyEThH6FPKWsjSGVMOLLoQYaoHlCgmCjwhZKFrrI9PSeePPg9wrMaQ60i8qdhv4QIW2aZQrO~w7Ro8gyONOVzyQ6tU8Ye2pKhJ4d2yn~oVF8DpI9-9cx0kxY8rg~pQh~a23UHnrr19dAn~JP1w0~HCnrqJdg3F30ZTDq9L8R4qCx77pb9BxuXD08DKManPFT7YPG7JINA3Uw8sU45xV6spTHqm3EuB8mGimGAmrDlO3FaQ9L1duKgnG4vRYI9~jxTfaGOBhfQ~ZErhig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
                className="object-cover w-full mb-2"
              />
            </div>
            <div className="flex flex-col justify-between px-5 py-6">
              <h2 className=" text-xl font-semibold ">BMW X3</h2>
              <p className="text-base ">
                From <span className="text-blue-600 font-bold">$248,000</span>{" "}
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
              <p className="text-gray-500">4 variants | with COE</p>
              <div className="flex items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0545/a13b/408a6d725653dce9217488f65bad49c1?Expires=1656892800&Signature=cajfHoBFkg0bWFfVyFMmOwxGJjRrZmbO7-KpBMXI4OgNP~4e1VRhyrLVLQtZZ7J-JjWHBzWu-ivaHQCyos0ztAd5TKPYwjstWHK~QZ3cZyrRI0EtxM5Ihl-ZMdnFBqwR645G4J3EMAxDUZUND697hxaOAwDaBHx8GQb-nAbOG9r3Md5jsPLlecU7zKcIkNei~KGZQNrNv~OFOAvWp3-junNkNIXDxawy-PGlZ~OdYxZglb5-HC-0P6YcQo9pavd4Sdsn~LbnvYOc0g8Htzm1rpRBpFjcCnvt~RlCFyCxJvkmBqn1UXu3PNK5Nsp30lo2D1OqQWdI5GPY3YcTTL1DfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                  className="w-8 h-8 mr-3"
                />
                <div>Performance Motors</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-sm border p-0">
            <div className="border-b">
              <img
                src="https://s3-alpha-sig.figma.com/img/60cd/8b44/e9a6d1d162e4f8ae2875144e0528ad68?Expires=1656892800&Signature=b-~np3gCe4l~IqLqUnthwYAj8GDFWhAA88nKRadXafUoQgRfVPjul4xy5nnaYF~cT8hN0VFyEThH6FPKWsjSGVMOLLoQYaoHlCgmCjwhZKFrrI9PSeePPg9wrMaQ60i8qdhv4QIW2aZQrO~w7Ro8gyONOVzyQ6tU8Ye2pKhJ4d2yn~oVF8DpI9-9cx0kxY8rg~pQh~a23UHnrr19dAn~JP1w0~HCnrqJdg3F30ZTDq9L8R4qCx77pb9BxuXD08DKManPFT7YPG7JINA3Uw8sU45xV6spTHqm3EuB8mGimGAmrDlO3FaQ9L1duKgnG4vRYI9~jxTfaGOBhfQ~ZErhig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
                className="object-cover w-full mb-2"
              />
            </div>
            <div className="flex flex-col justify-between px-5 py-6">
              <h2 className=" text-xl font-semibold ">BMW X3</h2>
              <p className="text-base ">
                From <span className="text-blue-600 font-bold">$248,000</span>{" "}
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
              <p className="text-gray-500">4 variants | with COE</p>
              <div className="flex items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0545/a13b/408a6d725653dce9217488f65bad49c1?Expires=1656892800&Signature=cajfHoBFkg0bWFfVyFMmOwxGJjRrZmbO7-KpBMXI4OgNP~4e1VRhyrLVLQtZZ7J-JjWHBzWu-ivaHQCyos0ztAd5TKPYwjstWHK~QZ3cZyrRI0EtxM5Ihl-ZMdnFBqwR645G4J3EMAxDUZUND697hxaOAwDaBHx8GQb-nAbOG9r3Md5jsPLlecU7zKcIkNei~KGZQNrNv~OFOAvWp3-junNkNIXDxawy-PGlZ~OdYxZglb5-HC-0P6YcQo9pavd4Sdsn~LbnvYOc0g8Htzm1rpRBpFjcCnvt~RlCFyCxJvkmBqn1UXu3PNK5Nsp30lo2D1OqQWdI5GPY3YcTTL1DfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                  className="w-8 h-8 mr-3"
                />
                <div>Performance Motors</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-sm border p-0">
            <div className="border-b">
              <img
                src="https://s3-alpha-sig.figma.com/img/60cd/8b44/e9a6d1d162e4f8ae2875144e0528ad68?Expires=1656892800&Signature=b-~np3gCe4l~IqLqUnthwYAj8GDFWhAA88nKRadXafUoQgRfVPjul4xy5nnaYF~cT8hN0VFyEThH6FPKWsjSGVMOLLoQYaoHlCgmCjwhZKFrrI9PSeePPg9wrMaQ60i8qdhv4QIW2aZQrO~w7Ro8gyONOVzyQ6tU8Ye2pKhJ4d2yn~oVF8DpI9-9cx0kxY8rg~pQh~a23UHnrr19dAn~JP1w0~HCnrqJdg3F30ZTDq9L8R4qCx77pb9BxuXD08DKManPFT7YPG7JINA3Uw8sU45xV6spTHqm3EuB8mGimGAmrDlO3FaQ9L1duKgnG4vRYI9~jxTfaGOBhfQ~ZErhig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
                className="object-cover w-full mb-2"
              />
            </div>
            <div className="flex flex-col justify-between px-5 py-6">
              <h2 className=" text-xl font-semibold ">BMW X3</h2>
              <p className="text-base ">
                From <span className="text-blue-600 font-bold">$248,000</span>{" "}
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
              <p className="text-gray-500">4 variants | with COE</p>
              <div className="flex items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0545/a13b/408a6d725653dce9217488f65bad49c1?Expires=1656892800&Signature=cajfHoBFkg0bWFfVyFMmOwxGJjRrZmbO7-KpBMXI4OgNP~4e1VRhyrLVLQtZZ7J-JjWHBzWu-ivaHQCyos0ztAd5TKPYwjstWHK~QZ3cZyrRI0EtxM5Ihl-ZMdnFBqwR645G4J3EMAxDUZUND697hxaOAwDaBHx8GQb-nAbOG9r3Md5jsPLlecU7zKcIkNei~KGZQNrNv~OFOAvWp3-junNkNIXDxawy-PGlZ~OdYxZglb5-HC-0P6YcQo9pavd4Sdsn~LbnvYOc0g8Htzm1rpRBpFjcCnvt~RlCFyCxJvkmBqn1UXu3PNK5Nsp30lo2D1OqQWdI5GPY3YcTTL1DfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                  className="w-8 h-8 mr-3"
                />
                <div>Performance Motors</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-sm border p-0">
            <div className="border-b">
              <img
                src="https://s3-alpha-sig.figma.com/img/60cd/8b44/e9a6d1d162e4f8ae2875144e0528ad68?Expires=1656892800&Signature=b-~np3gCe4l~IqLqUnthwYAj8GDFWhAA88nKRadXafUoQgRfVPjul4xy5nnaYF~cT8hN0VFyEThH6FPKWsjSGVMOLLoQYaoHlCgmCjwhZKFrrI9PSeePPg9wrMaQ60i8qdhv4QIW2aZQrO~w7Ro8gyONOVzyQ6tU8Ye2pKhJ4d2yn~oVF8DpI9-9cx0kxY8rg~pQh~a23UHnrr19dAn~JP1w0~HCnrqJdg3F30ZTDq9L8R4qCx77pb9BxuXD08DKManPFT7YPG7JINA3Uw8sU45xV6spTHqm3EuB8mGimGAmrDlO3FaQ9L1duKgnG4vRYI9~jxTfaGOBhfQ~ZErhig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
                className="object-cover w-full mb-2"
              />
            </div>
            <div className="flex flex-col justify-between px-5 py-6">
              <h2 className=" text-xl font-semibold ">BMW X3</h2>
              <p className="text-base ">
                From <span className="text-blue-600 font-bold">$248,000</span>{" "}
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
              <p className="text-gray-500">4 variants | with COE</p>
              <div className="flex items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0545/a13b/408a6d725653dce9217488f65bad49c1?Expires=1656892800&Signature=cajfHoBFkg0bWFfVyFMmOwxGJjRrZmbO7-KpBMXI4OgNP~4e1VRhyrLVLQtZZ7J-JjWHBzWu-ivaHQCyos0ztAd5TKPYwjstWHK~QZ3cZyrRI0EtxM5Ihl-ZMdnFBqwR645G4J3EMAxDUZUND697hxaOAwDaBHx8GQb-nAbOG9r3Md5jsPLlecU7zKcIkNei~KGZQNrNv~OFOAvWp3-junNkNIXDxawy-PGlZ~OdYxZglb5-HC-0P6YcQo9pavd4Sdsn~LbnvYOc0g8Htzm1rpRBpFjcCnvt~RlCFyCxJvkmBqn1UXu3PNK5Nsp30lo2D1OqQWdI5GPY3YcTTL1DfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                  className="w-8 h-8 mr-3"
                />
                <div>Performance Motors</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-sm border p-0">
            <div className="border-b">
              <img
                src="https://s3-alpha-sig.figma.com/img/60cd/8b44/e9a6d1d162e4f8ae2875144e0528ad68?Expires=1656892800&Signature=b-~np3gCe4l~IqLqUnthwYAj8GDFWhAA88nKRadXafUoQgRfVPjul4xy5nnaYF~cT8hN0VFyEThH6FPKWsjSGVMOLLoQYaoHlCgmCjwhZKFrrI9PSeePPg9wrMaQ60i8qdhv4QIW2aZQrO~w7Ro8gyONOVzyQ6tU8Ye2pKhJ4d2yn~oVF8DpI9-9cx0kxY8rg~pQh~a23UHnrr19dAn~JP1w0~HCnrqJdg3F30ZTDq9L8R4qCx77pb9BxuXD08DKManPFT7YPG7JINA3Uw8sU45xV6spTHqm3EuB8mGimGAmrDlO3FaQ9L1duKgnG4vRYI9~jxTfaGOBhfQ~ZErhig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
                className="object-cover w-full mb-2"
              />
            </div>
            <div className="flex flex-col justify-between px-5 py-6">
              <h2 className=" text-xl font-semibold ">BMW X3</h2>
              <p className="text-base ">
                From <span className="text-blue-600 font-bold">$248,000</span>{" "}
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
              <p className="text-gray-500">4 variants | with COE</p>
              <div className="flex items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0545/a13b/408a6d725653dce9217488f65bad49c1?Expires=1656892800&Signature=cajfHoBFkg0bWFfVyFMmOwxGJjRrZmbO7-KpBMXI4OgNP~4e1VRhyrLVLQtZZ7J-JjWHBzWu-ivaHQCyos0ztAd5TKPYwjstWHK~QZ3cZyrRI0EtxM5Ihl-ZMdnFBqwR645G4J3EMAxDUZUND697hxaOAwDaBHx8GQb-nAbOG9r3Md5jsPLlecU7zKcIkNei~KGZQNrNv~OFOAvWp3-junNkNIXDxawy-PGlZ~OdYxZglb5-HC-0P6YcQo9pavd4Sdsn~LbnvYOc0g8Htzm1rpRBpFjcCnvt~RlCFyCxJvkmBqn1UXu3PNK5Nsp30lo2D1OqQWdI5GPY3YcTTL1DfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                  className="w-8 h-8 mr-3"
                />
                <div>Performance Motors</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-sm border p-0">
            <div className="border-b">
              <img
                src="https://s3-alpha-sig.figma.com/img/60cd/8b44/e9a6d1d162e4f8ae2875144e0528ad68?Expires=1656892800&Signature=b-~np3gCe4l~IqLqUnthwYAj8GDFWhAA88nKRadXafUoQgRfVPjul4xy5nnaYF~cT8hN0VFyEThH6FPKWsjSGVMOLLoQYaoHlCgmCjwhZKFrrI9PSeePPg9wrMaQ60i8qdhv4QIW2aZQrO~w7Ro8gyONOVzyQ6tU8Ye2pKhJ4d2yn~oVF8DpI9-9cx0kxY8rg~pQh~a23UHnrr19dAn~JP1w0~HCnrqJdg3F30ZTDq9L8R4qCx77pb9BxuXD08DKManPFT7YPG7JINA3Uw8sU45xV6spTHqm3EuB8mGimGAmrDlO3FaQ9L1duKgnG4vRYI9~jxTfaGOBhfQ~ZErhig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
                className="object-cover w-full mb-2"
              />
            </div>
            <div className="flex flex-col justify-between px-5 py-6">
              <h2 className=" text-xl font-semibold ">BMW X3</h2>
              <p className="text-base ">
                From <span className="text-blue-600 font-bold">$248,000</span>{" "}
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
              <p className="text-gray-500">4 variants | with COE</p>
              <div className="flex items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0545/a13b/408a6d725653dce9217488f65bad49c1?Expires=1656892800&Signature=cajfHoBFkg0bWFfVyFMmOwxGJjRrZmbO7-KpBMXI4OgNP~4e1VRhyrLVLQtZZ7J-JjWHBzWu-ivaHQCyos0ztAd5TKPYwjstWHK~QZ3cZyrRI0EtxM5Ihl-ZMdnFBqwR645G4J3EMAxDUZUND697hxaOAwDaBHx8GQb-nAbOG9r3Md5jsPLlecU7zKcIkNei~KGZQNrNv~OFOAvWp3-junNkNIXDxawy-PGlZ~OdYxZglb5-HC-0P6YcQo9pavd4Sdsn~LbnvYOc0g8Htzm1rpRBpFjcCnvt~RlCFyCxJvkmBqn1UXu3PNK5Nsp30lo2D1OqQWdI5GPY3YcTTL1DfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                  className="w-8 h-8 mr-3"
                />
                <div>Performance Motors</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-sm border p-0">
            <div className="border-b">
              <img
                src="https://s3-alpha-sig.figma.com/img/60cd/8b44/e9a6d1d162e4f8ae2875144e0528ad68?Expires=1656892800&Signature=b-~np3gCe4l~IqLqUnthwYAj8GDFWhAA88nKRadXafUoQgRfVPjul4xy5nnaYF~cT8hN0VFyEThH6FPKWsjSGVMOLLoQYaoHlCgmCjwhZKFrrI9PSeePPg9wrMaQ60i8qdhv4QIW2aZQrO~w7Ro8gyONOVzyQ6tU8Ye2pKhJ4d2yn~oVF8DpI9-9cx0kxY8rg~pQh~a23UHnrr19dAn~JP1w0~HCnrqJdg3F30ZTDq9L8R4qCx77pb9BxuXD08DKManPFT7YPG7JINA3Uw8sU45xV6spTHqm3EuB8mGimGAmrDlO3FaQ9L1duKgnG4vRYI9~jxTfaGOBhfQ~ZErhig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
                className="object-cover w-full mb-2"
              />
            </div>
            <div className="flex flex-col justify-between px-5 py-6">
              <h2 className=" text-xl font-semibold ">BMW X3</h2>
              <p className="text-base ">
                From <span className="text-blue-600 font-bold">$248,000</span>{" "}
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
              <p className="text-gray-500">4 variants | with COE</p>
              <div className="flex items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0545/a13b/408a6d725653dce9217488f65bad49c1?Expires=1656892800&Signature=cajfHoBFkg0bWFfVyFMmOwxGJjRrZmbO7-KpBMXI4OgNP~4e1VRhyrLVLQtZZ7J-JjWHBzWu-ivaHQCyos0ztAd5TKPYwjstWHK~QZ3cZyrRI0EtxM5Ihl-ZMdnFBqwR645G4J3EMAxDUZUND697hxaOAwDaBHx8GQb-nAbOG9r3Md5jsPLlecU7zKcIkNei~KGZQNrNv~OFOAvWp3-junNkNIXDxawy-PGlZ~OdYxZglb5-HC-0P6YcQo9pavd4Sdsn~LbnvYOc0g8Htzm1rpRBpFjcCnvt~RlCFyCxJvkmBqn1UXu3PNK5Nsp30lo2D1OqQWdI5GPY3YcTTL1DfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                  className="w-8 h-8 mr-3"
                />
                <div>Performance Motors</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-sm border p-0">
            <div className="border-b">
              <img
                src="https://s3-alpha-sig.figma.com/img/60cd/8b44/e9a6d1d162e4f8ae2875144e0528ad68?Expires=1656892800&Signature=b-~np3gCe4l~IqLqUnthwYAj8GDFWhAA88nKRadXafUoQgRfVPjul4xy5nnaYF~cT8hN0VFyEThH6FPKWsjSGVMOLLoQYaoHlCgmCjwhZKFrrI9PSeePPg9wrMaQ60i8qdhv4QIW2aZQrO~w7Ro8gyONOVzyQ6tU8Ye2pKhJ4d2yn~oVF8DpI9-9cx0kxY8rg~pQh~a23UHnrr19dAn~JP1w0~HCnrqJdg3F30ZTDq9L8R4qCx77pb9BxuXD08DKManPFT7YPG7JINA3Uw8sU45xV6spTHqm3EuB8mGimGAmrDlO3FaQ9L1duKgnG4vRYI9~jxTfaGOBhfQ~ZErhig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
                className="object-cover w-full mb-2"
              />
            </div>
            <div className="flex flex-col justify-between px-5 py-6">
              <h2 className=" text-xl font-semibold ">BMW X3</h2>
              <p className="text-base ">
                From <span className="text-blue-600 font-bold">$248,000</span>{" "}
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
              <p className="text-gray-500">4 variants | with COE</p>
              <div className="flex items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0545/a13b/408a6d725653dce9217488f65bad49c1?Expires=1656892800&Signature=cajfHoBFkg0bWFfVyFMmOwxGJjRrZmbO7-KpBMXI4OgNP~4e1VRhyrLVLQtZZ7J-JjWHBzWu-ivaHQCyos0ztAd5TKPYwjstWHK~QZ3cZyrRI0EtxM5Ihl-ZMdnFBqwR645G4J3EMAxDUZUND697hxaOAwDaBHx8GQb-nAbOG9r3Md5jsPLlecU7zKcIkNei~KGZQNrNv~OFOAvWp3-junNkNIXDxawy-PGlZ~OdYxZglb5-HC-0P6YcQo9pavd4Sdsn~LbnvYOc0g8Htzm1rpRBpFjcCnvt~RlCFyCxJvkmBqn1UXu3PNK5Nsp30lo2D1OqQWdI5GPY3YcTTL1DfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                  className="w-8 h-8 mr-3"
                />
                <div>Performance Motors</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-sm border p-0">
            <div className="border-b">
              <img
                src="https://s3-alpha-sig.figma.com/img/60cd/8b44/e9a6d1d162e4f8ae2875144e0528ad68?Expires=1656892800&Signature=b-~np3gCe4l~IqLqUnthwYAj8GDFWhAA88nKRadXafUoQgRfVPjul4xy5nnaYF~cT8hN0VFyEThH6FPKWsjSGVMOLLoQYaoHlCgmCjwhZKFrrI9PSeePPg9wrMaQ60i8qdhv4QIW2aZQrO~w7Ro8gyONOVzyQ6tU8Ye2pKhJ4d2yn~oVF8DpI9-9cx0kxY8rg~pQh~a23UHnrr19dAn~JP1w0~HCnrqJdg3F30ZTDq9L8R4qCx77pb9BxuXD08DKManPFT7YPG7JINA3Uw8sU45xV6spTHqm3EuB8mGimGAmrDlO3FaQ9L1duKgnG4vRYI9~jxTfaGOBhfQ~ZErhig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
                className="object-cover w-full mb-2"
              />
            </div>
            <div className="flex flex-col justify-between px-5 py-6">
              <h2 className=" text-xl font-semibold ">BMW X3</h2>
              <p className="text-base ">
                From <span className="text-blue-600 font-bold">$248,000</span>{" "}
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
              <p className="text-gray-500">4 variants | with COE</p>
              <div className="flex items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0545/a13b/408a6d725653dce9217488f65bad49c1?Expires=1656892800&Signature=cajfHoBFkg0bWFfVyFMmOwxGJjRrZmbO7-KpBMXI4OgNP~4e1VRhyrLVLQtZZ7J-JjWHBzWu-ivaHQCyos0ztAd5TKPYwjstWHK~QZ3cZyrRI0EtxM5Ihl-ZMdnFBqwR645G4J3EMAxDUZUND697hxaOAwDaBHx8GQb-nAbOG9r3Md5jsPLlecU7zKcIkNei~KGZQNrNv~OFOAvWp3-junNkNIXDxawy-PGlZ~OdYxZglb5-HC-0P6YcQo9pavd4Sdsn~LbnvYOc0g8Htzm1rpRBpFjcCnvt~RlCFyCxJvkmBqn1UXu3PNK5Nsp30lo2D1OqQWdI5GPY3YcTTL1DfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                  className="w-8 h-8 mr-3"
                />
                <div>Performance Motors</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-sm border p-0">
            <div className="border-b">
              <img
                src="https://s3-alpha-sig.figma.com/img/60cd/8b44/e9a6d1d162e4f8ae2875144e0528ad68?Expires=1656892800&Signature=b-~np3gCe4l~IqLqUnthwYAj8GDFWhAA88nKRadXafUoQgRfVPjul4xy5nnaYF~cT8hN0VFyEThH6FPKWsjSGVMOLLoQYaoHlCgmCjwhZKFrrI9PSeePPg9wrMaQ60i8qdhv4QIW2aZQrO~w7Ro8gyONOVzyQ6tU8Ye2pKhJ4d2yn~oVF8DpI9-9cx0kxY8rg~pQh~a23UHnrr19dAn~JP1w0~HCnrqJdg3F30ZTDq9L8R4qCx77pb9BxuXD08DKManPFT7YPG7JINA3Uw8sU45xV6spTHqm3EuB8mGimGAmrDlO3FaQ9L1duKgnG4vRYI9~jxTfaGOBhfQ~ZErhig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
                className="object-cover w-full mb-2"
              />
            </div>
            <div className="flex flex-col justify-between px-5 py-6">
              <h2 className=" text-xl font-semibold ">BMW X3</h2>
              <p className="text-base ">
                From <span className="text-blue-600 font-bold">$248,000</span>{" "}
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
              <p className="text-gray-500">4 variants | with COE</p>
              <div className="flex items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0545/a13b/408a6d725653dce9217488f65bad49c1?Expires=1656892800&Signature=cajfHoBFkg0bWFfVyFMmOwxGJjRrZmbO7-KpBMXI4OgNP~4e1VRhyrLVLQtZZ7J-JjWHBzWu-ivaHQCyos0ztAd5TKPYwjstWHK~QZ3cZyrRI0EtxM5Ihl-ZMdnFBqwR645G4J3EMAxDUZUND697hxaOAwDaBHx8GQb-nAbOG9r3Md5jsPLlecU7zKcIkNei~KGZQNrNv~OFOAvWp3-junNkNIXDxawy-PGlZ~OdYxZglb5-HC-0P6YcQo9pavd4Sdsn~LbnvYOc0g8Htzm1rpRBpFjcCnvt~RlCFyCxJvkmBqn1UXu3PNK5Nsp30lo2D1OqQWdI5GPY3YcTTL1DfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                  className="w-8 h-8 mr-3"
                />
                <div>Performance Motors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
