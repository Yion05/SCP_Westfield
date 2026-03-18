import type { ReactNode } from "react";

export interface stringMFormat {
    text: string;
    start: number;
    end: number; 
}

export interface linkFormat{
  header: string;
  link: string;
  hasDivider?: boolean;
}
export interface CarouselProps {
  children: ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  leftControl?: ReactNode;
  rightControl?: ReactNode;
}

export interface AccordionProp{
    title: string;
    content: string | string [];
    image: string;
    customArrow?: ReactNode;
}

export interface AccordionWrapperProps{
    data: AccordionProp[];
    allowMultiple?: boolean
}

export interface AccordionItemProps {
  item: AccordionProp;
  isOpen: boolean;
  onClick: () => void;
}

export interface CollapseProp{
  title: string;
  content: string;
}

export interface CollapseWrapperProps {
  items: CollapseProp[];
  allowMultiple?: boolean;
  defaultOpenIndices?: number[];
}

export interface DropdownsProp{
  title: string;
  links: linkFormat[]
}