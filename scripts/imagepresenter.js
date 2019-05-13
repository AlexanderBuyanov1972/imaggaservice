(
    function (window) {
        let App=window.App || {};

        function ImagePresenter(selector){
            if (!selector) {
                throw new Error("selector isn't provided");
            }
            this.$presenterElement=$(selector);
            if (this.$presenterElement.length===0) {
                throw new Error(selector+" doesn't exist in HTML");
            }
        }
        ImagePresenter.prototype.showImage=function(urlImage){
            this.$presenterElement.attr('src',urlImage);
        }
        App.ImagePresenter=ImagePresenter;
        window.App = App;
    }

)(window);