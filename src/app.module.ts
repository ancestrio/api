import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonsModule } from './persons/persons.module';
import { RelationshipsModule } from './relationships/relationships.module';
import { SourceDescriptionsModule } from './source-descriptions/source-descriptions.module';
import { AgentsModule } from './agents/agents.module';
import { EventsModule } from './events/events.module';
import { DocumentsModule } from './documents/documents.module';
import { PlaceDescriptionsModule } from './place-descriptions/place-descriptions.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DATABASE_URI'),
      }),
      inject: [ConfigService],
    }),
    PersonsModule,
    RelationshipsModule,
    SourceDescriptionsModule,
    AgentsModule,
    EventsModule,
    DocumentsModule,
    PlaceDescriptionsModule,
    GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
