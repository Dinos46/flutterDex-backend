import { NextFunction, Request, Response } from "express";

export interface IReq<T> extends Request<{}, {}, T> {
  user?: any;
}

export interface IRes extends Response {}

export interface INext extends NextFunction {}
