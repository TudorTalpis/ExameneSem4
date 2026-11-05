import type { Question } from '../types/question';
import { pdFunctiiQuestions } from './pd-functii';
import { pdMapFilterReduceQuestions } from './pd-map-filter-reduce';
import { pdStructuriQuestions } from './pd-structuri';
import { pdNumpyQuestions } from './pd-numpy';
import { pdScrapingQuestions } from './pd-scraping';
import { pdPandasQuestions } from './pd-pandas';
import { pdGraficeQuestions } from './pd-grafice';
import { pdTestModelQuestions } from './pd-test-model';

export const pdAllQuestions: Question[] = [
  ...pdFunctiiQuestions,
  ...pdMapFilterReduceQuestions,
  ...pdStructuriQuestions,
  ...pdNumpyQuestions,
  ...pdScrapingQuestions,
  ...pdPandasQuestions,
  ...pdGraficeQuestions,
  ...pdTestModelQuestions,
];
