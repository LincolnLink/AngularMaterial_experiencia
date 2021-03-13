import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { delay, take, takeUntil, tap } from "rxjs/operators";


export class CrudService<T> {


  constructor(
      protected http: HttpClient,
      private API_URL: string
  ) { }



  // GET All
  list(){
    return this.http.get<T[]>(this.API_URL)
    .pipe(
      take(1)
    );

  }

  // GET All
  /*
  list(){
    return this.http.get<T>(this.API_URL)
    .pipe(
      take(1),
      tap(console.log)
    );
  }*/


  // Get byID
  loadById(id: number){
    return this.http.get<T>(`${this.API_URL}/${id}`)
    .pipe(
      take(1)
    );
  }


  // Post
  private create(record: string){

    // Com apenas uma tentativa, a não ser se o backend fosse reativo!
    return this.http.post(this.API_URL, record)
    .pipe(take(1));

  }


  // Put
  private update(record: any){
    return this.http.put(`${this.API_URL}`,record)
    .pipe(take(1));
  }


  bulkupdate(record: any[]){

    return this.http.put(`${this.API_URL}`, record)
    .pipe(
      take(1)
    );

  }


  // Método que salva ou atualiza
  save(record: any){
    if(record['id']){
      return this.update(record);
    }
    return this.create(record);
  }


  // Método que remove, ou desativa o conteudo do banco!
  delete(id: number){
   return this.http.delete(`${this.API_URL}/${id}`)
    .pipe(
      take(1)
    );
  }


}
