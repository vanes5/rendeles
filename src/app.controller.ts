import { Controller, Get, Query, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { response } from 'express';

class Felhasznalo{
  nev: string
  orszag: string
  irszam: string
  varos: string
  uhSzam: string
  kupon: string
}

@Controller()
export class AppController {
  #Felhasznalok: Felhasznalo[] = [];
  constructor(private readonly appService: AppService) {}
  
  @Get()
  @Render('index')
  getHello(@Query('nev') Nev: string, @Query('orszag') Orszag:string, @Query('iranyitoszam') IrSzam: string, @Query('varos') Varos: string, @Query('utcaHazszam') UHszam: string, @Query('kuponkod') kupon: string, @Query('bankkartyaszam') bkSzam: string, @Query('lejaratiDatum') lDatum: string, @Query('biztonsagiKod') bKod: string, @Res() response) {

    const Rendeles: Felhasznalo = {
      nev: Nev,
      orszag: Orszag,
      irszam: IrSzam,
      varos: Varos,
      kupon: kupon,
      uhSzam: UHszam

    }

    if(Nev == "" || Orszag == "" || IrSzam == "" || Varos == "" || UHszam == "" || bkSzam == ""|| lDatum =="" || bKod == ""){
    return {
      a:"Minden mezőt ki kell tölteni!",
      Rendeles
    }
    }else if(!/\d{4}/.test(IrSzam)){
      Rendeles.irszam = ""
      return {
        a:"Irányítószám formátuma nem megfelelő!",
        Rendeles
      }
    }
    else if(kupon != ""){
      if (!/^[A-Z]{2}-\d{4}$/.test(kupon)) {
        Rendeles.kupon = "";
        return {
          a:"Kupon formátuma nem megfelelő!",
          Rendeles
        }
      }
    }
    else if(!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(bkSzam)){
      return {
        a:"Bankkártyaszám formátuma nem megfelelő!",
        Rendeles
      }
    }
    else if(!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(lDatum)){
      return {
        a:"Lejárati dátum formátuma nem megfelelő!",
        Rendeles
      }
    }
    else if(!/^\d{3}$/.test(bKod)){
      return {
        a:"Biztonsági kód formátuma nem megfelelő!",
        Rendeles
      }
    }
    else{
      return response.redirect("/sikeresRendeles")
    }

  }

  @Get('sikeresRendeles')
  @Render('siker')
  rSiker(){
    return;
  }


  

}
