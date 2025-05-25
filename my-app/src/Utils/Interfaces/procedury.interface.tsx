export interface IProcedura {
  name: string;
  price: string;
  secondPrice: string;
}

export interface IProcedury {
  osetreniePleti: Array<IProcedura>;
  pristrojoveOsetrenia: Array<IProcedura>;
  mihalniceObocie: Array<IProcedura>;
  pmu: Array<IProcedura>;
  plazmaPen: Array<IProcedura>;
}

export interface IProceduryList {
  procedury: IProcedury;
}

export interface IProceduraData {
  id: number;
  title: string;
  image: string;
  summary: string;
  description: React.ReactNode;
}
