// CommentsApiController.cs
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[Route("api/comments")]
public class CommentsApiController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public CommentsApiController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetComments()
    {
        var comments = _context.Comments.ToList();
        return Ok(comments);
    }

    [HttpPost]
    public IActionResult AddComment([FromBody] Comment comment)
    {
        if (ModelState.IsValid)
        {
            _context.Comments.Add(comment);
            _context.SaveChanges();
            return Ok(comment);
        }
        return BadRequest("Invalid comment data");
    }

    [HttpPut("{id}")]
    public IActionResult UpdateComment(int id, [FromBody] Comment comment)
    {
        var existingComment = _context.Comments.Find(id);
        if (existingComment != null)
        {
            existingComment.Text = comment.Text;
            _context.SaveChanges();
            return Ok(existingComment);
        }
        return NotFound();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteComment(int id)
    {
        var comment = _context.Comments.Find(id);
        if (comment != null)
        {
            _context.Comments.Remove(comment);
            _context.SaveChanges();
            return Ok(comment);
        }
        return NotFound();
    }
}
