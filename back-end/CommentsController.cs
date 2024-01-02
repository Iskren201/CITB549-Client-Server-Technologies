// CommentsController.cs
using Microsoft.AspNetCore.Mvc;
using System.Linq;

public class CommentsController : Controller
{
    private readonly ApplicationDbContext _context;

    public CommentsController(ApplicationDbContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {
        var comments = _context.Comments.ToList();
        return View(comments);
    }

    [HttpPost]
    public IActionResult AddComment(Comment comment)
    {
        if (ModelState.IsValid)
        {
            _context.Comments.Add(comment);
            _context.SaveChanges();
        }
        return RedirectToAction("Index");
    }

    [HttpPost]
    public IActionResult UpdateComment(Comment comment)
    {
        if (ModelState.IsValid)
        {
            var existingComment = _context.Comments.Find(comment.Id);
            if (existingComment != null)
            {
                existingComment.Text = comment.Text;
                _context.SaveChanges();
            }
        }
        return RedirectToAction("Index");
    }

    [HttpPost]
    public IActionResult DeleteComment(int id)
    {
        var comment = _context.Comments.Find(id);
        if (comment != null)
        {
            _context.Comments.Remove(comment);
            _context.SaveChanges();
        }
        return RedirectToAction("Index");
    }
}
