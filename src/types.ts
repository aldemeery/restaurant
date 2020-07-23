import CompositeElement from './Elements/CompositeElement';

export type Dictionary = {
  [key: string]: string | undefined;
};

export type ComponentDictionary = {
  [name: string]: CompositeElement<HTMLElement> | undefined;
};

export type RouteDictionary = {
  [route: string]: (components: ComponentDictionary) => void | undefined;
};
