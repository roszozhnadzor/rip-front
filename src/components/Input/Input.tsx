import React from "react";
import { InputStyled, InputWrapperStyled } from "./Input.style";

import { InputProps } from "./Input.types";

export const Input = ({ isSearch = false, ...props }: InputProps) => {
    return (
        <InputWrapperStyled>
            <InputStyled isSearch={isSearch} {...props} />
            {isSearch && <span className="material-symbols-outlined">search</span>}
        </InputWrapperStyled>
    );
};
