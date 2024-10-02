import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(@Query('nev') Nev: string, @Query('orszag') Orszag:string, @Query('iranyitonszam') IrSzam: string, @Query('varos') Varos: string, @Query('utcaHazszam') UHszam: string, @Query('kuponkod') kupon: string, @Query('bankkartyaszam') bkSzam: string, @Query('lejaratiDatum') lDatum: string, @Query('biztonsagiKod') bKod: string) {

    if(Nev == null || Orszag == null || IrSzam == null || Varos == null || UHszam == null || kupon == null || bkSzam == null || lDatum ==null || bKod == null){
    return {
      a: true 
    }
    }

  }


  

}
