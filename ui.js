class UI {

    constructor() {

         this.profile = document.getElementById("profile");
    }

    showProfile(user) {

       this.profile.innerHTML = `

            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class='img-fluid mb-2' src="${user.avatar_url}">
                        <a href = "${user.html_url}" target="_blank" class="btn btn-primary btn-block">
                        View Profile</a>
                    </div>
                    <div class="col-md-9">
                        
                        <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists:${user.public_gists}</span>
                        <span class="badge badge-success">Followers:${user.followers}</span>
                        <span class="badge badge-info">Following:${user.following}</span>
                    

                    <ul class="list-group">
                        <li class="list-group-item">${user.company}</li>
                        <li class="list-group-item">${user.blog}None</li>
                        <li class="list-group-item">${user.location}</li>
                        <li class="list-group-item">${user.created_at}</li>

                    </ul>
                    </div>
                </div>
            </div>
             `;

        
    }

    showRepos(repos){

        let output = '';
        console.log(repos);    


        repos.forEach(function(repo){
            console.log(repo.name);
        console.log("hello 1234");        

            
            output += `
            <div class ="card card-body mb-2">
                <div class="row">
                <div class="col-md-6">
                <a href = "${repo.html_url}" target="_blank">
                ${repo.name}</a>

                </div>
                    <div class="col-md-6">
                    <span class="badge badge-primary">Name:${repo.name}</span>
                    <span class="badge badge-secondary">Stars:${repo.stargazers_count}</span>
                    <span class="badge badge-success">Watchers:${repo.watchers_count}</span>
                    <span class="badge badge-info">Forks:${repo.forms_count}</span>
                     </div>
            
                
                </div>
            </div>
       `;

    });
    console.log(output);

    document.getElementById("repos").innerHTML = output;

    }

    showalert(message,classname){

        
        const cond = document.querySelector(".alert");
    
        if(cond)
         clearalert();

         else{


      
        

        const div = document.createElement('div');
        div.className = classname;

        div.appendChild(document.createTextNode(message));

        const parent = document.querySelector(".searchContainer");
        const sibling = document.querySelector(".search");

        parent.insertBefore(div,sibling);

        setTimeout(()=>{
            const alert = document.querySelector(".alert");
        alert.remove();
            
        },3000);

    }

    }

    clearalert(){
        const alert = document.querySelector(".alert");
        alert.innerHTML = '';
    }


    clearResults(){
        this.profile.innerHTML ='';

    }


}