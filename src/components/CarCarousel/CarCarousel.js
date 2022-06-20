import React from "react";
import Slider from "react-slick";
import styleSlick from "./CarSlick.module.css";

export default function CarCarousel() {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styleSlick["slick-next"]}`}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styleSlick["slick-prev"]}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="mt-5">
      <Slider {...settings}>
        <div className="px-8">
          <div className="px-2 mb-10">
            <img
              src="https://s3-alpha-sig.figma.com/img/17d7/4dbb/1cde2cab601f984b5585ba11be30c9b6?Expires=1656892800&Signature=BSuR~HhHKF1iT2kg2ocwA--2V8g9wvqIsQZ9jBAZ0eVYJWaIIKkRj3opecIFTRqqcRi-~H~ErIoLPTMnd3dzU7~2F0gQItPzSsFODqGli-ggoD4kLpR6qTl3WjOgMT-5iqlC3ZrUQdz0pCeStuRCkUquE5fhRKjfXJNonEfObahdomwNO3yk16b6gVHtpZ9AYwfUtjvyPkKIjmwLc1tIIWgiulE2gZoFNdwBpuFyyXxBxRSgeuYWNo9kpVAPSB5o9VOsIqdpp2SXJjD06Q-3zHsJSCn4CZMh9Om-lLORBSKj3NxbPrO~J7G0eJm06RJnVm6nNRrTEOUTo9h6Tw0jeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
              className="object-cover object-center h-52 w-full aspect-square"
            />
          </div>
          <div className="flex justify-between px-3">
            <div>
              <h3 className="text-3xl m-0">The Place</h3>
              <p>Lekki,phase 2</p>
            </div>
            <div>
              <p className="m-0 mt-3">Duplex</p>
              <p className="text-red-600 font-bold">$2,000</p>
            </div>
          </div>
        </div>
        <div className="px-8">
          <div className="px-2 mb-10">
            <img
              src="https://s3-alpha-sig.figma.com/img/23fe/8b91/27dceae95e9de7d36a0f44a04d9bf634?Expires=1656892800&Signature=bkAUO1JBkWh-3nSYwsZ2yteUFEbyhQNdCKB6DMzPNlEItcr0veP8xEEaRDPrIZT7~Vx-9115YV0jRQ-nZbJXAYKGS3JPeZ6bRk7gc-r1cafBHEQ1OXEF~zuBDQmOzI43dWGqyklMvC5fC5mN5K6zzs6LGnKrCjUsKvsLoCg-DtNTBLBK7wVHB7eg~MsV51c4gC6moXZdEQucaBLhEzjB76HXwnDPzS9mnOTF8rokcBo1eUB98NqqePI7snEhGp64EQP1c0zu7N4~SfiDcj2u2zeqvIVQJVOOBjjz090HgNvSG5WQjU2LaYRHPvfrz6G2rYgFyvYkuUU4uFRjNNL5Cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
              className="object-cover object-center h-52 w-full aspect-square"
            />
          </div>
          <div className="flex justify-between px-3">
            <div>
              <h3 className="text-3xl m-0">The Place</h3>
              <p>Lekki,phase 2</p>
            </div>
            <div>
              <p className="m-0 mt-3">Duplex</p>
              <p className="text-red-600 font-bold">$2,000</p>
            </div>
          </div>
        </div>
        <div className="px-8">
          <img
            src="https://s3-alpha-sig.figma.com/img/9b4f/4e9b/8ccb5c62806483fd25a57ae989c26ed0?Expires=1656892800&Signature=hShkmpfQF1YjBEVJEolprk~A~A7KhmlRScMJBXjE~ezTDJL1yEg61u6AlVudMSKQ5XjKwOihgsiDIy9vaSIMvW1VMHfLQJIiwxFPC~IV9GBy97G3yvi-LTizHz2X4VJIB1N~KOt1lygnb7qq2zAUtk2nEbhI871z0DIj2~bdxXaeLFrVCuMBB3~pVMER3XSYhsmNWppdZSj2M2kCZFOKVM8TOgwv1AF4hBaSLFuAdPpGpZg6rdmsU517bKwg~Snws3kmUtSwfvc~FzO7TewFKca1CgPdVMh6U0y1VS98Qpf8tN18fiDh489Rd0Kw6EUXz4RkhZR-yN9UzXi-3LqRVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
            className=""
          />
        </div>
        <div className="px-8">
          <div className="px-2 mb-10">
            <img
              src="https://s3-alpha-sig.figma.com/img/17d7/4dbb/1cde2cab601f984b5585ba11be30c9b6?Expires=1656892800&Signature=BSuR~HhHKF1iT2kg2ocwA--2V8g9wvqIsQZ9jBAZ0eVYJWaIIKkRj3opecIFTRqqcRi-~H~ErIoLPTMnd3dzU7~2F0gQItPzSsFODqGli-ggoD4kLpR6qTl3WjOgMT-5iqlC3ZrUQdz0pCeStuRCkUquE5fhRKjfXJNonEfObahdomwNO3yk16b6gVHtpZ9AYwfUtjvyPkKIjmwLc1tIIWgiulE2gZoFNdwBpuFyyXxBxRSgeuYWNo9kpVAPSB5o9VOsIqdpp2SXJjD06Q-3zHsJSCn4CZMh9Om-lLORBSKj3NxbPrO~J7G0eJm06RJnVm6nNRrTEOUTo9h6Tw0jeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
              className="object-cover object-center h-52 w-full aspect-square"
            />
          </div>
          <div className="flex justify-between px-3">
            <div>
              <h3 className="text-3xl m-0">The Place</h3>
              <p>Lekki,phase 2</p>
            </div>
            <div>
              <p className="m-0 mt-3">Duplex</p>
              <p className="text-red-600 font-bold">$2,000</p>
            </div>
          </div>
        </div>
        <div className="px-8">
          <div className="px-2 mb-10">
            <img
              src="https://s3-alpha-sig.figma.com/img/23fe/8b91/27dceae95e9de7d36a0f44a04d9bf634?Expires=1656892800&Signature=bkAUO1JBkWh-3nSYwsZ2yteUFEbyhQNdCKB6DMzPNlEItcr0veP8xEEaRDPrIZT7~Vx-9115YV0jRQ-nZbJXAYKGS3JPeZ6bRk7gc-r1cafBHEQ1OXEF~zuBDQmOzI43dWGqyklMvC5fC5mN5K6zzs6LGnKrCjUsKvsLoCg-DtNTBLBK7wVHB7eg~MsV51c4gC6moXZdEQucaBLhEzjB76HXwnDPzS9mnOTF8rokcBo1eUB98NqqePI7snEhGp64EQP1c0zu7N4~SfiDcj2u2zeqvIVQJVOOBjjz090HgNvSG5WQjU2LaYRHPvfrz6G2rYgFyvYkuUU4uFRjNNL5Cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
              className="object-cover object-center h-52 w-full aspect-square"
            />
          </div>
          <div className="flex justify-between px-3">
            <div>
              <h3 className="text-3xl m-0">The Place</h3>
              <p>Lekki,phase 2</p>
            </div>
            <div>
              <p className="m-0 mt-3">Duplex</p>
              <p className="text-red-600 font-bold">$2,000</p>
            </div>
          </div>
        </div>
        <div className="px-8">
          <img
            src="https://s3-alpha-sig.figma.com/img/9b4f/4e9b/8ccb5c62806483fd25a57ae989c26ed0?Expires=1656892800&Signature=hShkmpfQF1YjBEVJEolprk~A~A7KhmlRScMJBXjE~ezTDJL1yEg61u6AlVudMSKQ5XjKwOihgsiDIy9vaSIMvW1VMHfLQJIiwxFPC~IV9GBy97G3yvi-LTizHz2X4VJIB1N~KOt1lygnb7qq2zAUtk2nEbhI871z0DIj2~bdxXaeLFrVCuMBB3~pVMER3XSYhsmNWppdZSj2M2kCZFOKVM8TOgwv1AF4hBaSLFuAdPpGpZg6rdmsU517bKwg~Snws3kmUtSwfvc~FzO7TewFKca1CgPdVMh6U0y1VS98Qpf8tN18fiDh489Rd0Kw6EUXz4RkhZR-yN9UzXi-3LqRVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
