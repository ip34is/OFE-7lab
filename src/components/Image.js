import React from 'react';

function Image(props) {
    const { isVisible, width, onAdd, onIncrease, onDecrease, onDelete } = props;

    const style = {
        display: isVisible ? 'block' : 'none',
        width: width ? `${width}px` : 'auto',
    };

    return (
        <>
            <a href="/images/Dnipro.jpg" target="_blank" rel="noopener noreferrer">
                <img
                    id="cityImage"
                    src="/images/Dnipro.jpg"
                    alt="Парк ім. Т.Г. Шевченко - Дніпро"
                    style={style}
                />
            </a>

            <div className="image-controls">
                <button id="addBtn" onClick={onAdd}>Додати</button>
                <button id="increaseBtn" onClick={onIncrease}>Збільшити</button>
                <button id="decreaseBtn" onClick={onDecrease}>Зменшити</button>
                <button id="deleteBtn" onClick={onDelete}>Видалити</button>
            </div>
        </>
    );
}

export default Image;