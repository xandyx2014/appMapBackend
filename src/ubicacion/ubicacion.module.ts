import { Module } from '@nestjs/common';
import { UbicacionController } from './ubicacion.controller';
import { UbicacionService } from './ubicacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ubicacion } from '../entity/ubicacion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ubicacion]),
  ],
  controllers: [
    UbicacionController,
  ],
  providers: [
    UbicacionService,
  ],
})
export class UbicacionModule {}
