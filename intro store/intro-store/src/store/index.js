import { createStore } from 'vuex'


// Initialiser le state lastUser avec la valeur du local storage
function getLastUser(){
   // Récupérer l'id du dernier utilisateur enregistré 
   let lastUser = localStorage.getItem('lastUserId');
   //  On récupère le dernier is si il existe sinon on commence à 0
   return lastUser ? parseInt(lastUser) : 0;
}
export default createStore({
  state: {
    // Etat global -> propriété de données partagées par tous les composants 
    lastUser: getLastUser(),
    users:[],
    query:'', 
    currentUser:{}
  },
  mutations: {
    // Mutations -> méthodes qui modifient les propriétés de l'état global, synchrone

    // Les setters 
    setUsers(state, users){
      state.users = users;
    },

    setQuery(state, query){
      state.query = query;
    },

    setCurrentUser(state, user){
      state.currentUser = user;
    },


    addUser(state, user){
      // On incrément ele dernier id de 1 
      state.lastUser += 1;
      // On ajoute une propriété id à l'objet userData 
      user.id = state.lastUser;
      // On enregistre l'utilisateur dans le local storage
      localStorage.setItem(`user_${user.id}`, JSON.stringify(user));
      // On enregistre le dernier id dans le local storage
      localStorage.setItem('lastUserId', state.lastUser);
    }, 
    deleteUser(state, userId){
      let index = state.users.findIndex(user => user.id === userId)
      if(index !== -1){
        if(confirm('Voulez-vous vraiment supprimer cet utilisateur ?')){
          state.users.splice(index, 1)
          localStorage.removeItem(`user_${userId}`)
            alert('Utilisateur supprimé')
        }
      }
    },
  },
  actions: {
    // Actions -> méthodes asynchrone

    loadUsers(context){
      let users = Object.keys(localStorage)
      .filter(key => key.startsWith('user_'))
      .map(key => JSON.parse(localStorage.getItem(key)))
      context.commit('setUsers', users);
    },
    oneUser(context, userId){
      let selectedUser = localStorage.getItem(`user_${userId}`)
      if(selectedUser){
        let userObj = JSON.parse(selectedUser)
        context.commit('setCurrentUser', userObj)
      }else{
        alert('Utilisateur introuvable')
      }

    }
  },
  getters: {
    // Getters -> propriétés calculées partagées par tous les composants ( computed)
    filteredUsers(state){
      if(!state.query) return state.users;
      let query = state.query.toLowerCase();
      return state.users.filter(user => 
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.lastName.toLowerCase().includes(query.toLowerCase())
        )
      },
  },
})
