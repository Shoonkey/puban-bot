export default interface Mutation {
  base: string;
  encrypted: string;
  todo?: boolean;
  only?: boolean;
}