(
    function () {
        let App=window.App || {};
        function Colors (selector){
            this.$colorsElement=$(selector);

        }
        Colors.prototype.presentColors=function (colors) {
            let colorsObj=JSON.parse(colors);
            if (!colorsObj.results || colorsObj.results.length==0) {
                alert(tagsObj.unsuccessful[0].message);
            }
            else {
                let imageColors=colorsObj.results[0].info.image_colors;
                this.$colorsElement.empty();
                imageColors.forEach(function (color) {
                    this.addRow(color);
                }.bind(this));
            }
        }
        Colors.prototype.addRow=function (color) {
            let row=new RowColor(color);
            this.$colorsElement.append(row.$colorElement);
        }
        function RowColor(color){
            let $div=$('<div></div>',{
                class:"row justify-content-center"
            });
            let $label=$('<label></label>',{
                width: 200
            });
            let content=color.closest_palette_color+" - "+Math.round(color.percentage);
            $label.append(content);
            $label.css({
                backgroundColor:color.html_code,
                color:getThreshold(color)<130?"white":"black"
            });
            $div.append($label);
            this.$colorElement = $div;
        }
        function getThreshold(color){
            let res=Number(color.r)*0.6+Number(color.g)*0.3+Number(color.b)*0.1;
            return res;
        }
        App.Colors=Colors;
        window.App=App;
        
    }
    
)();