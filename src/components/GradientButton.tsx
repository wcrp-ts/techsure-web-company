import type { ReactNode } from "react";
import "./GradientButton.css";

interface GradientButtonProps {
  children: ReactNode;
  height?: string;
  padding?: string;
  animate?: boolean;
  onClick?: () => void;
  circle?: boolean; 
  size?: string;  
  active?: boolean;  
}

const GradientButton = ({
  children,
  height = "40px",
  padding = "0 24px",
  animate = true,
  onClick,
  circle = false,
  size = "32px",
  active = false,
}:GradientButtonProps) => {
  const style: React.CSSProperties = {
    height: circle ? size : height,
    width: circle ? size : undefined,
    padding: circle ? "0" : padding,
    borderRadius: circle ? "50%" : "100px",
  };

  return (
    <button
      className={`gradient-border-btn ${active ? "gradient-btn-active" : ""}`} 
      style={style}
      data-animate={animate}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default GradientButton;
