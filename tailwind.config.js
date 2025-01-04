/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        bamboo: {
          DEFAULT: "#919add",
          50: "#dee1f5",

          mbtiColors: {
            INTJ: "#C3B1E1", // 파스텔 보라
            INTP: "#D1D1D1", // 밝은 회색
            ENTJ: "#F4A6A6", // 파스텔 레드
            ENTP: "#F9C78D", // 파스텔 오렌지
            INFJ: "#A8DADC", // 청록색
            INFP: "#E8D3FF", // 연보라색
            ENFJ: "#F7E6A3", // 파스텔 골드
            ENFP: "#FFF3B0", // 노란색
            ISTJ: "#A3B4D7", // 남색
            ISFJ: "#F5E4C3", // 베이지색
            ESTJ: "#C8A27E", // 갈색
            ESFJ: "#FFCCE5", // 핑크색
            ISTP: "#D3D7E8", // 은색
            ISFP: "#A8D5BA", // 녹색
            ESTP: "#FFB895", // 빨간 주황색
            ESFP: "#FCEEC8", // 밝은 금색
          },
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
