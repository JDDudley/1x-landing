(function () {

    angular.module('1x')
        .component('admin', {
            templateUrl: 'app/components/admin/admin.html',
            controller: AdminController
        })

    function AdminController(AdminService) {
        var ac = this;
        var as = AdminService;
        //adds more image fields to URL image input //
        ac.moreImage = (type) => {
            let productImg = angular.element(document.querySelector('#product-images'));
            let eventImg = angular.element(document.querySelector('#event-images'));
            let imgTemplate = `<input id="img" ng-model="$ctrl.newItem.image" type="text" placeholder="Image Url">`;
            type == 'product' ? productImg.append(imgTemplate) : null;
            type == 'event' ? eventImg.append(imgTemplate) : null;
        }

        ac.addItem = (product) => {
            let imgArr= product.moreImage;
            imgArr.push(product.image)

            debugger 
            // let image = $('#img').val()
            // product.images.push(image);
            as.addProduct(product);
        }

        ac.addEvent = (event) => {
            as.addEvent(event)
        }

    }
})(); 