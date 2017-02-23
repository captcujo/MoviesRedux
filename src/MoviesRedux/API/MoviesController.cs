using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MoviesRedux.Data;
using MoviesRedux.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MoviesRedux.API
{
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        private ApplicationDbContext _db;

        public MoviesController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public List<Movie> Get()
        {
            List<Movie> movs = (from m in _db.Movies
                                select m).ToList();
            return movs;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Movie movie)
        {
            if (movie == null)
            {
                return BadRequest();
            } else if (movie.Id == 0)
            {
                _db.Add(movie);
                _db.SaveChanges();
            } else
            {
                _db.Update(movie);
                _db.SaveChanges();
            }
        }
    }
}
