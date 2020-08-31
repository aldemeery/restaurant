import CompositeElement from './Elements/CompositeElement';
import { ComponentDictionary, RouteDictionary } from './types';
import routes from './routes';

class App extends CompositeElement<HTMLElement> {
  private id: string;

  private componentRegistry: ComponentDictionary = {};

  private routesRegistry: RouteDictionary = {};

  private currentRoute: string;

  constructor(id: string) {
    super();
    this.id = id;
  }

  public run(): void {
    this.dispatchRoute();
    this.render();
    this.rendered.addEventListener('routed', (e) => {
      this.dispatchRoute();
    });
  }

  public register(name: string, element: CompositeElement<HTMLElement>): void {
    this.componentRegistry[name] = element;
  }

  public route(
    route: string,
    fn: (components: ComponentDictionary) => void
  ): void {
    this.routesRegistry[route] = fn;
  }

  public loadRoutes(routes: RouteDictionary): void {
    for (const route in routes) {
      if (Object.prototype.hasOwnProperty.call(routes, route)) {
        const action = routes[route];
        this.route(route, action);
      }
    }
  }

  public getRoutes(): RouteDictionary {
    return this.routesRegistry;
  }

  protected renderElement(): void {
    this.rendered = document.getElementById(this.id);
  }

  public dispatchRoute(): void {
    const route = '/' + window.location.pathname.replace(/^\/|\/$/g, '');

    if (this.currentRoute != route) {
      this.currentRoute = route;
      this.registerComponents();
    }
  }

  private registerComponents(): void {
    const action = this.routesRegistry[this.currentRoute];
    if (action) {
      action(this.componentRegistry);
    }
  }
}

export default App;
