export interface IParecer {
    assinaturaDigital?: string;
    cid: string[];
    concluido: Boolean;
    dataAssinaturaDigital?: Date;
    dataParecer: Date;
    id: number;
    observacao?: string;
    peritoId: number;
    servicoId: number;
    texto: string;
}
