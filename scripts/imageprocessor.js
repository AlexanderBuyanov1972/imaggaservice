(
    function(window){
        let App=window.App || {};
        let $=window.jQuery;
        function ImageProcessor(token) {
            this.token=token || 'Basic YWNjXzQ0NDRjMTViZWY1MjkyODphMGE2OGNiZmY5Zjk0ZDJlOTJiNjY2NzhiNmFlMjY5OA==';
        }
    function getResponse(urlImage,endpoint){
        let data = {
            url: urlImage,
            token: this.token
        };
        return $.ajax({
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            url: 'http://imaggaservice.herokuapp.com/'+endpoint
        })
    }
        ImageProcessor.prototype.getTags=function(urlImage){
            return getResponse.call(this,urlImage,'tagging');
        }
        ImageProcessor.prototype.getColors=function(urlImage){
            return getResponse.call(this,urlImage,'colors');
        }
        App.ImageProcessor=ImageProcessor;
        window.App=App;

    }
    
)(window);
