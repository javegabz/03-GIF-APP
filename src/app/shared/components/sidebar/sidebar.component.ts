import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  constructor(
              private gifsService : GifsService
            ) {
            }
  
  public tags2: string[] = [];
  
  showTag ( ) {
    this.tags2=this.gifsService.tagsHistory;
  }

  get tags() {
    return this.gifsService.tagsHistory;
  }

  searchTag ( newTag : string  ) {
    this.gifsService.searchTag(newTag);
    //this.tagInput.nativeElement.value = "";
}


}
