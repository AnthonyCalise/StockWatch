import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'favorites', component: FavoritesComponent },
  { path: 'watchlists', component: WatchlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
