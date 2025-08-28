export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Highlights", link: "#highlights" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: "Innovating for a sustainable future.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Computer Science Engineer passionate about AI, IoT, and Software dev.",
    description: "Aiming to build scalable solutions",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Eager to collaborate on your next big idea.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Real Time Cashew greading",
    des: "This project presents an automated, cost-effective solution for grading cashew kernels in real time. We address the inefficiencies of traditional manual grading, which is often slow and inconsistent using deep learining techniques.",
    img: "/Cashew.png",
    iconLists: ["/ras.jpeg", "/py.png", "/open.png", "/images.png","/dl.png"],
    link: "https://github.com/Cashew_grading",
    actlink: "https://github.com/Kiranram1/Real-Time-Cashew-Kernel-Classification-Using-Deep-Learning",
  },
  {
    id: 2,
    title: "Intrusion Detection System for IoT",
    des: "This project introduces a cGAN-powered IDS that generates synthetic samples for rare attack classes, combined with a LightGBM classifier for efficient multi-class intrusion detection.",
    img: "/IDS.png",
    iconLists: ["/ai.png", "/stream.png"],
    link: "https://github.com/IDS_for_IoT",
    actlink: "https://github.com/Kiranram1/cGAN---POWERED-INTRUSION-DETECTION-SYSTEM-FOR-IOT.git"
  },
  {
    id: 3,
    title: "PointerTracker – LLVM Pass for Memory Access Tracing",
    des: "PointerTracker is a custom LLVM Function Pass that instruments programs to monitor memory accesses at runtime.",
    img: "/ll.png",
    iconLists: ["/llvm.png", "/c++.svg"],
    link: "https://github.com/PointerTracker",
    actlink: "https://github.com/Kiranram1/llvm-project"
  },
  {
    id: 4,
    title: " Environment Conservation using IoT",
    des: "An IoT-based project developed with Raspberry Pi to monitor forest environments in real-time and assist in conservation efforts.",
    img: "/envi.png",
    iconLists: ["ras.jpeg", "/py.png", "/ai.png"],
    link: "https://github.com/Environment_conservation",
    actlink: "https://github.com/Kiranram1/Environment-conservation-using-IOT-"
  },
];

export const testimonials = [
  {
    quote:
      "My NCC 'B' and 'C' certificates represent a foundation of discipline, dedication, and leadership. These qualities, cultivated through rigorous training, are what I bring to every project I undertake.",
    name: "National Cadet Corps (NCC)",
    img: "/NCC.jpg"
  },
  {
    quote:
      "MSME-Sponsored Cashew Sorting System – 2025: Real-time classification (W180/W300/W500) using YOLOv5s + Arduino-controlled sorting, achieving 98.9% detection (mAP) and 95% real-world accuracy."
,
    name: "Ministry of MSME India",
    img:"/images.png"
  },
  {
    
    quote:
      "During the EduAIthon Hackathon 2025, I co-developed SciSpark — an immersive VR platform that transforms STEM education by allowing students to conduct interactive science experiments in a virtual lab. Built within 48 hours, the project aimed to address the lack of practical lab access in rural schools.",
    name: "At RV College of Engineering",
    img: "/rv.png"
  },
  
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Academic & Personal Projects",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Internships & Training",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Research & Lab Work",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Hackathon & Competition Experience",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/Kiranram1",
  },
  {
    id: 2,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/kiran-h-r-6258502a4/",
  },
];
