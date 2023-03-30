import { Pipe, PipeTransform } from '@angular/core';
import { ProductPlant } from '../state/products-filters.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( pokemons: ProductPlant[], page: number = 0, search: string = '' ): ProductPlant[] {

    if ( search.length === 0 )
      return pokemons.slice(page, page + 5);
    
    const filteredPokemons = pokemons.filter( poke => poke.name.includes( search ) );
    return filteredPokemons.slice(page, page + 5);

  }

}
