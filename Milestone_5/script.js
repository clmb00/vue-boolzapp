const { createApp } = Vue;

createApp({
  data(){
    return{
      activeContact: 0,
      yourMessage: "",
      searchString: "",
      filteredContacts: [],
      contacts: [
        {
          name: 'Michele',
          avatar: '_1',
          visible: true,
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
          visible: true,
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
          visible: true,
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
          visible: true,
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
          visible: true,
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
          visible: true,
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
          visible: true,
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
          visible: true,
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
    }
  },
  mounted(){
    this.filterContacts();
  }
}).mount('#app')