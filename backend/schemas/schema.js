// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import haircut from './haircut';
// import hairtypes from './hairtypes';
// import hairThickness from './hairthickness';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'mySchema',
  types: schemaTypes.concat([haircut]),
});
