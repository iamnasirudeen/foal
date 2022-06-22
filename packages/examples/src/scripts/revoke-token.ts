// 3p
import { createService } from '@foal/core';
import { TypeORMStore } from '@foal/typeorm';
import { createDataSource } from '../app/create-data-source';

export const schema = {
  additionalProperties: false,
  properties: {
    token: { type: 'string' }
  },
  required: [ 'token' ],
  type: 'object',
};

export async function main({ token }: { token: string }) {
  const dataSource = createDataSource();
  await dataSource.initialize();

  const store = createService(TypeORMStore);
  store.setDataSource(dataSource);

  await store.destroy(token);
}
