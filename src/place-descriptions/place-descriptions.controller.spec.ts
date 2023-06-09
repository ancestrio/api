import { Test, TestingModule } from '@nestjs/testing';
import { PlaceDescriptionsController } from './place-descriptions.controller';

describe('PlaceDescriptionsController', () => {
  let controller: PlaceDescriptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaceDescriptionsController],
    }).compile();

    controller = module.get<PlaceDescriptionsController>(PlaceDescriptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
