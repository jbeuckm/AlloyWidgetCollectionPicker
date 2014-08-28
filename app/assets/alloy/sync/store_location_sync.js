
// Override the Backbone.sync method with the following
module.exports.sync = function(method, model, options) {

	var error;

	switch(method) {

		// This case is called by the Model.fetch and Collection.fetch methods to retrieve data.
		case 'read':
                        
            var stores = [
                {
                    store_name: "store 1"
                },
                {
                    store_name: "store 2"
                },
                {
                    store_name: "store 3"
                }
            
            ];

            setTimeout(function(){
                options.success(stores);
            }, 500);

			break;

		case 'create':
			break;

		case 'delete':
			break;

		case 'update':

			break;

		default :
            options.error(model, 'ERROR: Sync method not recognized!', options);

	};

};
