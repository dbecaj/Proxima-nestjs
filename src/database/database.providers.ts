import * as mongoose from 'mongoose';

// Create our database providers
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://localhost/nest', { useFindAndModify: false }),
  },
];