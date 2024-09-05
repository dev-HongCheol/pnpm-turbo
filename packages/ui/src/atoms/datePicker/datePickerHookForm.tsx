import { TextField } from '@mui/material'
import { DatePicker,  } from '@mui/x-date-pickers'
import { Controller } from 'react-hook-form'
import { DatePickerHookFormProps } from './data'

const DatePickerHookForm = ({ control, name, error }: DatePickerHookFormProps) => {
  return (

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            value={field.value}
            onChange={(date) => field.onChange(date.format('YYYY-MM-DD'))}
            renderInput={(params) => (
              <TextField
                {...params}
                {...field}
                error={!!error}
                helperText={error?.message}
                fullWidth
                inputProps={{
                  className: 'text-lg',
                }}
              />
            )}
          />
        )}
  )
}

export default DatePickerHookForm
