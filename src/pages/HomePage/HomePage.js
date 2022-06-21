import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelopeOpen,
  faPhone,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { DownOutlined } from "@ant-design/icons";
import {
  Checkbox,
  Col,
  Dropdown,
  InputNumber,
  Menu,
  Radio,
  Row,
  Space,
} from "antd";
import CarList from "../../components/CarList/CarList";
import CarCarousel from "../../components/CarCarousel/CarCarousel";

const cars = [
  {
    name: "BMW X3",
    price: 248000,
    variants: "BMW X3",
    COE: true,
    POA: false,
    carImage:
      "https://s3-alpha-sig.figma.com/img/60cd/8b44/e9a6d1d162e4f8ae2875144e0528ad68?Expires=1656892800&Signature=b-~np3gCe4l~IqLqUnthwYAj8GDFWhAA88nKRadXafUoQgRfVPjul4xy5nnaYF~cT8hN0VFyEThH6FPKWsjSGVMOLLoQYaoHlCgmCjwhZKFrrI9PSeePPg9wrMaQ60i8qdhv4QIW2aZQrO~w7Ro8gyONOVzyQ6tU8Ye2pKhJ4d2yn~oVF8DpI9-9cx0kxY8rg~pQh~a23UHnrr19dAn~JP1w0~HCnrqJdg3F30ZTDq9L8R4qCx77pb9BxuXD08DKManPFT7YPG7JINA3Uw8sU45xV6spTHqm3EuB8mGimGAmrDlO3FaQ9L1duKgnG4vRYI9~jxTfaGOBhfQ~ZErhig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    logo: "https://s3-alpha-sig.figma.com/img/0545/a13b/408a6d725653dce9217488f65bad49c1?Expires=1656892800&Signature=cajfHoBFkg0bWFfVyFMmOwxGJjRrZmbO7-KpBMXI4OgNP~4e1VRhyrLVLQtZZ7J-JjWHBzWu-ivaHQCyos0ztAd5TKPYwjstWHK~QZ3cZyrRI0EtxM5Ihl-ZMdnFBqwR645G4J3EMAxDUZUND697hxaOAwDaBHx8GQb-nAbOG9r3Md5jsPLlecU7zKcIkNei~KGZQNrNv~OFOAvWp3-junNkNIXDxawy-PGlZ~OdYxZglb5-HC-0P6YcQo9pavd4Sdsn~LbnvYOc0g8Htzm1rpRBpFjcCnvt~RlCFyCxJvkmBqn1UXu3PNK5Nsp30lo2D1OqQWdI5GPY3YcTTL1DfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    seller: "Performance Motors",
  },
  {
    name: "Alpine A110",
    price: 248800,
    variants: "Alpine A110",
    COE: true,
    POA: false,
    carImage:
      "https://s3-alpha-sig.figma.com/img/b8ff/6c65/8ee6e477c1cd190d1ba4ab0feea205bc?Expires=1656892800&Signature=Zp8IBcb80rj7boDkPJKbEedVM7rG~GWrw7AzcMfvJ-10kBRossr2GgCGrMbXlhneQ8I~Giz8vEBgCFOzq9TcsoCJSWzbVhf2vsM5Vt5DdbJEdPWYE-5mnpFZyL3RM8zZp6m~epB4dlzBDjCM-F-6P4JDt2CnN5GaSaJX0F0QCLsHjTsp9p-9IvpipnzYw3oQwMakdMqBYWxV6RwTKdRKwEw7imsIK1KtZaPd6rLRsL3E2vJmV2Ndk~Ppzc7sheJeT7cvY~Z12Xb5Aog6bJNFwro3HZVQlmagOrAKtJDalrNhZAEIxScJgRrpB3lSNtWBw~wuuS1k8L932X0e5VwhvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    logo: "https://s3-alpha-sig.figma.com/img/2ba4/b449/360d6025d9029e50d26b09fa608584e1?Expires=1656892800&Signature=YPkbs2hfHfPty9OmIB8fVNAWW6ByzAUTARAc8ihOglYagAyjwlgwMj2hSIuHbCiSfCFx3HfE7aYEHqjxREHKD3~zZoTiM5OM~kvdqJbMeO0sBzXVY9nzkD0LWMAw7YnAXLCVWJxgg3ETUUaJ1~goPEQ8rz6y1WYwYiTV1JCgzzNlKmv9oSBf37a5ocFqhFAQmOxpTbaJhvmJjUzx5vfd0V4VXM2K9~ftG81lNBrzoCEgSKmawOSDaZcp7Cf1jL3Rp6lRUX1lveUr~y3jAIP~3~fqnjUoBRk~g1C-ZuyY2y8qbnkQGOndFJGcw7Y5xcDNy6CFHyo2sa8uOZwJr0Hdyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    seller: "Wearnes Automotive ",
  },
  {
    name: "Aston Martin DBS",
    price: 248800,
    variants: "Aston Martin DBS",
    COE: false,
    POA: true,
    carImage:
      "https://s3-alpha-sig.figma.com/img/7242/dc27/60d6c9040bfe4820c3f1f68376da7c02?Expires=1656892800&Signature=hT2SD4aQk5oXCyUOz0QUuumNAPzIu37GO7fFkEqyen04iAixNBHmVdQrWfl9DyE7cThcJ9CbKxl--6V1Q5744AXuh5oMkTiw71eMXvWy7ai3fJ~~V5abWaR2KZ2Ql7CsjkCwtbT0BNNeqWLJXIBvT27wdO8CMZDW3wLlqrV~VD3TDzCD4KTLprqnlRupaNOSeRDreE6q3bLzNrtHMF4L9ekSGkS2ueOh3Ss4aslslF1plDPM0WuzBfvTkeywGcia1LYbalmk6lJjRJhGBw9xpfESkoCPmk3vDdtoSS4t~bev9wSeaSWTuvWRufLJyqXKIN2Ga6qC6kFOw-eO~jbeSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    logo: "https://s3-alpha-sig.figma.com/img/b8ff/6c65/8ee6e477c1cd190d1ba4ab0feea205bc?Expires=1656892800&Signature=Zp8IBcb80rj7boDkPJKbEedVM7rG~GWrw7AzcMfvJ-10kBRossr2GgCGrMbXlhneQ8I~Giz8vEBgCFOzq9TcsoCJSWzbVhf2vsM5Vt5DdbJEdPWYE-5mnpFZyL3RM8zZp6m~epB4dlzBDjCM-F-6P4JDt2CnN5GaSaJX0F0QCLsHjTsp9p-9IvpipnzYw3oQwMakdMqBYWxV6RwTKdRKwEw7imsIK1KtZaPd6rLRsL3E2vJmV2Ndk~Ppzc7sheJeT7cvY~Z12Xb5Aog6bJNFwro3HZVQlmagOrAKtJDalrNhZAEIxScJgRrpB3lSNtWBw~wuuS1k8L932X0e5VwhvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    seller: "Wearnes Automotive ",
  },
  {
    name: "Alfa Romeo Stelvio",
    price: 278000,
    variants: "Alfa Romeo Stelvio",
    COE: true,
    POA: false,
    carImage:
      "https://s3-alpha-sig.figma.com/img/ef4c/8037/d117cf7a0caa5847a79dec4c8dd34a05?Expires=1656892800&Signature=JXn7YEC8ruXhDpXgYg5XCifnsJClICQrLbLL47OrfrwtZX0591BSEmD6r0k8cxaVWqs5HHdNpYU8VB1T02K4lYP~npP~CUwAJ8cZ-61D37556X~Xkt4MtzE4Z9HI7gQEVVOt0ImjHQfZTFDtXeoNbqUHnOMDYWMCxivhSXm~uE3kM2ZsIqrdUKlhyPbQ5CVq2Xl8lEs-IE6XlktAfADxH23bMRmfouxHER1PIQrNIHHOA0KWMrGxSo7nEyBJFiJge7BL8cc7Z3mmtTCiZenOoFCZmBwxNu~ZCCWq-t1Bg1NrX5V-0YXV3ExP-c72jAEpuOURyymvMQnEPavwmFjF0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    logo: "https://s3-alpha-sig.figma.com/img/0545/a13b/408a6d725653dce9217488f65bad49c1?Expires=1656892800&Signature=cajfHoBFkg0bWFfVyFMmOwxGJjRrZmbO7-KpBMXI4OgNP~4e1VRhyrLVLQtZZ7J-JjWHBzWu-ivaHQCyos0ztAd5TKPYwjstWHK~QZ3cZyrRI0EtxM5Ihl-ZMdnFBqwR645G4J3EMAxDUZUND697hxaOAwDaBHx8GQb-nAbOG9r3Md5jsPLlecU7zKcIkNei~KGZQNrNv~OFOAvWp3-junNkNIXDxawy-PGlZ~OdYxZglb5-HC-0P6YcQo9pavd4Sdsn~LbnvYOc0g8Htzm1rpRBpFjcCnvt~RlCFyCxJvkmBqn1UXu3PNK5Nsp30lo2D1OqQWdI5GPY3YcTTL1DfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    seller: "EuroAutomobile",
  },
  {
    name: "Aston Martin DB11 Volante",
    price: 248800,
    variants: "Aston Martin DB11 Volante",
    COE: false,
    POA: true,
    carImage:
      "https://s3-alpha-sig.figma.com/img/7c61/d5bb/d1f04cad4a8cf0cf926fa83359bd3546?Expires=1656892800&Signature=C1BTL4Xtnu7DsCqQabvIHErfjOHzs6QAKgYV-FobyRdkSSPFIvpWAjuJnmxOvNsHm5h56fqmk95Z-1~jyy-Kb-YQ1AXt8m1t3IcldDt2uFPxJDaVJE01rr8whpUR5saxLUdmkgGtu9JNPgKrmAD0BhFEJdArNZq58p5GKOFEFalyk-g7kUqAnfEKhkUcRwWg2uNjGEM4rVJ~T7yvYywTtFsDkbm0cOefosRdYg9BZDIg2euHskqPtOxqNGHOCy38-ycXw~ZLxyROQpnd0VaLWwYQ4TN3UfdY4G-qIVR2kN~5QsicqOCZVqLZGZdzj863VSYe86wNlZMCDfGQgW2X~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    logo: "https://s3-alpha-sig.figma.com/img/cc7c/dc55/88d849986df0e17a4e22d260974de23d?Expires=1656892800&Signature=XOTcCECSA-mup7JldNkS2UgezUblrZ0Nl9MSQV~fRzglBqiXmuida4ZxT4TuKmV51FfDfexf0YTO4vIwb6bYe-xXz2G~8fA65jOJdunziDjZw~CDAVYzUdJdDbRkx61xJlv9QmiJ9e3AkIBILoQpShROZJ-pmP9N91brbGeQ~W2IglhPCQAJ8L8P4cp9IFRcQoQYuB5XYB36Vi93zgQp4a-gd7aX~BoFZn4T39VJcbXYM-AlLMzPKLRvIia2vuWpvZcpclUc8maAgl7cI7JZba6iDn6EMOM8a9Ubce5ZEyiE2vZ-KsGIe0XCk5dCF3i4U9vsnWyp4R289UcLSxCYNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    seller: "Wearnes Automotive ",
  },
  {
    name: "Aston Martin DB11",
    price: 799000,
    variants: "Aston Martin DB11",
    COE: false,
    POA: false,
    carImage:
      "https://s3-alpha-sig.figma.com/img/7c61/d5bb/d1f04cad4a8cf0cf926fa83359bd3546?Expires=1656892800&Signature=C1BTL4Xtnu7DsCqQabvIHErfjOHzs6QAKgYV-FobyRdkSSPFIvpWAjuJnmxOvNsHm5h56fqmk95Z-1~jyy-Kb-YQ1AXt8m1t3IcldDt2uFPxJDaVJE01rr8whpUR5saxLUdmkgGtu9JNPgKrmAD0BhFEJdArNZq58p5GKOFEFalyk-g7kUqAnfEKhkUcRwWg2uNjGEM4rVJ~T7yvYywTtFsDkbm0cOefosRdYg9BZDIg2euHskqPtOxqNGHOCy38-ycXw~ZLxyROQpnd0VaLWwYQ4TN3UfdY4G-qIVR2kN~5QsicqOCZVqLZGZdzj863VSYe86wNlZMCDfGQgW2X~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    logo: "https://s3-alpha-sig.figma.com/img/cc7c/dc55/88d849986df0e17a4e22d260974de23d?Expires=1656892800&Signature=XOTcCECSA-mup7JldNkS2UgezUblrZ0Nl9MSQV~fRzglBqiXmuida4ZxT4TuKmV51FfDfexf0YTO4vIwb6bYe-xXz2G~8fA65jOJdunziDjZw~CDAVYzUdJdDbRkx61xJlv9QmiJ9e3AkIBILoQpShROZJ-pmP9N91brbGeQ~W2IglhPCQAJ8L8P4cp9IFRcQoQYuB5XYB36Vi93zgQp4a-gd7aX~BoFZn4T39VJcbXYM-AlLMzPKLRvIia2vuWpvZcpclUc8maAgl7cI7JZba6iDn6EMOM8a9Ubce5ZEyiE2vZ-KsGIe0XCk5dCF3i4U9vsnWyp4R289UcLSxCYNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    seller: "Wearnes Automotive ",
  },
  {
    name: "Aston Martin DB11 Volante",
    price: 799000,
    variants: "Aston Martin DB11 Volante",
    COE: false,
    POA: true,
    carImage:
      "https://s3-alpha-sig.figma.com/img/7c61/d5bb/d1f04cad4a8cf0cf926fa83359bd3546?Expires=1656892800&Signature=C1BTL4Xtnu7DsCqQabvIHErfjOHzs6QAKgYV-FobyRdkSSPFIvpWAjuJnmxOvNsHm5h56fqmk95Z-1~jyy-Kb-YQ1AXt8m1t3IcldDt2uFPxJDaVJE01rr8whpUR5saxLUdmkgGtu9JNPgKrmAD0BhFEJdArNZq58p5GKOFEFalyk-g7kUqAnfEKhkUcRwWg2uNjGEM4rVJ~T7yvYywTtFsDkbm0cOefosRdYg9BZDIg2euHskqPtOxqNGHOCy38-ycXw~ZLxyROQpnd0VaLWwYQ4TN3UfdY4G-qIVR2kN~5QsicqOCZVqLZGZdzj863VSYe86wNlZMCDfGQgW2X~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    logo: "https://s3-alpha-sig.figma.com/img/cc7c/dc55/88d849986df0e17a4e22d260974de23d?Expires=1656892800&Signature=XOTcCECSA-mup7JldNkS2UgezUblrZ0Nl9MSQV~fRzglBqiXmuida4ZxT4TuKmV51FfDfexf0YTO4vIwb6bYe-xXz2G~8fA65jOJdunziDjZw~CDAVYzUdJdDbRkx61xJlv9QmiJ9e3AkIBILoQpShROZJ-pmP9N91brbGeQ~W2IglhPCQAJ8L8P4cp9IFRcQoQYuB5XYB36Vi93zgQp4a-gd7aX~BoFZn4T39VJcbXYM-AlLMzPKLRvIia2vuWpvZcpclUc8maAgl7cI7JZba6iDn6EMOM8a9Ubce5ZEyiE2vZ-KsGIe0XCk5dCF3i4U9vsnWyp4R289UcLSxCYNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    seller: "Wearnes Automotive ",
  },
  {
    name: "BMW X3",
    price: 248000,
    variants: "BMW X3",
    COE: true,
    POA: false,
    carImage:
      "https://s3-alpha-sig.figma.com/img/60cd/8b44/e9a6d1d162e4f8ae2875144e0528ad68?Expires=1656892800&Signature=b-~np3gCe4l~IqLqUnthwYAj8GDFWhAA88nKRadXafUoQgRfVPjul4xy5nnaYF~cT8hN0VFyEThH6FPKWsjSGVMOLLoQYaoHlCgmCjwhZKFrrI9PSeePPg9wrMaQ60i8qdhv4QIW2aZQrO~w7Ro8gyONOVzyQ6tU8Ye2pKhJ4d2yn~oVF8DpI9-9cx0kxY8rg~pQh~a23UHnrr19dAn~JP1w0~HCnrqJdg3F30ZTDq9L8R4qCx77pb9BxuXD08DKManPFT7YPG7JINA3Uw8sU45xV6spTHqm3EuB8mGimGAmrDlO3FaQ9L1duKgnG4vRYI9~jxTfaGOBhfQ~ZErhig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    logo: "https://s3-alpha-sig.figma.com/img/0545/a13b/408a6d725653dce9217488f65bad49c1?Expires=1656892800&Signature=cajfHoBFkg0bWFfVyFMmOwxGJjRrZmbO7-KpBMXI4OgNP~4e1VRhyrLVLQtZZ7J-JjWHBzWu-ivaHQCyos0ztAd5TKPYwjstWHK~QZ3cZyrRI0EtxM5Ihl-ZMdnFBqwR645G4J3EMAxDUZUND697hxaOAwDaBHx8GQb-nAbOG9r3Md5jsPLlecU7zKcIkNei~KGZQNrNv~OFOAvWp3-junNkNIXDxawy-PGlZ~OdYxZglb5-HC-0P6YcQo9pavd4Sdsn~LbnvYOc0g8Htzm1rpRBpFjcCnvt~RlCFyCxJvkmBqn1UXu3PNK5Nsp30lo2D1OqQWdI5GPY3YcTTL1DfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    seller: "Performance Motors",
  },
  {
    name: "Alpine A110",
    price: 248800,
    variants: "Alpine A110",
    COE: true,
    POA: false,
    carImage:
      "https://s3-alpha-sig.figma.com/img/b8ff/6c65/8ee6e477c1cd190d1ba4ab0feea205bc?Expires=1656892800&Signature=Zp8IBcb80rj7boDkPJKbEedVM7rG~GWrw7AzcMfvJ-10kBRossr2GgCGrMbXlhneQ8I~Giz8vEBgCFOzq9TcsoCJSWzbVhf2vsM5Vt5DdbJEdPWYE-5mnpFZyL3RM8zZp6m~epB4dlzBDjCM-F-6P4JDt2CnN5GaSaJX0F0QCLsHjTsp9p-9IvpipnzYw3oQwMakdMqBYWxV6RwTKdRKwEw7imsIK1KtZaPd6rLRsL3E2vJmV2Ndk~Ppzc7sheJeT7cvY~Z12Xb5Aog6bJNFwro3HZVQlmagOrAKtJDalrNhZAEIxScJgRrpB3lSNtWBw~wuuS1k8L932X0e5VwhvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    logo: "https://s3-alpha-sig.figma.com/img/2ba4/b449/360d6025d9029e50d26b09fa608584e1?Expires=1656892800&Signature=YPkbs2hfHfPty9OmIB8fVNAWW6ByzAUTARAc8ihOglYagAyjwlgwMj2hSIuHbCiSfCFx3HfE7aYEHqjxREHKD3~zZoTiM5OM~kvdqJbMeO0sBzXVY9nzkD0LWMAw7YnAXLCVWJxgg3ETUUaJ1~goPEQ8rz6y1WYwYiTV1JCgzzNlKmv9oSBf37a5ocFqhFAQmOxpTbaJhvmJjUzx5vfd0V4VXM2K9~ftG81lNBrzoCEgSKmawOSDaZcp7Cf1jL3Rp6lRUX1lveUr~y3jAIP~3~fqnjUoBRk~g1C-ZuyY2y8qbnkQGOndFJGcw7Y5xcDNy6CFHyo2sa8uOZwJr0Hdyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    seller: "Wearnes Automotive ",
  },
  {
    name: "Aston Martin DBS",
    price: 248800,
    variants: "Aston Martin DBS",
    COE: false,
    POA: true,
    carImage:
      "https://s3-alpha-sig.figma.com/img/7242/dc27/60d6c9040bfe4820c3f1f68376da7c02?Expires=1656892800&Signature=hT2SD4aQk5oXCyUOz0QUuumNAPzIu37GO7fFkEqyen04iAixNBHmVdQrWfl9DyE7cThcJ9CbKxl--6V1Q5744AXuh5oMkTiw71eMXvWy7ai3fJ~~V5abWaR2KZ2Ql7CsjkCwtbT0BNNeqWLJXIBvT27wdO8CMZDW3wLlqrV~VD3TDzCD4KTLprqnlRupaNOSeRDreE6q3bLzNrtHMF4L9ekSGkS2ueOh3Ss4aslslF1plDPM0WuzBfvTkeywGcia1LYbalmk6lJjRJhGBw9xpfESkoCPmk3vDdtoSS4t~bev9wSeaSWTuvWRufLJyqXKIN2Ga6qC6kFOw-eO~jbeSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    logo: "https://s3-alpha-sig.figma.com/img/b8ff/6c65/8ee6e477c1cd190d1ba4ab0feea205bc?Expires=1656892800&Signature=Zp8IBcb80rj7boDkPJKbEedVM7rG~GWrw7AzcMfvJ-10kBRossr2GgCGrMbXlhneQ8I~Giz8vEBgCFOzq9TcsoCJSWzbVhf2vsM5Vt5DdbJEdPWYE-5mnpFZyL3RM8zZp6m~epB4dlzBDjCM-F-6P4JDt2CnN5GaSaJX0F0QCLsHjTsp9p-9IvpipnzYw3oQwMakdMqBYWxV6RwTKdRKwEw7imsIK1KtZaPd6rLRsL3E2vJmV2Ndk~Ppzc7sheJeT7cvY~Z12Xb5Aog6bJNFwro3HZVQlmagOrAKtJDalrNhZAEIxScJgRrpB3lSNtWBw~wuuS1k8L932X0e5VwhvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    seller: "Wearnes Automotive ",
  },
  {
    name: "Alfa Romeo Stelvio",
    price: 278000,
    variants: "Alfa Romeo Stelvio",
    COE: true,
    POA: false,
    carImage:
      "https://s3-alpha-sig.figma.com/img/ef4c/8037/d117cf7a0caa5847a79dec4c8dd34a05?Expires=1656892800&Signature=JXn7YEC8ruXhDpXgYg5XCifnsJClICQrLbLL47OrfrwtZX0591BSEmD6r0k8cxaVWqs5HHdNpYU8VB1T02K4lYP~npP~CUwAJ8cZ-61D37556X~Xkt4MtzE4Z9HI7gQEVVOt0ImjHQfZTFDtXeoNbqUHnOMDYWMCxivhSXm~uE3kM2ZsIqrdUKlhyPbQ5CVq2Xl8lEs-IE6XlktAfADxH23bMRmfouxHER1PIQrNIHHOA0KWMrGxSo7nEyBJFiJge7BL8cc7Z3mmtTCiZenOoFCZmBwxNu~ZCCWq-t1Bg1NrX5V-0YXV3ExP-c72jAEpuOURyymvMQnEPavwmFjF0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    logo: "https://s3-alpha-sig.figma.com/img/0545/a13b/408a6d725653dce9217488f65bad49c1?Expires=1656892800&Signature=cajfHoBFkg0bWFfVyFMmOwxGJjRrZmbO7-KpBMXI4OgNP~4e1VRhyrLVLQtZZ7J-JjWHBzWu-ivaHQCyos0ztAd5TKPYwjstWHK~QZ3cZyrRI0EtxM5Ihl-ZMdnFBqwR645G4J3EMAxDUZUND697hxaOAwDaBHx8GQb-nAbOG9r3Md5jsPLlecU7zKcIkNei~KGZQNrNv~OFOAvWp3-junNkNIXDxawy-PGlZ~OdYxZglb5-HC-0P6YcQo9pavd4Sdsn~LbnvYOc0g8Htzm1rpRBpFjcCnvt~RlCFyCxJvkmBqn1UXu3PNK5Nsp30lo2D1OqQWdI5GPY3YcTTL1DfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    seller: "EuroAutomobile",
  },
  {
    name: "Aston Martin DB11 Volante",
    price: 248800,
    variants: "Aston Martin DB11 Volante",
    COE: false,
    POA: true,
    carImage:
      "https://s3-alpha-sig.figma.com/img/7c61/d5bb/d1f04cad4a8cf0cf926fa83359bd3546?Expires=1656892800&Signature=C1BTL4Xtnu7DsCqQabvIHErfjOHzs6QAKgYV-FobyRdkSSPFIvpWAjuJnmxOvNsHm5h56fqmk95Z-1~jyy-Kb-YQ1AXt8m1t3IcldDt2uFPxJDaVJE01rr8whpUR5saxLUdmkgGtu9JNPgKrmAD0BhFEJdArNZq58p5GKOFEFalyk-g7kUqAnfEKhkUcRwWg2uNjGEM4rVJ~T7yvYywTtFsDkbm0cOefosRdYg9BZDIg2euHskqPtOxqNGHOCy38-ycXw~ZLxyROQpnd0VaLWwYQ4TN3UfdY4G-qIVR2kN~5QsicqOCZVqLZGZdzj863VSYe86wNlZMCDfGQgW2X~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    logo: "https://s3-alpha-sig.figma.com/img/cc7c/dc55/88d849986df0e17a4e22d260974de23d?Expires=1656892800&Signature=XOTcCECSA-mup7JldNkS2UgezUblrZ0Nl9MSQV~fRzglBqiXmuida4ZxT4TuKmV51FfDfexf0YTO4vIwb6bYe-xXz2G~8fA65jOJdunziDjZw~CDAVYzUdJdDbRkx61xJlv9QmiJ9e3AkIBILoQpShROZJ-pmP9N91brbGeQ~W2IglhPCQAJ8L8P4cp9IFRcQoQYuB5XYB36Vi93zgQp4a-gd7aX~BoFZn4T39VJcbXYM-AlLMzPKLRvIia2vuWpvZcpclUc8maAgl7cI7JZba6iDn6EMOM8a9Ubce5ZEyiE2vZ-KsGIe0XCk5dCF3i4U9vsnWyp4R289UcLSxCYNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    seller: "Wearnes Automotive ",
  },
  {
    name: "Aston Martin DB11",
    price: 799000,
    variants: "Aston Martin DB11",
    COE: false,
    POA: false,
    carImage:
      "https://s3-alpha-sig.figma.com/img/7c61/d5bb/d1f04cad4a8cf0cf926fa83359bd3546?Expires=1656892800&Signature=C1BTL4Xtnu7DsCqQabvIHErfjOHzs6QAKgYV-FobyRdkSSPFIvpWAjuJnmxOvNsHm5h56fqmk95Z-1~jyy-Kb-YQ1AXt8m1t3IcldDt2uFPxJDaVJE01rr8whpUR5saxLUdmkgGtu9JNPgKrmAD0BhFEJdArNZq58p5GKOFEFalyk-g7kUqAnfEKhkUcRwWg2uNjGEM4rVJ~T7yvYywTtFsDkbm0cOefosRdYg9BZDIg2euHskqPtOxqNGHOCy38-ycXw~ZLxyROQpnd0VaLWwYQ4TN3UfdY4G-qIVR2kN~5QsicqOCZVqLZGZdzj863VSYe86wNlZMCDfGQgW2X~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    logo: "https://s3-alpha-sig.figma.com/img/cc7c/dc55/88d849986df0e17a4e22d260974de23d?Expires=1656892800&Signature=XOTcCECSA-mup7JldNkS2UgezUblrZ0Nl9MSQV~fRzglBqiXmuida4ZxT4TuKmV51FfDfexf0YTO4vIwb6bYe-xXz2G~8fA65jOJdunziDjZw~CDAVYzUdJdDbRkx61xJlv9QmiJ9e3AkIBILoQpShROZJ-pmP9N91brbGeQ~W2IglhPCQAJ8L8P4cp9IFRcQoQYuB5XYB36Vi93zgQp4a-gd7aX~BoFZn4T39VJcbXYM-AlLMzPKLRvIia2vuWpvZcpclUc8maAgl7cI7JZba6iDn6EMOM8a9Ubce5ZEyiE2vZ-KsGIe0XCk5dCF3i4U9vsnWyp4R289UcLSxCYNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    seller: "Wearnes Automotive ",
  },
  {
    name: "Aston Martin DB11 Volante",
    price: 799000,
    variants: "Aston Martin DB11 Volante",
    COE: false,
    POA: true,
    carImage:
      "https://s3-alpha-sig.figma.com/img/7c61/d5bb/d1f04cad4a8cf0cf926fa83359bd3546?Expires=1656892800&Signature=C1BTL4Xtnu7DsCqQabvIHErfjOHzs6QAKgYV-FobyRdkSSPFIvpWAjuJnmxOvNsHm5h56fqmk95Z-1~jyy-Kb-YQ1AXt8m1t3IcldDt2uFPxJDaVJE01rr8whpUR5saxLUdmkgGtu9JNPgKrmAD0BhFEJdArNZq58p5GKOFEFalyk-g7kUqAnfEKhkUcRwWg2uNjGEM4rVJ~T7yvYywTtFsDkbm0cOefosRdYg9BZDIg2euHskqPtOxqNGHOCy38-ycXw~ZLxyROQpnd0VaLWwYQ4TN3UfdY4G-qIVR2kN~5QsicqOCZVqLZGZdzj863VSYe86wNlZMCDfGQgW2X~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    logo: "https://s3-alpha-sig.figma.com/img/cc7c/dc55/88d849986df0e17a4e22d260974de23d?Expires=1656892800&Signature=XOTcCECSA-mup7JldNkS2UgezUblrZ0Nl9MSQV~fRzglBqiXmuida4ZxT4TuKmV51FfDfexf0YTO4vIwb6bYe-xXz2G~8fA65jOJdunziDjZw~CDAVYzUdJdDbRkx61xJlv9QmiJ9e3AkIBILoQpShROZJ-pmP9N91brbGeQ~W2IglhPCQAJ8L8P4cp9IFRcQoQYuB5XYB36Vi93zgQp4a-gd7aX~BoFZn4T39VJcbXYM-AlLMzPKLRvIia2vuWpvZcpclUc8maAgl7cI7JZba6iDn6EMOM8a9Ubce5ZEyiE2vZ-KsGIe0XCk5dCF3i4U9vsnWyp4R289UcLSxCYNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    seller: "Wearnes Automotive ",
  },
];

