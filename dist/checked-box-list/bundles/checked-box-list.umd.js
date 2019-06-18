(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('checked-box-list', ['exports', '@angular/forms', '@angular/core', '@angular/common'], factory) :
    (factory((global['checked-box-list'] = {}),global.ng.forms,global.ng.core,global.ng.common));
}(this, (function (exports,forms,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckedBoxListService = /** @class */ (function () {
        function CheckedBoxListService() {
        }
        CheckedBoxListService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        CheckedBoxListService.ctorParameters = function () { return []; };
        /** @nocollapse */ CheckedBoxListService.ngInjectableDef = i0.defineInjectable({ factory: function CheckedBoxListService_Factory() { return new CheckedBoxListService(); }, token: CheckedBoxListService, providedIn: "root" });
        return CheckedBoxListService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckedBoxListComponent = /** @class */ (function () {
        function CheckedBoxListComponent() {
            this.propagateChange = ( /**
             * @param {?} _
             * @return {?}
             */function (_) {
            });
            //of(this.getOrders()).subscribe(orders => {
            //console.log("Inside",orders);
            //this.orders = this.getOrders();
            // });
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        CheckedBoxListComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.propagateChange = fn;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CheckedBoxListComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined && value !== null) {
                    this.orders = value;
                }
            };
        /**
         * @return {?}
         */
        CheckedBoxListComponent.prototype.registerOnTouched = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        CheckedBoxListComponent.prototype.getOrders = /**
         * @return {?}
         */
            function () {
                return [
                    { id: 100, name: 'order 1' },
                    { id: 200, name: 'order 2' },
                    { id: 300, name: 'order 3' },
                    { id: 400, name: 'order 4' }
                ];
            };
        /**
         * @param {?} i
         * @param {?} event
         * @return {?}
         */
        CheckedBoxListComponent.prototype.submit = /**
         * @param {?} i
         * @param {?} event
         * @return {?}
         */
            function (i, event) {
                var _this = this;
                /*selectedOrderIds = this.form.value.orders
                  .map((v, i) => v ? this.orders[i].id : null)
                  .filter(v => v !== null);*/
                console.log("Submit", i, event, event.srcElement.checked);
                this.orders[i].checked = event.srcElement.checked;
                this.selectedOrderIds = this.orders.map(( /**
                 * @param {?} v
                 * @param {?} i
                 * @return {?}
                 */function (v, i) { return v.checked ? (_this.returnKey ? _this.orders[i][_this.returnKey] : _this.orders[i]) : null; }))
                    .filter(( /**
             * @param {?} v
             * @return {?}
             */function (v) { return v !== null; }));
                console.log(this.selectedOrderIds);
                this.propagateChange(this.selectedOrderIds);
            };
        CheckedBoxListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ng6-checked-box-list',
                        template: "<div style=\"padding: 1em;overflow:auto\" [ngStyle]=\"{'height.px':maxHeightPx}\">\n    <label class=\"container\" *ngFor=\"let order of orders; let i = index\">\n        <input type=\"checkbox\" (click)=\"submit(i,$event)\">\n        <span class=\"checkmark\"></span>\n        {{order.name}}\n    </label>\n</div>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(( /**
                                 * @return {?}
                                 */function () { return CheckedBoxListComponent; })),
                                multi: true
                            }
                        ],
                        styles: [".container{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:0;left:0;height:20px;width:20px;background-color:#fff;border:1px solid;border-radius:6px;font-size:2rem}.container:hover input~.checkmark,input:focus~.checkmark{background-color:#eaeaea}.container input:checked~.checkmark{background-color:#0568ae;border-color:transparent}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after{display:block}.container .checkmark:after{left:6px;top:2px;width:5px;height:10px;border:solid #fff;border-width:0 3px 3px 0;transform:rotate(45deg)}label{display:block}::-webkit-scrollbar{-webkit-appearance:none;width:7px}::-webkit-scrollbar-thumb{border-radius:4px;background-color:rgba(0,0,0,.5);box-shadow:0 0 1px rgba(255,255,255,.5)}"]
                    }] }
        ];
        CheckedBoxListComponent.ctorParameters = function () { return []; };
        CheckedBoxListComponent.propDecorators = {
            orders: [{ type: i0.Input, args: ['values',] }],
            returnKey: [{ type: i0.Input }],
            maxHeightPx: [{ type: i0.Input }]
        };
        return CheckedBoxListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckedBoxListModule = /** @class */ (function () {
        function CheckedBoxListModule() {
        }
        CheckedBoxListModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [CheckedBoxListComponent],
                        exports: [CheckedBoxListComponent]
                    },] }
        ];
        return CheckedBoxListModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CheckedBoxListService = CheckedBoxListService;
    exports.CheckedBoxListComponent = CheckedBoxListComponent;
    exports.CheckedBoxListModule = CheckedBoxListModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=checked-box-list.umd.js.map