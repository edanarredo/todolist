//jshint eversion: 6

exports.getDate = function() {
   const today = new Date();

   const fullDateConfig = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
   };

   return today.toLocaleDateString("en-US", fullDateConfig);
}

exports.getDay = function() {
   const today = new Date();

   const dayConfig = {
      weekday: 'long'
   };

   return today.toLocaleDateString("en-US", dayConfig);
}
