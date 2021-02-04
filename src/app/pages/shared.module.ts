import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReadPage } from './read/read.page';
import { UnreadPage } from './unread/unread.page';

@NgModule({
    imports: [CommonModule],
    declarations: [ReadPage, UnreadPage],
    exports: [UnreadPage, ReadPage]
})

export class SharedModule {}