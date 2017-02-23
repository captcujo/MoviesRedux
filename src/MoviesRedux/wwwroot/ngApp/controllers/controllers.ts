namespace MoviesRedux.Controllers {

    export class HomeController
    {
        public message = 'Hello from the home page!';

        public movies;

        public movie;

        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService)
        {
            this.$http.get('/api/movies/').then((response) =>
            {
                this.movies = response.data;
            });
        }

        public deleteMovie(id: number)
        {
            this.$http.delete('/api/movies/' + id).then((response) =>
            {
                this.$state.reload();
            });
        }
    }

    export class EditMovieController
    {
        public movie;

        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService, private $stateParams: ng.ui.IStateParamsService)
        {
            let id = this.$stateParams['id'];

            this.$http.get('/api/movies/' + id).then((response) =>
            {
                this.movie = response.data;
            });
        }

        public addMovie()
        {
            this.$http.post('/api/movies', this.movie).then((response) =>
            {
                this.$state.go('home');
            });
        }
    }

    export class AddMovieController {
        public movie;

        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
        }

        public addMovie() {
            this.$http.post('/api/movies', this.movie).then((response) => {
                this.$state.go('home');
            });
        }
    }


    export class SecretController {
        public secrets;

        constructor($http: ng.IHttpService) {
            $http.get('/api/secrets').then((results) => {
                this.secrets = results.data;
            });
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
