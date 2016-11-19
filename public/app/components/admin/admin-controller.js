(function() {

  angular.module('1x')
        .component('admin', {
            templateUrl: 'app/components/admin/admin.html',
          controller: AdminController
                    })
    
    function AdminController(AdminService) {
        var ac = this;
        var as = AdminService;

        ac.moreImage=()=>{ 
            var newImg = angular.element( document.querySelector( '#images' ) );
            newImg.append(`<input ng-model="$ctrl.newItem.image" type="text" placeholder="Image Url">`);  
                }
        
        ac.addItem=(product)=>{
           $.post('localhost:8080/api/store', {"product":{ 
            "category": product.category, 
           "name": product.name,
            "description":product.description,
            "specs": product.specs || '',
            "images": product.images || [],
            "msrp": product.msrp,
            "memberPrice": product.memberPrice,
            "nonMemberPrice": product.nonMemberPrice,
             "inStock": true,
             "inStore": true
              }})

        }
    


}
        

})(); 