import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { notificacionesRoutingModule, routedComponents } from './notificaciones-routing.module';

//Mis imports
import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
  imports: [
    ToasterModule,
    ThemeModule,
    notificacionesRoutingModule,
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.chasingDots,
        backdropBackgroundColour: 'rgba(0,0,0,0.5)', 
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff', 
        secondaryColour: '#ffffff', 
        tertiaryColour: '#ffffff',
        fullScreenBackdrop: true
    })
  ],
  declarations: [
    ...routedComponents,
  ],
   providers: [

  ],
})
export class notificacionesModule { }
