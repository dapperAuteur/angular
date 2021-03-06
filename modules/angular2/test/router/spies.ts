import {Router, RouterOutlet, Location} from 'angular2/router';
import {SpyObject, proxy} from 'angular2/test_lib';

export class SpyRouter extends SpyObject {
  constructor() { super(Router); }
}

export class SpyRouterOutlet extends SpyObject {
  constructor() { super(RouterOutlet); }
}

export class SpyLocation extends SpyObject {
  constructor() { super(Location); }
}