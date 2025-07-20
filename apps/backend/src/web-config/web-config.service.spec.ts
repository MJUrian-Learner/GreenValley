import { Test, TestingModule } from '@nestjs/testing';
import { WebConfigService } from './web-config.service';

describe('WebConfigService', () => {
  let service: WebConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebConfigService],
    }).compile();

    service = module.get<WebConfigService>(WebConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
