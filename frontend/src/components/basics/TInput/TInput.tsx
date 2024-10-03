import React from 'react';
import { styled } from '@mui/joy/styles';
import Input from '@mui/joy/Input';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import { useFieldValues } from '../../../hooks/useField/useField';

const StyledInput = styled('input')({
    border: 'none', 
    minWidth: 0,
    outline: 0,
    padding: 0,
    paddingTop: '1em',
    flex: 1,
    color: 'inherit',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontStyle: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    textOverflow: 'ellipsis',
    width: '100%',
    '&::placeholder': {
    opacity: 0,
    transition: '0.1s ease-out',
    },
    '&:focus::placeholder': {
        opacity: 1,
    },
    '&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label': {
        top: '0.5rem',
        fontSize: '0.75rem',
    },
    '&:focus ~ label': {
        color: 'var(--Input-focusedHighlight)',
    },
    '&:-webkit-autofill': {
        alignSelf: 'stretch', // to fill the height of the root slot
    },
    '&:-webkit-autofill:not(* + &)': {
        marginInlineStart: 'calc(-1 * var(--Input-paddingInline))',
        paddingInlineStart: 'var(--Input-paddingInline)',
        borderTopLeftRadius:
        'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
        borderBottomLeftRadius:
        'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
    },
});

const StyledLabel = styled('label')(({ theme }) => ({
    position: 'absolute',
    lineHeight: 1,
    top: 'calc((var(--Input-minHeight) - 1em) / 2)',
    color: theme.vars.palette.text.tertiary,
    fontWeight: theme.vars.fontWeight.md,
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
}));


interface TInputProps {
    inputValues: useFieldValues;
    label: string,
    placeholder: string,
    type : 'email' | 'password' | 'telephone' | 'dni' | 'normal',
}

const TInput : React.FC<TInputProps> = ({inputValues, label, placeholder}) => {
    const InnerInput = React.forwardRef<
    HTMLInputElement,
    React.JSX.IntrinsicElements['input']
        >(function InnerInput(props, ref) {
        const id = React.useId();
        return (
        <React.Fragment>
            <StyledInput {...props} ref={ref} id={id} />
            <StyledLabel htmlFor={id}>{label}</StyledLabel>
        </React.Fragment>
        );
    });
    
    return (
        <Input
            fullWidth
            endDecorator={<CheckCircleOutlined color='success' />}
            slots={{ input: InnerInput }}
            slotProps={{ input: { placeholder: placeholder } }}
            sx={{ '--Input-minHeight': '50px', '--Input-radius': '6px' }}
        />
    );
};

export default TInput;