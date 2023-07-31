// Import assets social media
import instagram from "/icons/social-media/instagram.svg";
import medium from "/icons/social-media/medium.webp";
import linkedin from "/icons/social-media/linkedin.webp";
import github from "/icons/social-media/github.webp";
import email from "/icons/social-media/email.webp";

// Import assets projects and skills
import badonorDarah from "/images/jdih.png";
import hrev from "/images/satu.png";
import impactPalu from "/images/goex.png";
import snResidence from "/images/binakarya.png";

// import logoBadonorDarah from "/icons/logo-badonordarah.png";
// import logoHrev from "/icons/logo-hrev.png";
// import logoimpactPalu from "/icons/logo-impact-palu.png";
// import logoSnResidence from "/icons/logo-sn-residence.png";

import nextjs from "/icons/tech-stack/nextjs.svg";
import nextjsDark from "/icons/tech-stack/nextjs-dark.svg";
import react from "/icons/tech-stack/react.svg";
import typescript from "/icons/tech-stack/typescript.svg";
import javascript from "/icons/tech-stack/javascript.svg";
import redux from "/icons/tech-stack/redux.svg";
import graphql from "/icons/tech-stack/graphql.svg";
import nodejs from "/icons/tech-stack/nodejs.svg";
import tailwind from "/icons/tech-stack/tailwind.svg";
import antdesign from "/icons/tech-stack/antdesign.svg";
import mongodb from "/icons/tech-stack/mongodb.svg";
import postgresql from "/icons/tech-stack/postgresql.svg";
import firebase from "/icons/tech-stack/firebase.svg";
import vite from "/icons/tech-stack/vite.svg";
import express from "/icons/tech-stack/express.svg";
import laravel from "/icons/tech-stack/laravel.svg";
import bootstrap from "/icons/tech-stack/bootstrap.svg";
import mysql from "/icons/tech-stack/mysql.svg";
import linux from "/icons/tech-stack/linux.svg";
import go from "/icons/tech-stack/go.svg";
import py from "/icons/tech-stack/python.svg";
import php from "/icons/tech-stack/php.svg";
import astro from "/icons/tech-stack/astro.svg";
import git from "/icons/tech-stack/git.svg";
import java from "/icons/tech-stack/java.svg";

// import assets experience
import kominfo from "/icons/company-logo/kominfo.png";
import hackerone from "/icons/company-logo/hakcerone.png";

import pattern1 from "/images/patterns/pattern1.svg";
import pattern2 from "/images/patterns/pattern2.svg";
import pattern3 from "/images/patterns/pattern3.svg";
import pattern4 from "/images/patterns/pattern4.svg";

export const dataNavbar: Navbar[] = [
  {
    id: 0,
    navigate: "Profile",
    navigate_url: "#profile",
  },
  {
    id: 1,
    navigate: "Projects",
    navigate_url: "#projects",
  },
  {
    id: 2,
    navigate: "Experience",
    navigate_url: "#experience",
  },
  {
    id: 3,
    navigate: "Contact",
    navigate_url: "#contact",
  },
];

export const dataLogoSocialMedia: LogoSocialMedia[] = [
  {
    id: 0,
    logo: linkedin,
    navigate: "https://www.linkedin.com/in/zakydafalas/",
  },
  {
    id: 1,
    logo: medium,
    navigate: "https://medium.com/@zakydaffeka26",
  },
  {
    id: 2,
    logo: github,
    navigate: "https://github.com/zakydfls",
  },
  {
    id: 3,
    logo: email,
    navigate: "mailto:zakydaffeka26@gmail.com",
  },
];

export const dataProjectss: Projects[] = [
  {
    id: 0,
    img_url: badonorDarah,
    type: "Government Apps •",
    tech_stack_logo: [php, laravel, mysql, bootstrap],
  },
  {
    id: 1,
    img_url: hrev,
    type: "Government Apps Pentesting •",
    tech_stack_logo: [go, linux, py],
  },
  {
    id: 2,
    img_url: impactPalu,
    type: "Export Social Media •",
    tech_stack_logo: [react, nextjsDark, tailwind, postgresql],
  },
  {
    id: 3,
    img_url: snResidence,
    type: "Company Profile •",
    tech_stack_logo: [react, vite, tailwind],
  },
];

export const dataSkills: string[] = [
  nextjs,
  react,
  typescript,
  javascript,
  nodejs,
  php,
  laravel,
  linux,
  java,
  py,
  vite,
  astro,
  tailwind,
  mongodb,
  postgresql,
  mysql,
  firebase,
  git,
];

export const dataExperience: Experience[] = [
  {
    id: 0,
    logo_url: kominfo,
    pattern: pattern1,
    name: "Diskominfo Pekalongan",
    description: "@diskominfo_kab_pekalongan",
    date: "Jan 2023 - Present",
    position: "Security & Software Engineer",
    responsibilites: [
      "Perform vulnerability assessments and penetration testing to identify weaknesses in systems, networks, and applications",
      "Use specialized tools and methodologies to simulate attacks and provide recommendations to strengthen security defenses.",
      "Build, maintain, develop new features, and improve the government platform using Laravel.",
      "Learn to write clean code, testable code, and implement agile methodologies.",
    ],
    first_color: "#0C3342",
    second_color: "#054C5B",
    desc_color: "#B6EDF8",
    position_color: "#002D3E",
    border_color: "#329CA9",
  },
  {
    id: 1,
    logo_url: hackerone,
    pattern: pattern2,
    name: "HackerOne",
    description: "@HackerOne",
    date: "Aug 2022 - Present",
    position: "Bug Hunter",
    responsibilites: [
      "Discovering vulnerabilities and risks in networks, software systems and data centers with ongoing vulnerability",
    ],
    first_color: "#022E4A",
    second_color: "#020C12",
    desc_color: "#BEE7FB",
    position_color: "#021826",
    border_color: "#1994A4",
  },
];
