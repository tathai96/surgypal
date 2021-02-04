import { Injectable } from '@angular/core';
import * as _ from 'underscore';


@Injectable()
export class util {
    
    removeDuplicatesFromArray(arr) {
        var cleaned = [];
        arr.forEach(a => {
            var unique = true;
            cleaned.forEach(b => {
                if(_.isEqual(a, b)) unique = false;
            });
            if(unique) {
                cleaned.push(a)
            }
        });
        return cleaned;
    }
    
}