/* eslint-disable no-underscore-dangle */
import AdminJS from 'adminjs';
import { Injectable } from '@nestjs/common';
import { AbstractHttpAdapter } from '@nestjs/core';
import { ExpressLoader } from './loaders/express.loader';
import { AdminModuleOptions } from './interfaces/admin-module-options.interface';
import { AbstractLoader } from './loaders/abstract.loader';

@Injectable()
export class ExpressCustomLoader extends AbstractLoader {
  public register(
    admin: AdminJS,
    httpAdapter: AbstractHttpAdapter,
    options: AdminModuleOptions,
  ) {
    // eslint-disable-next-line no-console
    console.log('Custom loader');
    new ExpressLoader().register(admin, httpAdapter, options);
  }
}
