"use client";

import { useActionState } from "react";
import { sendEmail } from "../../../../lib/action";

const Form = () => {
  const [state, formAction] = useActionState(sendEmail, null);

  return (
    <div>
      <form action={formAction}>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="name">이름: </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="이름"
              required
            />
          </div>
          <div>
            <label htmlFor="email">이메일: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="이메일"
              required
            />
          </div>
          <div>
            <label htmlFor="subject">문의 내용: </label>
            <textarea
              placeholder="문의 내용"
              id="subject"
              name="subject"
              required
              rows={5}
            />
          </div>
        </div>

        {/* 상태 메시지 표시 */}
        {state?.message && (
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

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          전송
        </button>
      </form>
    </div>
  );
};

export default Form;
