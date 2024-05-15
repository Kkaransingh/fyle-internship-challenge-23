import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'responsive-webpage';
  username: string = '';
  userDetails: any = {};
  repositories: any[] = [];
  pagedRepositories: any[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 3;
  itemsPerPageOptions: number[] = [3, 5, 10]; // Options for number of repositories per page

  constructor(private githubService: GithubService) {}

  searchUser() {
    if (this.username) {
      this.githubService.getUserDetails(this.username).subscribe(
        (userData: any) => {
          this.userDetails = userData;
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );

      this.githubService.getRepositories(this.username).subscribe(
        (data: any[]) => {
          this.repositories = data;
          this.paginateRepositories();
        },
        (error) => {
          console.error('Error fetching repositories:', error);
        }
      );
    }
  }

  paginateRepositories() {
    const totalPages = Math.ceil(this.repositories.length / this.itemsPerPage);
    this.pagedRepositories = Array.from({ length: totalPages }, (_, index) => {
      const startIndex = index * this.itemsPerPage;
      return this.repositories.slice(startIndex, startIndex + this.itemsPerPage);
    });
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.pagedRepositories.length - 1) {
      this.currentPage++;
    }
  }

  onItemsPerPageChange() {
    this.paginateRepositories();
  }

  get totalPages(): number {
    return this.pagedRepositories.length;
  }
}
