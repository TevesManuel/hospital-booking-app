import React from 'react';
import { useFieldValues } from '../../../hooks/useField/useField';
import { LinearProgress, Stack, Typography } from '@mui/joy';
import TextField from '@mui/material/TextField';

interface TInputProps {
    inputValues: useFieldValues;
    label: string,
    placeholder: string,
    type : 'email' | 'password' | 'telephone' | 'dni' | 'normal',
}

const TInput : React.FC<TInputProps> = ({inputValues, label, placeholder, type}) => {

    if(type === 'password')
    {
        const minLength = 12;
        return (
            <Stack width={"100%"} spacing={0.5} sx={{ '--hue': Math.min(inputValues.value.length * 10, 120) }}>
                <TextField 
                    label={label}
                    variant="outlined"
                    {...inputValues}
                    type='password'
                    fullWidth
                    required
                >
                    <button>asd</button>
                    </TextField>
                <LinearProgress
                    determinate
                    size="sm"
                    value={Math.min((inputValues.value.length * 100) / minLength, 100)}
                    sx={{ bgcolor: 'background.level3', color: 'hsl(var(--hue) 80% 40%)' }}
                />
                <Typography
                    level="body-xs"
                    sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}
                >
                    {inputValues.value.length == 0 && ''}
                    {inputValues.value.length != 0 && inputValues.value.length < 3 && 'Very weak'}
                    {inputValues.value.length >= 3 && inputValues.value.length < 6 && 'Weak'}
                    {inputValues.value.length >= 6 && inputValues.value.length < 10 && 'Strong'}
                    {inputValues.value.length >= 10 && 'Very strong'}
                </Typography>
            </Stack>
        );
    }
    else if (type === 'email')
    {
        const checkEmail = () : boolean => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(inputValues.value);
        }

        return (<TextField 
            label={label}
            variant="outlined"
            {...inputValues}
            type='text'
            placeholder={placeholder}
            fullWidth={true}
            color={checkEmail() ? 'success' : 'error'}
            required
        />);
    }
    else if (type === 'telephone')
    {
        const formatPhoneNumber = (input: string): string => {
            const cleaned = input.replace(/\D/g, '');
            const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
            if (match)
                return `(${match[1]}) ${match[2]} ${match[3]}`;    
            return input;
        }
        return (<TextField 
            label={label}
            variant="outlined"
            value={formatPhoneNumber(inputValues.value)}
            onChange={(e : React.ChangeEvent<HTMLInputElement>)=>inputValues.onChange(e)}
            placeholder={placeholder}
            color={inputValues.value.length < 10 ? 'error' : 'success'}
            required
        />);
    }
    else if (type === 'dni')
    {
        return (<TextField 
            label={label}
            variant="outlined"
            {...inputValues}
            placeholder={placeholder}
            color={inputValues.value.length !== 8 ? 'error' : 'success'}
            required
        />);
    }

    return (
        <TextField 
            label={label}
            variant="outlined"
            {...inputValues}
            type='text'
            placeholder={placeholder}
            fullWidth
            required
        />
    );
};

export default TInput;