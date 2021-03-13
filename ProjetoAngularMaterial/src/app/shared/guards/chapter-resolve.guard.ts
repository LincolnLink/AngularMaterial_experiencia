
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ChapterService } from '../service/chapter.service';
import { chapter } from './../Entidades/chapter';


@Injectable({
  providedIn: 'root'
})
export class ChapterResolveGuard implements Resolve<chapter> {


  constructor(
    private chapterService: ChapterService
    ){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<chapter[]>
    {

       // Carregando os capitulos
       return this.chapterService.list()

    }


}
