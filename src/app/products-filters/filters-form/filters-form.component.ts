import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { productsDB } from '../../shared/data/products';
import {ProductPlant, ProductPlantState, ProductsFiltersService} from '../state';
import { untilDestroyed } from 'ngx-take-until-destroy';
import {searchFilter} from '../../../../projects/akita-filters-plugin/src/lib/filters-utils';
import {AkitaFilter} from '../../../../projects/akita-filters-plugin/src/lib/akita-filters.model';
@Component({
  selector: 'app-filters-form',
  templateUrl: './filters-form.component.html'
})
export class FiltersFormComponent implements OnInit, OnDestroy {
  filtersForm = new FormGroup({
    search: new FormControl(),
    sortControl: new FormControl('+title'),
    empresaControl: new FormControl(),
    rating: new FormControl(),
    hijosSoloControl: new FormControl()
  });

  empresa: string;
  filterHijosSolo: boolean = false;
  public filters$: Observable<AkitaFilter<ProductPlant, ProductPlantState>[]>;
  public nbRefresh: number = 0;
  constructor( private productsService: ProductsFiltersService ) {
  }

  ngOnInit() {
    this.setInitialFilters();
    this.filtersForm.controls.search.valueChanges.pipe(untilDestroyed(this)).subscribe((search: string ) => {
      if ( search ) {
        this.productsService.setFilter({
          id: 'search',
          value: search,
          order: 20,
          predicate: entity => searchFilter(search, entity)
        });
      } else {
        this.productsService.removeFilter('search');
      }
    });

    this.filtersForm.controls.empresaControl.valueChanges.pipe(untilDestroyed(this)).subscribe(empresa => {
      this.productsService.setFilter({
        id: 'empresa',
        value: empresa,
        predicate: entity => entity.empresa === empresa
      });
    });

    this.filtersForm.controls.sortControl.valueChanges.pipe(untilDestroyed(this)).subscribe((sortBy: string ) => {
      this.productsService.setOrderBy(sortBy.slice(1), sortBy.slice(0, 1));
    });
    this.filtersForm.controls.sortControl.setValue(this.productsService.getSortValue());

    this.filterHijosSolo = this.productsService.getFilterValue('hijosSolo');

    this.filters$ = this.productsService.selectFilters();
  }

 
  
  private setInitialFilters() {
    this.filtersForm.setValue({
      search: this.productsService.getFilterValue('search'),
      sortControl: this.productsService.getSortValue(),
      empresaControl: this.productsService.getFilterValue('empresa'),
      rating: this.productsService.getFilterValue('rating'),
      hijosSoloControl: this.productsService.getFilterValue('hijosSolo')
    }, { emitEvent: false });
  }

  getNormalizedFilters() {
    console.log(this.productsService.filtersProduct.getNormalizedFilters({ withSort: true, asQueryParams: true }));
  }

  filterRating( rating: number ) {
   
    this.productsService.setFilter({
      id: 'rating',
      name: `${rating} rating`,
      value: rating,
      predicate: entity => entity.rating === rating
    });
  }



  changeHijosSolo() {
    this.filterHijosSolo = !this.filterHijosSolo;
    if( this.filterHijosSolo ) {
      this.productsService.setFilter({
        id: 'fastDelivery',
        name: 'Only fast Delivery',
        value: this.filterHijosSolo,
        order: 1,
        predicate: entity => entity.hijosSolos
      });
    } else {
      this.removeFilter('fastDelivery');
    }
  }

  removeFilter( id: any ) {
    this.productsService.removeFilter(id);
    this.setInitialFilters();
  }

  removeFilterAll() {
    this.productsService.removeAllFilter();
    this.setInitialFilters();
  }

  ngOnDestroy() {
  }

  refresh() {
    this.nbRefresh = this.productsService.filtersProduct.refresh();
  }
}
