"use client";
import React, { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code, Palette, Users, Zap, Globe, Heart, Star, Database, Shield } from "lucide-react";
const THEMES = {
  primary: "from-slate-700 via-slate-800 to-slate-900",
  secondary: "from-blue-700 via-blue-800 to-blue-900",
  accent: "from-purple-700 via-purple-800 to-purple-900",
  success: "from-emerald-700 via-emerald-800 to-emerald-900",
  warning: "from-amber-700 via-amber-800 to-amber-900",
  danger: "from-red-700 via-red-800 to-red-900",
  info: "from-cyan-700 via-cyan-800 to-cyan-900",
  neutral: "from-gray-700 via-gray-800 to-gray-900",
} as const;
type ThemeType = keyof typeof THEMES;
interface MousePos { readonly x: number; readonly y: number; }
interface Card3DProps {
  title: string; description: string; image?: string; icon?: React.ReactNode;
  theme?: ThemeType; gradient?: string; onClick?: () => void; className?: string;
  size?: "sm" | "md" | "lg"; variant?: "default" | "minimal" | "premium";
  disabled?: boolean; loading?: boolean;
}
interface CardData {
  id: string; title: string; description: string; image?: string;
  icon?: React.ReactNode; theme?: ThemeType; gradient?: string;
  onClick?: () => void; disabled?: boolean; loading?: boolean;
}
interface Card3DListProps {
  cards: CardData[]; className?: string; columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg" | "xl"; size?: "sm" | "md" | "lg";
  variant?: "default" | "minimal" | "premium"; animated?: boolean; staggerDelay?: number;
}
const SIZES = { sm: "h-64", md: "h-80", lg: "h-96" } as const;
const VARIANTS = {
  default: "shadow-lg hover:shadow-2xl",
  minimal: "shadow-md hover:shadow-lg border border-white/10",
  premium: "shadow-xl hover:shadow-2xl ring-1 ring-white/20",
} as const;
const GRIDS = {
  1: "grid-cols-1", 2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
} as const;
const GAPS = { sm: "gap-4", md: "gap-6", lg: "gap-8", xl: "gap-10" } as const;
const containerVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2, duration: 0.5, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -15, scale: 0.95 },
  visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { type: "spring" as const, stiffness: 100, damping: 12, mass: 0.7 } },
};
const Card3D = React.forwardRef<HTMLDivElement, Card3DProps>(({ title, description, image, icon, theme = "primary", gradient, onClick, className, size = "md", variant = "default", disabled = false, loading = false, ...props }, ref) => {
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const finalGradient = useMemo(() => gradient || THEMES[theme], [gradient, theme]);
  const patternId = useMemo(() => `pattern-${theme}-${title.replace(/\s+/g, "-").toLowerCase()}`, [theme, title]);
  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: ((e.clientX - rect.left) / rect.width - 0.5) * 25, y: ((e.clientY - rect.top) / rect.height - 0.5) * -25 });
  }, [disabled]);
  const handleEnter = useCallback(() => { if (!disabled) setHovered(true); }, [disabled]);
  const handleLeave = useCallback(() => { if (!disabled) { setHovered(false); setMousePos({ x: 0, y: 0 }); } }, [disabled]);
  const handleClick = useCallback(() => { if (!disabled && !loading && onClick) onClick(); }, [disabled, loading, onClick]);
  return (
    <motion.div ref={ref} suppressHydrationWarning className={cn("group relative w-full overflow-hidden rounded-2xl transform-gpu transition-all duration-500 ease-out", SIZES[size], VARIANTS[variant], onClick && !disabled && !loading && "cursor-pointer", disabled && "opacity-50 cursor-not-allowed", loading && "pointer-events-none", className)}
      onMouseMove={handleMove} onMouseEnter={handleEnter} onMouseLeave={handleLeave}
      animate={{ rotateX: disabled ? 0 : mousePos.y, rotateY: disabled ? 0 : mousePos.x, z: disabled ? 0 : hovered ? 30 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 35, mass: 0.8 }}
      whileTap={disabled || !onClick ? {} : { scale: 0.98 }}
      onClick={handleClick} style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
      role={onClick ? "button" : "article"} tabIndex={onClick && !disabled ? 0 : -1} {...props}>
      <motion.div className={cn("absolute inset-0 rounded-2xl", image ? "" : `bg-gradient-to-br ${finalGradient}`)} animate={{ scale: hovered ? 1.02 : 1 }} transition={{ duration: 0.4 }} style={{ transform: "translateZ(-10px)" }}>
        {image && <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />}
      </motion.div>
      <motion.div className="relative z-20 flex h-full flex-col justify-between p-6 text-white" style={{ transform: "translateZ(20px)" }}>
        <div className="flex justify-between items-start">
          {icon && <motion.div className="text-3xl opacity-100" animate={{ rotateZ: hovered ? 5 : 0, y: hovered ? -2 : 0 }} transition={{ duration: 0.3 }}>{icon}</motion.div>}
        </div>
        <motion.div className="space-y-3" animate={{ y: hovered ? -3 : 0 }} transition={{ duration: 0.3 }}>
          <motion.h3 className="text-xl font-semibold tracking-tight text-white" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }} animate={{ scale: hovered ? 1.02 : 1 }}>{title}</motion.h3>
          <motion.p className="text-sm text-white/90 leading-relaxed line-clamp-3" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }} animate={{ opacity: hovered ? 1 : 0.9 }}>{description}</motion.p>
          {onClick && !disabled && (
            <motion.div className="flex items-center space-x-2" animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
              <div className="h-0.5 w-4 bg-white/70 rounded-full" />
              <div className="text-xs font-medium opacity-90">{loading ? "Loading..." : "Explore"}</div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
});
Card3D.displayName = "Card3D";
const Card3DList: React.FC<Card3DListProps> = ({ cards, className, columns = 3, gap = "md", size = "md", variant = "default", animated = true, staggerDelay = 0.08 }) => {
  const gridClass = useMemo(() => GRIDS[columns], [columns]);
  const gapClass = useMemo(() => GAPS[gap], [gap]);
  return (
    <motion.div className={cn("relative grid w-full", gridClass, gapClass, className)}
      variants={animated ? containerVariants : undefined}
      initial={animated ? "hidden" : undefined}
      animate={animated ? "visible" : undefined}
      style={{ perspective: "1500px", transformStyle: "preserve-3d" }}>
      {cards.map((card, index) => (
        <motion.div key={card.id} variants={animated ? itemVariants : undefined} style={{ transformStyle: "preserve-3d" }}>
          <Card3D title={card.title} description={card.description} image={card.image} icon={card.icon} theme={card.theme} gradient={card.gradient} onClick={card.onClick} size={size} variant={variant} disabled={card.disabled} loading={card.loading} />
        </motion.div>
      ))}
    </motion.div>
  );
};
export { Card3D, Card3DList };
export type { CardData };
