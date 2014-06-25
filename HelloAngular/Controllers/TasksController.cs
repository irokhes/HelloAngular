using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace HelloAngular.Controllers
{
    public class TasksController : ApiController
    {
        static List<Task> tasks = new List<Task>()
        {
            new Task{ Id = 1, Name = "Learn Angular.js", Status = TaskStatus.Pending.ToString()},
            new Task{ Id = 2, Name = "Learn Node.js", Status = TaskStatus.Pending.ToString()},
            new Task{ Id = 1, Name = "Write a book", Status = TaskStatus.Pending.ToString()}
        };

        public IEnumerable<Task> Get()
        {
            return tasks;
        }

        public Task Get(int id)
        {
            return tasks.Single(x => x.Id == id);
        }

        private static int maxId = 3;

        public void Post([FromBody] Task value)
        {
            var header = HttpContext.Current.Request.Headers;
            IEnumerable<string> headerValues = header.GetValues("CommandType");
            var commandType = headerValues.FirstOrDefault();
            if(commandType != "CreateTask")
                throw new HttpResponseException(HttpStatusCode.BadRequest);

            value.Id = ++maxId;
            value.Status = TaskStatus.Pending.ToString();
            tasks.Add(value);
            HttpContext.Current.Response.AddHeader("Location","api/tasks/" + value.Id);
        }

        

        
    }



    public class Task 
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
    }

    public enum TaskStatus
    {
        Undefinied = 0,
        Pending = 1,
        Started = 2,
        Done = 3,
        Cancelled = 4
    }
}
