let app = new Vue(
    {
        el: "#app",
        data: {
            contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
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
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
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
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },

        ],
        indexContacts: 0,
        newMessage: "",
    
    },
    methods: {
        //Function that changes the object element "avatar" in its corrisponding img.
        addImages: function (imgAvatar){
            return "./img 3/avatar" + this.contacts[imgAvatar].avatar + ".jpg";
        },

        // Function that changes messages based on the clicked person.
        selectedContact: function (index){
            this.indexContacts = index;
        },

        // Function that returns the last message's date.
        lastSeen: function (){
            let lastMessage = this.contacts[this.indexContacts].messages[this.contacts[this.indexContacts].messages.length - 1].date;
            return lastMessage;
        },

        // Function that gets today's date.
        newMessageDate: function(){
            today = new Date();
            let date = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let date_time = date + ' ' + time;
            return date_time;
        },

        //Function that pushes new object in current object's array.
        newArrayElement: function(){
            let newSentMessage = {
                date: this.newMessageDate(),
                text: this.newMessage,
                status: "sent",
            };

            let newReceivedMessage = {
                date: this.newMessageDate(),
                text: "Okay",
                status: "received",
            };

            if(this.newMessage.trim(" ").length > 0){
                this.contacts[this.indexContacts].messages.push(newSentMessage);
                this.newMessage = "";

                setTimeout(function(){
                    this.contacts[this.indexContacts].messages.push(newReceivedMessage)
                },1000)
            }
        }

        
    }
})