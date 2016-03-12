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
      this.get('saveRental')(this.get('rental'));
    },
    editRental(){
      this.set('isNotEdit', false);
    }
  }
});	