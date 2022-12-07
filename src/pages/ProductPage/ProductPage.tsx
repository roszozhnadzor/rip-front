import { Button } from "components/Button";
import { ProductCreateForm } from "components/ProductCreateForm";
import { MainLayout } from "layouts/MainLayout";
import { DescriptionStyled, ProductPageStyled, TextStyled } from "pages/ProductPage/ProductPage.style";
import React, { useCallback, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "store";
import { changeCartAction } from "store/cart/cart.actions";
import { getProductByIdAction } from "store/products/products.actions";
import { resetProductState } from "store/products/products.reducer";

export const ProductPage = () => {
    const params = useParams<{ id: string }>();
    const products = useAppSelector((store) => store.cart.cart?.products);

    const dispatch = useAppDispatch();
    const { product } = useAppSelector((store) => store.product);
    const canEdit = useAppSelector((store) => store.auth.isAdmin || store.auth.isStaff);

    useEffect(() => {
        if (!product) {
            dispatch(getProductByIdAction(Number(params?.id)));
        }
    }, [product, dispatch, params.id]);

    useEffect(
        () => () => {
            dispatch(resetProductState());
        },
        [dispatch]
    );

    const isInCart = useMemo(
        () => !!product?.id && products?.map((product) => product.id).includes(product?.id),
        [product?.id, products]
    );

    const handleCartClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();
            if (product?.id) {
                dispatch(changeCartAction([...(products?.map((product) => product.id) ?? []), product?.id]));
            }
        },
        [product?.id, dispatch, products]
    );

    return (
        <MainLayout>
            <ProductPageStyled>
                <h1>{product?.name}</h1>
                <h2>{product?.price} ₽</h2>
                {!canEdit && (
                    <DescriptionStyled>
                        <span>
                            Бренд: <span>{product?.brand}</span>
                        </span>
                        <span>
                            Тип: <span>{product?.type}</span>
                        </span>
                        <span>
                            Крепкость: <span>{product?.strength}</span>
                        </span>
                    </DescriptionStyled>
                )}
                {isInCart ? <TextStyled>В корзине</TextStyled> : <Button onClick={handleCartClick}>В корзину</Button>}

                {canEdit && <ProductCreateForm isForEdit initialValues={product} productId={Number(params.id)} />}
            </ProductPageStyled>
        </MainLayout>
    );
};
