using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApplication3.Models;

namespace WebApplication3.Controllers
{
    // Замени using CommentModel = WebApplication3.Models.CommentModel;
    using CommentModelAlias = WebApplication3.Models.CommentModel;
    using WebApplication3.Data;

    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly JsonDataAccess _jsonDataAccess;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
            _jsonDataAccess = new JsonDataAccess("comments.json");
        }

        public IActionResult Index()
        {
            List<CommentModelAlias> comments = GetCommentsFromDatabase();
            ViewBag.Comments = comments;

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public IActionResult Submit(string name, string text)
        {
            var newComment = new CommentModelAlias
            {
                Name = name,
                Text = text
            };

            List<CommentModelAlias> comments = GetCommentsFromDatabase();
            comments.Add(newComment);

            _jsonDataAccess.SaveComments(comments);

            // Запазваме коментарите във ViewBag
            ViewBag.Comments = comments;

            // Връщаме изгледа с коментарите
            return View("Index");
        }

        [HttpPost]
        public IActionResult Delete(string name)
        {
            List<CommentModelAlias> comments = GetCommentsFromDatabase();
            CommentModelAlias commentToDelete = comments.FirstOrDefault(c => c.Name == name);

            if (commentToDelete != null)
            {
                comments.Remove(commentToDelete);
                _jsonDataAccess.SaveComments(comments);
            }

            ViewBag.Comments = comments;

            return View("Index");
        }

        [HttpPost]
        public IActionResult Edit(string name, string text)
        {
            List<CommentModelAlias> comments = GetCommentsFromDatabase();
            CommentModelAlias commentToEdit = comments.FirstOrDefault(c => c.Name == name);

            if (commentToEdit != null)
            {
                // Променяме стойностите на коментара
                commentToEdit.Text = text;

                // Запазваме обратно във файла
                _jsonDataAccess.SaveComments(comments);
            }

            ViewBag.Comments = comments;

            return View("Index");
        }



        private List<WebApplication3.Models.CommentModel> GetCommentsFromDatabase()
        {
            return _jsonDataAccess.GetComments();
        }
    }
}
