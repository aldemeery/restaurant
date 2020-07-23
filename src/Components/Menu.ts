import Div from '../Elements/Div';
import MenuDictionary from '../Interfaces/MenuDictionary';
import H from '../Elements/H';
import PlainText from '../Elements/PlainText';
import Ul from '../Elements/Ul';
import Li from '../Elements/Li';
import Span from '../Elements/Span';

class Menu extends Div {
  constructor() {
    super({ class: 'menu grid' });
    this.build();
  }

  private getMenue(): MenuDictionary[] {
    let dict = [];
    dict.push({
      title: 'Main Dishes',
      items: {
        'Something good': 39,
        'Something else': 34,
        'One thing': 19,
        'One more thing': 29,
        'One extra thing': 99,
        'One final thing': 49,
      },
    });
    dict.push({
      title: 'Main Dishes',
      items: {
        'One thing': 19,
        'Something else': 34,
        'Something good': 39,
        'One extra thing': 99,
        'One final thing': 49,
        'One more thing': 29,
      },
    });
    dict.push({
      title: 'Main Dishes',
      items: {
        'Something good': 39,
        'One thing': 19,
        'One more thing': 29,
        'One extra thing': 99,
        'Something else': 34,
        'One final thing': 49,
      },
    });
    return dict;
  }

  private build(): void {
    this.getMenue().forEach((menu) => {
      const list = new Ul({ class: 'category-items' });
      for (const item in menu.items) {
        if (Object.prototype.hasOwnProperty.call(menu.items, item)) {
          const price = menu.items[item];
          list.add(
            new Li({ class: 'category-item' })
              .add(new Span({ class: 'item-name' }).add(new PlainText(item)))
              .add(new Span({ class: 'item-connector' }))
              .add(
                new Span({ class: 'item-price' }).add(
                  new PlainText('$' + price)
                )
              )
          );
        }
      }
      this.add(
        new Div({ class: 'category col-4' })
          .add(new H(4, { class: 'head' }).add(new PlainText(menu.title)))
          .add(list)
      );
    });
  }
}

export default Menu;
