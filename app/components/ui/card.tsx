import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Card = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-slate-800",
        containerClassName
      )}
    >
      <div
        className={cn(
          "relative z-10 p-8 transition-colors duration-500 group-hover:bg-slate-800/50",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"
      />
    </div>
  );
}; 