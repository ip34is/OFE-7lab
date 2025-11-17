import React from 'react';
import Image from './Image';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstColored: false,
            isSecondColored: false,
            imageVisible: true,
            imageWidth: 600,
        };
    }

    toggleFirstColor = () => {
        this.setState(prevState => ({
            isFirstColored: !prevState.isFirstColored,
        }));
    };

    toggleSecondColor = () => {
        this.setState(prevState => ({
            isSecondColored: !prevState.isSecondColored,
        }));
    };

    showImage = () => {
        this.setState({ imageVisible: true });
    };

    hideImage = () => {
        this.setState({ imageVisible: false });
    };

    increaseImage = () => {
        this.setState(prevState => ({
            imageWidth: prevState.imageWidth + 20,
        }));
    };

    decreaseImage = () => {
        this.setState(prevState => {
            if (prevState.imageWidth > 50) {
                return { imageWidth: prevState.imageWidth - 20 };
            }
            return null;
        });
    };

    render() {
        const { isFirstColored, isSecondColored, imageVisible, imageWidth } = this.state;

        const firstElementStyle = isFirstColored
            ? { backgroundColor: '#2c3e50', color: '#ecf0f1' }
            : {};

        const secondElementStyle = isSecondColored
            ? { backgroundColor: '#d35400', color: '#ffffff' }
            : {};

        return (
            <main>
                <section>
                    <h2>Скачков Іван Олексійович</h2>
                    <p>Дата народження: 03.07.2006, місто Луганськ.</p>
                    <p>Освіта: Кремінський ліцей №2, студент КПІ факультету ФІОТ.</p>
                </section>

                <section>
                    <h3>Моє хобі</h3>
                    <ul>
                        <li>Програмування</li>
                        <li>Фотографія(найбільше красиві пейзажі неба)</li>
                        <li>Футбол</li>
                        <li>Подорожі</li>
                    </ul>
                </section>

                <section>
                    <h3
                        id="targetElement1"
                        style={firstElementStyle}
                        onClick={this.toggleFirstColor}
                    >
                        Улюблені книги / фільми
                    </h3>
                    <ol
                        style={secondElementStyle}
                        onClick={this.toggleSecondColor}
                    >
                        <li>"1984" - Джордж Орвелл (книга)</li>
                        <li>"Інтерстеллар" (фільм)</li>
                        <li>"Метро" (книга, усі частини)</li>
                    </ol>
                </section>

                <section>
                    <h3>Моє улюблене місто</h3>
                    <p>
                        Насправді чітко вказати яке моє НАЙУЛЮБЛЕНІШЕ місто важко. Тому я додам декілька.
                        Дніпро - чудове місто, в якому я вперше познайомився з неймовірними краєвидами.
                    </p>

                    <Image
                        isVisible={imageVisible}
                        width={imageWidth}
                        onAdd={this.showImage}
                        onIncrease={this.increaseImage}
                        onDecrease={this.decreaseImage}
                        onDelete={this.hideImage}
                    />

                    <p>
                        Київ - надто красиве місто, щоб не перебувати у списку.
                    </p>

                    <a href="images/Kiyv.jpeg" target="_blank" rel="noopener noreferrer">
                        <img src="images/Kiyv.jpeg" alt="Батьківщина Мати - Київ" />
                    </a>

                    <p>
                        Та трішки з моєї сусідної області. Неймовірно красиве місто - Краматорськ.
                    </p>

                    <a href="images/Kramatorsk.jpg" target="_blank" rel="noopener noreferrer">
                        <img src="images/Kramatorsk.jpg" alt="Палац культури та техніки - Краматорськ" />
                    </a>
                </section>
            </main>
        );
    }
}

export default Content;