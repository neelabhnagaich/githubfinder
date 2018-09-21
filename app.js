const github = new Github;
const ui = new UI;
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup",(e)=>{

    const val  = e.target.value;
 
    if(val != ''){

        github.getuser(val)
        .then((data)=>{
            if(data.profiledata.message === "Not Found"){
                
               
                ui.showalert("No Profile Found","alert alert-danger");

            }
            else{
            ui.showProfile(data.profiledata);
            ui.showRepos(data.repo);
            
             
            }
        })

        

    }
    else{

        ui.clearResults();

    

    }

});