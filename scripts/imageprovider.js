(
    function(window){
        let App=window.App || {};
        let $=window.jQuery;

        function ImageProvider(selector){
            this.$inputElement=$(selector);

        }

        ImageProvider.prototype.addUrlImageHandler=function(fn){
            this.$inputElement.on('input',function (event) {
                let urlImage=event.target.value;
               let promises=fn(urlImage);
               Promise.all(promises).then(function(){
                   event.target.value=' ';
               })


            })


        }
        App.ImageProvider=ImageProvider;
        window.App=App;

    }

)(window);