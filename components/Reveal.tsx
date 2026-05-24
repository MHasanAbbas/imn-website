import {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from "react";

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  style?: CSSProperties;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "style">;

export default function Reveal<T extends ElementType = "div">({
  as,
  children,
  className = "",
  delay = 0,
  duration = 680,
  distance = 24,
  once = true,
  style,
  ...props
}: RevealProps<T>) {
  const Tag = as ?? "div";

  const revealStyle = {
    ...style,
    ["--reveal-delay" as string]: `${delay}ms`,
    ["--reveal-duration" as string]: `${duration}ms`,
    ["--reveal-distance" as string]: `${distance}px`,
  } as CSSProperties;

  return (
    <Tag
      data-reveal="true"
      data-reveal-once={once ? "true" : "false"}
      className={`reveal-fade ${className}`.trim()}
      style={revealStyle}
      {...props}
    >
      {children}
    </Tag>
  );
}
