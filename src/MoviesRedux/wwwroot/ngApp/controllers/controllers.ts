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

        public addMovie()
        {
            this.$http.post('/api/movies', this.movie).then((response) =>
            {
                this.$state.reload();
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
