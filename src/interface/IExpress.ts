import { NextFunction, Request, Response } from "express";

export interface IReq<T, P> extends Request<P, {}, T> {
  user?: any;
}

export interface IRes extends Response {}

export interface INext extends NextFunction {}
