(
    function () {
        let App=window.App;
        let imageProvider=new App.ImageProvider('[data-url-selector="url_image"]');
        let imagePresenter=new App.ImagePresenter('[data-presenter-selector="presenter"]');
       let imageProcessor=new App.ImageProcessor();
        //let imageProcessor=new App.ImageProcessorMimics();
       let tags=new App.Tags('[data-result-selector="tags"]');
        let colors=new App.Colors('[data-result-selector="colors"]');
        let spinner=new App.Spinner('[data-spinner="spinner"]');
        let flStop=false;
        function getTags(urlImage){

          return imageProcessor.getTags(urlImage).then(function(response){
                tags.presentTags(response);
                if(flStop){
                    spinner.stop();
                    flStop=false;
                }

                else
                    flStop=true;

            }).catch(function () {
                alert("Imagga service is unavailable");
                spinner.stop();

            })
        }
        function showImage(urlImage){
            imagePresenter.showImage(urlImage);
        }
        function getColors(urlImage){
            return imageProcessor.getColors(urlImage).then(function(response){
                colors.presentColors(response);
                if(flStop){
                    spinner.stop();
                    flStop=false;
                }

                else
                    flStop=true;
                }).catch(function () {
                alert("Imagga service is unavailable");
                    spinner.stop();

                })

        }
        imageProvider.addUrlImageHandler(function(urlImage){
           spinner.spin();
            let p1=getTags(urlImage);
            let p2=getColors(urlImage);
            showImage(urlImage);
            return [p1,p2];
        });
    }
)();
