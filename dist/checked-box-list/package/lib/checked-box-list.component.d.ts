import { ControlValueAccessor } from '@angular/forms';
export declare class CheckedBoxListComponent implements ControlValueAccessor {
    orders: any;
    returnKey: string;
    maxHeightPx: string;
    selectedOrderIds: any;
    propagateChange: (_: any) => void;
    registerOnChange(fn: any): void;
    writeValue(value: any): void;
    registerOnTouched(): void;
    constructor();
    getOrders(): {
        id: number;
        name: string;
    }[];
    submit(i: any, event: any): void;
}
