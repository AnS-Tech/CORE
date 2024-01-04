import React, { useState } from "react";
import { TooltipProps } from "./interface";
import { TooltipContent, TooltipTrigger, TooltipWrapper } from "./styles";

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  delay = 500,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  let timeoutId: number | undefined;

  const showTooltip = () => {
    timeoutId = window.setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }
    setIsVisible(false);
  };

  return (
    <TooltipWrapper>
      <TooltipTrigger onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        {children}
      </TooltipTrigger>
      {isVisible && (
        <TooltipContent isVisible={isVisible}>{text}</TooltipContent>
      )}
    </TooltipWrapper>
  );
};
