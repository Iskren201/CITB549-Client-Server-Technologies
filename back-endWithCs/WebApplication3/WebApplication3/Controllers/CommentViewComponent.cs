using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace WebApplication3.Controllers;
public class CommentViewComponent : ViewComponent
{
    public IViewComponentResult Invoke(List<CommentModel> comments)
    {
        return View(comments);
    }
}

public class CommentModel
{
    public string Name { get; set; }
    public string Text { get; set; }
}