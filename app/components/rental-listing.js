import Ember from 'ember';

export default Ember.Component.extend({
  isNotEdit: true,
  isImageShowing: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    },
    saveRental(){
      this.set('isNotEdit', true);	
     //todo probably here we should call controller.save function. 
      this.get('saveRental')();
    },
    editRental(){
      this.set('isNotEdit', false);
    }
  }
});	