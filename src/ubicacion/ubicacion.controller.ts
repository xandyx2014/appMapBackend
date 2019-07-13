import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import UbicacionDto from './ubicacion.dto';

@Controller('ubicacion')
export class UbicacionController {
  constructor(private ubicacionService: UbicacionService) {}
  @Get()
  obtenerUbicaciones() {
    return this.ubicacionService.showAll();
  }
  @Get(':id')
  obtenerUbicacion(@Param('id') id) {
    return this.ubicacionService.index(id);
  }
  @Post()
  crearUbicacion(@Body() body: UbicacionDto) {
    return this.ubicacionService.store(body);
  }
  @Put(':id')
  actualizarUbicacion(@Body() body: UbicacionDto, @Param('id') id: number) {
    return this.ubicacionService.update(id, body);
  }
  @Delete(':id')
  borrarUbicacion(@Param('id') id) {
    return this.ubicacionService.delete(id);
  }
}
