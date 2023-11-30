import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        RouterModule.forRoot([
            // { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
