

export type ShopContextProps = {
    find(arg0: (item: any) => boolean): unknown;
    map(arg0: (item: any) => any): import("react").SetStateAction<ShopContextProps>;
    item?: number; 
    itemId?: number;
    id?: number;
}