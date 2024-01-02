import { MouseEventHandler } from "react";

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface HomeProps {
  searchParams: FilterProps;
}
export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (value: number) => void;
}

export interface FilterProps {
  manufacturer?: string;
  year?: string;
  model?: string;
  limit?: number;
  fuel?: string;
}
export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  options: OptionProps[];
  setFilter: (value: string) => void;
}

export interface CustomFilterYearProps {
  options: OptionProps[];
  setFilter: (value: number) => void;
}
export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  selected?: string;
  setSelected: (selected: string) => void;
}

export interface SearchBarProps {
  setManufacturer: (model: string) => void;
  setModel: (model: string) => void;
}
