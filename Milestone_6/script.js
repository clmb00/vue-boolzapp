// MAIL1: sofia@gmail.com PSW1: password
// MAIL2: michele@gmail.com PSW2: password1


const { createApp } = Vue;

createApp({
  data(){
    return{
      activeContact: 0,
      yourMessage: "",
      searchString: "",
      filteredContacts: [],
      toggleEmoji: false,
      toggleLogOutPannel: false,
      toggleLock: false,
      access: false,
      inputMail: "",
      inputPsw: "",
      contacts: [],
      currentUser: {},
      users: [
        {
          id: 0,
          name: 'Sofia',
          avatar: '_io',
          email: 'sofia@gmail.com',
          password: 'password',
          myContacts: [
            {
              name: 'Michele',
              avatar: '_1',
              id: 0,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent',
                  selected: [false, false]
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent',
                  selected: [false, false]
                },
                {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received',
                  selected: [false, false]
                }
              ],
            },
            {
              name: 'Fabio',
              avatar: '_2',
              id: 1,
              messages: [
                {
                  date: '20/03/2020 16:30:00',
                  message: 'Ciao come stai?',
                  status: 'sent',
                  selected: [false, false]
                },
                {
                  date: '20/03/2020 16:30:55',
                  message: 'Bene grazie! Stasera ci vediamo?',
                  status: 'received',
                  selected: [false, false]
                },
                {
                  date: '20/03/2020 16:35:00',
                  message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                  status: 'sent',
                  selected: [false, false]
                }
              ],
            },
            {
              name: 'Samuele',
              avatar: '_3',
              id: 2,
              messages: [
                {
                  date: '28/03/2020 10:10:40',
                  message: 'La Marianna va in campagna',
                  status: 'received',
                  selected: [false, false]
                },
                {
                  date: '28/03/2020 10:20:10',
                  message: 'Sicuro di non aver sbagliato chat?',
                  status: 'sent',
                  selected: [false, false]
                },
                {
                  date: '28/03/2020 16:15:22',
                  message: 'Ah scusa!',
                  status: 'received',
                  selected: [false, false]
                }
              ],
            },
            {
              name: 'Alessandro B.',
              avatar: '_4',
              id: 3,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent',
                  selected: [false, false]
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Si, ma preferirei andare al cinema',
                  status: 'received',
                  selected: [false, false]
                } 
              ],
            },
            {
              name: 'Alessandro L.',
              avatar: '_5',
              id: 4,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Ricordati di chiamare la nonna',
                  status: 'sent',
                  selected: [false, false]
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Va bene, stasera la sento',
                  status: 'received',
                  selected: [false, false]
                }
              ],
            },
            {
              name: 'Claudia',
              avatar: '_6',
              id: 5,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Ciao Claudia, hai novità?',
                  status: 'sent',
                  selected: [false, false]
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Non ancora',
                  status: 'received',
                  selected: [false, false]
                },
                {
                  date: '10/01/2020 15:51:00',
                  message: 'Nessuna nuova, buona nuova',
                  status: 'sent',
                  selected: [false, false]
                }
              ],
            },
            {
              name: 'Federico',
              avatar: '_7',
              id: 6,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Fai gli auguri a Martina che è il suo compleanno!',
                  status: 'sent',
                  selected: [false, false]
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Grazie per avermelo ricordato, le scrivo subito!',
                  status: 'received',
                  selected: [false, false]
                }
              ],
            },
            {
              name: 'Davide',
              avatar: '_8',
              id: 7,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Ciao, andiamo a mangiare la pizza stasera?',
                  status: 'received',
                  selected: [false, false]
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                  status: 'sent',
                  selected: [false, false]
                },
                {
                  date: '10/01/2020 15:51:00',
                  message: 'OK!!',
                  status: 'received',
                  selected: [false, false]
                }
              ],
            }
          ]
        },
        {
          id: 1,
          name: 'Michele',
          avatar: '_1',
          email: 'michele@gmail.com',
          password: 'password1',
          myContacts: [
            {
              name: 'Sofia',
              avatar: '_io',
              id: 0,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'received',
                  selected: [false, false]
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'received',
                  selected: [false, false]
                },
                {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'sent',
                  selected: [false, false]
                }
              ],
            },
            {
              name: 'Davide',
              avatar: '_8',
              id: 1,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Ciao, andiamo a mangiare la pizza stasera?',
                  status: 'received',
                  selected: [false, false]
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                  status: 'sent',
                  selected: [false, false]
                },
                {
                  date: '10/01/2020 15:51:00',
                  message: 'OK!!',
                  status: 'received',
                  selected: [false, false]
                }
              ],
            },
            {
              name: 'Alessandro B.',
              avatar: '_4',
              id: 2,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent',
                  selected: [false, false]
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Si, ma preferirei andare al cinema',
                  status: 'received',
                  selected: [false, false]
                } 
              ],
            }
          ]
        }
      ],
    }
  },
  methods:{
    extractTime(elem){
      const time = elem.date.split(' ')[1]
      return time.substring(0,time.length-3);
    },
    addZero(num){
      return (num < 10) ? '0' + num : num
    },
    createDate(){
      const d = new Date();
      return d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + this.addZero(d.getHours()) + ':' + this.addZero(d.getMinutes()) + ':' + this.addZero(d.getSeconds());
    },
    writeMessage(){
      if (this.yourMessage == "") return
      this.contacts[this.activeContact].messages.push(
        {
          date: this.createDate(),
          message: this.yourMessage,
          status: 'sent',
          selected: [false, false]
        }
      )
      this.yourMessage = "";
      setTimeout(function(){this.aiResponse()}.bind(this), 1000);
    },
    aiResponse(){
      this.contacts[this.activeContact].messages.push(
        {
          date: this.createDate(),
          message: 'Ok!',
          status: 'received',
          selected: [false, false]
        }
      )
    },
    filterContacts(){
      this.filteredContacts = this.contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(this.searchString.toLowerCase());
      })
    },
    deleteMsg(index){
      this.contacts[this.activeContact].messages.splice(index, 1);
    },
    lastAccess(){
      const index = this.contacts[this.activeContact].messages.map(msg => msg.status).lastIndexOf('received');
      if (index == -1) return '00:00';
      return this.extractTime(this.contacts[this.activeContact].messages[index]);
    },
    checkLogin(){
      this.currentUser = this.users.find((user) => user.email == this.inputMail && user.password == this.inputPsw);
      if(this.currentUser){
        this.toggleLock = true;
        // Timeout per far vedere il lock che cambia
        setTimeout(()=>{
          this.access = true;
        },500)
        this.contacts = [...this.currentUser.myContacts];
      } else {
        alert('Incorrect email or/and passoword, please retry!')
      }
      this.filterContacts();
    },
    logOut(){
      this.access = false;
      this.toggleLogOutPannel = false;
      this.toggleLock = false;
      this.toggleEmoji= false,
      this.activeContact = 0;
      this.yourMessage= "";
      this.searchString= "";
      this.filteredContacts= [];
    }
  }
}).mount('#app')