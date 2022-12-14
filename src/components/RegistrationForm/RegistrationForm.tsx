import React, { useCallback, useEffect } from "react";
import { CheckboxesContainerStyled, GiCupcakeStyled, RegistrationContainerStyled } from "./RegistrationForm.style";

import { RegistrationFormProps, RegistrationFormValues } from "./RegistrationForm.types";

import { Form } from "react-final-form";
import { normalizeData, validateAuthForm } from "./RegistrationForm.utils";
import { InputField } from "components/Fields/InputField";
import { Button } from "components/Button";
import { CheckboxField } from "components/Fields/CheckboxField";
import { useAppDispatch, useAppSelector } from "store";
import { editUserAction, registrationAction } from "store/auth/auth.actions";

export const RegistrationForm = ({ onLoginClick, initialValues, isForEdit }: RegistrationFormProps) => {
    const dispatch = useAppDispatch();
    const { error } = useAppSelector((store) => store.auth);

    const handleFormSubmit = useCallback(
        (values: RegistrationFormValues) => {
            if (isForEdit) {
                dispatch(editUserAction(normalizeData(values)));
            } else {
                dispatch(registrationAction(normalizeData(values)));
            }
        },
        [dispatch, isForEdit]
    );

    useEffect(() => {
        if (error) {
            alert(JSON.stringify(error, null, 2));
        }
    }, [error]);

    return (
        <RegistrationContainerStyled>
            <GiCupcakeStyled size={100} />
            <Form<RegistrationFormValues>
                onSubmit={handleFormSubmit}
                validate={validateAuthForm}
                initialValues={initialValues}
            >
                {({ handleSubmit }) => (
                    <>
                        <InputField name="email" type="email" placeholder="e-mail" />
                        <InputField name="password" type="password" placeholder="password" />
                        <InputField name="username" type="text" placeholder="username" />
                        <CheckboxesContainerStyled>
                            <CheckboxField name="isAdmin" label="?? ?????????????? ????????????" />
                            <CheckboxField name="isStaff" label="?? ?????????????? ??????????????????" />
                        </CheckboxesContainerStyled>

                        <Button type="submit" onClick={handleSubmit as VoidFunction} filled>
                            {isForEdit ? "??????????????????????????" : "????????????????????????????????????"}
                        </Button>
                        {!isForEdit && (
                            <>
                                <Button styleType="link" onClick={onLoginClick}>
                                    ??????????
                                </Button>
                            </>
                        )}
                    </>
                )}
            </Form>
        </RegistrationContainerStyled>
    );
};
