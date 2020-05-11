import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopBarComponent} from './Components/component-viet/TopBar/top-bar/top-bar.component';
import {SlideBarComponent} from './Components/component-viet/SlideBar/slide-bar/slide-bar.component';
import {InfomationComponent} from './Components/component-viet/InformationAccount/infomation/infomation.component';
import {HomeAccountComponent} from './Components/component-viet/home-account/home-account.component';
import {HistoryTicketComponent} from './Components/component-viet/Tickes/history-ticket/history-ticket.component';
import {TicketCanceledComponent} from './Components/component-viet/Tickes/ticket-canceled/ticket-canceled.component';
import {TicketBookingComponent} from './Components/component-viet/Tickes/ticket-booking/ticket-booking.component';
import {TicketBookingInformationComponent} from './Components/component-toantr/ticket-booking-information/ticket-booking-information.component';
import {PositionSelectorComponent} from './Components/component-toantr/position-selector/position-selector.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../app/material/material.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatConfirmDialogComponent} from './Components/component-viet/mat-confirm-dialog/mat-confirm-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {SeeTickerPricesComponent} from './Components/component-quy/see-ticker-prices/see-ticker-prices.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {BookingComponent} from './Components/component-quoc/booking/booking.component';
import {TicketConfirmComponent} from './Components/component-quoc/ticket-confirm/ticket-confirm/ticket-confirm.component';
// tslint:disable-next-line:max-line-length
import {TicketConfirmInfoComponent} from './Components/component-quoc/ticket-confirm-info/ticket-confirm-info/ticket-confirm-info.component';
import {ListFilmComponent} from './Components/component-tuan/list-film/list-film.component';
import {DetailFilmComponent} from './Components/component-tuan/detail-film/detail-film.component';
import {LoginComponent} from './Components/component-vu/login/login.component';
import {ResetPasswordComponent} from './Components/component-vu/reset-password/reset-password.component';
import {ConfirmPasswordComponent} from './Components/component-vu/confirm-password/confirm-password.component';
import {ErrorDisplayComponent} from './Components/component-vu/error-display/error-display.component';
import {UserRegistrationComponent} from './Components/component-hoang/user-registration/user-registration.component';
import {CarouselComponent} from './Components/component-hoang/carousel/carousel.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MemberComponent} from './Components/component-vu/member/member.component';
import {ChonGheComponent} from './Components/components-hhien/chon-ghe/chon-ghe.component';
import {ShowtimesComponent} from './Components/components-hhien/showtimes/showtimes.component';
import { ListDiscountComponent } from './Components/component-tuan/list-discount/list-discount.component';


const routes: Routes = [
  {path: '', component: ListFilmComponent},
  {path: 'film-detail/:id', component: DetailFilmComponent},
  {
    path: ':id/account', component: SlideBarComponent,
    children: [{
      path: '', component: HomeAccountComponent,
    },
      {
        path: ':id/show', component: HomeAccountComponent,
      },
      {
        path: ':id/changeInformation', component: InfomationComponent,
      },
      {
        path: ':id/history-ticket', component: HistoryTicketComponent,
      },
      {
        path: ':id/ticket-booking', component: TicketBookingComponent,
      },
      {
        path: ':id/ticket-canceled', component: TicketCanceledComponent,
      }]
  },
  {path: 'resetPassword', component: ResetPasswordComponent},
  {path: 'ticket-prices', component: SeeTickerPricesComponent},
  {path: 'chon-ghe', component: PositionSelectorComponent},
  {path: 'thong-tin-dat-ve', component: TicketBookingInformationComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: UserRegistrationComponent},
  {path: 'member', component: MemberComponent},
  {path: 'confirmPassword/:id', component: ConfirmPasswordComponent},
  {path: 'movieSchedules', component: ShowtimesComponent},
  {path: 'chonGhe', component: ChonGheComponent},
  {path: 'list-discount', component: ListDiscountComponent},

];

@NgModule({

  declarations: [TopBarComponent,
                SlideBarComponent,
                InfomationComponent,
                HomeAccountComponent,
                HistoryTicketComponent,
                ErrorDisplayComponent,
                LoginComponent,
                ResetPasswordComponent,
                TicketCanceledComponent,
                TicketBookingComponent,
                MatConfirmDialogComponent,
                PositionSelectorComponent,
                TicketBookingInformationComponent,
                DetailFilmComponent,
                ListFilmComponent,
                SeeTickerPricesComponent,
                BookingComponent,
                TicketConfirmComponent,
                TicketConfirmInfoComponent,
                ErrorDisplayComponent,
                LoginComponent,
                CarouselComponent,
                TicketCanceledComponent,
                TicketBookingComponent,
                ConfirmPasswordComponent,
                ResetPasswordComponent,
                UserRegistrationComponent,
                ChonGheComponent,
                ShowtimesComponent,
                ListDiscountComponent,],
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule,
  FormsModule,
  CommonModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  NgxPaginationModule,
  Ng2SearchPipeModule,
  MaterialModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule],
  exports: [RouterModule, TopBarComponent, SlideBarComponent],
  entryComponents: [MatConfirmDialogComponent],

})
export class AppRoutingModule {
}
