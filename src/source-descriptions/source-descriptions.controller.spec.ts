import { Test, TestingModule } from '@nestjs/testing';
import { SourceDescriptionsController } from './source-descriptions.controller';

describe('SourceDescriptionsController', () => {
  let controller: SourceDescriptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SourceDescriptionsController],
    }).compile();

    controller = module.get<SourceDescriptionsController>(SourceDescriptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
