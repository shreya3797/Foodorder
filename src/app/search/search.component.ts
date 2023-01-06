import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchItem: string = "";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(a => {
      if (a['searchItem']) {
        this.searchItem = a['searchItem'];
      }
    });
  }
  search(): void {
    if (this.searchItem) {
      this.router.navigateByUrl('/search/' + this.searchItem);
    }
  }
}
