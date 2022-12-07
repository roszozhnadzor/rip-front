import { CheckboxCustomStyled, CheckBoxStyled, LabelStyled } from "components/CheckboxCustom/CheckboxCustom.style";
import React, { useMemo } from "react";

import { v4 as uuid } from "uuid";
import { CheckboxCustomProps } from "./CheckboxCustom.types";

export const CheckboxCustom = ({ label, ...props }: CheckboxCustomProps) => {
    const unique_id = useMemo(() => uuid(), []);

    return (
        <CheckboxCustomStyled>
            <LabelStyled htmlFor={unique_id}>
                <CheckBoxStyled id={unique_id} {...props} type="checkbox" />
                <span className="material-symbols-outlined">done</span>
            </LabelStyled>
            <label htmlFor={unique_id}>{label}</label>
        </CheckboxCustomStyled>
    );
};
