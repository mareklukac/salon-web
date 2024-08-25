export interface IProcedura {
  name: string;
  price: string;
  secondPrice: string;
}

export interface IProcedury{
  osetreniePleti: Array<IProcedura>;
  exkluzivneOsetrenia: Array<IProcedura>;
  obocieMihalnice: Array<IProcedura>;
  pmu: Array<IProcedura>;
  firoblastPlazmaPen: Array<IProcedura>;
}

export interface IProceduryList {
  procedury: IProcedury;
}