import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap
} from "framer-motion";

interface VelocityMarqueeProps {
  children: React.ReactNode;
  baseVelocity: number;
}

export default function VelocityMarquee({ children, baseVelocity = 2 }: VelocityMarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // Skew effect based on scroll velocity (the wobble)
  const skewX = useTransform(smoothVelocity, [-1000, 1000], [-30, 30], { clamp: false });

  // Wrap from 0 to -25% (because we have 4 identical children blocks to make it seamless)
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 10);

    // If scrolling up, scroll velocity becomes negative.
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap w-full py-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div 
        className="flex whitespace-nowrap flex-nowrap items-center gap-8 md:gap-16 w-fit"
        style={{ x, skewX }}
      >
        <div className="flex shrink-0 gap-8 md:gap-16 items-center">{children}</div>
        <div className="flex shrink-0 gap-8 md:gap-16 items-center">{children}</div>
        <div className="flex shrink-0 gap-8 md:gap-16 items-center">{children}</div>
        <div className="flex shrink-0 gap-8 md:gap-16 items-center">{children}</div>
      </motion.div>
    </div>
  );
}
