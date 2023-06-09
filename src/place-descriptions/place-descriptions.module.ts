import { Module } from '@nestjs/common';
import { PlaceDescriptionsController } from './place-descriptions.controller';
import { PlaceDescriptionsService } from './place-descriptions.service';

@Module({
  controllers: [PlaceDescriptionsController],
  providers: [PlaceDescriptionsService]
})
export class PlaceDescriptionsModule {}
