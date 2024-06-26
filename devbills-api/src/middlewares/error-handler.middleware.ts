import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app.error";
import { StatusCodes } from "http-status-codes";

// Toda vez que eu tiver um middleware que receberá 4 parâmetros, ele será um Error Handler, ou seja lidará com os erros da aplicação

// AppError são erros "controlados" por nós, já o Error já vem de erros variados, banco de dados, API's externas, ect
export function errorHandler(
  error: AppError | Error,
  _: Request,
  res: Response,
  __: NextFunction
) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: error.message });
}
