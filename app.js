const app = new PIXI.Application({height: 800, width: 1000, background: '#1099bb' });
document.body.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

const texture = PIXI.Texture.from('./assets/pizza1.png');

for (let i = 0; i < 25; i++) {
    const pizza = new PIXI.Sprite(texture);
    pizza.anchor.set(0.5);
    pizza.x = (i % 5) * 40;
    pizza.y = Math.floor(i / 5) * 40;
    container.addChild(pizza);
}

container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

let canRotate = false;

setTimeout(() => canRotate = true, 5000)

app.ticker.add((delta) => {
    if(canRotate){
        container.rotation -= 0.01 * delta;
    }
});

const btnContainer = new PIXI.Container();

app.stage.addChild(btnContainer);

const textureButton = PIXI.Texture.from('./assets/jump.jpeg')

const button = new PIXI.Sprite(textureButton);
button.anchor.set(0.6);
button.scale.set(0.6);

 button.interactive = true;
 button.cursor = 'pointer';

 button
     .on('pointerdown', onButtonDown)
     .on('pointerup', onButtonUp)

btnContainer.addChild(button);

btnContainer.x = app.screen.width / 1.9;
btnContainer.y = app.screen.height / 1.1;

btnContainer.pivot.x = btnContainer.width / 2;
btnContainer.pivot.y = btnContainer.height / 2;

function onButtonDown() {
    canRotate = false
    button.scale.x *= 1.25;
    button.scale.y *= 1.25;
    container.y = app.screen.height / 5;
}

function onButtonUp() {
    setTimeout(() => canRotate = true, 5000)
    button.scale.x /= 1.25;
    button.scale.y /= 1.25;
    container.y = app.screen.height / 2;
}