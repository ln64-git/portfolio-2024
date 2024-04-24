"use client";
import aboutData from "@/content/about-data";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import GetIsMobile from "@/utils/is-mobile";

export default function ContactPage() {
  const form = useRef<HTMLFormElement | null>(null);
  const { name, position } = aboutData;
  const [emailStatus, setEmailStatus] = useState<"success" | "failure" | null>(
    null,
  );

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_ut19eu5",
          "template_k6z538t",
          form.current,
          "k9dk_PHS4Rax1XBz_",
        )
        .then(() => {
          setEmailStatus("success");
        })
        .catch((error) => {
          console.log(error.text);
          setEmailStatus("failure");
        });
    }
  };

  let iconSize = 50;
  const isMobile = GetIsMobile();
  if (isMobile) {
    iconSize = 45;
  }

  return (
    <div className="mx-auto max-w-[650px] px-4 pb-10 ">
      <div className="mx-auto flex flex-col justify-center align-middle ">
        <div className="flex w-full flex-col items-center justify-center  space-y-2 p-4 align-middle">
          <div className="text-3xl text-[#e7e5f1]">{name}</div>
          <div className="text-xl text-[#a1a4b8]">{position}</div>
        </div>
        <div className="m-4 flex justify-center gap-4 ">
          <a href="https://www.github.com/ln64-git" target="_blank">
            <img src="/github.png" width={iconSize} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/lukeanthony007/" target="_blank">
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
        <label className="text-[#a1a4b8]">name</label>
        <input type="text" name="user_name" className="text-[#a1a4b8]" />
        <label className="text-[#a1a4b8]">email</label>
        <input type="email" name="user_email" className="text-[#a1a4b8]" />
        <label className="text-[#a1a4b8]">message</label>
        <textarea name="message" className="text-[#a1a4b8]" />
        <input
          type="submit"
          value="Send"
          className=" m-10 mx-auto w-2/5 cursor-pointer rounded-md p-4 text-[#676f98] hover:bg-[#0d0d0d]"
        />
        {emailStatus === "success" && (
          <p className="text-center text-green-500">Email sent successfully!</p>
        )}
        {emailStatus === "failure" && (
          <p className="text-center text-red-500">
            Failed to send email. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
