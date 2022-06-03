interface Meta {
    fileName: string;
}

export interface Drug {
    id: string;
    images: string[];
    tenThuoc: string;
    dotPheDuyet: string;
    soQuyetDinh: string;
    pheDuyet: string;
    hieuLuc?: string | '';
    soDangKy: string;
    hoatChat: string;
    phanLoai: string;
    nongDo: string;
    taDuoc: string;
    baoChe: string;
    dongGoi: string;
    tieuChuan: string;
    tuoiTho: string;
    congTySx: string;
    congTySxCode: string;
    nuocSx: string;
    diaChiSx: string;
    congTyDk: string;
    nuocDk: string;
    diaChiDk: string;
    giaKeKhai?: string | '';
    huongDanSuDung?: string | '';
    huongDanSuDungBn?: string | '';
    nhomThuoc: string;
    isHide?: string;
    rate: string;
    rutSdk: number;
    rutSdkFile: string[];
    chuY?: string | '';
    ten?: string | '';
    meta: Meta;
    rows: string[];
    state: number;
    tenThuocEn?: string;
}

