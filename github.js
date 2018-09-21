class Github{

    constructor(){
        this.repos_count = 5;
        this.repost_sort = 'created_asc';
    }



    async getuser(user){

        const profile = await fetch(`https://api.github.com/users/${user}`);

        const repoResponse = await fetch(`https://api.github.com/${user}/repos?per_page=${this.repos_count}
        &sort=${this.repost_sort}`);
        
        
        const profiledata = await profile.json();
        const repo = await repoResponse.json();

        return{
            profiledata,
            repo
        }



    }

    

    




}