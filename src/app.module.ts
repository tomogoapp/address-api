import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ReadXlsFileModule } from './read_xls_file/read_xls_file.module'
import { MigrationModule } from './migration/migration.module'
import { LocationsModule } from './locations/locations.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ReadXlsModule } from './read_xls/read_xls.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL,{
      dbName:process.env.MONGO_DB
    }),
    ReadXlsFileModule,
    MigrationModule,
    LocationsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:join(process.cwd(),'src/schema.gql')
    }),
    ReadXlsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
