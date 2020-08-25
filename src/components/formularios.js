import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField';




const Formularios = () => {
    const { handleSubmit, register, errors, control } = useForm();

    const onSubmit = (data) => console.log(data)
    const validations = {
        required: true,
        maxLength: 20,
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller 
                as={TextField} 
                name="dui" 
                ref={register({
                    maxLength: 10,
                    required: true
                })}
                control={control} 
                errors={errors.dui}
                rules={{required:true, maxLength:10}}
                defaultValue="" />
            
            <input
                name="fullname"
                ref={register({
                    maxLength: 20,
                    required: true
                })}
            /><br />
            {errors.fullname?.type === "required" && "This field is required"}
            {errors.fullname?.type === "maxLength" && "You excced the maxLength"}
            <input
                name="username"
                ref={register({
                    validate: value => value === "admin" || "Nice try!"
                })}
            />
            {errors.username && errors.username.message}
            <input
                name="correo"
                ref={register({
                    required: "This field is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                    }
                })}
            />
            {errors.correo && errors.correo.message}

            <input type="submit" />
        </form>
    )
}

export default Formularios;