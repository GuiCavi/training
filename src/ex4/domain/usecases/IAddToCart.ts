export interface IAddToCart<T> {
  add: (item: T, qtd: number) => void;
}