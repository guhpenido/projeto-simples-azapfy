import { Data } from './Types';

export function createData(
    id: number,
    quantidade: string,
    vlrUnit: string,
    valor: string,
    peso: number,
    volume: number,
    prazoMin: string,
    prazoMax: string,
    desc: string
): Data {
    return {
        id,
        quantidade,
        vlrUnit,
        valor,
        peso,
        volume,
        prazoMin,
        prazoMax,
        desc,
    };
}