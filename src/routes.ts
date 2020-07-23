import { ComponentDictionary } from './types';

const routes: { [key: string]: (components: ComponentDictionary) => void } = {
  '/': ({ main, home }) => {
    main.reset();
    main.add(home);
    main.render();
  },
  '/contact': ({ main, contact }) => {
    main.reset();
    main.add(contact);
    main.render();
  },
  '/menu': ({ main, menu }) => {
    main.reset();
    main.add(menu);
    main.render();
  },
};

export default routes;
