import Ember from 'ember';

export default Ember.Controller.extend({
  filteredList: null,
  actions: {
    autoComplete(param) {
      if(param !== "") {
        this.store.query('rental', {city: param})
          .then((result) => {this.set('filteredList',result);});
      } else {
        this.set('filteredList').clear();
      }
    },
    search(param) {
      if(param !== "") {
        this.store.query('rental', {city: param})
          .then((result) => {this.set('model',result);});
      } else {
        this.set('model').clear();
      } 
    },
    saveRental(){
      this.store.findRecord('rental', 2).then(function(rental){
        rental.get('type');
        rental.set('type', 'test');
        rental.save();
      })
    }
  }
});