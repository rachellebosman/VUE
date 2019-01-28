
var test = new Vue ({ 
    el: "#test2",
    data: {
        isHidden: false
      },
    
    data () {
         
        return {
          items: {"title": "", "artist": "", "genre":""} 
        
        }
      },

      mounted () {
        axios
          .get('http://localhost:3000/api/cds')
          .then(response => (this.items = response.data.items))
      }, 

      methods: {

            detailItem(_id){
                let uri = 'http://localhost:3000/api/cds/'+ _id;
                console.log(uri);

            },

            deleteItem(_id)
            {
            let uri = 'http://localhost:3000/api/cds/'+ _id;
            
            axios
            .delete(uri, { data: { foo: "bar" } })
            .then(response => this.items.splice(_id, 1))  
            
            window.location.reload(); 
            
            },

            editItem(_id, title, artist, genre)
            {
              console.log("edit button werkt");
              console.log(_id, title, artist,genre);
        


            },

            newItem()
            {
                let uri = 'http://localhost:3000/api/cds/';

                let new_item = {
                    title : this.items.title, 
                    artist : this.items.artist,
                    genre : this.items.genre,  
                } 

                console.log(new_item);

                axios.post(uri, new_item)
                
                window.location.reload();      
            
      
        }
    } 

})









var editpogin = new Vue({
    el: '#editpoging',
    data: {
      isHidden: false
    }
   
  })