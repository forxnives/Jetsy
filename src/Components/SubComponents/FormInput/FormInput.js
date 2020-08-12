import React from 'react';

const FormInput = ({label, handleChange, ...otherProps}) => {

    return (

        <div>

            <input className='form-input' onChange={handleChange} {...otherProps} />

            { label ? (
    
                <label className={`${otherProps.value.length ? 'shrink' : '' 
                    } form-input-label`}
                >
        
                    {label}


                </label>)
    
            : null
            }

        </div>

    )

}

export default FormInput;