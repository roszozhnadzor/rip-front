import { Product } from "generated/types";

export type ProductCardProps = Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    "ref"
> & {
    product: Product;
    inCart?: boolean;
};
