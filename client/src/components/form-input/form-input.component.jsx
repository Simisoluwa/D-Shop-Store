import React from 'react';

import './form-input.styled';
import { GroupContainer, FormInputLabel, FormInputs } from './form-input.styled';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupContainer>
        <FormInputs  onChange={handleChange} {...otherProps}/>
        { label ?(
        <FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''}form-input-label`}> 
            {label}
        </FormInputLabel>
        )
            : null}
    </GroupContainer>
);

export default FormInput;
