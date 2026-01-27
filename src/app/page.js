"use client";

import { useEffect, useState } from "react";

import Header from "../app/components/Header";
import Main from "../app/components/Main";
import Footer from "../app/components/Footer";
import Loading from "../app/components/Loading";

export default function HomePage() {
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (animation) return;

    let cancelled = false;
    let idleId;
    let timeoutId;

    const startStarField = async () => {
      try {
        const { starField } = await import("../app/utilities/starField");
        if (!cancelled) {
          starField();
        }
      } catch (error) {
        console.error("Starfield failed to start", error);
      }
    };

    const requestIdleCallbackFn = window.requestIdleCallback;

    if (typeof requestIdleCallbackFn === "function") {
      idleId = requestIdleCallbackFn(startStarField, { timeout: 1500 });
    } else {
      timeoutId = window.setTimeout(startStarField, 800);
    }

    return () => {
      cancelled = true;
      if (idleId) {
        window.cancelIdleCallback?.(idleId);
      }
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [animation]);

  if (animation) return <Loading />;

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
