import React, { useState } from "react";
import { Flex, Typography } from "antd";

const { Text } = Typography;

export interface SvgCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  svgPath: string;
  fillColor: string;
  strokeColor: string;
  descriptionColor?: string;
  positionStyle?: React.CSSProperties;
}

const SvgCard = ({
  title,
  description,
  icon,
  image,
  svgPath,
  fillColor,
  strokeColor,
  descriptionColor = "rgba(255,255,255,0.8)",
  positionStyle = {},
}:SvgCardProps) => {
  const [hover, setHover] = useState(false);

  const descriptionLines = description.split("/");


  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "66.77%",
        ...positionStyle,
        cursor: "pointer",
        overflow: "hidden",
        transition: "transform 0.3s ease",
        transform: hover ? "scale(1.05)" : "scale(1)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* SVG background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 331"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transition: "all 0.4s ease",
        }}
      >
          {hover ? (
          <rect
            x={0}
            y={0}
            width={496}
            height={331}
            rx={14} 
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={1}
            style={{ transition: "all 0.4s ease" }}
          />
        ) : (
          <path
            d={svgPath}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={1}
            style={{ transition: "all 0.4s ease" }}
          />
        )}
      </svg>

      {/* Card content */}
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          right: 24,
          bottom: 16,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Top-left: icon + title */}
        <Flex vertical align="start" justify="center">
            <Flex justify="center" align="center" gap={12}>
                {icon && <div style={{ marginBottom: 8 }}>{icon}</div>}
                <Text style={{ color: strokeColor, marginBottom: 8 }} className="text-heading-l font-bold">
                    {title}
                </Text>
            </Flex>

            {descriptionLines.map((line, idx) => (
            <Text
              key={idx}
              style={{ color: descriptionColor, marginBottom: 0 }}
              className="text-body-s font-bold"
            >
              {line}
            </Text>
          ))}
          
        </Flex>

        {/* Bottom-right: image */}
        {image && (
          <div style={{ alignSelf: "flex-end" }}>
            <img
              src={image}
              alt={title}
               style={{
                width:"100%",
                maxWidth: "150px",
                height: "auto",
                objectFit: "contain",
                marginBottom:"10px"
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SvgCard;
