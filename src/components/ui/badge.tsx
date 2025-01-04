import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        INTJ: "bg-[#C3B1E1] text-black", // 파스텔 보라
        INTP: "bg-[#D1D1D1] text-black", // 밝은 회색
        ENTJ: "bg-[#F4A6A6] text-black", // 파스텔 레드
        ENTP: "bg-[#F9C78D] text-black", // 파스텔 오렌지
        INFJ: "bg-[#A8DADC] text-black", // 청록색
        INFP: "bg-[#E8D3FF] text-black", // 연보라색
        ENFJ: "bg-[#F7E6A3] text-black", // 파스텔 골드
        ENFP: "bg-[#FFF3B0] text-black", // 노란색
        ISTJ: "bg-[#A3B4D7] text-black", // 남색
        ISFJ: "bg-[#F5E4C3] text-black", // 베이지색
        ESTJ: "bg-[#C8A27E] text-black", // 갈색
        ESFJ: "bg-[#FFCCE5] text-black", // 핑크색
        ISTP: "bg-[#D3D7E8] text-black", // 은색
        ISFP: "bg-[#A8D5BA] text-black", // 녹색
        ESTP: "bg-[#FFB895] text-black", // 빨간 주황색
        ESFP: "bg-[#FCEEC8] text-black", // 밝은 금색
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
