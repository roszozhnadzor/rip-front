import { Button } from "components/Button";
import {
    ProductCardStyled,
    MainInfoStyled,
    TextStyled,
    DeleteIconStyled,
} from "components/ProductCard/ProductCard.style";
import React, { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { changeCartAction } from "store/cart/cart.actions";
import { deleteProductAction } from "store/products/products.actions";

import { ProductCardProps } from "./ProductCard.types";

export const ProductCard = ({ product, inCart = false, ...props }: ProductCardProps) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((store) => store.cart.cart?.products);
    const canDelete = useAppSelector((store) => store.auth.isAdmin);

    const handleCartClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();
            dispatch(changeCartAction([...(products?.map((product) => product.id) ?? []), product.id]));
        },
        [product.id, dispatch, products]
    );

    const handleDeleteProductFromCart = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();
            dispatch(
                changeCartAction([
                    ...(products?.filter((value) => value.id !== product.id).map((product) => product.id) ?? []),
                ])
            );
        },
        [product.id, dispatch, products]
    );

    const isInCart = useMemo(() => products?.map((product) => product.id).includes(product.id), [product.id, products]);

    const handleDeleteProduct = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();

            dispatch(deleteProductAction(product.id));
        },
        [product.id, dispatch]
    );

    return (
        <ProductCardStyled {...props}>
            <MainInfoStyled>
                <h2>{product.name}</h2>
                <div>
                    <span>{` • ${product.type}`}</span>
                    <span>{` • ${product.brand}`}</span>
                    <span>{` • Сладость ${product.strength}`}</span>
                </div>
                <p>{product.price} ₽</p>
            </MainInfoStyled>
            {!inCart ? (
                <>
                    {!isInCart ? (
                        <Button onClick={handleCartClick} styleType="outlined" filled>
                            в корзину
                        </Button>
                    ) : (
                        <TextStyled>В корзине</TextStyled>
                    )}
                    {canDelete && (
                        <Button styleType="link" onClick={handleDeleteProduct}>
                            Удалить
                        </Button>
                    )}
                </>
            ) : (
                <DeleteIconStyled className="material-symbols-outlined" onClick={handleDeleteProductFromCart}>
                    delete
                </DeleteIconStyled>
            )}
        </ProductCardStyled>
    );
};
