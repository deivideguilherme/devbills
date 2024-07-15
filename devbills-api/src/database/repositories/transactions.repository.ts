import {
  CreateTransactionDTO,
  IndexTransactionsDTO,
} from "../../dtos/transactions.dto";
import { Transaction } from "../../entities/transactions.entity";
import { TransactionModel } from "../schemas/transactions.schema";

export class TransactionsRepository {
  constructor(private model: typeof TransactionModel) {}

  async create({
    title,
    date,
    amount,
    type,
    category,
  }: Transaction): Promise<Transaction> {
    const createdTransaction = await this.model.create({
      title,
      date,
      amount,
      type,
      category,
    });

    return createdTransaction.toObject<Transaction>();
  }

  //Listando as Categorias
  async index({
    title,
    categoryId,
    beginDate,
    endDate,
  }: IndexTransactionsDTO): Promise<Transaction[]> {
    const whereParams: Record<string, unknown> = {
      ...(title && { title: { $regex: title, $options: "i" } }), //"I" = case sensitive, no caso não fará diferença entre letras maiúsculas ou minúsculas
      ...(categoryId && { "category._id": categoryId }),
    };
    if (beginDate || endDate) {
      whereParams.date = {
        ...(beginDate && { $gte: beginDate }), //gte = maior que, ou igual a.
        ...(endDate && { $lte: endDate }), //lte = menor que, ou igual a.
      };
    }

    const transactions = await this.model.find(whereParams);

    const transactionsMap = transactions.map((item) =>
      item.toObject<Transaction>()
    );

    return transactionsMap;
  }
}
