
using System.Collections.Generic;
using Newtonsoft.Json;
using System.IO;
using WebApplication3.Models;

namespace WebApplication3.Data
{
    public class JsonDataAccess
    {
        private readonly string _filePath;

        public JsonDataAccess(string filePath)
        {
            _filePath = filePath;
        }

        public List<CommentModel> GetComments()
        {
            if (File.Exists(_filePath))
            {
                string json = File.ReadAllText(_filePath);
                return JsonConvert.DeserializeObject<List<CommentModel>>(json);
            }

            return new List<CommentModel>();
        }

        public void SaveComments(List<CommentModel> comments)
        {
            string json = JsonConvert.SerializeObject(comments);
            File.WriteAllText(_filePath, json);
        }
    }
}