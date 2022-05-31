class Github {
    constructor (){
        this.client_id='921c435e1cb269c39ab0';
        this.client_secret='7a2770b6cc671e26ad90f0dc2f7ba607da5a7b2e';
    }

    async GetUsers(user){
        
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile=await profileResponse.json();
        return {profile}


    }
}