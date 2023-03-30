import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})

export class BusinessComponent implements OnInit {
  
  myForm:FormGroup;
        disabled = false;
        ShowFilter = false;
        limitSelection = false;
        cities: any = [];
        selectedItems: any = [];
        dropdownSettings: any = {};
        constructor(private fb: FormBuilder) {}

        ngOnInit() {
            this.cities = [
              {
                item_id: 1,
                item_text: "India",
                image: "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg",
              },
              {
                item_id: 2,
                item_text: "Spain",
                image: "http://www.sciencekids.co.nz/images/pictures/flags96/Spain.jpg",
              },
              {
                item_id: 3,
                item_text: "United Kingdom",
                image:
                  "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg",
              },
              {
                item_id: 4,
                item_text: "Canada",
                image:
                  "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg",
                
              },
              {
                item_id: 5,
                item_text: "Israel",
                image:
                  "http://www.sciencekids.co.nz/images/pictures/flags96/Israel.jpg",
              },
              {
                item_id: 6,
                item_text: "Brazil",
                image:
                  "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg",
              },
              {
                item_id: 7,
                item_text: "Barbados",
                image:
                  "http://www.sciencekids.co.nz/images/pictures/flags96/Barbados.jpg",
              },
              {
                item_id: 8,
                item_text: "Mexico",
                image:
                  "http://www.sciencekids.co.nz/images/pictures/flags96/Mexico.jpg",
              },
            ];
            this.selectedItems = [
              {
                item_id: 1,
                item_text: "India",
                image: "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg",
              },
              {
                item_id: 5,
                item_text: "Israel",
                image:
                  "http://www.sciencekids.co.nz/images/pictures/flags96/Israel.jpg",
              },
            ];
            this.dropdownSettings = {
                singleSelection: false,
                idField: 'item_id',
                textField: 'item_text',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 3,
                allowSearchFilter: this.ShowFilter
            };
            this.myForm = this.fb.group({
                city: [this.selectedItems]
            });
        }

        onItemSelect(item: any) {
            console.log('onItemSelect', item);
        }
        onSelectAll(items: any) {
            console.log('onSelectAll', items);
        }
        toogleShowFilter() {
            this.ShowFilter = !this.ShowFilter;
            this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
        }

        handleLimitSelection() {
            if (this.limitSelection) {
                this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
            } else {
                this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
            }
        }
    }