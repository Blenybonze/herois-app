import { Pipe, PipeTransform } from "@angular/core";
import { Heroi } from '../interfaces/herois.interface';


@Pipe({
    name: 'imagem'
})
export class ImagemPipe implements PipeTransform {

    transform(heroi: Heroi): string {
        if (!heroi.id && !heroi.alt_img) return 'assets/no-image.png'
        else if (heroi.alt_img) return heroi.alt_img
        else return `assets/herois/${heroi.id}.jpg`
    }

}