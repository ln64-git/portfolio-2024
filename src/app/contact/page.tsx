"use client";
import aboutData from "@/content/about-data";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import getIsMobile from "@/utils/is-mobile";
import Header from "@/components/header";
import Fireflies from "@/components/fireflies";

export default function ContactPage() {
  const form = useRef<HTMLFormElement | null>(null);
  const { name, position } = aboutData;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_1dv3bdm",
          "template_y0bovyn",
          form.current,
          "4det7y_L2a0fApovP",
        )
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  let iconSize = 50;
  const isMobile = getIsMobile();
  if (isMobile) {
    iconSize = 45;
  }

  return (
    <div className="mx-auto max-w-[650px] px-4 ">
      <Header />
      <div className="mx-auto flex flex-col justify-center align-middle ">
        <div className="flex w-full flex-col items-center justify-center  space-y-2 p-4 align-middle">
          <div className="text-5xl">{name}</div>
          <div className="text-3xl">{position}</div>
        </div>
        <div className="m-4 flex justify-center gap-4 ">
          <a href="https://www.github.com/lucian1996" target="_blank">
            <img src="/github.png" width={iconSize} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/lucian1996/" target="_blank">
            <img src="/linkedin.png" width={iconSize} alt="LinkedIn" />
          </a>
          <a href="https://www.twitter.com/orpheustwin" target="_blank">
            <img src="/twitter.png" width={iconSize} alt="Twitter" />
          </a>
          <a href="https://t.me/lucian_adrift" target="_blank">
            <img src="/telegram.png" width={iconSize} alt="WhatsApp" />
          </a>
        </div>
      </div>
      <form
        ref={form}
        autoComplete="false"
        onSubmit={sendEmail}
        className="flex flex-col px-4 "
      >
        <label>name</label>
        <input type="text" name="user_name" />
        <label>email</label>
        <input type="email" name="user_email" />
        <label>message</label>
        <input type="subject" name="subject" />
        <label>subject</label>
        <textarea name="message" />
        <input
          type="submit"
          value="Send"
          className=" m-10 mx-auto w-2/5 cursor-pointer rounded-md bg-sky-950 p-4"
          onClick={() => {
            console.log("clicked");
          }}
        />
      </form>
      <Fireflies />
    </div>
  );
}
