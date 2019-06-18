/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var CheckedBoxListComponent = /** @class */ (function () {
    function CheckedBoxListComponent() {
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
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
        this.selectedOrderIds = this.orders.map((/**
         * @param {?} v
         * @param {?} i
         * @return {?}
         */
        function (v, i) { return v.checked ? (_this.returnKey ? _this.orders[i][_this.returnKey] : _this.orders[i]) : null; }))
            .filter((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v !== null; }));
        console.log(this.selectedOrderIds);
        this.propagateChange(this.selectedOrderIds);
    };
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
                            function () { return CheckedBoxListComponent; })),
                            multi: true
                        }
                    ],
                    styles: [".container{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:0;left:0;height:20px;width:20px;background-color:#fff;border:1px solid;border-radius:6px;font-size:2rem}.container:hover input~.checkmark,input:focus~.checkmark{background-color:#eaeaea}.container input:checked~.checkmark{background-color:#0568ae;border-color:transparent}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after{display:block}.container .checkmark:after{left:6px;top:2px;width:5px;height:10px;border:solid #fff;border-width:0 3px 3px 0;transform:rotate(45deg)}label{display:block}::-webkit-scrollbar{-webkit-appearance:none;width:7px}::-webkit-scrollbar-thumb{border-radius:4px;background-color:rgba(0,0,0,.5);box-shadow:0 0 1px rgba(255,255,255,.5)}"]
                }] }
    ];
    CheckedBoxListComponent.ctorParameters = function () { return []; };
    CheckedBoxListComponent.propDecorators = {
        orders: [{ type: Input, args: ['values',] }],
        returnKey: [{ type: Input }],
        maxHeightPx: [{ type: Input }]
    };
    return CheckedBoxListComponent;
}());
export { CheckedBoxListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tlZC1ib3gtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGVja2VkLWJveC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NoZWNrZWQtYm94LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pFO0lBK0JFO1FBYkEsb0JBQWU7Ozs7UUFBRyxVQUFDLENBQU07UUFDekIsQ0FBQyxFQUFDO1FBYUEsNENBQTRDO1FBQzFDLCtCQUErQjtRQUMvQixpQ0FBaUM7UUFDcEMsTUFBTTtJQUNQLENBQUM7Ozs7O0lBZkQsa0RBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQUU7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFDRCw0Q0FBVTs7OztJQUFWLFVBQVcsS0FBVTtRQUNuQixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFDRCxtREFBaUI7OztJQUFqQixjQUFxQixDQUFDOzs7O0lBU3RCLDJDQUFTOzs7SUFBVDtRQUNFLE9BQU87WUFDTCxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUM1QixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUM1QixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUM1QixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtTQUM3QixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsd0NBQU07Ozs7O0lBQU4sVUFBTyxDQUFDLEVBQUMsS0FBSztRQUFkLGlCQVVDO1FBVEM7O3FDQUU2QjtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixHQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzs7Ozs7UUFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUEsQ0FBQyxDQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBakYsQ0FBaUYsRUFBQzthQUNwSSxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxFQUFWLENBQVUsRUFBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkF6REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLHNVQUE0QjtvQkFFNUIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHVCQUF1QixFQUF2QixDQUF1QixFQUFFOzRCQUN2RCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7aUJBQ0Y7Ozs7eUJBRUUsS0FBSyxTQUFDLFFBQVE7NEJBQ2QsS0FBSzs4QkFDTCxLQUFLOztJQTJDUiw4QkFBQztDQUFBLEFBMURELElBMERDO1NBOUNZLHVCQUF1Qjs7O0lBQ2xDLHlDQUE0Qjs7SUFDNUIsNENBQTBCOztJQUMxQiw4Q0FBNEI7O0lBQzVCLG1EQUFxQjs7SUFFckIsa0RBQ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1BcnJheSwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmc2LWNoZWNrZWQtYm94LWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogXCJ0ZW1wbGF0ZS5odG1sXCIgLFxuICBzdHlsZVVybHM6IFsnLi9zdHlsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tlZEJveExpc3RDb21wb25lbnQgKSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrZWRCb3hMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3J7XG4gIEBJbnB1dCgndmFsdWVzJykgb3JkZXJzOmFueTtcbiAgQElucHV0KCkgcmV0dXJuS2V5OnN0cmluZztcbiAgQElucHV0KCkgbWF4SGVpZ2h0UHg6c3RyaW5nO1xuICBzZWxlY3RlZE9yZGVySWRzOmFueTtcblxuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7XG4gIH07XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub3JkZXJzID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKCkge31cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvL29mKHRoaXMuZ2V0T3JkZXJzKCkpLnN1YnNjcmliZShvcmRlcnMgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhcIkluc2lkZVwiLG9yZGVycyk7XG4gICAgICAvL3RoaXMub3JkZXJzID0gdGhpcy5nZXRPcmRlcnMoKTtcbiAgIC8vIH0pO1xuICB9XG5cbiAgZ2V0T3JkZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICB7IGlkOiAxMDAsIG5hbWU6ICdvcmRlciAxJyB9LFxuICAgICAgeyBpZDogMjAwLCBuYW1lOiAnb3JkZXIgMicgfSxcbiAgICAgIHsgaWQ6IDMwMCwgbmFtZTogJ29yZGVyIDMnIH0sXG4gICAgICB7IGlkOiA0MDAsIG5hbWU6ICdvcmRlciA0JyB9XG4gICAgXTtcbiAgfVxuXG4gIHN1Ym1pdChpLGV2ZW50KSB7XG4gICAgLypzZWxlY3RlZE9yZGVySWRzID0gdGhpcy5mb3JtLnZhbHVlLm9yZGVyc1xuICAgICAgLm1hcCgodiwgaSkgPT4gdiA/IHRoaXMub3JkZXJzW2ldLmlkIDogbnVsbClcbiAgICAgIC5maWx0ZXIodiA9PiB2ICE9PSBudWxsKTsqL1xuICAgIGNvbnNvbGUubG9nKFwiU3VibWl0XCIsaSxldmVudCwgZXZlbnQuc3JjRWxlbWVudC5jaGVja2VkKTtcbiAgICB0aGlzLm9yZGVyc1tpXS5jaGVja2VkID0gZXZlbnQuc3JjRWxlbWVudC5jaGVja2VkO1xuICAgIHRoaXMuc2VsZWN0ZWRPcmRlcklkcyA9ICB0aGlzLm9yZGVycy5tYXAoKHYsIGkpID0+IHYuY2hlY2tlZCA/ICh0aGlzLnJldHVybktleT90aGlzLm9yZGVyc1tpXVt0aGlzLnJldHVybktleV06dGhpcy5vcmRlcnNbaV0pIDogbnVsbClcbiAgICAuZmlsdGVyKHYgPT4gdiAhPT0gbnVsbCk7XG4gICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZE9yZGVySWRzKTtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLnNlbGVjdGVkT3JkZXJJZHMpO1xuICB9XG59XG4iXX0=