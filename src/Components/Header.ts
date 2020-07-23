import HeaderElement from '../Elements/Header';
import Div from '../Elements/Div';
import Nav from '../Elements/Nav';
import A from '../Elements/A';
import Img from '../Elements/Img';
import Ul from '../Elements/Ul';
import Li from '../Elements/Li';
import PlainText from '../Elements/PlainText';
import Route from './Route';

class Header extends HeaderElement {
  constructor() {
    super({ class: 'col-12 header' });
    this.build();
  }

  private build(): void {
    this.add(
      new Div({ class: 'logo' }).add(
        new A('#', { class: 'logo-link' }).add(
          new Img('./images/logo.png', {
            class: 'logo-img',
            alt: 'Logo',
          })
        )
      )
    ).add(
      new Nav({ class: 'nav' }).add(
        new Ul({ class: 'nav-items' })
          .add(
            new Li().add(
              new Route('/', {
                class: 'nav-item-link',
              }).add(new PlainText('Home'))
            )
          )
          .add(
            new Li().add(
              new Route('/menu', { class: 'nav-item-link' }).add(
                new PlainText('Menu')
              )
            )
          )
          .add(
            new Li().add(
              new Route('/contact', {
                class: 'nav-item-link',
              }).add(new PlainText('Contact'))
            )
          )
      )
    );
  }
}

export default Header;
