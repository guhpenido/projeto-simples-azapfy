import { create } from "zustand";

type Product = {
  quantidade: number;
  vlrUnit: number;
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
  removeProductById: (id: number) => void;
  getProducts: () => Product[];
};

const useStore = create<Store>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProductById: (id) =>
    set((state) => ({
      products: state.products.filter((_, index) => index !== id),
    })),
  getProducts: (): Product[] => {
    const state = useStore.getState();
    return state.products;
  },
}));

export default useStore;
