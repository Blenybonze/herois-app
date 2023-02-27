import { Pipe, PipeTransform } from "@angular/core";
import { Heroi } from '../interfaces/herois.interface';


@Pipe({
    name: 'imagem'
})
export class ImagemPipe implements PipeTransform {

    transform(heroi: Heroi): string {
        return `assets/herois/${heroi.id}.jpg`
    }

}