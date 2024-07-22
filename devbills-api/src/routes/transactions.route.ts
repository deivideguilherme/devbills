import { Router } from "express";

import { ParamsType, validator } from "../middlewares/validator.middleware";
import {
  createTransactionSchema,
  getDashboardSchema,
  getFinancialEvolutionSchema,
  indexTransactionsSchema,
} from "../dtos/transactions.dto";
import { TransactionsController } from "../controllers/transactions.controller";
import { TransactionsFactory } from "../factories/transactions.factory";

export const transactionsRoutes = Router();

const controller = new TransactionsController(
  TransactionsFactory.getServiceIntance()
);

transactionsRoutes.post(
  "/",
  validator({
    schema: createTransactionSchema,
    type: ParamsType.BODY,
  }),
  controller.create
);

transactionsRoutes.get(
  "/",
  validator({
    schema: indexTransactionsSchema,
    type: ParamsType.QUERY,
  }),
  controller.index
);

transactionsRoutes.get(
  "/dashboard",
  validator({
    schema: getDashboardSchema,
    type: ParamsType.QUERY,
  }),
  controller.getDashboard
);

transactionsRoutes.get(
  "/financial-evolution",
  validator({
    schema: getFinancialEvolutionSchema,
    type: ParamsType.QUERY,
  }),
  controller.getFinancialEvolution
);