export default function HomePage() {
  const [value, setValue] = useState("New Cars");
  const [carType, setCarType] = useState([`10+ more`]);
  const [visible, setVisible] = useState(false);
  const [visiblePrice, setVisiblePrice] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  const clearPrice = () => {
    setMinPrice(0);
    setMaxPrice(100000);
    setVisiblePrice(false);
  };

  const onChangeMinValue = (value) => {
    setMinPrice(value);
  };

  const onChangeMaxValue = (value) => {
    setMaxPrice(value);
  };

  const setPriceRange = () => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    setVisiblePrice(false);
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };
  const handleVisibleChangePrice = (flag) => {
    setVisiblePrice(flag);
  };

  const onChangeCarStatus = (e) => {
    setValue(e.target.value);
  };

  const onChangeCarType = (checkedValues) => {
    setCarType(checkedValues);
  };

  const carStatus = (
    <Menu style={{ padding: "20px", borderRadius: "8px" }}>
      <Radio.Group onChange={onChangeCarStatus} value={value}>
        <Space direction="vertical">
          <Radio value={`New Car (AD)`}>New Car ( Authorized Dealer )</Radio>
          <Radio value={`New Car (PI)`}>New Car ( Parallel Importer )</Radio>
          <Radio value={`Used Cars`}>Used Cars</Radio>
        </Space>
      </Radio.Group>
    </Menu>
  );

  const priceRange = (
    <Menu style={{ padding: "20px", borderRadius: "8px" }}>
      <Space>
        <span className="text-gray-500">Min</span>
        <InputNumber
          size="large"
          min={0}
          defaultValue={0}
          onChange={onChangeMinValue}
          controls={false}
          style={{ width: "160px" }}
        />
        -<span className="text-gray-500">Max</span>
        <InputNumber
          size="large"
          defaultValue={100000}
          min={0}
          style={{ width: "160px" }}
          onChange={onChangeMaxValue}
          controls={false}
        />
      </Space>
      <hr className="my-5" />
      <div className="flex justify-between items-center">
        <div
          onClick={clearPrice}
          className="cursor-pointer text-gray-600 font-semibold"
        >
          Clear
        </div>
        <div>
          <button
            className="px-3 py-2 rounded bg-red-600 text-white"
            onClick={setPriceRange}
          >
            Save
          </button>
        </div>
      </div>
    </Menu>
  );

  const carTypeMenu = (
    <Menu
      style={{
        padding: "20px",
        borderRadius: "8px",
        width: "150%",
      }}
    >
      <Checkbox.Group
        style={{
          width: "100%",
        }}
        onChange={onChangeCarType}
      >
        <Row className="mb-3">
          <Col span={8}>
            <Checkbox value="Bus">Bus</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Lorry">Lorry</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="SUV">SUV</Checkbox>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col span={8}>
            <Checkbox value="Classic Car">Classic Car</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="MPV">MPV</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Truck">Truck</Checkbox>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col span={8}>
            <Checkbox value="Coupe">Coupe</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Pickup">Pickup</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Van (Passenger)">Van (Passenger)</Checkbox>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col span={8}>
            <Checkbox value="Convertible">Convertible</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Sedan">Sedan</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Van (Goods)">Van (Goods)</Checkbox>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col span={8}>
            <Checkbox value="Sport Car">Sport Car</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Hatchback">Hatchback</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Wagon">Wagon</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
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
            <button className="self-center px-16 py-2 font-semibold rounded text-white bg-red-600 hover:bg-red-500">
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
            <button className="self-center px-14 py-3 font-semibold rounded-lg text-white bg-red-600 hover:bg-red-500">
              Get Started
            </button>
          </div>
        </div>
        <div
          className="container mx-auto px-4 rounded-lg flex justify-between items-center bg-white absolute -bottom-20 left-1/2 drop-shadow-md"
          style={{ height: "139px", transform: "translateX(-50%)" }}
        >
          <div className="w-80 pl-8">
            <p className="font-semibold">New/Used</p>
            <Dropdown overlay={carStatus} trigger={["click"]}>
              <div onClick={(e) => e.preventDefault()}>
                <div className="flex justify-between">
                  <div className="w-full"> {value}</div>
                  <DownOutlined />
                </div>
              </div>
            </Dropdown>
          </div>

          <div className="border-l-2 pl-8 w-80">
            <p className="font-semibold">Price Range</p>
            <Dropdown
              overlay={priceRange}
              trigger={["click"]}
              onVisibleChange={handleVisibleChangePrice}
              visible={visiblePrice}
            >
              <div onClick={(e) => e.preventDefault()}>
                <div className="flex justify-between">
                  <div>
                    <FontAwesomeIcon icon={faDollar} />
                    {minPrice} - <FontAwesomeIcon icon={faDollar} />
                    {maxPrice}
                  </div>
                  <DownOutlined />
                </div>
              </div>
            </Dropdown>
          </div>
          <div className="border-l-2 pl-8 w-80">
            <p className="font-semibold">Vehicle Type</p>
            <Dropdown
              overlay={carTypeMenu}
              trigger={["click"]}
              onVisibleChange={handleVisibleChange}
              visible={visible}
            >
              <div onClick={(e) => e.preventDefault()}>
                <div className="flex justify-between">
                  <div> {carType?.join(", ")}</div>
                  <DownOutlined />
                </div>
              </div>
            </Dropdown>
          </div>
          <div>
            <button className="self-center px-14 py-3 font-semibold rounded-lg text-white bg-red-600 hover:bg-red-500">
              Search
            </button>
          </div>
        </div>
      </div>
      <CarList cars={cars} />
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
              <button className="self-center px-10 py-2 font-semibold rounded text-white bg-red-600 mt-10 hover:bg-red-500">
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
          <button className="self-center px-32 py-4 font-semibold rounded text-white bg-red-600 text-xl hover:bg-red-500">
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
      <footer className="px-4 container mx-auto   ">
        <div className=" flex flex-col justify-between py-10 space-y-8 lg:flex-row lg:space-y-0">
          <div className="">
            <a
              href="/"
              className="flex justify-center space-x-3 lg:justify-start mb-5"
            >
              <div className="h-12 w-56">
                <img
                  src="https://s3-alpha-sig.figma.com/img/b695/8d0f/84f0b08b838157b8d09d42e067042036?Expires=1656892800&Signature=CX6K5YYAo8BEy97Qw8YJdCNtGAwqjniZEUyCjXCOA~LLBV~QexgWaAGJDHDHLnhwrUHuIqGHvQMt4MlIrYJora-HhJfly540sLyuNdTCV7Iu1g4tPZUZuWu0o9wMjTzK1PrbKQI34RnspgC8d3~Em5EYilxH00G3N1XNf9VWipZrx-WcZ4actuYq0Q39zQJYnXOmXaXE-T9PZrhKb0YK11OuZUkDUN5Vo8K11HjFB3Dh4tosYeal9iLKO5iUycPpXQMchq8w7TJdEZQirQq9qsp3NwfHR0Prtz5tvn~VAnqrw8nsx9YRvpeG2Yl38N7QmPg9uBzMhvHUOZqAVuvVbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
              </div>
            </a>
            <div>
              <div className="mb-2">
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="ml-2">
                  71 Ayer Rajah Crescent, #06-14,
                  <span className=""> Singapore 139951</span>
                </span>
              </div>
              <div className="mb-2">
                <span>
                  <FontAwesomeIcon icon={faPhone} className="mr-2" /> +65 8808
                  7905
                </span>
              </div>
              <div className="">
                <FontAwesomeIcon icon={faEnvelopeOpen} />
                <span className="ml-2">
                  Email us at:
                  <span className="">hello@carbuyer.com.sg</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm gap-x-1 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide font-semibold text-lg">About</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-blue-500 transform linear"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-blue-500 transform linear"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-blue-500 transform linear"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide font-semibold text-lg">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-blue-500 transform linear"
                  >
                    Buy Used Cars
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-blue-500 transform linear"
                  >
                    Buy New Cars
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-blue-500 transform linear"
                  >
                    Be a Dealer with UCARS
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide font-semibold text-lg">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-blue-500 transform linear"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-blue-500 transform linear"
                  >
                    Sell My Car
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-blue-500 transform linear"
                  >
                    COE Prices
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="text-base">
                Be first to latest news, reviews and content now!
              </div>
              <div>
                <form>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="px-5 py-2 w-3/5  border outline-none rounded border-gray-200 rounded-r-none"
                  />
                  <button className="self-center border border-red-500 px-5 py-2 font-semibold rounded rounded-l-none text-white bg-red-600 hover:bg-red-500">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="flex justify-start space-x-3">
                <span className="mr-1">Follow us</span>
                <a
                  href="/"
                  title="Facebook"
                  className="flex items-center p-1 text-black"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                </a>
                <a
                  href="/"
                  title="Twitter"
                  className="flex items-center p-1 text-black"
                >
                  <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                </a>
                <a
                  href="/"
                  title="Instagram"
                  className="flex items-center p-1 text-black"
                >
                  <FontAwesomeIcon icon={faTelegram} className="text-xl" />
                </a>
                <a
                  href="/"
                  title="Instagram"
                  className="flex items-center p-1 text-black"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                </a>
                <a
                  href="/"
                  title="Instagram"
                  className="flex items-center p-1 text-black"
                >
                  <FontAwesomeIcon icon={faYoutube} className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div>
            <div className="mb-5">
              <a href="/" className="text-black hover:text-blue-500 mr-8">
                Advertising Terms and Conditions
              </a>
              <a href="/" className="text-black hover:text-blue-500 mr-8">
                Platform Terms and Conditions
              </a>
              <a href="/" className="text-black hover:text-blue-500 mr-8">
                Privacy Policy
              </a>
            </div>
            <div className="flex">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="16"
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
              <span className="text-sm text-gray-500 ml-2">
                CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly
                owned by UCARS Pte Ltd
              </span>
            </div>
          </div>
          <div className="py-6 text-sm text-center dark:text-gray-400">
            © 2022. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
