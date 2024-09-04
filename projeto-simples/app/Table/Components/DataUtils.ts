import { Data } from './Types';

export function createData(
    id: number,
    quantidade: string,
    vlrUnit: string,
    valor: string,
    peso: number,
    volume: number,
    prazMin: string,
    prazMax: string,
    desc: string
): Data {
    return {
        id,
        quantidade,
        vlrUnit,
        valor,
        peso,
        volume,
        prazMin,
        prazMax,
        desc,
    };
}