import React from "react";
import { Tag } from "antd";
import { useState } from "react";

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

export default function CarList() {
  const [carList, setCarList] = useState({
    cars,
    itemToShow: 7,
    expended: false,
  });
  console.log(carList.cars.length);
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
                <div className="border-b p-10">
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
