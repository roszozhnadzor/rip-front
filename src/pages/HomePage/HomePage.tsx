import { ProductCard } from "components/ProductCard";
import { FiltersBlock } from "components/FiltersBlock";
import { MainLayout } from "layouts/MainLayout";
import {
    ProductsStyled,
    ContentStyled,
    MainPageStyled,
    TableStyled,
    NothingStyled,
    RightContainerStyled,
} from "pages/HomePage/HomePage.style";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "store";
import { getProductListAction } from "store/products/products.actions";
import { FetchStatus } from "types/asyncState";
import { ProductCreateForm } from "components/ProductCreateForm";
import { Button } from "components/Button";

export const HomePage = () => {
    const dispatch = useAppDispatch();
    const { products: productsSearch, status } = useAppSelector((store) => store.product);
    const canCreate = useAppSelector((store) => store.auth.isAdmin || store.auth.isStaff);
    const [showForm, setShowForm] = useState(false);

    const navigate = useNavigate();

    const handleCardClick = useCallback(
        (id: number) => {
            navigate(`/products/${id}`);
        },
        [navigate]
    );

    useEffect(() => {
        if (status === FetchStatus.IDLE) {
            dispatch(getProductListAction());
        }
    }, [dispatch, status]);

    return (
        <MainLayout>
            <MainPageStyled>
                <ContentStyled>
                    <h1>Mary's candies</h1>
                    <h2>the most delicious sweets from all over the world</h2>

                    <TableStyled>
                        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                            <FiltersBlock />
                            <ProductsStyled>
                                {productsSearch?.length ? (
                                    <>
                                        {productsSearch?.map((product) => (
                                            <ProductCard
                                                key={product.id}
                                                product={product}
                                                onClick={() => handleCardClick(product?.id ?? 0)}
                                            />
                                        ))}
                                    </>
                                ) : (
                                    <NothingStyled>Нет продуктов</NothingStyled>
                                )}
                            </ProductsStyled>
                        </div>
                        <RightContainerStyled>
                            {canCreate && (
                                <>
                                    <Button onClick={() => setShowForm((prev) => !prev)}>Создать продукт</Button>
                                    {showForm && <ProductCreateForm />}
                                </>
                            )}
                        </RightContainerStyled>
                    </TableStyled>
                </ContentStyled>
            </MainPageStyled>
        </MainLayout>
    );
};
