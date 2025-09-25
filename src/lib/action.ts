"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_KEY,
  },
});

export const sendEmail = async (prevState: any, formData: FormData) => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");

    console.log(name, email, subject);

    if (!name || !email || !subject) {
      return {
        success: false,
        message: "모든 필드를 입력해주세요",
      };
    }
    console.log("환경변수 체크:");
    console.log(
      "GMAIL_USER:",
      process.env.GMAIL_USER ? "설정됨" : "설정되지 않음"
    );
    console.log(
      "GMAIL_APP_KEY:",
      process.env.GMAIL_APP_KEY ? "설정됨" : "설정되지 않음",
      process.env.GMAIL_APP_KEY
    );
    await transporter.sendMail({
      from: process.env.GMAIL_USER, // 보내는 이메일
      to: "thseo1758@naver.com", // 받는 이메일
      subject: `문의하기: ${name}(${email})`,
      html: `<h1>포트폴리오에서 전달된 내용입니다.</h1>
      <p><strong>이름:</strong> ${name}</p>
      <p><strong>이메일:</strong> ${email}</p>
      <p><strong>문의내용:</strong></p>
      <p>${subject}</p>`,
    });

    console.log("이메일 전송 성공");
    return {
      success: true,
      message: "이메일이 성공적으로 전송되었습니다!",
    };
  } catch (error) {
    console.error("이메일 전송 실패:", error);
    return {
      success: false,
      message: "이메일 전송에 실패했습니다. 다시 시도해 주세요.",
    };
  }
};
