export interface Data {
    id: number;
    quantidade: string;
    vlrUnit: string;
    valor: string;
    peso: number;
    volume: number;
    prazoMin: string;
    prazoMax: string;
    desc: string;
}

export interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

export type Order = 'asc' | 'desc';
