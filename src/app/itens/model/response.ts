import {Item} from './item';

export interface Response {
  totalItensUnimedProcessados: number;
  totalItensUnimedComSucesso: number;
  totalItensUnimedComDivergencia: number;
  itensDivergenteOrigemUnimed: Item[];
  totalItensConcentProcessados: number;
  totalItensConcentComSucesso: number;
  totalItensConcentComDivergencia: number;
  itensDivergenteOrigemConcent: Item[];
}
