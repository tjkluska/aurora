(function() {

    Vue.component("dropdown", {
        template: "#dropdown-template",
        props: {
            for: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: "right"
            },
            preserveState: {
                type: Boolean,
                default: false
            }
        },
        data: function() {
            return {
                show: false
            };
        },
        ready: function() {
            var _this = this;
            var element = document.getElementById(this.for);

            var hide = function(event) {
                event.stopPropagation();

                if (!(_this.preserveState && _this.$el.contains(event.target))) {
                    _this.show = false;
                    document.removeEventListener("click");
                }

            };

            var show = function(event) {
                event.preventDefault();
                event.stopPropagation();

                var dropdowns = [].slice.call(document.querySelectorAll(".dropdown"));

                dropdowns.forEach(function(dropdown) {
                    dropdown.__vue__.show = false;
                });

                if (!_this.show) {
                    _this.show = true;

                    document.body.addEventListener("click", hide);
                }
            };

            element.addEventListener("click", show);
        }
    });

    var periods = [{
        id: 1,
        value: "Day"
    }, {
        id: 2,
        value: "Week"
    }, {
        id: 3,
        value: "Month"
    }, {
        id: 4,
        value: "Year"
    }, {
        id: 5,
        value: "Decade"
    }, {
        id: 6,
        value: "Century"
    }, {
        id: 7,
        value: "Milennium"
    }];

    var app = new Vue({
        el: "#dropdown-app",
        data: {
            periods: periods,
            selectedPeriod: periods[0],
            periodFilter: ""
        },
        methods: {
            menuClick: function(menuName) {
                alert(menuName + " Clicked!");
            },
            selectPeriod: function(period) {
                this.selectedPeriod = period;
            }
        }
    });

})();
