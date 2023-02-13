import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../Services/food.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
   tags? : Tag[] = [];
   @Input()
   foodPagetags?:string [];

   @Input()
   justifyContent:string = 'center';

   constructor(private fs:FoodService){}

   ngOnInit():void {
    if(!this.foodPagetags)
    this.tags = this.fs.getAllTag()
   }

}
