import {bootstrapServiceWorker} from '../bootstrap';
import {Dynamic, FreshnessStrategy, PerformanceStrategy} from '../../plugins/dynamic';
import {ExternalContentCache} from '../../plugins/external';
import {RouteRedirection} from '../../plugins/routes';
import {StaticContentCache} from '../../plugins/static';
import {Push} from '../../plugins/push';
import {Verbosity, HttpHandler} from '../logging';

bootstrapServiceWorker({
  manifestUrl: '/ngsw-manifest.json',
  plugins: [
    StaticContentCache(),
    Dynamic([
      new FreshnessStrategy(),
      new PerformanceStrategy(),
    ]),
    ExternalContentCache(),
    RouteRedirection(),
    Push(),
  ],
  logLevel: Verbosity.DEBUG,
  logHandlers: [
    new HttpHandler('/ngsw-log'),
  ],
});
