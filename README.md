## GitBuddy - Github Repositories Listing Page

### Project Overview

Git Google is an Angular 14+ single-page application (SPA) that allows users to input a GitHub username and displays the public GitHub repositories associated with that user. The application includes features such as server-side pagination, a search bar, skeleton loaders, and a dropdown for selecting page size.

### Features

- Search GitHub users by username
- Display public repositories of the user
- Server-side pagination
- Select page size (10, 20, 50, 100)
- Skeleton loaders during API calls
- Cache API responses to avoid duplicate calls
- Zero state for users not found
- Tailwind CSS for styling
- Unit tests with 100% code coverage for one component and one service

### Prerequisites

- Node.js (v14 or higher)
- Angular CLI (v14 or higher)

### Hosting

The application is hosted on Vercel. You can access it [here](https://fyle-internship-challenge-23-six-lemon.vercel.app/).

### API Documentation

For detailed information about the GitHub API used in this project, visit the [GitHub REST API documentation](https://docs.github.com/en/rest/reference).


### Assumptions

- The GitHub API rate limits are managed using caching to reduce duplicate calls.
- The application handles common errors such as user not found and API rate limits gracefully.
- The design is flexible and can be modified to fit different UI/UX requirements.

### Known Issues

- The application might not work as expected if GitHub API rate limits are exceeded. Ensure to handle API rate limits by caching the responses and displaying appropriate messages to the user.

### Future Improvements

- Enhance search functionality with advanced filters.
- Implement user authentication to access private repositories.
- Improve UI/UX with more interactive elements and better animations.


### Project Structure

```
src/
│
├── app/
│   ├── components/
│   │   ├── search-bar/
│   │   │   ├── search-bar.component.ts
│   │   │   ├── search-bar.component.html
│   │   │   └── search-bar.component.scss
│   │   ├── repository-list/
│   │   │   ├── repository-list.component.ts
│   │   │   ├── repository-list.component.html
│   │   │   └── repository-list.component.scss
│   │   └── repository-item/
│   │       ├── repository-item.component.ts
│   │       ├── repository-item.component.html
│   │       └── repository-item.component.scss
│   ├── services/
│   │   ├── github.service.ts
│   │   └── github.service.spec.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.module.ts
│   └── app-routing.module.ts
│
├── assets/
│   ├── logo.png
│   └── about.png
│
└── styles/
    ├── tailwind.css
    └── global.scss
```


### Install requirements
* Clone the repository:
   ```bash
   git clone https://github.com/Kkaransingh/fyle-internship-challenge-23.git
   cd fyle-internship-challenge-23
   ```
* Install angular cli [Ref](https://angular.io/cli)
* `npm install` in this repository 

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.


### Contact

If you have any questions, feel free to contact me at karankamal1807@gmail.com.


## Further help

Visit the [Angular Documentation](https://angular.io/guide/styleguide) to learn more.
Styling is to be strictly done with [Tailwind](https://tailwindcss.com/docs/installation).
