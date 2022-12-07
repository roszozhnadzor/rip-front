import { FiltersBlockStyled, FiltersTooltipStyled } from "components/FiltersBlock/FiltersBlock.style";
import { Input } from "components/Input";
import React, { useCallback, useState } from "react";
import { CheckboxCustom } from "components/CheckboxCustom";
import { useAppDispatch, useAppSelector } from "store";
import { getSearchProductListAction } from "store/products/products.actions";

export const FiltersBlock = () => {
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();
    const [showFilters, setShowFilters] = useState(false);
    const [checkedBrand, setCheckedBrand] = useState<string>("");
    const { availableBrands } = useAppSelector((store) => store.product);

    const handleSearchChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
            dispatch(getSearchProductListAction(`?search=${e.target.value}`));
        },
        [dispatch]
    );

    const handleBrandChange = useCallback(
        (brand: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.checked) {
                setCheckedBrand(brand);
                dispatch(getSearchProductListAction(`?brand=${brand}`));
            } else {
                setCheckedBrand("");
                dispatch(getSearchProductListAction(undefined));
            }
        },
        [dispatch]
    );

    return (
        <FiltersBlockStyled>
            <Input placeholder="Поиск" isSearch value={search} onChange={handleSearchChange} />
            <span className="material-symbols-outlined" onClick={() => setShowFilters((prev) => !prev)}>
                tune
            </span>
            <FiltersTooltipStyled isShow={showFilters}>
                <h3>Фильтры</h3>
                {!!availableBrands?.length && <h4>Город</h4>}
                {availableBrands?.map((brand, index) => (
                    <CheckboxCustom
                        label={brand}
                        key={index}
                        onChange={handleBrandChange(brand ?? "")}
                        checked={brand === checkedBrand}
                    />
                ))}
            </FiltersTooltipStyled>
        </FiltersBlockStyled>
    );
};
