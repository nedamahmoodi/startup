import { Strings } from "../assets/strings/strings";
import image1 from "../assets/image/pictop.jpg";
import image2 from "../assets/image/imgteam.png";
import image3 from "../assets/image/make-teamwork.jpg";
import image4 from "../assets/image/Startup.jpg";
//Styles
import styles from "../assets/css/Startupsneedadvice.module.css";

export let components = [
  {
    name: "image",
    image: image1,
  },
  {
    name: "section",
    heading: `${Strings.heading}`,
    btn: `${Strings.btn}`,
    lorem: `${Strings.lorem}`,
  },
  {
    name: "startupneed",
    heading: "چرا استارتاپ ها به مشاوره نیاز دارند؟",
    paragraphneed: `${Strings.lorem}`,
    image: image2,
    dir: "rtl",
  },
  {
    name: "problemstartup",
    heading: "مواردی که برای استارتاپ ها مشکل ساز می شود",
    paragraph:
      "در این شرایط مشاور استارتاپ به افراد تیم دستیابی به بهترین راه حل می کند",
    list: [
      {
        id: "0",
        text: "ضعف در توانایی تجاری سازی ایده",
      },
      {
        id: "1",
        text: "عدم شناخت مخاطبین واقعی،نیاز و مشکلات آن ها",
      },
      {
        id: "2",
        text: "عدم آگاهی از مسائل حقوقی",
      },
      {
        id: "3",
        text: "عدم توانایی تیم سازی و هدایت آن ",
      },
      {
        id: "4",
        text: "نداشتن مارکتینگ صحیح و بازاریابی ایده ",
      },
      {
        id: "5",
        text: "کمبود سرمایه و منابع لازم",
      },
    ],
  },
  {
    name: "image",
    image: image1,
  },
  {
    name: "section",
    heading:
      " خدمات مشاوره راه اندازی استارتاپ ها به طور کلی شامل چه مواردی است؟",
    lorem: `${Strings.lorem}`,
  },
  {
    name: "section",
    lorem: `${Strings.lorem}`,
  },
  {
    name: "problemstartup",
    wrap: "1",
    heading: "خدماتی که بهترین مرکز مشاوره استارتاپ ارائه می کند",
    list: [
      {
        id: "0",
        text: "مشاوره راه اندازی استارت آپ",
      },
      {
        id: "1",
        text: "مشاوره مالی ویژه کسب و کارهای استارتاپی",
      },
      {
        id: "2",
        text: "مشاوره حقوقی استارتاپ",
      },
      {
        id: "3",
        text: "مشاوره مارکتینگ استارتاپی",
      },
      {
        id: "4",
        text: "مشاوره استراتژیک ",
      },
      {
        id: "5",
        text: " مشاوره فروش کسب و کارهای نوپا  ",
      },
      {
        id: "6",
        text: " مشاوره مدیریت استارتاپ  ",
      },
    ],
  },
  {
    name: "startupneed",
    heading: "مشاوره راه اندازی استارتاپ چه نکاتی را به شما یادآوری می کند؟",
    paragraphneed: `${Strings.lorem}`,
    image: image3,
    dir: "ltr",
  },
  {
    name: "namiraconsul",
    heading: "خدمات مشاوره استارتاپی نامیرا",
    wrap: "",
    list: [
      {
        id: "0",
        text: "مشاوره راه اندازی استارت آپ",
      },
      {
        id: "1",
        text: "مشاوره مالی ویژه کسب و کارهای استارتاپی",
      },
      {
        id: "2",
        text: "مشاوره حقوقی استارتاپ",
      },
      {
        id: "3",
        text: "مشاوره مارکتینگ استارتاپی",
      },
      {
        id: "4",
        text: "مشاوره استراتژیک ",
      },
      {
        id: "5",
        text: " مشاوره فروش کسب و کارهای نوپا  ",
      },
      {
        id: "6",
        text: " مشاوره مدیریت استارتاپ  ",
      },
      {
        id: "7",
        text: " مشاوره مدیریت استارتاپ  ",
      },
      {
        id: "8",
        text: " مشاوره مدیریت استارتاپ  ",
      },
      {
        id: "9",
        text: " مشاوره مدیریت استارتاپ  ",
      },
    ],
  },
  {
    name: "reservstartup",
    heading: " رزرو جلسه اختصاصی مشاوره استارتاپ به صورت حضوری در مشهد",
    image: image4,
    btn: `${Strings.btn}`,
  },
  {
    name: "comentsend",
    heading: " ارسال دیدگاه",
    btn: `${Strings.btn}`,
  },
];
