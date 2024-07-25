export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Dedicated to providing exceptional architectural and engineering consulting services.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Call us from anywhere: +91-9324555058",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "We provide planning, licensing, legal consulting, and more services",
    description: "Committed to excellence in every aspect of our work.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Expert team passionate about delivering high-quality architectural and engineering solutions.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently working on innovative projects in the architectural and engineering fields.",
    description: "Stay tuned for updates and insights on our latest ventures.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interested in collaborating with us on your next project?",
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
    title: "Commercial Building Design",
    des: "Innovative designs for commercial spaces that blend functionality with aesthetic appeal.",
    img: "/p1.svg",
    
    link: "/commercial-building-design",
  },
  {
    id: 2,
    title: "Residential Housing Projects",
    des: "Tailored solutions for residential buildings focusing on comfort and style.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/residential-housing-projects",
  },
  {
    id: 3,
    title: "Interior Design Solutions",
    des: "Creative and functional interior design services to enhance living and working spaces.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/interior-design-solutions",
  },
  {
    id: 4,
    title: "Engineering Consulting",
    des: "Expert engineering consulting services to support various infrastructure projects.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/engineering-consulting",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Square Space has been an exceptional experience. Their professionalism and commitment to delivering high-quality results are evident in every project. Their attention to detail and innovative approach truly stand out. If you're looking for top-notch architectural and engineering services, Square Space is the perfect choice.",
    name: "Hitesh",
    title: "IT ENGINEER",
  },
  {
    quote:
      "Square Space's team delivered outstanding results on our project. Their expertise in architectural and engineering solutions, combined with their dedication to client satisfaction, made them an invaluable partner. Their innovative solutions and professional approach exceeded our expectations.",
    name: "EJAZ ANSARI",
    title: "LAWYER",
  },
  {
    quote:
      "Our experience with Square Space was excellent. Their team's attention to detail and commitment to quality were apparent throughout the project. They provided insightful solutions and maintained excellent communication, making them a great partner for any architectural or engineering needs.",
    name: "SHALAKA KADAM",
    title: "JAVA DEVELOPER",
  },
  {
    quote:
      "Square Space's expertise in architectural design and engineering consulting was evident in the high-quality outcomes of our project. Their professionalism, reliability, and creative solutions were key factors in our successful collaboration. Highly recommend their services.",
    name: "UZAIR SHAIKH",
    title: "CYBER SECURITY EXPERT",
  },
  {
    quote:
      "Collaborating with Square Space was a pleasure. Their team's dedication to excellence and innovative approach made a significant impact on our project. Their commitment to delivering exceptional results and their collaborative spirit make them a top choice for architectural and engineering consulting.",
    name: "Kalim Salim Ansari",
    title: "CEO OF AK AND ASSOCIATES",
  },
];

export const companies = [
  {
    id: 1,
    name: "Cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Hostinger",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "WE PROVIDE LEGAL CONSULTING",
    desc: "At Square Space, we offer comprehensive legal consulting services, ensuring all regulatory requirements are met for your projects.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "WE OFFER STRUCTURED PLANNING",
    desc: "Our structured planning services include detailed project strategies and organizational frameworks to guide your architectural projects effectively.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "WE SPECIALIZE IN INTERIOR DESIGN",
    desc: "Square Space provides expert interior design services, focusing on creating functional and aesthetically pleasing spaces tailored to your needs.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "WE HANDLE NOC AND BUILDING PERMISSIONS",
    desc: "We manage the process of obtaining No Objection Certificates (NOCs) and building permissions, ensuring compliance with all necessary regulations.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];




export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
