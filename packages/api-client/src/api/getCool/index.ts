import { Endpoints } from '../../types';

export const getCool: Endpoints['getCool'] = async (
  context,
  params
) => {
  console.log('getCool has been called');

  return { data: 'Hello from getCool endpoint!' };
};
