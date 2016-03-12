export default function() {


  this.get('/rentals/:id', function(db, request) {
    let result;
    let rentals = db.rentals[0].rentals;
    if(request.params.id !==undefined){
      rentals.forEach(function(rental){
        if (rental.id == request.params.id){
          result =  rental; 
        } 
      });
    }
    return { data: result };
  });


  this.patch('/rentals/:id', function(db, request) {
    let rentals = db.rentals[0].rentals;
    let rentalUpdated = JSON.parse(request.requestBody).data;
    if(request.params.id !==undefined){
      rentals.forEach(function(rental, index){
        if (rental.id == request.params.id){
          rentals[index] = rentalUpdated; 
          return; 
        } 
      });
    }
    return {data: rentalUpdated} ;
  });

  this.get('/rentals', function(db, request) {
    let rentals = db.rentals[0].rentals;

    if(request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });
}