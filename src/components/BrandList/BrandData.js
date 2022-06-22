import React from "react";

export const BrandData = [
  {
    id: "1",
    image:
      "https://s3-alpha-sig.figma.com/img/c0c8/b116/3c6aff6795ce8a0bd6d7345c9bf7a1ee?Expires=1656892800&Signature=Ho~lPFki5ULBy3h2WOQ-mi90JRS53kXf~grcDVg6s40zcQmUinwNmN~yVWAcOH5AJKfj23ecIElXAhFHeSGgcWeBMcdI4bjOgfuRLuENM0OUs6jiRoEvURz938awiZCpg9aXDVaRY-QzlnoxyU9d4bsZcHOhc2ufbdVe0fUDLvseXuVHGjOqE8DSXxSRSc4E77eotKl43hAM0gHkNoUjMv6Uzj2B35JFOgUxrn5aD-MB5MCoOJaMYKQjGTxJ~ZXc6rfnK864EonN~Y6vQ~fnR0ZO4XBrJpP1JQc1vT-LYXUnbszyyaJL0M1g3BvyM8lCWZeZupCwTVSK4bxtAHiXnQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    name: "Toyota",
    desc: "Jeep Grand Cherokee",
    models: 1200,
    date: "12/01/2021",
    status: "active",
  },
  {
    id: "2",
    image:
      "https://s3-alpha-sig.figma.com/img/7ce8/92ca/6060d0617048eab63af7158084279b1a?Expires=1656892800&Signature=Uy~aOWYipIYBVKeFsrXwfsm4oP-kW2MV42jY69ArT-fc9r-98pWX3E34v-m~OjZBLnc0ydk0-Cx0EK6DX6gXtKs7yl7Dog0mABdk8xzAFNM7yB2JcgqlfyKqqkzTp5XJrpuYXySc1EE-NtElrupEjH-y9pZh~VDGlKKnTaLoyPm3hL85WeFSWWPRPuX46rJ1TMJY0AN2yNbecDrveVZBkEW6mWClbRtfxxdfWC-YPUy5eJ0uAUAcDcv25VAij0VkE~Upg2GuPGGWomgLVLGrtbFjaoxpGARJ-JsvkBFQhGdihSrls12edaOHpTGmpLXytN-9ozKrGcSwaFkg5VYU-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    name: "BMW",
    desc: "Brand description too long...",
    models: 800,
    date: "22/06/2022",
    status: "inactive",
  },
  {
    id: "3",
    image:
      "https://s3-alpha-sig.figma.com/img/1677/44e7/585aff8ae3a40d1566e32e03a1071c06?Expires=1656892800&Signature=KcmYuzPTVtuhSwxSJk9BDrhh3Uy3fBvrEx9fiF0UDiNstjzL0rFrtbbRQeJRt1Igr~y3lLU5NPE86ci3OfXa2TOLIliAGGrUWcglwed-R5lZxQ~OXRNU86hMg5Pi-~52fzoxq-wa3stxN-tCvoSIL3LrfsDY~2wmtypPLh5YIrAq3jNBeYdRhN94FThiDXvbJOif4DIxuGeQXxIha5ZfKlxW1m212Iaw6LVFJz-Ns5tMh0dzS74cFxcT0HqBkOhmlQOGDVaVzNWLwnEmNKL1~ecnG0A9Jokw4w94oSVAPtaaGLg1OKxxKEwtYk~xXJg-67n4gGYKS9RBYG55SWgWhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    name: "MAZDA",
    desc: "AUDI Q7",
    models: 620,
    date: "25/07/2022",
    status: "active",
  },
  {
    id: "4",
    image:
      "https://s3-alpha-sig.figma.com/img/666f/3362/30c0d90fe95c40db7f747f0aecfeeb65?Expires=1656892800&Signature=cU~m3KSz7vTzb7pEiAW451CatKuI5TqMuYsGFgzV4zxLblxuJwab36HQOUgleL0MkFo-LrpQ8WtqZD2Wzs8cI7HYF2zSajeFOeh04BF8UP6HuSwx4WE34WVFOblSOsQrEb5W7~Iw3MR5MBcLatkjsPJC5fFqUAdUNTJMR-~Uxd7k6U16uLPisnEzJM7bmqZCaL5rkz3g96mEk0WFw6nxts6W3MaMH5EmcIcgRlgzVIrpaezbMnh4WoCVDw82KgVYe-1bFZqX97QL5awCIomqBig7-pjFYTd3-RGQc1874lzHsdydTBVWr9OzXN2mBL7~vsZKSgLo9sZ8QJS27ePS2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    name: "Hyundai",
    desc: "Brand description too long...",
    models: 4260,
    date: "01/06/2022",
    status: "inactive",
  },
  {
    id: "5",
    image:
      "https://s3-alpha-sig.figma.com/img/251a/9341/b3b39c2f2f5a8bbefe8123d54632c4e7?Expires=1656892800&Signature=F6ZYpkD1zdBPEq44BGYmmkjbyILfoEYwhwPYMSIrefBJ~Jn1klxrLSWiSpslPqnHFiOZKYZxwnumLg0wZHBCgrLaMWd20afC1FnZ3aUU9z5paXM2ktRPcZTkpOwVkXXyAI~v8dGHEyem7G2t3OELuJ1gdp5GwQ50sQcOERxsJaFWeuAGa3mexjSTnylT0hqH3o8S8y0etTM1Z6cR9-u46zDSATtqHntpPMD4Bzj9X-DeOXaEaZPh9J4iC287I3ItuZeLwc0ghpAX8cpEprQCSY~Blq21u5ytDCfCJYGzGGROm-pu1bKJIGZ5n1Ses6s26QRyq-I2W-CysMTzsd1fng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    name: "KIA",
    desc: "Dodge Charger",
    models: 620,
    date: "25/05/2022",
    status: "active",
  },
  {
    id: "6",
    image:
      "https://s3-alpha-sig.figma.com/img/e5cc/ebe2/08244fa2ce03262faf9ffc4eb9cff1f3?Expires=1656892800&Signature=anfJsXEEEgSD39YWX2Fp~YwuO~UWAx7oW4-SEqEVuWco~51OKLCKb0gAgkYJ3KTmb464D27D5AKkoemf8ONZAjEW~gU7B-zUjrNpwOpYGvyYxDMQRGGs~RPLsvFRFg3FAcz4jlrynnNOYewXwB8gpA8xS5fZLD5zgu6~euBBb4vGC1FtUPslq49CBWGOfeo0-SkjJFEhd7ZMjHgwYKpUC1co9VfZAEwVqedDHsgtc3podG42PMh4Bv6QOQENOrr-BcVGKljRfvGkbDdAkYKGYopJRhPHiA~GhwWEAhF1FWjwyTGOeap-FtvzK3SSeiZ8vREbG62wsGuB7WsTyaYsNw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    name: "NISSAN",
    desc: "Brand description too long...",
    models: 4260,
    date: "10/10/2022",
    status: "inactive",
  },
];
