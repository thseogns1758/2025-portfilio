"use client";

import { useActionState } from "react";
import { sendEmail } from "../../../../lib/action";
import { useTransition } from "react";

const Form = () => {
  const [state, formAction] = useActionState(sendEmail, {
    success: false,
    message: "",
  });
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div>
      <div>
        <h1 className=" font-bold mb-6">
          문의하기 <br />
          (전달되는 메일의 경로는 thseo1758@naver.com입니다.)
        </h1>
      </div>
      <form action={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 h-[50px]">
            <label
              htmlFor="name"
              className="w-[100px]"
              style={{ lineHeight: "50px" }}
            >
              이름
            </label>
            <input
              className="flex-1 p-2 border border-black rounded"
              type="text"
              id="name"
              name="name"
              placeholder="이름"
              required
            />
          </div>
          <div className="flex gap-2 h-[50px]">
            <label
              htmlFor="email"
              className="w-[100px]"
              style={{ lineHeight: "50px" }}
            >
              이메일
            </label>
            <input
              className="flex-1 p-2 border border-black rounded"
              type="email"
              id="email"
              name="email"
              placeholder="이메일"
              required
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="subject" className="w-[100px] pt-2">
              문의 내용
            </label>
            <textarea
              placeholder="문의 내용"
              id="subject"
              name="subject"
              className="flex-1 p-2 border border-black rounded"
              required
              rows={4}
            />
          </div>
        </div>

        {/* 상태 메시지 표시 */}
        {state && state.message && (
          <div
            className={`mt-4 p-3 rounded ${
              state.success
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {state.message}
          </div>
        )}
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-4 px-4 py-2 text-white rounded disabled:opacity-50"
            style={{ backgroundColor: "rgb(102, 51, 0)" }}
            disabled={isPending}
          >
            {isPending ? "전송 중..." : "전송"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
