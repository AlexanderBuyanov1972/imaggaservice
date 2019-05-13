(
    function(){
      let App=window.App || {};
      function Spinner(selector) {
          this.$spinnerElement=$(selector);
      }
      Spinner.prototype.spin=function () {
          $div=$('<div></div>',{
              class:"spinner"
          });
          this.$spinnerElement.append($div);
      }
      Spinner.prototype.stop = function () {
          this.$spinnerElement.empty();
      }
      window.App=App;
      App.Spinner=Spinner;

    }
)();