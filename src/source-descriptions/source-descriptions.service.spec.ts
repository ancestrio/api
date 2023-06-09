import { Test, TestingModule } from '@nestjs/testing';
import { SourceDescriptionsService } from './source-descriptions.service';

describe('SourceDescriptionsService', () => {
  let service: SourceDescriptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SourceDescriptionsService],
    }).compile();

    service = module.get<SourceDescriptionsService>(SourceDescriptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
