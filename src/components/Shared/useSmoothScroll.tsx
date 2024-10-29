import { useEffect } from "react";

const useSmoothScroll = (speed = 0, smooth = 0) => {
  useEffect(() => {
    const SmoothScroll = ({
      target,
      speed,
      smooth,
    }: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      target: any;
      speed: number;
      smooth: number;
    }) => {
      if (target === document)
        target =
          document.scrollingElement ||
          document.documentElement ||
          document.body.parentNode ||
          document.body;

      let moving = false;
      let pos = target.scrollTop;
      const frame =
        target === document.body && document.documentElement
          ? document.documentElement
          : target;

      const scrolled = (e: {
        preventDefault: () => void;
        detail: number;
        wheelDelta: number;
      }) => {
        e.preventDefault();
        const delta = normalizeWheelDelta(e);
        pos += -delta * speed;
        pos = Math.max(
          0,
          Math.min(pos, target.scrollHeight - frame.clientHeight)
        );
        if (!moving) update();
      };

      const normalizeWheelDelta = (e: {
        detail: number;
        wheelDelta: number;
      }) => {
        if (e.detail) {
          return e.wheelDelta
            ? (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1)
            : -e.detail / 3;
        } else return e.wheelDelta / 120;
      };

      const update = () => {
        moving = true;
        const delta = (pos - target.scrollTop) / smooth;
        target.scrollTop += delta;
        if (Math.abs(delta) > 0.5) requestFrame(update);
        else moving = false;
      };

      const requestFrame =
        window.requestAnimationFrame ||
        ((func) => window.setTimeout(func, 1000 / 50));

      target.addEventListener("mousewheel", scrolled, { passive: false });
      target.addEventListener("DOMMouseScroll", scrolled, { passive: false });

      return () => {
        target.removeEventListener("mousewheel", scrolled);
        target.removeEventListener("DOMMouseScroll", scrolled);
      };
    };

    // const cleanup = SmoothScroll(document, speed, smooth);
    const cleanup = SmoothScroll({ target: document, speed, smooth });
    return () => cleanup();
  }, [speed, smooth]);
};

export default useSmoothScroll;
