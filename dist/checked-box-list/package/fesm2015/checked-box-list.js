import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Injectable, Component, Input, forwardRef, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckedBoxListService {
    constructor() { }
}
CheckedBoxListService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CheckedBoxListService.ctorParameters = () => [];
/** @nocollapse */ CheckedBoxListService.ngInjectableDef = defineInjectable({ factory: function CheckedBoxListService_Factory() { return new CheckedBoxListService(); }, token: CheckedBoxListService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckedBoxListComponent {
    constructor() {
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => {
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
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== undefined && value !== null) {
            this.orders = value;
        }
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
    /**
     * @return {?}
     */
    getOrders() {
        return [
            { id: 100, name: 'order 1' },
            { id: 200, name: 'order 2' },
            { id: 300, name: 'order 3' },
            { id: 400, name: 'order 4' }
        ];
    }
    /**
     * @param {?} i
     * @param {?} event
     * @return {?}
     */
    submit(i, event) {
        /*selectedOrderIds = this.form.value.orders
          .map((v, i) => v ? this.orders[i].id : null)
          .filter(v => v !== null);*/
        console.log("Submit", i, event, event.srcElement.checked);
        this.orders[i].checked = event.srcElement.checked;
        this.selectedOrderIds = this.orders.map((/**
         * @param {?} v
         * @param {?} i
         * @return {?}
         */
        (v, i) => v.checked ? (this.returnKey ? this.orders[i][this.returnKey] : this.orders[i]) : null))
            .filter((/**
         * @param {?} v
         * @return {?}
         */
        v => v !== null));
        console.log(this.selectedOrderIds);
        this.propagateChange(this.selectedOrderIds);
    }
}
CheckedBoxListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng6-checked-box-list',
                template: "<div style=\"padding: 1em;overflow:auto\" [ngStyle]=\"{'height.px':maxHeightPx}\">\n    <label class=\"container\" *ngFor=\"let order of orders; let i = index\">\n        <input type=\"checkbox\" (click)=\"submit(i,$event)\">\n        <span class=\"checkmark\"></span>\n        {{order.name}}\n    </label>\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CheckedBoxListComponent)),
                        multi: true
                    }
                ],
                styles: [".container{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:0;left:0;height:20px;width:20px;background-color:#fff;border:1px solid;border-radius:6px;font-size:2rem}.container:hover input~.checkmark,input:focus~.checkmark{background-color:#eaeaea}.container input:checked~.checkmark{background-color:#0568ae;border-color:transparent}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after{display:block}.container .checkmark:after{left:6px;top:2px;width:5px;height:10px;border:solid #fff;border-width:0 3px 3px 0;transform:rotate(45deg)}label{display:block}::-webkit-scrollbar{-webkit-appearance:none;width:7px}::-webkit-scrollbar-thumb{border-radius:4px;background-color:rgba(0,0,0,.5);box-shadow:0 0 1px rgba(255,255,255,.5)}"]
            }] }
];
CheckedBoxListComponent.ctorParameters = () => [];
CheckedBoxListComponent.propDecorators = {
    orders: [{ type: Input, args: ['values',] }],
    returnKey: [{ type: Input }],
    maxHeightPx: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckedBoxListModule {
}
CheckedBoxListModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [CheckedBoxListComponent],
                exports: [CheckedBoxListComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CheckedBoxListService, CheckedBoxListComponent, CheckedBoxListModule };

//# sourceMappingURL=checked-box-list.js.map