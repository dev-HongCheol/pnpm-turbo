import { Control } from "react-hook-form";

export type IFormControlLabel = {
  id: number | string;
  label: string;
  value: string | number;
};

export type RadioHookFormProps = {
  control: Control<any, any>;
  name: string;
  radioDatas: IFormControlLabel[];
};
