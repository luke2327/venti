import type * as core from 'express-serve-static-core';

export type SpecifiedRequest<
  ReqQuery = core.Query,
  ResBody = any,
  ReqBody = any,
  Locals extends Record<string, any> = Record<string, any>,
> = core.Request<core.ParamsDictionary, ResBody, ReqBody, ReqQuery, Locals>;
