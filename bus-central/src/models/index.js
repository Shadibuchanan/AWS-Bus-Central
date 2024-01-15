// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bus, School } = initSchema(schema);

export {
  Bus,
  School
};