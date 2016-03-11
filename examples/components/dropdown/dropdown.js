
(function() {

    Vue.component("dropdown", {
        template: "#dropdown-template",
        props: {
            for: {
                type: String,
                required: true
            }
        },
        data: function() {
            return {
                show: false,
                position: {
                    top: 0,
                    left: 0
                }
            };
        },
        ready: function() {
            var _this = this;
            var element = document.getElementById(this.for);

            var hide = function(event) {
                event.stopPropagation();

                _this.show = false;
                document.removeEventListener("click");
            };

            var show = function(event) {
                event.preventDefault();
                event.stopPropagation();
                console.dir(event);
                if (!_this.show) {
                    var elementGeometry = element.getBoundingClientRect();

                    _this.position = {
                        top: elementGeometry.top + elementGeometry.height + "px",
                        left: elementGeometry.left + "px"
                    };

                    _this.show = true;

                    document.addEventListener("click", hide);
                }
            };

            element.addEventListener("click", show);
        }
    });

    var app = new Vue({
        el: "#dropdown-app"
    });

})();
