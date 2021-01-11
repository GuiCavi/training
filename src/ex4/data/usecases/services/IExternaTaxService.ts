export interface IExternalTaxService {
  calculate: (zip: string) => number;
}