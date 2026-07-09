"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Shield } from "lucide-react";
import { TextField } from "@/components/common/TextField";
import { PrimaryButton } from "@/components/common/PrimaryButton";

/**
 * 관리자 로그인 페이지 — 더미 화면이며 실제 인증은 수행하지 않는다.
 * 입력값과 무관하게 제출 시 대시보드(/admin)로 이동한다.
 */
export default function AdminLoginPage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/admin");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="w-full max-w-sm rounded-card bg-background p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)] ring-1 ring-black/5">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-primary/10">
            <Shield className="size-6 text-primary" />
          </span>
          <p className="text-title1">
            <span className="text-primary">LAO</span>TALK
          </p>
          <p className="text-caption2 text-muted-foreground">ADMIN</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <TextField
            label="아이디"
            name="id"
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <TextField
            label="비밀번호"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <PrimaryButton type="submit" className="mt-2">
            로그인
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}
