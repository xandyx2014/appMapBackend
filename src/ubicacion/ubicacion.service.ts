import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ubicacion } from '../entity/ubicacion.entity';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import UbicacionDto from './ubicacion.dto';
@Injectable()
export class UbicacionService {
  constructor(
    @InjectRepository(Ubicacion)
    private readonly ubicacionRepository: Repository<Ubicacion>,
  ) {}
  showAll(): Promise<Ubicacion[]> {
    return this.ubicacionRepository.find();
  }
  store(ubicacion: UbicacionDto) {
    return this.ubicacionRepository.save({...ubicacion});
  }
  async update(id, body: UbicacionDto) {
    const { raw } = await (this.ubicacionRepository.update(id , {...body}) as Promise<UpdateResult>);
    const valor = raw.affectedRows === 0 ? false : true;
    return {
      ok: valor,
      data: raw.affectedRows,
    };
  }
  async delete(id: number) {
    const { raw } = await (this.ubicacionRepository.delete(id) as Promise<DeleteResult>);
    const valor = raw.affectedRows === 0 ? false : true;
    return {
      ok: valor,
      data: raw.affectedRows,
    };
  }
  index(id: number) {
    return this.ubicacionRepository.findOne(id);
  }
}
