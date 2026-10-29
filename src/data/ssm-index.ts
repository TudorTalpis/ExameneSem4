import type { Question } from '../types/question';
import { ssmLectia1Questions } from './ssm-lectia1';
import { ssmLectia2Questions } from './ssm-lectia2';
import { ssmLectia3Questions } from './ssm-lectia3';

export const ssmAllQuestions: Question[] = [
  ...ssmLectia1Questions,
  ...ssmLectia2Questions,
  ...ssmLectia3Questions,
];
