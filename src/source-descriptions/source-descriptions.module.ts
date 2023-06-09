import { Module } from '@nestjs/common';
import { SourceDescriptionsController } from './source-descriptions.controller';
import { SourceDescriptionsService } from './source-descriptions.service';

@Module({
  controllers: [SourceDescriptionsController],
  providers: [SourceDescriptionsService]
})
export class SourceDescriptionsModule {}
