import {
  Context,
  ControllerFactory,
  Route
} from '@foal/core';

import { ViewService } from '../services';

export class ViewControllerFactory extends ControllerFactory<ViewService> {
  protected getRoutes(service: ViewService): Route[] {
    return [
      {
        httpMethod: 'GET',
        middleware: (context: Context) => service.render(context.state),
        path: '/',
        serviceMethodName: 'render',
        successStatus: 200,
      }
    ];
  }
}

export const view = new ViewControllerFactory();