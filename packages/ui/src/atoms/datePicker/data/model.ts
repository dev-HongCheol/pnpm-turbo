import { Control, FieldErrors } from 'react-hook-form'

export type DatePickerHookFormProps = {
  control: Control<any, any>
  name: string
  error?: FieldErrors
}
