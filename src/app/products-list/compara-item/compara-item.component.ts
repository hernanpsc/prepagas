import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compara-item',
  templateUrl: './compara-item.component.html',
  styleUrls: ['./compara-item.component.css']
})
export class ComparaItemComponent implements OnInit {
  @Input() compareList: any;
  @Input() clinicasVal: any;
  @Input() productos: any;
  @Input() items: any;
  attributeGroups = [
    {
      "item_id": "product1",
      "attributes": [
        { "attribute_group_name": "Group1", "name": "Attr1", "value_name": "Value1" },
        { "attribute_group_name": "Group2", "name": "Attr2", "value_name": "Value2" }
      ]
    },
    {
      "item_id": "product2",
      "attributes": [
        { "attribute_group_name": "Group1", "name": "Attr1", "value_name": "Value3" },
        { "attribute_group_name": "Group2", "name": "Attr2", "value_name": "Value4" }
      ]
    }
  ];
  constructor() { }
  showDiv1 = false;
  showDiv2 = true;
  
  filter(value: string) {
    if (value === 'attributes') {
      this.showDiv1 = true;
      this.showDiv2 = false;
    } else if (value === 'clinicas') {
      this.showDiv1 = false;
      this.showDiv2 = true;
    } else {
      this.showDiv1 = false;
      this.showDiv2 = false;
    }
  }
  
    onPrint() {
      window.print();  
      
      
    }
  ngOnInit(): void {
  }

}
