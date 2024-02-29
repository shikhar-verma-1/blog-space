const BLOG_URL = "https://jsonplaceholder.typicode.com/posts";

let blogsArray=[];

function renderBlogs(){
    let html = "";
    for( let blog of blogsArray){
        html+=`<h2 id="blog-title">${blog.title}</h2>
                <p id="blog-body">${blog.body}</p>
                <hr>`
    }
   
    document.getElementById('blog').innerHTML = html;
                                      
}

     

function fetchBlogs(){
    fetch(BLOG_URL)
    .then(res=>res.json())
    .then((data)=>{
        blogsArray = data.slice(0,5);
        renderBlogs();  
    })
    
}

fetchBlogs();


        


