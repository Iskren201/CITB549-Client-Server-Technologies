using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

[ApiController]
[Route("api/[controller]")]
public class CommentsController : ControllerBase
{
    private static List<Comment> comments = new List<Comment>();

    [HttpGet]
    public ActionResult<IEnumerable<Comment>> Get()
    {
        return Ok(comments);
    }

    [HttpPost]
    public ActionResult<Comment> Post([FromBody] Comment comment)
    {
        comment.Id = Guid.NewGuid();
        comments.Add(comment);
        return Ok(comment);
    }

    [HttpPut("{id}")]
    public ActionResult<Comment> Put(Guid id, [FromBody] Comment updatedComment)
    {
        Comment existingComment = comments.Find(c => c.Id == id);
        if (existingComment == null)
        {
            return NotFound();
        }

        existingComment.Text = updatedComment.Text;
        return Ok(existingComment);
    }
}

public class Comment
{
    public Guid Id { get; set; }
    public string Text { get; set; }
}
