(
    function () {
        let App=window.App || {};
        function Tags(selector){
            this.$tagsElement=$(selector);
        }
        Tags.prototype.presentTags=function(tags){

            let tagsObj=JSON.parse(tags);
            let results=tagsObj.results;
            if (results.length==0) {
                alert(tagsObj.unsuccessful[0].message);
            }
            else {
                this.$tagsElement.empty();
                for (let i=0;i<5;i++) {
                    this.addRow(results[0].tags[i]);
                }
            }

        };
        Tags.prototype.addRow=function(tag){
            let row = new RowTag(tag);
            this.$tagsElement.append(row.$tagElement);
        };
        function RowTag(tag){
            let $div=$('<div></div>',{
                class:"row justify-content-center"
            });
            let $label=$('<label></label>',{

            });
            let content=tag.tag+" - "+Math.round(tag.confidence);
            $label.append(content);
            $div.append($label);
            this.$tagElement = $div;

        }
        App.Tags =Tags;
        window.App=App;
    }

)();
// <div class="row justify-content-center">
//     <label> tree</label>
//     </div>
//     <div class="row justify-content-center">
//     <label> watter</label>
//     </div>