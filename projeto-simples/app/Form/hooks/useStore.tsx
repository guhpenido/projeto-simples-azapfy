import { create } from "zustand";

type Product = {
  quantidade: string;
  vlrUnit: string;
  valor: number;
  peso: number;
  volume: number;
  prazoMin: string;
  prazoMax: string;
  desc: string;
};

type Store = {
  products: Product[];
  addProduct: (product: Product) => void;
  getProducts: () => Product[];
};

const useStore = create<Store>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  getProducts: (): Product[] => {
    const state = useStore.getState();
    return state.products;
  },
}));



export default useStore;