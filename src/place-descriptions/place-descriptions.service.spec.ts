import { Test, TestingModule } from '@nestjs/testing';
import { PlaceDescriptionsService } from './place-descriptions.service';

describe('PlaceDescriptionsService', () => {
  let service: PlaceDescriptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaceDescriptionsService],
    }).compile();

    service = module.get<PlaceDescriptionsService>(PlaceDescriptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
