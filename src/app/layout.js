import localFont from "next/font/local";
import "../styles/globals.scss";

export const metadata = {
  title: "VEERAA | Full-Stack Developer",
  description:
    "Full-Stack Developer delivering modern web applications, scalable architectures, and clean user experiences.",
  keywords:
    "VASANTHAKUMAR DURAIRAJ, Full-Stack Developer, Next.js Developer, JavaScript, Tailwind CSS",
  author: "VEERAA",
};

const oxygen = localFont({
  src: [
    {
      path: "../fonts/Oxygen-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Oxygen-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Oxygen-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

const robotoMono = localFont({
  src: "../fonts/RobotoMono.ttf",
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oxygen.className} ${robotoMono.variable}
        relative overflow-x-hidden scroll-smooth bg-slate-950
        leading-relaxed text-slate-400 antialiased
        selection:bg-blue-300 selection:text-blue-900`}
      >
        {children}
        <canvas
          id="canvas"
          className="fixed inset-0 -z-10 h-screen w-screen"
        ></canvas>
      </body>
    </html>
  );
}
