/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class CheckedBoxListComponent {
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
if (false) {
    /** @type {?} */
    CheckedBoxListComponent.prototype.orders;
    /** @type {?} */
    CheckedBoxListComponent.prototype.returnKey;
    /** @type {?} */
    CheckedBoxListComponent.prototype.maxHeightPx;
    /** @type {?} */
    CheckedBoxListComponent.prototype.selectedOrderIds;
    /** @type {?} */
    CheckedBoxListComponent.prototype.propagateChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tlZC1ib3gtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGVja2VkLWJveC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NoZWNrZWQtYm94LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZXpFLE1BQU07SUFtQko7UUFiQSxvQkFBZTs7OztRQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7UUFDN0IsQ0FBQyxFQUFDO1FBYUEsNENBQTRDO1FBQzFDLCtCQUErQjtRQUMvQixpQ0FBaUM7UUFDcEMsTUFBTTtJQUNQLENBQUM7Ozs7O0lBZkQsZ0JBQWdCLENBQUMsRUFBRTtRQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUNELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7OztJQUNELGlCQUFpQixLQUFJLENBQUM7Ozs7SUFTdEIsU0FBUztRQUNQLE9BQU87WUFDTCxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUM1QixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUM1QixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUM1QixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtTQUM3QixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLENBQUMsRUFBQyxLQUFLO1FBQ1o7O3FDQUU2QjtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixHQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDO2FBQ3BJLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxzVUFBNEI7Z0JBRTVCLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixFQUFFO3dCQUN2RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7YUFDRjs7OztxQkFFRSxLQUFLLFNBQUMsUUFBUTt3QkFDZCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFGTix5Q0FBNEI7O0lBQzVCLDRDQUEwQjs7SUFDMUIsOENBQTRCOztJQUM1QixtREFBcUI7O0lBRXJCLGtEQUNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBGb3JtQXJyYXksIEZvcm1Db250cm9sLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nNi1jaGVja2VkLWJveC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGUuaHRtbFwiICxcbiAgc3R5bGVVcmxzOiBbJy4vc3R5bGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENoZWNrZWRCb3hMaXN0Q29tcG9uZW50ICksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2VkQm94TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29ye1xuICBASW5wdXQoJ3ZhbHVlcycpIG9yZGVyczphbnk7XG4gIEBJbnB1dCgpIHJldHVybktleTpzdHJpbmc7XG4gIEBJbnB1dCgpIG1heEhlaWdodFB4OnN0cmluZztcbiAgc2VsZWN0ZWRPcmRlcklkczphbnk7XG5cbiAgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge1xuICB9O1xuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9yZGVycyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZCgpIHt9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy9vZih0aGlzLmdldE9yZGVycygpKS5zdWJzY3JpYmUob3JkZXJzID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJJbnNpZGVcIixvcmRlcnMpO1xuICAgICAgLy90aGlzLm9yZGVycyA9IHRoaXMuZ2V0T3JkZXJzKCk7XG4gICAvLyB9KTtcbiAgfVxuXG4gIGdldE9yZGVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgeyBpZDogMTAwLCBuYW1lOiAnb3JkZXIgMScgfSxcbiAgICAgIHsgaWQ6IDIwMCwgbmFtZTogJ29yZGVyIDInIH0sXG4gICAgICB7IGlkOiAzMDAsIG5hbWU6ICdvcmRlciAzJyB9LFxuICAgICAgeyBpZDogNDAwLCBuYW1lOiAnb3JkZXIgNCcgfVxuICAgIF07XG4gIH1cblxuICBzdWJtaXQoaSxldmVudCkge1xuICAgIC8qc2VsZWN0ZWRPcmRlcklkcyA9IHRoaXMuZm9ybS52YWx1ZS5vcmRlcnNcbiAgICAgIC5tYXAoKHYsIGkpID0+IHYgPyB0aGlzLm9yZGVyc1tpXS5pZCA6IG51bGwpXG4gICAgICAuZmlsdGVyKHYgPT4gdiAhPT0gbnVsbCk7Ki9cbiAgICBjb25zb2xlLmxvZyhcIlN1Ym1pdFwiLGksZXZlbnQsIGV2ZW50LnNyY0VsZW1lbnQuY2hlY2tlZCk7XG4gICAgdGhpcy5vcmRlcnNbaV0uY2hlY2tlZCA9IGV2ZW50LnNyY0VsZW1lbnQuY2hlY2tlZDtcbiAgICB0aGlzLnNlbGVjdGVkT3JkZXJJZHMgPSAgdGhpcy5vcmRlcnMubWFwKCh2LCBpKSA9PiB2LmNoZWNrZWQgPyAodGhpcy5yZXR1cm5LZXk/dGhpcy5vcmRlcnNbaV1bdGhpcy5yZXR1cm5LZXldOnRoaXMub3JkZXJzW2ldKSA6IG51bGwpXG4gICAgLmZpbHRlcih2ID0+IHYgIT09IG51bGwpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRPcmRlcklkcyk7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5zZWxlY3RlZE9yZGVySWRzKTtcbiAgfVxufVxuIl19