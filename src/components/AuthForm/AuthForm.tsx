import React, { useCallback } from "react";
import { AuthContainerStyled, GiCupcakeStyled } from "./AuthForm.style";

import { AuthFormProps, AuthFormValues } from "./AuthForm.types";

import { Form } from "react-final-form";
import { validateAuthForm } from "./AuthForm.utils";
import { InputField } from "components/Fields/InputField";
import { Button } from "components/Button";
import { loginAction } from "store/auth/auth.actions";
import { useAppDispatch } from "store";

export const AuthForm = ({ onRegisterButtonClick }: AuthFormProps) => {
    const dispatch = useAppDispatch();

    const handleFormSubmit = useCallback(
        (values: AuthFormValues) => {
            dispatch(loginAction(values)).catch((error) => alert(error));
        },
        [dispatch]
    );

    return (
        <AuthContainerStyled>
            <GiCupcakeStyled size={100} />
            <Form<AuthFormValues> onSubmit={handleFormSubmit} validate={validateAuthForm}>
                {({ handleSubmit }) => (
                    <>
                        <InputField name="email" type="email" placeholder="e-mail" />
                        <InputField name="password" type="password" placeholder="password" />
                        <Button type="submit" onClick={handleSubmit as VoidFunction} filled>
                            Войти
                        </Button>
                        <Button styleType="link" onClick={onRegisterButtonClick}>
                            Зарегистрироваться
                        </Button>
                    </>
                )}
            </Form>
        </AuthContainerStyled>
    );
};
