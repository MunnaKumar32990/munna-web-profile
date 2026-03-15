import { cn } from "@/lib/utils";

export const AnimatedBackground = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-900 p-8",
        containerClassName
      )}
    >
      <div
        className={cn(
          "relative z-10 w-full",
          className
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "absolute inset-0 z-0",
          animate && "animate-spotlight"
        )}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-orange-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
    </div>
  );
}; 