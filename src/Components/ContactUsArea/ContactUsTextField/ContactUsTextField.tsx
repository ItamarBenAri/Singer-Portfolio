import { TextField } from "@mui/material";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";
import { FieldError, UseFormRegister, useFormContext } from "react-hook-form";
import ContactUsFormValidation from "../ContactUsFormValidation";

type ContactUsTextFieldProps = {
    registerTo: string,
    register: UseFormRegister<any>,
    label: string,
    rows?: number | undefined
    autoFocus?: boolean,
    type?: string
}

type ValidationKeys = keyof typeof ContactUsFormValidation;

export function ContactUsTextField(props: ContactUsTextFieldProps): JSX.Element {
    const { formState: { errors } } = useFormContext();
    const errorText = (errors[props.registerTo] as FieldError)?.message || '';
    const validationLabelName = props.registerTo + "Validation" as ValidationKeys;
    const validationRules = ContactUsFormValidation[validationLabelName];
    return (
        <div className="ContactUsTextField">
            <TextField
                required
                fullWidth
                label={props.label}
                autoFocus={props.autoFocus}
                sx={AppComponentsStyle.contactUsTextField}
                {...props.register(props.registerTo, validationRules)}
                error={!!errors[props.registerTo]}
                helperText={errorText}
                multiline={props.rows ? true : false}
                rows={props.rows}
                type={props.type}
            />
        </div>
    );
}
