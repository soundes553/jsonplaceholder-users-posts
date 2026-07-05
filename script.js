 function getPosts(idP){
             let request=new XMLHttpRequest();
             request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${idP}`);
             request.responseType="json"
             request.send();
             request.onload=function(){
                if(request.status >= 200 && request.status < 300){
                    let posts=request.response
                    document.getElementById("posts").innerHTML=" "
                    for(post of posts){
                        let content=`
                            <div id="post">
                               <h3>${post.title}</h3>
                               <h4>${post.body}</h4>
                            </div>
                            `
                        document.getElementById("posts").innerHTML+=content

                    }
                } else {
                    console.error('Request failed with status', request.status);
                }
             }

        }
        function getUsers(){
             let request=new XMLHttpRequest();
             request.open("GET","https://jsonplaceholder.typicode.com/users");
             request.responseType="json"
             request.send();
             request.onload=function(){
                if(request.status >= 200 && request.status < 300){
                    let users=request.response
                    document.getElementById("users").innerHTML=" "
                    for(user of users){
                        let content=`
                        <div id="user" onclick="userClicked(${user.id})">
                            <h3>${user.name}</h3>
                            <h3>${user.email}</h3>
                          </div>
                            `
                        document.getElementById("users").innerHTML+=content

                    }
                } else {
                    console.error('Request failed with status', request.status);
                }
             }

        }
        function userClicked(id){
            getPosts(id)

        }


        getUsers()
        