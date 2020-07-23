import Div from '../Elements/Div';
import Span from '../Elements/Span';
import PlainText from '../Elements/PlainText';
import Br from '../Elements/Br';
import P from '../Elements/P';
import Img from '../Elements/Img';

class Home extends Div {
  constructor() {
    super({ class: 'home' });
    this.build();
  }

  private build(): void {
    this.add(
      new Div({ class: 'home-text' })
        .add(
          new Span({ class: 'title' })
            .add(new PlainText('The Best'))
            .add(new Br())
            .add(new PlainText('of The Best'))
        )
        .add(
          new P({ class: 'more' }).add(
            new PlainText(
              `Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Exercitationem, molestias.`
            )
          )
        )
    ).add(
      new Div({ class: 'image' }).add(
        new Img('./images/sandwich.png', {
          class: 'home-image',
          alt: 'Sandwich',
        })
      )
    );
  }
}

export default Home;
