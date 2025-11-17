import React, {useState, useRef, useEffect, ReactNode, ReactElement, FC} from 'react';
import {createPortal} from 'react-dom';
import {TooltipPosition} from './TooltipPosition';
import styles from './Tooltip.module.css';

type Props = {
  className?: string;
  content: ReactNode;
  position?: TooltipPosition;
  children: ReactElement;
};

const TOOLTIP_MARGIN = 10;
const ROOT_ELEMENT_ID = 'tooltip-root';

const getRootElement = (): HTMLElement => {
  let container = document.getElementById(ROOT_ELEMENT_ID);

  if (!container) {
    container = document.createElement('div');
    container.id = ROOT_ELEMENT_ID;
    document.body.appendChild(container);
  }

  return container;
};

const getTransform = (position: TooltipPosition): string => {
  switch (position) {
    case TooltipPosition.TOP:
      return 'translateX(-50%) translateY(-100%)';
    case TooltipPosition.BOTTOM:
      return 'translateX(-50%)';
    case TooltipPosition.LEFT:
      return 'translateX(-100%) translateY(-50%)';
    case TooltipPosition.RIGHT:
      return 'translateY(-50%)';
    default:
      return 'translateX(-50%) translateY(-100%)';
  }
};

const getArrowStyle = (position: TooltipPosition): string => {
  switch (position) {
    case TooltipPosition.TOP:
      return styles.tooltipArrowTop;
    case TooltipPosition.BOTTOM:
      return styles.tooltipArrowBottom;
    case TooltipPosition.LEFT:
      return styles.tooltipArrowLeft;
    case TooltipPosition.RIGHT:
      return styles.tooltipArrowRight;
    default:
      return styles.tooltipArrowTop;
  }
};

export const Tooltip: FC<Props> = ({content, position = TooltipPosition.TOP, children, className}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({x: 0, y: 0});
  const arrowClassName = getArrowStyle(position);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();

      switch (position) {
        case TooltipPosition.TOP:
          setCoords({
            x: rect.left + rect.width / 2,
            y: rect.top - TOOLTIP_MARGIN,
          });
          break;
        case TooltipPosition.BOTTOM:
          setCoords({
            x: rect.left + rect.width / 2,
            y: rect.bottom + TOOLTIP_MARGIN,
          });
          break;
        case TooltipPosition.LEFT:
          setCoords({
            x: rect.left - TOOLTIP_MARGIN,
            y: rect.top + rect.height / 2,
          });
          break;
        case TooltipPosition.RIGHT:
          setCoords({
            x: rect.right + TOOLTIP_MARGIN,
            y: rect.top + rect.height / 2,
          });
          break;
      }
    }
  }, [isVisible, position]);

  const rootElement = getRootElement();

  return (
    <>
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{display: 'inline-block'}}
      >
        {children}
        {isVisible &&
          createPortal(
            <div
              className={`${styles.tooltip} ${className}`}
              style={{
                position: 'fixed',
                left: coords.x,
                top: coords.y,
                transform: getTransform(position),
                zIndex: 9999,
                pointerEvents: 'none',
              }}
            >
              <div className={styles.tooltipContent}>{content}</div>
              <div className={`${styles.tooltipArrow} ${arrowClassName}`} />
            </div>,
            rootElement
          )}
      </div>
    </>
  );
};
