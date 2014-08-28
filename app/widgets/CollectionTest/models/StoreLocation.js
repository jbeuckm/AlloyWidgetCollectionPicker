exports.definition = {
 
    config: {
        "columns": {
            store_name: 'TEXT'
        },
        "defaults": {
        },
        "adapter": {
            type: "store_location_sync",
            collection_name: "StoreLocation"
        }
    },      
 
    extendModel: function(Model) {      
        _.extend(Model, {

        }); // end extend
 
        return Model;
    },
 
 
    extendCollection: function(Collection) {        
        _.extend(Collection.prototype, {
 
        }); // end extend
 
        return Collection;
    }
 
};