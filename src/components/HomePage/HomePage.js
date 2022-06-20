import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelopeOpen,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Input, Radio, Space } from "antd";
import CarList from "../CarList/CarList";
import CarCarousel from "../CarCarousel/CarCarousel";

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
              <span className="ml-2">
                Email us at:
                <span className="block ml-6">hello@carbuyer.com.sg</span>
              </span>
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
          className="container mx-auto px-4 rounded-lg flex justify-between items-center bg-white absolute -bottom-20 left-1/2 drop-shadow-md"
          style={{ height: "139px", transform: "translateX(-50%)" }}
        >
          <div className="">
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

          <div className="border-l-2 pl-5">
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
          <div className="border-l-2 pl-5">
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
      <CarList />
      <div style={{ backgroundColor: "#232323" }}>
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-red-600 text-5xl">How it works.</h3>
            <p className="text-4xl text-center text-white mb-32">
              This is how our products works
            </p>
            <div className="flex justify-center items-center text-white">
              <div className="flex flex-col items-center mr-20">
                <FontAwesomeIcon icon={faLocationDot} className=" text-7xl" />
                <p className="mt-10 text-4xl">Find Car</p>
                <p className="text-2xl text-center">
                  Our cars are located at prime areas where by there won’t be
                  problem with transportation{" "}
                </p>
              </div>
              <div className="flex flex-col items-center mr-20">
                <img
                  src="https://s3-alpha-sig.figma.com/img/429a/8bea/dadfdb3fe6748d7d1bbb64873a612637?Expires=1656892800&Signature=FviacSfjy~HtQTvw74KvdVZnfv46gbjwrL4ej~AI8tLOPVVFz241HjA42MoTh7vnAGsKiPQG-A293w5vwokQRA1JXf7I9w0HeC0Tz92tTot1qo2jp8Tmn2taWNJ8Rcy65DOSnrfBdOLBF6Hgr8sp3YEBpImGAqLVuBHIv~ZiDCairkuwfLOcgAe4Cc8t3hsQ6YkvX~p41IegCSzZm2E6KyLktI5vJ5kr5w9BzoOT8xuA615Xe437iKtC-9sNmbKgCm2sqQ5q-E5jmS9H6fexCI~btL79xxVjputVghWNZJVAlu6GIs3QJSsgTw4vqOF739vhO9DH2mWpCt732T5RhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                  className="h-36"
                />
                <p className="mt-10 text-4xl">Make Payments</p>
                <p className="text-2xl text-center">
                  Our estates comes with good network,portable water , 24hrs
                  light and round the clock security.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3535/667f/9d4626c6018ca362839ac5930404dd3b?Expires=1656892800&Signature=E7cT9kqd64xkVF2~BSebx~O4VsYFGBLaw5QpCYvlVwVfH0oICShh0zk9XuMGaLiYJqPYZrCUThKWjc7oMVmbgiknUDOc~tAW9OXBYU9LHmdc5NSkHFU0TK1N9xB~t1bMVlHmicH3laOmO8dMkhsvumS-T1CYlMWNwiLjTfxeEXF9fmf4CLADYPOSbbXB4mvZwS~sO0htrUzhRPQZElX5znyyv9wKDzCEQIyybhlSw7g-x28a7IRYxL5Oc4CRzlkLXFE8Bb3h8oDRlTUjmYrFcaTH9pt6tRvL3bMSSt3zbTLtnhQAIgf-8Eomy7WqaHa-X~MF9ld1FChoxOSnBmfzUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                  className="h-36"
                />
                <p className="mt-10 text-4xl">Make it Official</p>
                <p className="text-2xl text-center">
                  We have been in business for over 32 years,for client outside
                  the country you can trust us to deliver well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl text-red-600">Our Featured Vehicles.</h3>
          <div className="flex justify-between">
            <p className="text-4xl w-3/5">
              One of our biggest product to be featured and that has sold out
              the most.
            </p>
            <div>
              <button className="self-center px-10 py-2 font-semibold rounded text-white bg-red-600 mt-10">
                View more
              </button>
            </div>
          </div>
          <CarCarousel />
        </div>
      </div>
      <div
        className="flex flex-col justify-center mb-20"
        style={{
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/7bf5/5db5/8cb07a7270eae2e9ff9062d1baffe755?Expires=1656892800&Signature=FShBXYPdcpKZ9kO6pN9LzHbEIIMzOPlGjktif-2RZdOAwoP7S9CtfMdAQFXHueeRvWiQ1-RzG2baTVVQzvLNPqJugC4JswXXQk-RY56qianm9Ul2b5AJTIuEnXdGx2RIxddv4wvkpMnLW5sZ-~dDNDoOsZujRq8nlHPMqByDFcrxYlkhrhi21pCM5ImAqB6DIVhwJ9S~6AFCCgxqmjvVSVV7yj01Sw~Qz5O2VTff1AXIcy-nZxY0Cr5LZF5l26tUijpDAaszeONGTDP8C5bcq~vuBfn~o0eLN7NgUtZyYdSYflawcqay461QrJHeWc5S-f1oTrvpZaoSeoEiuC8Vpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "694px",
          position: "relative",
        }}
      >
        <div className="container mx-auto px-4">
          <h3
            className="font-semibold text-7xl w-96 text-white"
            style={{ lineHeight: "114px" }}
          >
            Questions about buying or renting?
          </h3>
          <button className="self-center px-32 py-4 font-semibold rounded text-white bg-red-600 text-xl">
            Ask us
          </button>
        </div>
      </div>
      <div style={{ backgroundColor: "#f1f1f1" }}>
        <div
          className="container mx-auto px-4 py-10"
          style={{ color: "#5f5f5f" }}
        >
          <h3 className="text-base font-semibold mb-5">
            UCARS - Revolutionizing The Online Car Marketplace In Singapore
          </h3>
          <div>
            <p className="m-0 font-semibold text-sm">
              Buy Used And New Cars Online
            </p>
            <p>
              Start your car buying journey with UCARS as we connect you
              seamlessly to the industry's best CaseTrust-SVTA accredited car
              dealerships. As a one stop car online portal you can now buy your
              new ride, be it a pre-owned car or a brand new car from trusted
              dealers all over Singapore, all in one place. Our ever expanding
              listing of quality and covet-worthy cars, new and second hand,
              from both owners and trusted car dealers, will leave you spoilt
              for choice. Refine your search by vehicle type, registration year,
              price, mileage, engine type, transmission, annual depreciation
              value and more to find the car that best suits your needs, taste
              and lifestyle. You can even search for your car by dealer or
              directly by owner.
            </p>
            <p className="m-0 font-semibold text-sm">
              Sell Your Car In An Instant With Confidence
            </p>
            <p>
              We all know how selling a car in Singapore can be a daunting task
              especially for a first time car seller; from trying to get a
              valuation for your car, finding a trusted dealer, to getting the
              best quote on your vehicle. UCARS understands the hassle and even
              the costs involved and have as such partnered with Huawei to
              develop a FIRST in Southeast Asia AI car valuation tool that is
              able to provide a car’s resale value at the snap of a finger.
              Backed with a consortium of trusted CaseTrust-SVTA accredited car
              dealers you can be assured that you are getting the best price for
              your vehicle and do not have to worry about any hidden costs.
            </p>
            <p className="m-0 font-semibold text-sm">
              {" "}
              The Ultimate Car Shopping Experience Online
            </p>
            <p>
              UCARS platform is the first of its kind to be backed by Huawei’s
              Artificial Intelligence and cloud computing, enabling it to be
              able to offer users transparency and enhanced security, all with
              the one aim of enhancing customer experience. So come on over to
              buy and sell used cars online at the best prices at UCARS
              Singapore. Connect easily with dealers in real-time via our online
              video call feature, or schedule a test drive when you're ready.
              Have some questions? Get them answered instantly with our chatbot
              moderated by our responsive team. Stay in the loop with our
              car-related tips, reviews and news. Learn the ins-and-outs of your
              car, as well as global and Singapore’s car updates at your own
              pace.
            </p>
          </div>
        </div>
      </div>
      <footer className="px-4 container mx-auto divide-y">
        <div className=" flex flex-col justify-between py-10 space-y-8 lg:flex-row lg:space-y-0">
          <div className="">
            <a
              href="/"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="h-12 w-56">
                <img
                  src="https://s3-alpha-sig.figma.com/img/b695/8d0f/84f0b08b838157b8d09d42e067042036?Expires=1656892800&Signature=CX6K5YYAo8BEy97Qw8YJdCNtGAwqjniZEUyCjXCOA~LLBV~QexgWaAGJDHDHLnhwrUHuIqGHvQMt4MlIrYJora-HhJfly540sLyuNdTCV7Iu1g4tPZUZuWu0o9wMjTzK1PrbKQI34RnspgC8d3~Em5EYilxH00G3N1XNf9VWipZrx-WcZ4actuYq0Q39zQJYnXOmXaXE-T9PZrhKb0YK11OuZUkDUN5Vo8K11HjFB3Dh4tosYeal9iLKO5iUycPpXQMchq8w7TJdEZQirQq9qsp3NwfHR0Prtz5tvn~VAnqrw8nsx9YRvpeG2Yl38N7QmPg9uBzMhvHUOZqAVuvVbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-50">
                Product
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-50">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-50">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Public API
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-gray-50">Social media</div>
              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Facebook"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="flex items-center p-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Instagram"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-400">
          © 1968 Company Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
