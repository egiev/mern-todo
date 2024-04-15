import { ValidationChain, body } from 'express-validator';

import { Priority } from '../enums/priority.enum';
import { Status } from '../enums/status.enum';

export const createValidator: ValidationChain[] = [
  body('title')
    .notEmpty()
    .withMessage('Title is required.')
    .trim()
    .isString()
    .withMessage('Title should be a string.'),
  body('date')
    .notEmpty()
    .withMessage('Date is required.')
    .trim()
    .isString()
    .withMessage('Date should be a valid format.'),
  body('description')
    .trim()
    .isString()
    .withMessage('Description should be a string.'),
  body('priority')
    .trim()
    .isString()
    .isIn(Object.values(Priority))
    .withMessage('Priority contains invalid value.'),
  body('status')
    .trim()
    .isString()
    .isIn(Object.values(Status))
    .withMessage('Status contains invalid value.'),
];
