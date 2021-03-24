//   Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//
//   Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


var app = new Vue ({
    el:'#root',
    data: {
      message: 'Ora è tempo di Vue JS!!!',
      img: 'img/vue_logo.png',
      display: 'none'
    },
    methods: {
      vue: function(){
        if (this.display == 'none') {
          this.display = 'block';
        }else {
          this.display = 'none';
        }

      }
    }
  }
);
